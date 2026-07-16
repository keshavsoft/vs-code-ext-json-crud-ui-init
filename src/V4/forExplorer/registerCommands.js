import * as vscode from 'vscode';

import fromInit from './right/public/init/backend/readHtml.js';

const fromInitCommand = (context) => {
    const commandHtml = "extension.explorer.right.public.init";

    const showHtml = vscode.commands.registerCommand(commandHtml, (uri) => fromInit(context, uri));

    context.subscriptions.push(showHtml);
};

const registerAllCommands = (context) => {
    fromInitCommand(context);
};

export default registerAllCommands;
