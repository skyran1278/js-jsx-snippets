import { workspace } from 'vscode';

import outputJs from '../snippets/js.json';
import outputTs from '../snippets/ts.json';
import tsImportReactOnTopSemicolonTyping from './ts-import-react-on-top-semicolon-typing.json';
import tsImportReactOnTopSemicolon from './ts-import-react-on-top-semicolon.json';
import tsImportReactOnTopTyping from './ts-import-react-on-top-typing.json';
import tsImportReactOnTop from './ts-import-react-on-top.json';
import tsSemicolonTyping from './ts-semicolon-typing.json';
import tsSemicolon from './ts-semicolon.json';
import tsTyping from './ts-typing.json';
import ts from './ts.json';

export const isSnippetsDifference = (): boolean => {
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

  return (
    JSON.stringify(jsSnippets) !== JSON.stringify(outputJs) ||
    JSON.stringify(tsSnippets) !== JSON.stringify(outputTs)
  );
};
