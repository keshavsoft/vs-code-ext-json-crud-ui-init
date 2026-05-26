import * as vscode from 'vscode';

import { createEndpointCommand } from './CreateEndpoint/start.js';

export function registerAllCommands(context) {
    const CreateEndpoint = vscode.commands.registerCommand('extension.editor.title.appjs.startEndpoint', createEndpointCommand(context));

    context.subscriptions.push(CreateEndpoint);
};