import * as assert from 'assert';

import * as vscode from 'vscode';

import { getSnippetKeys } from '../snippet-keys';

suite('Snippet Key Generation', () => {
  const setConfig = (
    importReactOnTop: boolean,
    semicolon: boolean,
    typing: boolean,
  ) => {
    const config = vscode.workspace.getConfiguration('jsJsxSnippets.settings');
    return Promise.all([
      config.update('importReactOnTop', importReactOnTop, true),
      config.update('semicolon', semicolon, true),
      config.update('typing', typing, true),
    ]);
  };

  const resetConfig = () => {
    const config = vscode.workspace.getConfiguration('jsJsxSnippets.settings');
    return Promise.all([
      config.update('importReactOnTop', undefined, true),
      config.update('semicolon', undefined, true),
      config.update('typing', undefined, true),
    ]);
  };

  teardown(async () => {
    await resetConfig();
  });

  test('default settings produce expected keys', async () => {
    await resetConfig();
    const keys = getSnippetKeys();
    assert.strictEqual(keys.jsKey, 'jsImportReactOnTopSemicolon');
    assert.strictEqual(keys.tsKey, 'tsImportReactOnTopSemicolon');
    assert.strictEqual(keys.jsFile, 'js-import-react-on-top-semicolon.json');
    assert.strictEqual(keys.tsFile, 'ts-import-react-on-top-semicolon.json');
  });

  test('typing=false makes tsKey/tsFile use js prefix', async () => {
    await setConfig(true, true, false);
    const keys = getSnippetKeys();
    assert.strictEqual(keys.tsKey, 'jsImportReactOnTopSemicolon');
    assert.strictEqual(keys.tsFile, 'js-import-react-on-top-semicolon.json');
  });

  test('importReactOnTop=false removes react parts', async () => {
    await setConfig(false, true, true);
    const keys = getSnippetKeys();
    assert.strictEqual(keys.jsKey, 'jsSemicolon');
    assert.strictEqual(keys.jsFile, 'js-semicolon.json');
    assert.strictEqual(keys.tsKey, 'tsSemicolon');
    assert.strictEqual(keys.tsFile, 'ts-semicolon.json');
  });

  test('semicolon=false removes semicolon parts', async () => {
    await setConfig(true, false, true);
    const keys = getSnippetKeys();
    assert.strictEqual(keys.jsKey, 'jsImportReactOnTop');
    assert.strictEqual(keys.jsFile, 'js-import-react-on-top.json');
    assert.strictEqual(keys.tsKey, 'tsImportReactOnTop');
    assert.strictEqual(keys.tsFile, 'ts-import-react-on-top.json');
  });

  test('all false produces minimal keys', async () => {
    await setConfig(false, false, false);
    const keys = getSnippetKeys();
    assert.strictEqual(keys.jsKey, 'js');
    assert.strictEqual(keys.jsFile, 'js.json');
    assert.strictEqual(keys.tsKey, 'js');
    assert.strictEqual(keys.tsFile, 'js.json');
  });
});
