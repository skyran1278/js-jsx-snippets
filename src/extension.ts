import { ConfigurationChangeEvent, ExtensionContext, workspace } from 'vscode';

import { isSnippetsDifference } from './is-snippets-difference';
import { replaceProductionSnippets } from './replace-production-snippets';

export async function activate(context: ExtensionContext) {
  context.subscriptions.push(
    workspace.onDidChangeConfiguration(
      async ({ affectsConfiguration }: ConfigurationChangeEvent) => {
        if (affectsConfiguration('jsJsxSnippets')) {
          await replaceProductionSnippets(context);
        }
      },
    ),
  );

  if (isSnippetsDifference(context)) {
    await replaceProductionSnippets(context);
  }
}

export function deactivate() {}
