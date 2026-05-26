import * as vscode from 'vscode';

import { registerAllCommands as appJsFileCommands } from "./appJsFileCommands.js";

export function registerAllCommands(context) {
    appJsFileCommands(context);
};