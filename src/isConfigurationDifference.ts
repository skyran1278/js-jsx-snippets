import { workspace } from 'vscode';

import outputConfig from '../snippets/config.json';

export const isConfigurationDifference = () => {
  const config = workspace.getConfiguration('jsJsxSnippets.settings');

  const importReactOnTop = config.get('importReactOnTop');
  const typing = config.get('typing');
  const semicolon = config.get('semicolon');

  return (
    outputConfig.importReactOnTop !== importReactOnTop ||
    outputConfig.semicolon !== semicolon ||
    outputConfig.typing !== typing
  );
};
