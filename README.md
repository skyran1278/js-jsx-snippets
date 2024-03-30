# JS JSX Snippets

## Options

|             Option | Description                                                                                                                                    |
| -----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `importReactOnTop` | Controls if snippets should add `import React from 'react';` at the top of components.\nSet false if you have React +17 and use jsx transform. |
|        `semicolon` | Controls if snippets should add semicolon at the end of the line.                                                                              |
|           `typing` | Controls if React components have typescript Props typing.                                                                                     |

## Supported languages (file extensions)

- JavaScript (.js)
- JavaScript React (.jsx)
- TypeScript (.ts)
- TypeScript React (.tsx)

## Snippets

## Import package

| Trigger | Content                               |                |
| ------: | ------------------------------------- | -------------- |
|   `imp` | `import name from 'module';`          |                |
|   `imd` | `import { } from 'module';`           |                |
|   `ipt` | `import PropTypes from 'prop-types';` |                |
|   `imr` | `import React from 'react';`          | useful in test |

## Basic methods

| Trigger | Content         |
| ------: | --------------- |
|   `clg` | `console.log()` |

## React components

|      Trigger | Content                                                  |
| -----------: | -------------------------------------------------------- |
|        `rcc` | class component skeleton                                 |
|       `rccp` | class component skeleton with prop types after the class |
|        `rfc` | function component skeleton                              |
|       `rfcp` | function component with prop types skeleton              |
|        `est` | empty state object                                       |
|        `cdm` | `componentDidMount method`                               |
|        `scu` | `shouldComponentUpdate method`                           |
|        `cdu` | `componentDidUpdate method`                              |
|        `cwu` | `componentWillUnmount method`                            |
|        `gsb` | `getSnapshotBeforeUpdate method`                         |
|        `gds` | `static getDerivedStateFromProps method`                 |
|        `cdc` | `componentDidCatch method`                               |
|        `sst` | `this.setState with object as parameter`                 |
|        `ssf` | `this.setState with function as parameter`               |
|      `props` | `this.props`                                             |
|      `state` | `this.state`                                             |
|        `bnd` | `binds the this of method inside the constructor`        |
|   `useState` | useState block                                           |
|  `useEffect` | useEffect block                                          |
| `useContext` | useContext block                                         |

## React native components

| Trigger | Content                                  |
| ------: | ---------------------------------------- |
|  `rncc` | react native class component skeleton    |
|  `rnfc` | react native function component skeleton |

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

## Full Expansions

imp - Import package

```js
import name from 'module';
```

imd - Import package

```js
import { | } from 'module';
```

imr - Import React

```js
import React from 'react';
```

ipt - Import PropTypes

```js
import PropTypes from 'prop-types';
```

clg - Console Log

```js
console.log(|);
```

rcc - Class Component

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        |
      </div>
    );
  }
}

export default App;
```

rccp - Class Component with PropTypes

```js
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class App extends Component {
  render() {
    return (
      <div>
        |
      </div>
    );
  }
}


App.propTypes = {

};


export default App;
```

rfc - Function Component

```js
import React from 'react';

const App = () => {
  return (
    <div>
      |
    </div>
  );
}

export default App;
```

rfcp - Function Component with PropTypes

```js
import React from 'react';
import PropTypes from 'prop-types';


const App = () => {
  return (
    <div>
      |
    </div>
  );
};


App.propTypes = {

};


export default App;
```

est - Empty State

```js
this.state = {
  |
};
```

cdm - ComponentDidMount

```js
componentDidMount() {
  |
}
```

scu - ShouldComponentUpdate

```js
shouldComponentUpdate(nextProps, nextState) {
  |
}
```

cdu - ComponentDidUpdate

```js
componentDidUpdate(prevProps, prevState) {
  |
}
```

cwu - ComponentWillUnmount

```js
componentWillUnmount() {
  |
}
```

gsbu - GetSnapshotBeforeUpdate

```js

getSnapshotBeforeUpdate(prevProps, prevState) {
  |
}
```

gds - GetDerivedStateFromProps

```js
static getDerivedStateFromProps(nextProps, prevState) {
  |
}
```

cdc - ComponentDidCatch

```js
componentDidCatch(error, info) {
  |
}
```

sst - SetState with object as parameter

```js
this.setState(|)
```

ssf - SetState with function as parameter

```js
this.setState((state, props) => { return { | }});
```

props - this.props

```js
this.props.|
```

state - this.state

```js
this.state.|
```

bnd - Binds the this of method inside the constructor

```js
this.| = this.|.bind(this);
```

useState - useState block

```js
const [state, setState] = useState(|);
```

useEffect - useEffect block

```js
useEffect(() => {
  |
  return () => {

  };
}, []);
```

useContext - useContext block

```js
const context = useContext(|);
```

rncc - React Native Class Component

```js
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        |
      </View>
    );
  }
}

const styles = StyleSheet.create({})

export default App;
```

rnfc - React Native Function Component

```js
import React from 'react';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View>
      |
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;
```

describe - Describe Block

```js
describe('|', () => {

});
```

test - Test Block

```js
test('|', () => {

});
```

it - It Block

```js
it('|', () => {

});
```
