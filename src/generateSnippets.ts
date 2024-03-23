import { writeFile } from 'fs/promises';

import { workspace } from 'vscode';

import outputConfig from '../snippets/config.json';
import jsImportReactOnTopSemicolon from './js-import-react-on-top-semicolon.json';

export const generateSnippets = async () => {
  const config = workspace.getConfiguration('jsJsxSnippets.settings');

  const importReactOnTop = config.get('importReactOnTop');
  const typing = config.get('typing');
  const semicolon = config.get('semicolon');

  if (
    outputConfig.importReactOnTop !== importReactOnTop ||
    outputConfig.typing !== typing ||
    outputConfig.semicolon !== semicolon
  ) {
    if (importReactOnTop && typing && semicolon) {
      await writeFile(
        '../snippets/js.code-snippets',
        JSON.stringify(jsImportReactOnTopSemicolon),
      );
    }
  }
};
