import addSimple from "./actions/addSimple.js";

export async function handleWebviewMessage({ message, panel, toPath,
    port, inTargetPath, ids = [] }) {

    switch (message.action) {
        case "loadSchemas":
            panel.webview.postMessage({
                type: "schemas",
                ids
            });

            break;

        case "simple":
            await addSimple({
                panel,
                tableName: message.tableName,
                toPath,
                inFolderName: message.inFolderName,
                inTargetPath,
                inPort: port
            });
            break;
    }
}
