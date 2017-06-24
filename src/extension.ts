'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';
import { workspace, window, commands, Disposable, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind } from 'vscode-languageclient';
 


import {
	IPCMessageReader, IPCMessageWriter,
	createConnection, IConnection, TextDocumentSyncKind,
	TextDocuments, TextDocument, Diagnostic, DiagnosticSeverity,
	InitializeParams, InitializeResult, TextDocumentPositionParams,
	CompletionItem, CompletionItemKind
} from 'vscode-languageserver';




// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
    const rootPath=workspace.rootPath;

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
    var disposable = commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        window.showInformationMessage('Hello World!');
    });
    commands.registerCommand('extension.refresh',(a)=>{
       
        debugger;
         console.log('register');
    })
    commands.registerCommand('extension.openJsonSelection',range=>{
        debugger;
    })

    commands.registerCommand('extension.getLang',(a)=>{
        debugger;

    })
 

    window.onDidChangeActiveTextEditor(editor => {
        if(editor){
            if(editor.document.languageId==="fanuc"){

            }else{
                editor.hide;
            }
        }
		});
		workspace.onDidChangeTextDocument(e => {
            debugger;
		})
  //  context.subscriptions.push(disposable);

     
}