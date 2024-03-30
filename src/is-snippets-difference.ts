import { workspace } from 'vscode';

import productionJs from '../snippets/javascript-snippets.json';
import jsImportReactOnTopSemicolon from '../snippets/js-import-react-on-top-semicolon.json';
import jsImportReactOnTop from '../snippets/js-import-react-on-top.json';
import jsSemicolon from '../snippets/js-semicolon.json';
import js from '../snippets/js.json';
import tsImportReactOnTopSemicolon from '../snippets/ts-import-react-on-top-semicolon.json';
import tsImportReactOnTop from '../snippets/ts-import-react-on-top.json';
import tsSemicolon from '../snippets/ts-semicolon.json';
import ts from '../snippets/ts.json';
import productionTs from '../snippets/typescript-snippets.json';

export const isSnippetsDifference = (): boolean => {
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

  return (
    JSON.stringify(jsSnippets) !== JSON.stringify(productionJs) ||
    JSON.stringify(tsSnippets) !== JSON.stringify(productionTs)
  );
};
