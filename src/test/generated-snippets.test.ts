import * as assert from 'assert';
import * as path from 'path';
import { readFile } from 'fs/promises';

import { Snippets, baseSnippets } from '../script/snippets-template';

suite('Generated Snippet Files', () => {
  const snippetsDir = path.join(__dirname, '../../snippets');

  const variantFiles = [
    'js.json',
    'js-semicolon.json',
    'js-import-react-on-top.json',
    'js-import-react-on-top-semicolon.json',
    'ts.json',
    'ts-semicolon.json',
    'ts-import-react-on-top.json',
    'ts-import-react-on-top-semicolon.json',
  ];

  for (const file of variantFiles) {
    test(`${file} is valid JSON with correct snippet structure`, async () => {
      const content = await readFile(path.join(snippetsDir, file), 'utf-8');
      const parsed = JSON.parse(content) as Snippets;

      assert.ok(
        typeof parsed === 'object' && parsed !== null,
        `${file} should be an object`,
      );

      for (const [key, snippet] of Object.entries(parsed)) {
        assert.ok(snippet.prefix, `${file} > "${key}" missing prefix`);
        assert.ok(
          Array.isArray(snippet.body),
          `${file} > "${key}" body should be an array`,
        );
      }
    });
  }

  test('no-semicolon variants have no semicolons in body lines', async () => {
    const noSemiFiles = [
      'js.json',
      'js-import-react-on-top.json',
      'ts.json',
      'ts-import-react-on-top.json',
    ];

    for (const file of noSemiFiles) {
      const content = await readFile(path.join(snippetsDir, file), 'utf-8');
      const parsed = JSON.parse(content) as Snippets;

      for (const [key, snippet] of Object.entries(parsed)) {
        for (const line of snippet.body) {
          assert.ok(
            !line.includes(';'),
            `${file} > "${key}" should not contain semicolons but has: "${line}"`,
          );
        }
      }
    }
  });

  test('semicolon variants contain snippets with semicolons', async () => {
    const semiFiles = [
      'js-semicolon.json',
      'js-import-react-on-top-semicolon.json',
      'ts-semicolon.json',
      'ts-import-react-on-top-semicolon.json',
    ];

    for (const file of semiFiles) {
      const content = await readFile(path.join(snippetsDir, file), 'utf-8');
      const parsed = JSON.parse(content) as Snippets;

      const hasSemicolon = Object.values(parsed).some((snippet) =>
        snippet.body.some((line) => line.includes(';')),
      );
      assert.ok(
        hasSemicolon,
        `${file} should have at least some lines with semicolons`,
      );
    }
  });

  test('import-react-on-top variants include imr prefix', async () => {
    const importReactFiles = [
      'js-import-react-on-top-semicolon.json',
      'ts-import-react-on-top-semicolon.json',
    ];

    for (const file of importReactFiles) {
      const content = await readFile(path.join(snippetsDir, file), 'utf-8');
      const parsed = JSON.parse(content) as Snippets;
      const prefixes = Object.values(parsed).map((s) => s.prefix);
      assert.ok(
        prefixes.includes('imr'),
        `${file} should include the 'imr' snippet`,
      );
    }
  });

  test('non-import-react variants exclude imr prefix', async () => {
    const noImportReactFiles = ['js-semicolon.json', 'ts-semicolon.json'];

    for (const file of noImportReactFiles) {
      const content = await readFile(path.join(snippetsDir, file), 'utf-8');
      const parsed = JSON.parse(content) as Snippets;
      const prefixes = Object.values(parsed).map((s) => s.prefix);
      assert.ok(
        !prefixes.includes('imr'),
        `${file} should NOT include the 'imr' snippet`,
      );
    }
  });

  test('ts variants include TypeScript interface definitions', async () => {
    const tsFile = 'ts-import-react-on-top-semicolon.json';
    const content = await readFile(path.join(snippetsDir, tsFile), 'utf-8');
    const parsed = JSON.parse(content) as Snippets;

    const hasInterface = Object.values(parsed).some((snippet) =>
      snippet.body.some((line) => line.includes('interface')),
    );
    assert.ok(hasInterface, `${tsFile} should have interface definitions`);
  });

  test('js variants include PropTypes snippets', async () => {
    const jsFile = 'js-import-react-on-top-semicolon.json';
    const content = await readFile(path.join(snippetsDir, jsFile), 'utf-8');
    const parsed = JSON.parse(content) as Snippets;

    const hasPropTypes = Object.values(parsed).some((snippet) =>
      snippet.body.some((line) => line.includes('PropTypes')),
    );
    assert.ok(hasPropTypes, `${jsFile} should have PropTypes snippets`);
  });

  test('all 8 variant files include base snippet prefixes', async () => {
    const basePrefixes = Object.values(baseSnippets).map((s) => s.prefix);

    for (const file of variantFiles) {
      const content = await readFile(path.join(snippetsDir, file), 'utf-8');
      const parsed = JSON.parse(content) as Snippets;
      const filePrefixes = Object.values(parsed).map((s) => s.prefix);

      for (const prefix of basePrefixes) {
        assert.ok(
          filePrefixes.includes(prefix),
          `${file} should include base prefix "${prefix}"`,
        );
      }
    }
  });
});
