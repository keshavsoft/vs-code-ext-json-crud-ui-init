import { startOrchestration } from './orchestration/startOrchestration.js';

export function initHeaderFromCdnCommand(context) {
    return async (uri) => startOrchestration({ uri, extensionPath: context.extensionPath });
};