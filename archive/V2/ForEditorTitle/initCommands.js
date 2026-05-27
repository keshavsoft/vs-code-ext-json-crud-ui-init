import * as vscode from 'vscode';

import { initHeaderFromCdnCommand } from './InitHeaderFromCdn/start.js';

export function registerAllCommands(context) {
    const commandToRegister = "extension.editor.title.folder.ui.init";

    const CreateEndpoint = vscode.commands.registerCommand(commandToRegister, initHeaderFromCdnCommand(context));

    context.subscriptions.push(CreateEndpoint);
};