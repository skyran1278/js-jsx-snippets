import { writeFile } from 'fs/promises';
import { join } from 'path';

import {
  Snippets,
  baseSnippets,
  importPackageSnippets,
  importReactJsComponentSnippets,
  importReactPropTypesComponentSnippets,
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
  for (const key in snippets) {
    const value = snippets[key as keyof typeof snippets];
    value.body = value.body.map((line) => line.replace(/;/, ''));
  }
  await writeFile(path, JSON.stringify(snippets));
};

const generateAllSnippets = async () => {
  const tsImportReactOnTopSemicolon = {
    ...importPackageSnippets,
    ...baseSnippets,
    ...reactBaseSnippets,
    ...jestSnippets,
    ...reactNativeSnippets,
    ...importReactTsComponentSnippets,
    ...reactTsSnippets,
  };
  await writeFile(
    join(__dirname, '../snippets/ts-import-react-on-top-semicolon.json'),
    JSON.stringify(tsImportReactOnTopSemicolon),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../snippets/ts-import-react-on-top.json'),
    tsImportReactOnTopSemicolon,
  );

  const jsImportReactOnTopSemicolon = {
    ...importPackageSnippets,
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
    join(__dirname, '../snippets/js-import-react-on-top-semicolon.json'),
    JSON.stringify(jsImportReactOnTopSemicolon),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../snippets/js-import-react-on-top.json'),
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
    join(__dirname, '../snippets/ts-semicolon.json'),
    JSON.stringify(tsSemicolon),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../snippets/ts.json'),
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
    join(__dirname, '../snippets/js-semicolon.json'),
    JSON.stringify(jsSemicolon),
  );
  await generateNoSemicolonSnippets(
    join(__dirname, '../snippets/js.json'),
    jsSemicolon,
  );
};

generateAllSnippets().then(() => {
  console.log('Snippets generated successfully');
});
