import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import { ExtensionContext, window } from 'vscode';

import { getSnippetKeys } from './snippet-keys';
import { showRestartMessage } from './show-restart-message';

export const replaceProductionSnippets = async (
  context: ExtensionContext,
): Promise<void> => {
  const version = context.extension.packageJSON.version as string;
  const { jsKey, tsKey, jsFile, tsFile } = getSnippetKeys();
  const versionedJs = `${version}::${jsKey}`;
  const versionedTs = `${version}::${tsKey}`;

  const jsNeedsUpdate =
    context.globalState.get<string>('jsJsxSnippets.jsVariant', '') !==
    versionedJs;
  const tsNeedsUpdate =
    context.globalState.get<string>('jsJsxSnippets.tsVariant', '') !==
    versionedTs;

  let jsBuf: Buffer | null = null;
  let tsBuf: Buffer | null = null;
  try {
    [jsBuf, tsBuf] = await Promise.all([
      jsNeedsUpdate
        ? readFile(join(__dirname, '../snippets', jsFile))
        : Promise.resolve(null),
      tsNeedsUpdate
        ? readFile(join(__dirname, '../snippets', tsFile))
        : Promise.resolve(null),
    ]);
  } catch (err) {
    window.showErrorMessage(
      `Js Jsx Snippets: Failed to read snippet files. ${err instanceof Error ? err.message : String(err)}`,
    );
    return;
  }

  const writes: Promise<void>[] = [];
  if (jsBuf) {
    writes.push(
      writeFile(
        join(__dirname, '../snippets/javascript-snippets.json'),
        jsBuf,
      ),
    );
  }
  if (tsBuf) {
    writes.push(
      writeFile(
        join(__dirname, '../snippets/typescript-snippets.json'),
        tsBuf,
      ),
    );
  }
  await Promise.all(writes);

  await Promise.all([
    jsNeedsUpdate &&
      context.globalState.update('jsJsxSnippets.jsVariant', versionedJs),
    tsNeedsUpdate &&
      context.globalState.update('jsJsxSnippets.tsVariant', versionedTs),
  ]);

  if (writes.length > 0) {
    await showRestartMessage();
  }
};
