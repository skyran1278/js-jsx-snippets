import { ConfigurationChangeEvent, ExtensionContext, workspace } from 'vscode';

import { isVariantCacheStale } from './is-variant-cache-stale';
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

  if (isVariantCacheStale(context)) {
    await replaceProductionSnippets(context);
  }
}

export function deactivate() {}
