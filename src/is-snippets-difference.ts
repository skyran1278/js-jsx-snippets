import { ExtensionContext } from 'vscode';

import { getSnippetKeys } from './snippet-keys';

export const isSnippetsDifference = (context: ExtensionContext): boolean => {
  const version = context.extension.packageJSON.version as string;
  const { jsKey, tsKey } = getSnippetKeys();

  return (
    context.globalState.get<string>('jsJsxSnippets.jsVariant', '') !==
      `${version}::${jsKey}` ||
    context.globalState.get<string>('jsJsxSnippets.tsVariant', '') !==
      `${version}::${tsKey}`
  );
};
