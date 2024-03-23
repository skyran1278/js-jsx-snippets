// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { ConfigurationChangeEvent, ExtensionContext, workspace } from 'vscode';

import { generateSnippets } from './generateSnippets';
import { isConfigurationDifference } from './isConfigurationDifference';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export async function activate(context: ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  workspace.onDidChangeConfiguration(
    async ({ affectsConfiguration }: ConfigurationChangeEvent) => {
      if (affectsConfiguration('jsJsxSnippets')) {
        await generateSnippets();
      }
    },
  );

  if (isConfigurationDifference()) {
    await generateSnippets();
  }
}

// This method is called when your extension is deactivated
export function deactivate() {}
