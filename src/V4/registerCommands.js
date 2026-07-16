import { registerAllCommands as ForEditorTitle } from './ForEditorTitle/initCommands.js';
import explorerCommands from './forExplorer/registerCommands.js';

export function registerAllCommands(context) {
    ForEditorTitle(context);
    explorerCommands(context);
};
