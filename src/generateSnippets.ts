import { writeFile } from 'fs/promises';
import { join } from 'path';

import { workspace } from 'vscode';

import jsImportReactOnTopSemicolon from './js-import-react-on-top-semicolon.json';
import jsImportReactOnTop from './js-import-react-on-top.json';
import jsSemicolon from './js-semicolon.json';
import js from './js.json';
import { showRestartMessage } from './showRestartMessage';

export const generateSnippets = async () => {
  const config = workspace.getConfiguration('jsJsxSnippets.settings');

  const importReactOnTop = config.get('importReactOnTop');
  const typing = config.get('typing');
  const semicolon = config.get('semicolon');

  let jsSnippets = jsImportReactOnTopSemicolon;
  if (importReactOnTop && semicolon && typing) {
    jsSnippets = jsImportReactOnTopSemicolon;
  } else if (importReactOnTop && semicolon && !typing) {
    jsSnippets = jsImportReactOnTopSemicolon;
  } else if (importReactOnTop && !semicolon && typing) {
    jsSnippets = jsImportReactOnTop;
  } else if (importReactOnTop && !semicolon && !typing) {
    jsSnippets = jsImportReactOnTop;
  } else if (!importReactOnTop && semicolon && typing) {
    jsSnippets = jsSemicolon;
  } else if (!importReactOnTop && semicolon && !typing) {
    jsSnippets = jsSemicolon;
  } else if (!importReactOnTop && !semicolon && typing) {
    jsSnippets = js;
  } else if (!importReactOnTop && !semicolon && !typing) {
    jsSnippets = js;
  }

  await writeFile(
    join(__dirname, '../snippets/js.code-snippets'),
    JSON.stringify(jsSnippets),
  );
  await writeFile(
    join(__dirname, '../snippets/config.json'),
    JSON.stringify(config),
  );

  showRestartMessage();
};
