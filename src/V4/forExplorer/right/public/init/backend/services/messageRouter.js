import addSimple from "./actions/addSimple.js";
import addCrud from "./actions/addCrud.js";

export function handleWebviewMessage({ message, panel, toPath,
    port, ids = [] }) {

    switch (message.action) {
        case "loadSchemas":
            panel.webview.postMessage({
                type: "schemas",
                ids
            });

            break;

        case "simple":
            addSimple({
                panel,
                toPath,
                inFolderName: message.inFolderName,
                inPort: port
            });

            break;

        case "crud":
            addCrud({
                panel,
                toPath,
                inFolderName: message.inFolderName,
                inPort: port
            });

            break;
    };
}
