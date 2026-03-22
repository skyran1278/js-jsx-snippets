import { ExtensionContext } from 'vscode';

import { JS_VARIANT_KEY, TS_VARIANT_KEY, getSnippetKeys } from './snippet-keys';

export const isVariantCacheStale = (context: ExtensionContext): boolean => {
  const version = context.extension.packageJSON.version as string;
  const { jsKey, tsKey } = getSnippetKeys();

  return (
    context.globalState.get<string>(JS_VARIANT_KEY, '') !==
      `${version}::${jsKey}` ||
    context.globalState.get<string>(TS_VARIANT_KEY, '') !==
      `${version}::${tsKey}`
  );
};
