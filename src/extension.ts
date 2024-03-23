// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import {
  ConfigurationChangeEvent,
  ExtensionContext,
  commands,
  window,
  workspace,
} from 'vscode';

import { generateSnippets } from './generateSnippets';

const showRestartMessage = async ({
  affectsConfiguration,
}: ConfigurationChangeEvent) => {
  if (affectsConfiguration('jsJsxSnippets')) {
    await generateSnippets();
    window.showInformationMessage('Hello World from js-jsx-snippets!');
    setTimeout(() => {
      window
        .showWarningMessage(
          'Js Jsx Snippets: Please restart VS Code to apply snippet formatting changes',
          'Restart VS Code',
          'Ignore',
        )
        .then((action?: string) => {
          if (action === 'Restart VS Code') {
            commands.executeCommand('workbench.action.reloadWindow');
          }
        });
    }, 1000);
  }
};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  workspace.onDidChangeConfiguration(showRestartMessage);

  await generateSnippets();
}

// This method is called when your extension is deactivated
export function deactivate() {}
