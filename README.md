# JS JSX Snippets

## Supported languages (file extensions)

- JavaScript (.js)
- TypeScript (.ts)
- JavaScript React (.jsx)
- TypeScript React (.tsx)

## Usage

After install this snippets add this inside your settings

```js
"editor.snippetSuggestions": "top",
```

## Snippets

## Import and export

| Trigger | Content                      |
| ------: | ---------------------------- |
|   `imp` | `import name from 'module';` |
|   `imd` | `import { } from 'module';`  |

## Import package

| Trigger | Content                               | Description    |
| ------: | ------------------------------------- | -------------- |
|   `imr` | `import React from 'react';`          | useful in test |
|   `ipt` | `import PropTypes from 'prop-types';` |

## Basic methods

| Trigger | Content         |
| ------: | --------------- |
|   `com` | Comment Block   |
|   `clg` | `console.log()` |

## React components

Only contain class component and function component.

|      Trigger | Content                                                  |
| -----------: | -------------------------------------------------------- |
|        `rcc` | class component skeleton                                 |
|       `rncc` | react native class component skeleton                    |
|       `rccp` | class component skeleton with prop types after the class |
|        `rfc` | function component skeleton                              |
|       `rfcp` | function component with prop types skeleton              |
|       `rnfc` | react native function component skeleton                 |
|        `con` | class default constructor with props                     |
|        `est` | empty state object                                       |
|        `cdm` | `componentDidMount method`                               |
|        `scu` | `shouldComponentUpdate method`                           |
|       `cdup` | `componentDidUpdate method`                              |
|       `cwun` | `componentWillUnmount method`                            |
|       `gsbu` | `getSnapshotBeforeUpdate method`                         |
|      `gdsfp` | `static getDerivedStateFromProps method`                 |
|        `cdc` | `componentDidCatch method`                               |
|        `sst` | `this.setState with object as parameter`                 |
|        `ssf` | `this.setState with function as parameter`               |
|      `props` | `this.props`                                             |
|      `state` | `this.state`                                             |
|        `bnd` | `binds the this of method inside the constructor`        |
|   `useState` | useState block                                           |
|  `useEffect` | useEffect block                                          |
| `useContext` | useContext block                                         |

## Jest

|    Trigger | Content        |
| ---------: | -------------- |
| `describe` | describe Block |
|     `test` | test Block     |
|       `it` | it Block       |

## PropTypes

| Trigger | Content                                                                              |
| ------: | ------------------------------------------------------------------------------------ |
|   `pta` | `PropTypes.array,`                                                                   |
|  `ptar` | `PropTypes.array.isRequired,`                                                        |
|   `pto` | `PropTypes.object.,`                                                                 |
|  `ptor` | `PropTypes.object.isRequired,`                                                       |
|   `ptb` | `PropTypes.bool,`                                                                    |
|  `ptbr` | `PropTypes.bool.isRequired,`                                                         |
|   `ptf` | `PropTypes.func,`                                                                    |
|  `ptfr` | `PropTypes.func.isRequired,`                                                         |
|   `ptn` | `PropTypes.number,`                                                                  |
|  `ptnr` | `PropTypes.number.isRequired,`                                                       |
|   `pts` | `PropTypes.string,`                                                                  |
|  `ptsr` | `PropTypes.string.isRequired,`                                                       |
|  `ptnd` | `PropTypes.node,`                                                                    |
| `ptndr` | `PropTypes.node.isRequired,`                                                         |
|  `ptel` | `PropTypes.element,`                                                                 |
| `ptelr` | `PropTypes.element.isRequired,`                                                      |
|   `pti` | `PropTypes.instanceOf(ClassName),`                                                   |
|  `ptir` | `PropTypes.instanceOf(ClassName).isRequired,`                                        |
|   `pte` | `PropTypes.oneOf(['News', 'Photos']),`                                               |
|  `pter` | `PropTypes.oneOf(['News', 'Photos']).isRequired,`                                    |
|  `ptet` | `PropTypes.oneOfType([PropTypes.string, PropTypes.number]),`                         |
| `ptetr` | `PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,`              |
|  `ptao` | `PropTypes.arrayOf(PropTypes.number),`                                               |
| `ptaor` | `PropTypes.arrayOf(PropTypes.number).isRequired,`                                    |
|  `ptoo` | `PropTypes.objectOf(PropTypes.number),`                                              |
| `ptoor` | `PropTypes.objectOf(PropTypes.number).isRequired,`                                   |
|  `ptsh` | `PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}),`            |
| `ptshr` | `PropTypes.shape({color: PropTypes.string, fontSize: PropTypes.number}).isRequired,` |
