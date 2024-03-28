import { writeFile } from 'fs/promises';
import { join } from 'path';

import { workspace } from 'vscode';

import { showRestartMessage } from './show-restart-message';
import tsImportReactOnTopSemicolonTyping from './ts-import-react-on-top-semicolon-typing.json';
import tsImportReactOnTopSemicolon from './ts-import-react-on-top-semicolon.json';
import tsImportReactOnTopTyping from './ts-import-react-on-top-typing.json';
import tsImportReactOnTop from './ts-import-react-on-top.json';
import tsSemicolonTyping from './ts-semicolon-typing.json';
import tsSemicolon from './ts-semicolon.json';
import tsTyping from './ts-typing.json';
import ts from './ts.json';

export const generateSnippets = async () => {
  const config = workspace.getConfiguration('jsJsxSnippets.settings');

  const importReactOnTop = config.get('importReactOnTop');
  const typing = config.get('typing');
  const semicolon = config.get('semicolon');

  const snippets = {
    tsImportReactOnTopSemicolonTyping,
    tsImportReactOnTopSemicolon,
    tsImportReactOnTopTyping,
    tsImportReactOnTop,
    tsSemicolonTyping,
    tsSemicolon,
    tsTyping,
    ts,
  };

  // Optimized conditional logic
  const jsKey: keyof typeof snippets = `ts${importReactOnTop ? 'ImportReactOnTop' : ''}${semicolon ? 'Semicolon' : ''}`;
  const tsKey: keyof typeof snippets = `${jsKey}${typing ? 'Typing' : ''}`;
  const jsSnippets = snippets[jsKey] || snippets.tsImportReactOnTopSemicolon;
  const tsSnippets =
    snippets[tsKey] || snippets.tsImportReactOnTopSemicolonTyping;

  await writeFile(
    join(__dirname, '../snippets/js.json'),
    JSON.stringify(jsSnippets),
  );
  await writeFile(
    join(__dirname, '../snippets/ts.json'),
    JSON.stringify(tsSnippets),
  );
  await writeFile(
    join(__dirname, '../snippets/config.json'),
    JSON.stringify(config),
  );

  showRestartMessage();
};
