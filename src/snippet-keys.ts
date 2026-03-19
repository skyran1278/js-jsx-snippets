import { workspace } from 'vscode';

export interface SnippetKeys {
  jsKey: string;
  tsKey: string;
  jsFile: string;
  tsFile: string;
}

export const getSnippetKeys = (): SnippetKeys => {
  const config = workspace.getConfiguration('jsJsxSnippets.settings');
  const importReactOnTop = config.get<boolean>('importReactOnTop') ?? true;
  const typing = config.get<boolean>('typing') ?? true;
  const semicolon = config.get<boolean>('semicolon') ?? true;

  const reactPart = importReactOnTop ? 'ImportReactOnTop' : '';
  const filePart = importReactOnTop ? '-import-react-on-top' : '';
  const semiKey = semicolon ? 'Semicolon' : '';
  const semiFile = semicolon ? '-semicolon' : '';

  const jsKey = `js${reactPart}${semiKey}`;
  const tsKey = `${typing ? 'ts' : 'js'}${reactPart}${semiKey}`;
  const jsFile = `js${filePart}${semiFile}.json`;
  const tsFile = `${typing ? 'ts' : 'js'}${filePart}${semiFile}.json`;

  return { jsKey, tsKey, jsFile, tsFile };
};
