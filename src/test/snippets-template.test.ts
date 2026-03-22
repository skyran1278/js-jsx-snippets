import * as assert from 'assert';

import {
  Snippets,
  importPackageSnippets,
  importReactSnippets,
  baseSnippets,
  reactBaseSnippets,
  reactTsComponentSnippets,
  reactJsComponentSnippets,
  importReactTsComponentSnippets,
  importReactJsComponentSnippets,
  reactTsSnippets,
  reactJsSnippets,
  reactPropTypesComponentSnippets,
  importReactPropTypesComponentSnippets,
  jestSnippets,
  propTypeSnippets,
  reactNativeSnippets,
} from '../script/snippets-template';

const allSnippetGroups: { name: string; snippets: Snippets }[] = [
  { name: 'importPackageSnippets', snippets: importPackageSnippets },
  { name: 'importReactSnippets', snippets: importReactSnippets },
  { name: 'baseSnippets', snippets: baseSnippets },
  { name: 'reactBaseSnippets', snippets: reactBaseSnippets },
  { name: 'reactTsComponentSnippets', snippets: reactTsComponentSnippets },
  { name: 'reactJsComponentSnippets', snippets: reactJsComponentSnippets },
  {
    name: 'importReactTsComponentSnippets',
    snippets: importReactTsComponentSnippets,
  },
  {
    name: 'importReactJsComponentSnippets',
    snippets: importReactJsComponentSnippets,
  },
  { name: 'reactTsSnippets', snippets: reactTsSnippets },
  { name: 'reactJsSnippets', snippets: reactJsSnippets },
  {
    name: 'reactPropTypesComponentSnippets',
    snippets: reactPropTypesComponentSnippets,
  },
  {
    name: 'importReactPropTypesComponentSnippets',
    snippets: importReactPropTypesComponentSnippets,
  },
  { name: 'jestSnippets', snippets: jestSnippets },
  { name: 'propTypeSnippets', snippets: propTypeSnippets },
  { name: 'reactNativeSnippets', snippets: reactNativeSnippets },
];

suite('Snippet Template Validation', () => {
  test('every snippet has a non-empty prefix', () => {
    for (const { name, snippets } of allSnippetGroups) {
      for (const [key, snippet] of Object.entries(snippets)) {
        assert.ok(
          snippet.prefix && snippet.prefix.length > 0,
          `${name} > "${key}" has an empty prefix`,
        );
      }
    }
  });

  test('every snippet has a non-empty body array', () => {
    for (const { name, snippets } of allSnippetGroups) {
      for (const [key, snippet] of Object.entries(snippets)) {
        assert.ok(
          Array.isArray(snippet.body) && snippet.body.length > 0,
          `${name} > "${key}" has an empty body`,
        );
      }
    }
  });

  test('every body line is a string', () => {
    for (const { name, snippets } of allSnippetGroups) {
      for (const [key, snippet] of Object.entries(snippets)) {
        for (const line of snippet.body) {
          assert.strictEqual(
            typeof line,
            'string',
            `${name} > "${key}" has a non-string body line`,
          );
        }
      }
    }
  });

  test('no duplicate prefixes in JS importReactOnTop variant', () => {
    const combined: Snippets = {
      ...importPackageSnippets,
      ...importReactSnippets,
      ...baseSnippets,
      ...reactBaseSnippets,
      ...jestSnippets,
      ...reactNativeSnippets,
      ...importReactJsComponentSnippets,
      ...reactJsSnippets,
      ...importReactPropTypesComponentSnippets,
      ...propTypeSnippets,
    };
    const prefixes = Object.values(combined).map((s) => s.prefix);
    const seen = new Set<string>();
    for (const p of prefixes) {
      assert.ok(!seen.has(p), `Duplicate prefix "${p}" in JS variant`);
      seen.add(p);
    }
  });

  test('no duplicate prefixes in TS importReactOnTop variant', () => {
    const combined: Snippets = {
      ...importPackageSnippets,
      ...importReactSnippets,
      ...baseSnippets,
      ...reactBaseSnippets,
      ...jestSnippets,
      ...reactNativeSnippets,
      ...importReactTsComponentSnippets,
      ...reactTsSnippets,
    };
    const prefixes = Object.values(combined).map((s) => s.prefix);
    const seen = new Set<string>();
    for (const p of prefixes) {
      assert.ok(!seen.has(p), `Duplicate prefix "${p}" in TS variant`);
      seen.add(p);
    }
  });
});
