import * as vscode from 'vscode';

import { initHeaderFromCdn } from "json-crud-ui-init";

export async function runFeatureOrchestration({ context }) {
    const inContext = context;
    const endpoint = await getEndpoint();

    await initHeaderFromCdn({
        showLog: true,
        isAnnounce: true,
        folderName: endpoint,
        toPath: inContext.rightClickPath
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
