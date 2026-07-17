import addSimple from "./actions/addSimple.js";

export async function handleWebviewMessage({ message, panel, toPath,
    port, ids = [] }) {

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
                toPath,
                inFolderName: message.inFolderName,
                inPort: port
            });

            break;
    }
}
