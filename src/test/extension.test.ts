import * as assert from 'assert';

import * as vscode from 'vscode';

suite('Extension Activation', () => {
  test('extension is present', () => {
    const ext = vscode.extensions.getExtension('skyran.js-jsx-snippets');
    assert.ok(ext, 'Extension should be installed');
  });

  test('extension activates successfully', async () => {
    const ext = vscode.extensions.getExtension('skyran.js-jsx-snippets');
    assert.ok(ext, 'Extension should be installed');
    if (!ext.isActive) {
      await ext.activate();
    }
    assert.ok(ext.isActive, 'Extension should be active');
  });
});
