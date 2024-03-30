import { writeFile } from 'fs/promises';
import { join } from 'path';

import mapValues from 'lodash/mapValues';

import {
  Snippets,
  baseSnippets,
  importPackageSnippets,
  importReactJsComponentSnippets,
  importReactPropTypesComponentSnippets,
  importReactSnippets,
  importReactTsComponentSnippets,
  jestSnippets,
  propTypeSnippets,
  reactBaseSnippets,
  reactJsComponentSnippets,
  reactJsSnippets,
  reactNativeSnippets,
  reactPropTypesComponentSnippets,
  reactTsComponentSnippets,
  reactTsSnippets,
} from './snippets-template';

const generateNoSemicolonSnippets = async (
  path: string,
  snippets: Snippets,
) => {
  const noSemicolonSnippets = mapValues(snippets, (snippet) => {
    return {
      ...snippet,
      body: snippet.body.map((line) => line.replace(/;/, '')),
    };
  });
  await writeFile(path, JSON.stringify(noSemicolonSnippets, null, 2));
};

const generateAllSnippets = async () => {
  const tsImportReactOnTopSemicolon = {
    ...importPackageSnippets,
    ...importReactSnippets,
    ...baseSnippets,
    ...reactBaseSnippets,
    ...jestSnippets,
    ...reactNativeSnippets,
    ...importReactTsComponentSnippets,
    ...reactTsSnippets,
  };
  await writeFile(
    join(__dirname, '../../snippets/ts-import-react-on-top-semicolon.json'),
    JSON.stringify(tsImportReactOnTopSemicolon, null, 2),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../../snippets/ts-import-react-on-top.json'),
    tsImportReactOnTopSemicolon,
  );

  const jsImportReactOnTopSemicolon = {
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
  await writeFile(
    join(__dirname, '../../snippets/js-import-react-on-top-semicolon.json'),
    JSON.stringify(jsImportReactOnTopSemicolon, null, 2),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../../snippets/js-import-react-on-top.json'),
    jsImportReactOnTopSemicolon,
  );

  const tsSemicolon = {
    ...importPackageSnippets,
    ...baseSnippets,
    ...reactBaseSnippets,
    ...jestSnippets,
    ...reactNativeSnippets,
    ...reactTsComponentSnippets,
    ...reactTsSnippets,
  };
  await writeFile(
    join(__dirname, '../../snippets/ts-semicolon.json'),
    JSON.stringify(tsSemicolon, null, 2),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../../snippets/ts.json'),
    tsSemicolon,
  );

  const jsSemicolon = {
    ...importPackageSnippets,
    ...baseSnippets,
    ...reactBaseSnippets,
    ...jestSnippets,
    ...reactNativeSnippets,
    ...reactJsComponentSnippets,
    ...reactJsSnippets,
    ...reactPropTypesComponentSnippets,
    ...propTypeSnippets,
  };
  await writeFile(
    join(__dirname, '../../snippets/js-semicolon.json'),
    JSON.stringify(jsSemicolon, null, 2),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../../snippets/js.json'),
    jsSemicolon,
  );
};

generateAllSnippets().then(() => {
  console.log('Snippets generated successfully');
});
