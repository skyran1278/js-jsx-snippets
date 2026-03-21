import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

import { ExtensionContext, window } from 'vscode';

import { JS_VARIANT_KEY, TS_VARIANT_KEY, getSnippetKeys } from './snippet-keys';
import { showRestartMessage } from './show-restart-message';

export const replaceProductionSnippets = async (
  context: ExtensionContext,
): Promise<void> => {
  const version = context.extension.packageJSON.version as string;
  const { jsKey, tsKey, jsFile, tsFile } = getSnippetKeys();
  const versionedJs = `${version}::${jsKey}`;
  const versionedTs = `${version}::${tsKey}`;

  const jsNeedsUpdate =
    context.globalState.get<string>(JS_VARIANT_KEY, '') !==
    versionedJs;
  const tsNeedsUpdate =
    context.globalState.get<string>(TS_VARIANT_KEY, '') !==
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
  try {
    await Promise.all(writes);
  } catch (err) {
    window.showErrorMessage(
      `Js Jsx Snippets: Failed to write snippet files. ${err instanceof Error ? err.message : String(err)}`,
    );
    return;
  }

  if (jsNeedsUpdate) {
    await context.globalState.update(JS_VARIANT_KEY, versionedJs);
  }
  if (tsNeedsUpdate) {
    await context.globalState.update(TS_VARIANT_KEY, versionedTs);
  }

  if (writes.length > 0) {
    await showRestartMessage();
  }
};
