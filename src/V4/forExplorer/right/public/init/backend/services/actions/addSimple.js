import { fromScriptJs } from 'json-crud-ui-init';
import { executeGenerationTask } from "../generatorService.js";

const startFunc = async ({ panel, toPath, inFolderName }) => {
    await executeGenerationTask({
        panel,
        actionLabel: "Add simple boilerPlate",
        toPath,
        generateFunc: fromScriptJs.simple,
        inFolderName
    });
};

export default startFunc;
