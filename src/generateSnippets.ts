import { writeFile } from 'fs/promises';
import { join } from 'path';

import { workspace } from 'vscode';

import { showRestartMessage } from './showRestartMessage';
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

  let jsSnippets = tsImportReactOnTopSemicolon;
  let tsSnippets = tsImportReactOnTopSemicolonTyping;
  if (importReactOnTop && semicolon && typing) {
    jsSnippets = tsImportReactOnTopSemicolon;
    tsSnippets = tsImportReactOnTopSemicolonTyping;
  } else if (importReactOnTop && semicolon && !typing) {
    jsSnippets = tsImportReactOnTopSemicolon;
    tsSnippets = tsImportReactOnTopSemicolon;
  } else if (importReactOnTop && !semicolon && typing) {
    jsSnippets = tsImportReactOnTop;
    tsSnippets = tsImportReactOnTopTyping;
  } else if (importReactOnTop && !semicolon && !typing) {
    jsSnippets = tsImportReactOnTop;
    tsSnippets = tsImportReactOnTop;
  } else if (!importReactOnTop && semicolon && typing) {
    jsSnippets = tsSemicolon;
    tsSnippets = tsSemicolonTyping;
  } else if (!importReactOnTop && semicolon && !typing) {
    jsSnippets = tsSemicolon;
    tsSnippets = tsSemicolon;
  } else if (!importReactOnTop && !semicolon && typing) {
    jsSnippets = ts;
    tsSnippets = tsTyping;
  } else if (!importReactOnTop && !semicolon && !typing) {
    jsSnippets = ts;
  }

  await writeFile(
    join(__dirname, '../snippets/js.code-snippets'),
    JSON.stringify(jsSnippets),
  );
  await writeFile(
    join(__dirname, '../snippets/ts.code-snippets'),
    JSON.stringify(tsSnippets),
  );
  await writeFile(
    join(__dirname, '../snippets/config.json'),
    JSON.stringify(config),
  );

  showRestartMessage();
};
