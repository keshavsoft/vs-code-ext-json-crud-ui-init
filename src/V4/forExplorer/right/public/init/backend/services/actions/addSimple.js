import { fromScriptJs } from 'json-crud-ui-init';
import { executeGenerationTask } from "../generatorService.js";

const startFunc = ({ panel, tableName, toPath, inFolderName }) => {
    fromScriptJs.simple({
        panel,
        actionLabel: "Add Table Name",
        tableName,
        toPath,
        generateFunc: hookListener,
        inFolderName
    });
};

export default startFunc;
