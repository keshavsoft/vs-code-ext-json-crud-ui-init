import fs from 'fs';
import path from 'path';
import * as vscode from 'vscode';

import StartEndPoint from "json-crud-ui-init";

import { fileURLToPath } from 'url';
import { copyTemplate } from '../services/copyTemplate.js';

export async function runFeatureOrchestration({ context }) {
    const endpoint = await getEndpoint();
    if (!endpoint) return null;

    // fix inside localContext
    const localContext = {
        ...context,
        endpointFolder: path.join(context.targetPath, endpoint),
        routeFilePath: path.join(context.targetPath, endpoint),
        templatePath: fileURLToPath(new URL('../templates/Base', import.meta.url))
    };

    const funcToRun = await StartEndPoint();

    await funcToRun({
        showLog: true,
        isAnnounce: true,
        folderName: endpoint,
        toPath: localContext.targetPath
    });

    return { endpoint };
}
// update only this
async function getEndpoint() {
    const value = await vscode.window.showInputBox({ prompt: 'Enter endpoint name (e.g. users)' });
    if (!value) return null;

    const clean = value.trim().replace(/[^a-zA-Z0-9-_]/g, '');
    if (!clean) return null;

    return clean;
};

// change copy
function copy({ templatePath, routeFilePath, endpointFolder }) {
    if (!fs.existsSync(endpointFolder)) fs.mkdirSync(endpointFolder, { recursive: true });
    copyTemplate({ templatePath, targetPath: routeFilePath });
}