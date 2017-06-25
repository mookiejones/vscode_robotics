'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as path from 'path';

import { workspace, window, commands, Disposable, languages, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, TransportKind } from 'vscode-languageclient';
import ContentProvider, { encodeLocation } from './provider';
import { DepNodeProvider } from './Robotics';



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
    const provider = new ContentProvider();
    const nodeDependenciesProvider = new DepNodeProvider(rootPath);


// register content provider for scheme `references`
	// register document link provider for scheme `references`
	const providerRegistrations = Disposable.from(
		workspace.registerTextDocumentContentProvider(ContentProvider.scheme, provider),
		languages.registerDocumentLinkProvider({ scheme: ContentProvider.scheme }, provider)
	);

	// register command that crafts an uri with the `references` scheme,
	// open the dynamic document, and shows it in the next editor
	const commandRegistration = commands.registerTextEditorCommand('editor.printReferences', editor => {
		const uri = encodeLocation(editor.document.uri, editor.selection.active);
		return workspace.openTextDocument(uri).then(doc => window.showTextDocument(doc, editor.viewColumn + 1));
	});

    context.subscriptions.push(
            provider,
            commandRegistration,
            providerRegistrations
        );

    window.registerTreeDataProvider('nodeDependencies', nodeDependenciesProvider);



    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "my-first-extension" is now active!');

    context.subscriptions.push(

    commands.registerCommand('nodeDependencies.refreshEntry', () => nodeDependenciesProvider.refresh()),
	commands.registerCommand('nodeDependencies.addEntry', node => window.showInformationMessage('Successfully called add entry')),
	commands.registerCommand('nodeDependencies.deleteEntry', node => window.showInformationMessage('Successfully called delete entry')),
    commands.registerCommand('extension.showPreview',()=>{window.showInformationMessage("ShowPreview");}),
    commands.registerCommand('editor.showPreview',()=>{window.showInformationMessage("ShowPreview");}),
    commands.registerCommand('extension.showPreviewToSide',()=>{
        window.showInformationMessage("showPreviewToSide");
    }),
    commands.registerCommand('extension.sayHello', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        window.showInformationMessage('Hello World!');
    }),
    commands.registerCommand('extension.openJsonSelection',range=>{
        debugger;
    }),
    commands.registerCommand('extension.getLang',(a)=>{
        debugger;

    })

    )

    workspace.onDidChangeConfiguration(listener=>{
        debugger;
    });


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