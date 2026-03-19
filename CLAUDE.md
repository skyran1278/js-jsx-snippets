# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run build    # Compile TypeScript and generate all snippet variants
npm run watch    # Watch mode via nodemon (rebuilds on .ts/.json changes)
npm run lint     # ESLint on src/
npm test         # Build + lint + run VSCode extension tests
```

Tests run inside a VSCode host process via `@vscode/test-cli`. There is no way to run a single test in isolation — `npm test` runs the full suite.

## Architecture

This is a VSCode extension that provides React/Redux/Jest code snippets for JS/TS files.

### Snippet Generation Pipeline

All snippet content is defined in [src/script/snippets-template.ts](src/script/snippets-template.ts) as typed `Snippets` objects grouped by category (e.g. `reactBaseSnippets`, `jestSnippets`, `propTypeSnippets`).

[src/script/generate-all-snippets.ts](src/script/generate-all-snippets.ts) combines these groups into **8 pre-built variant JSON files** in `snippets/`, covering every combination of:
- Language: `js` / `ts`
- Import React on top: yes / no
- Semicolons: yes / no

### Runtime Snippet Switching

VSCode reads `snippets/javascript-snippets.json` and `snippets/typescript-snippets.json` as declared in `package.json`. These are the "production" files and are **overwritten at runtime** by the extension based on user settings.

On activation and on any `jsJsxSnippets` configuration change:
1. [src/is-snippets-difference.ts](src/is-snippets-difference.ts) checks if the production files match the user's current settings
2. If they differ, [src/replace-production-snippets.ts](src/replace-production-snippets.ts) selects the correct variant JSON and overwrites the production files, then prompts the user to reload the window

### User-Configurable Settings

| Setting | Default | Effect |
|---|---|---|
| `jsJsxSnippets.settings.importReactOnTop` | `true` | Include `import React from 'react'` in component snippets |
| `jsJsxSnippets.settings.semicolon` | `true` | Include trailing semicolons |
| `jsJsxSnippets.settings.typing` | `true` | Use TypeScript interfaces for Props/State in TS snippets |

The `typing` setting is not a separate variant dimension. When `typing=false`, the TypeScript production file is populated with the JS variant (no TS interfaces) — it reuses one of the 8 existing JS variants rather than generating a 9th file.

### Key Files

- [src/script/snippets-template.ts](src/script/snippets-template.ts) — **edit this** to add/change snippets
- [src/script/generate-all-snippets.ts](src/script/generate-all-snippets.ts) — assembles variant combinations; update if adding new snippet groups
- `snippets/*.json` — generated files, do not edit manually
- [src/extension.ts](src/extension.ts) — VSCode extension entry point (activation/deactivation)
- [src/replace-production-snippets.ts](src/replace-production-snippets.ts) — runtime variant selection logic
- [src/show-restart-message.ts](src/show-restart-message.ts) — prompts user to reload window after snippet swap
