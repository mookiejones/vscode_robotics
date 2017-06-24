'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const rootPath = vscode_1.workspace.rootPath;
    // // The server is implemented in node
    // let serverModule=context.asAbsolutePath(path.join('out','serverMain.js'));
    // // The debug options for the server
    // let debugOptions = { execArgv: ["--nolazy", "--debug=6004"] };
    // // If the extension is launched in debug mode then the debug server options are used
    // // Otherwise the run options are used
    // let serverOptions: ServerOptions = {
    // 	run : { module: serverModule, transport: TransportKind.ipc },
    // 	debug: { module: serverModule, transport: TransportKind.ipc, options: debugOptions }
    // }
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "my-first-extension" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode_1.commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode_1.window.showInformationMessage('Hello World!');
    });
    vscode_1.commands.registerCommand('extension.refresh', (a) => {
        debugger;
        console.log('register');
    });
    vscode_1.commands.registerCommand('extension.openJsonSelection', range => {
        debugger;
    });
    vscode_1.commands.registerCommand('extension.getLang', (a) => {
        debugger;
    });
    vscode_1.window.onDidChangeActiveTextEditor(editor => {
        if (editor) {
            if (editor.document.languageId === "fanuc") {
            }
            else {
                editor.hide;
            }
        }
    });
    vscode_1.workspace.onDidChangeTextDocument(e => {
        debugger;
    });
    //  context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map