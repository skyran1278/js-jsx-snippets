# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [11.1.0](https://github.com/skyran1278/js-jsx-snippets/compare/v11.0.1...v11.1.0) (2024-03-30)

### Added configurations

|             Option | Description                                                                                                                                    |
| -----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `importReactOnTop` | Controls if snippets should add `import React from 'react';` at the top of components.\nSet false if you have React +17 and use jsx transform. |
|        `semicolon` | Controls if snippets should add semicolon at the end of the line.                                                                              |
|           `typing` | Controls if React components have typescript Props typing.                                                                                     |

### Changed

| Trigger | Content                                  |
| ------: | ---------------------------------------- |
|  `rncc` | react native class component skeleton    |
|  `rnfc` | react native function component skeleton |

### Removed

| Trigger | Content       |
| ------: | ------------- |
|   `com` | Comment Block |

### [11.0.1](https://github.com/skyran1278/js-jsx-snippets/compare/v11.0.0...v11.0.1) (2023-01-03)

## 11.0.0 (2021-10-01)

### ⚠ BREAKING CHANGES

- Convert filenames to pascal case for component names (#5)
- remove support for ts

### Features

- Convert filenames to pascal case for component names ([#5](https://github.com/skyran1278/js-jsx-snippets/issues/5)) ([f7b69ea](https://github.com/skyran1278/js-jsx-snippets/commit/f7b69ea82d9da99a00fb18b2bce0a094fbbf8bd5))
- remove support for ts ([d14912a](https://github.com/skyran1278/js-jsx-snippets/commit/d14912ac4396b9a8cedd6607aca150c3bdc99059))

## [10.2.0] - 2021-06-28

### Added

| Trigger | Content                                  |
| ------: | ---------------------------------------- |
|  `rncc` | react native class component skeleton    |
|  `rnfc` | react native function component skeleton |

## [10.1.0] - 2020-03-21

### Added

| Trigger | Content                               |
| ------: | ------------------------------------- |
|   `ipt` | `import PropTypes from 'prop-types';` |

### Changed

| Trigger | Content                                                  |
| ------: | -------------------------------------------------------- |
|   `clg` | `console.log()`                                          |
|   `rcc` | class component skeleton                                 |
|  `rccp` | class component skeleton with prop types after the class |
|   `rfc` | function component skeleton                              |
|  `rfcp` | function component with prop types skeleton              |
|  `test` | test Block                                               |
|    `it` | it Block                                                 |

## [10.0.0] - 2019-09-26

### Changed

| Trigger | Content       |
| ------: | ------------- |
|   `com` | Comment Block |

## [0.9.0] - 2019-09-26

### Added

| Trigger | Content                        |
| ------: | ------------------------------ |
|   `pto` | `PropTypes.object.,`           |
|  `ptor` | `PropTypes.object.isRequired,` |

## [0.8.0] - 2019-09-05

### Added

| Trigger | Content                      |
| ------: | ---------------------------- |
|   `imr` | `import React from 'react';` |

## [0.7.0] - 2019-09-05

### Removed

| Trigger | Content                                          |
| ------: | ------------------------------------------------ |
|   `imr` | `import React from 'react';`                     |
|  `imrc` | `import React, { Component } from 'react';`      |
|  `imrs` | `import React, { useState } from 'react';`       |
|  `imre` | `import React, { useEffect } from 'react';`      |
|   `ipt` | `import PropTypes from 'prop-types';`            |
|  `conc` | class default constructor with props and context |
|   `pto` | `PropTypes.object.,`                             |
|  `ptor` | `PropTypes.object.isRequired,`                   |

## [0.6.0] - 2019-08-13

### Removed

| Trigger | Content                                                          |
| ------: | ---------------------------------------------------------------- |
| `redux` | `import { connect } from 'react-redux';`                         |
|   `imn` | `import 'module';`                                               |
|   `exp` | `export default moduleName;`                                     |
|   `rqr` | `require('package');`                                            |
|   `mde` | `module.exports = { };`                                          |
| `imrpc` | `import React, { PureComponent } from 'react';`                  |
|   `rpc` | class pure component skeleton with prop types after the class    |
|   `rpt` | empty propTypes declaration                                      |
|   `rdp` | empty defaultProps declaration                                   |
|   `ren` | `render method`                                                  |
|  `rcjc` | class component skeleton without import and default export lines |

## [0.5.0] - 2019-08-12

### Changed

| Trigger | Content  |
| ------: | -------- |
|    `it` | it Block |

## [0.4.0] - 2019-08-08

### Added

|      Trigger | Content                                     |
| -----------: | ------------------------------------------- |
|       `imrs` | `import React, { useState } from 'react';`  |
|       `imre` | `import React, { useEffect } from 'react';` |
|   `useState` | useState block                              |
|  `useEffect` | useEffect block                             |
| `useContext` | useContext block                            |
|   `describe` | describe Block                              |
|       `test` | test Block                                  |
|        `tit` | it Block                                    |

### Changed

|   Trigger | Content                                           |
| --------: | ------------------------------------------------- |
|     `exp` | Export default module in ES6 syntax               |
| `comment` | Comment Block                                     |
|     `rfc` | arrow function component skeleton                 |
|    `rfcp` | arrow function component with prop types skeleton |

### Fixed

- Add dollar sign to TM_FILENAME_BASE variable

### Removed

| Trigger | Content                                   |
| ------: | ----------------------------------------- |
|   `edl` | `// eslint-disable-next-line`             |
|  `rwwd` | class component without import statements |
|   `cwm` | `componentWillMount method`               |
|   `cwr` | `componentWillReceiveProps method`        |
|  `cwup` | `componentWillUpdate method`              |

## [0.3.0] - 2018-07-06

### Added

| Trigger | Content                                                       |
| ------: | ------------------------------------------------------------- |
|   `rpc` | class pure component skeleton with prop types after the class |
|   `rpt` | empty propTypes declaration                                   |
|   `rdp` | empty defaultProps declaration                                |
|  `gsbu` | `getSnapshotBeforeUpdate method`                              |
| `gdsfp` | `static getDerivedStateFromProps method`                      |
|   `cdc` | `componentDidCatch method`                                    |

### Changed

| Trigger | Content                      |
| ------: | ---------------------------- |
|   `rsc` | stateless component skeleton |

### Removed

| Trigger | Content                                                          |
| ------: | ---------------------------------------------------------------- |
|  `rcfc` | class component skeleton that contains all the lifecycle methods |

## [0.2.0] - 2018-06-29

### Added

| Trigger | Content                                         |
| ------: | ----------------------------------------------- |
|   `imr` | `import React from 'react';`                    |
| `imrpc` | `import React, { PureComponent } from 'react';` |
|   `ipt` | `import PropTypes from 'prop-types';`           |
|    `cm` | Comment Block                                   |

### Removed

|  Trigger | Content                               |
| -------: | ------------------------------------- |
| `router` | `import { } from 'react-router-dom';` |

## [0.1.0] - 2018-06-28

### Added

| Trigger | Content                      |
| ------: | ---------------------------- |
|   `rqr` | `require('package');`        |
|   `mde` | `module.exports = { };`      |
|   `edm` | `export default moduleName;` |

## [0.0.9] - 2018-01-17

### Changed

- move change log in README to CHANGELOG'

## [0.0.8] - 2018-01-16

### Removed

- rpt

### Changed

- Improve syntax detail experience

## [0.0.7]

Add and improve syntax:

- imp
- router
- clg
- edl
- rscp
- sst

## [0.0.6]

fix small bugs

## [0.0.5]

update readme description

## [0.0.4]

update readme and snippets name

## [0.0.3]

update readme

## [0.0.2]

modify snippets

## [0.0.1]

Initial release of js-jsx-snippets
