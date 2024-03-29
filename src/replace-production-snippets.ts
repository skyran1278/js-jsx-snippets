import { writeFile } from 'fs/promises';
import { join } from 'path';

import { workspace } from 'vscode';

import jsImportReactOnTopSemicolon from '../snippets/js-import-react-on-top-semicolon.json';
import jsImportReactOnTop from '../snippets/js-import-react-on-top.json';
import jsSemicolon from '../snippets/js-semicolon.json';
import js from '../snippets/js.json';
import tsImportReactOnTopSemicolon from '../snippets/ts-import-react-on-top-semicolon.json';
import tsImportReactOnTop from '../snippets/ts-import-react-on-top.json';
import tsSemicolon from '../snippets/ts-semicolon.json';
import ts from '../snippets/ts.json';
import { showRestartMessage } from './show-restart-message';

export const replaceProductionSnippets = async () => {
  const config = workspace.getConfiguration('jsJsxSnippets.settings');

  const importReactOnTop = config.get('importReactOnTop');
  const typing = config.get('typing');
  const semicolon = config.get('semicolon');

  const snippets = {
    tsImportReactOnTopSemicolon,
    jsImportReactOnTopSemicolon,
    tsImportReactOnTop,
    jsImportReactOnTop,
    tsSemicolon,
    jsSemicolon,
    ts,
    js,
  };

  const jsKey: keyof typeof snippets = `js${importReactOnTop ? 'ImportReactOnTop' : ''}${semicolon ? 'Semicolon' : ''}`;
  const tsKey: keyof typeof snippets = `${typing ? 'ts' : 'js'}${importReactOnTop ? 'ImportReactOnTop' : ''}${semicolon ? 'Semicolon' : ''}`;

  const jsSnippets = snippets[jsKey] || snippets.jsImportReactOnTopSemicolon;
  const tsSnippets = snippets[tsKey] || snippets.tsImportReactOnTopSemicolon;

  await writeFile(
    join(__dirname, '../snippets/javascript-snippets.json'),
    JSON.stringify(jsSnippets),
  );
  await writeFile(
    join(__dirname, '../snippets/typescript-snippets.json'),
    JSON.stringify(tsSnippets),
  );

  await showRestartMessage();
};
