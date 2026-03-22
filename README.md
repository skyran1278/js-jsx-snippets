# JS JSX Snippets

React/Redux/Jest code snippets for JavaScript and TypeScript in VS Code.

## Options

| Option | Description |
| --- | --- |
| `importReactOnTop` | Controls if snippets add `import React from 'react';` at the top of components. Set to `false` if you have React 17+ and use the JSX transform. |
| `semicolon` | Controls if snippets add a semicolon at the end of the line. |
| `typing` | Controls if React components include TypeScript Props typing. |

## Supported languages (file extensions)

- JavaScript (.js)
- JavaScript React (.jsx)
- TypeScript (.ts)
- TypeScript React (.tsx)

## Snippets

> In the code examples below, `|` marks where the cursor lands after expansion.

### Import Package

| Trigger | Content |
| ---: | --- |
| `imp` | `import name from 'module';` |
| `imd` | `import { } from 'module';` |
| `ipt` | `import PropTypes from 'prop-types';` |
| `imr` | `import React from 'react';` (useful in tests) |

### Basic Methods

| Trigger | Content |
| ---: | --- |
| `clg` | `console.log()` |

### React Components

| Trigger | Content |
| ---: | --- |
| `rcc` | Class component skeleton |
| `rccp` | Class component skeleton with prop types after the class |
| `rfc` | Function component skeleton |
| `rfcp` | Function component with prop types skeleton |
| `est` | Empty state object |
| `cdm` | `componentDidMount` method |
| `scu` | `shouldComponentUpdate` method |
| `cdu` | `componentDidUpdate` method |
| `cwu` | `componentWillUnmount` method |
| `gsb` | `getSnapshotBeforeUpdate` method |
| `gds` | `static getDerivedStateFromProps` method |
| `cdc` | `componentDidCatch` method |
| `sst` | `this.setState` with object as parameter |
| `ssf` | `this.setState` with function as parameter |
| `props` | `this.props` |
| `state` | `this.state` |
| `bnd` | Binds `this` to a method inside the constructor |
| `useState` | `useState` block |
| `useEffect` | `useEffect` block |
| `useContext` | `useContext` block |

### React Native Components

| Trigger | Content |
| ---: | --- |
| `rncc` | React Native class component skeleton |
| `rnfc` | React Native function component skeleton |

### Jest

| Trigger | Content |
| ---: | --- |
| `describe` | `describe` block |
| `test` | `test` block |
| `it` | `it` block |

### PropTypes

| Trigger | Content |
| ---: | --- |
| `pta` | `PropTypes.array` |
| `ptar` | `PropTypes.array.isRequired` |
| `pto` | `PropTypes.object` |
| `ptor` | `PropTypes.object.isRequired` |
| `ptb` | `PropTypes.bool` |
| `ptbr` | `PropTypes.bool.isRequired` |
| `ptf` | `PropTypes.func` |
| `ptfr` | `PropTypes.func.isRequired` |
| `ptn` | `PropTypes.number` |
| `ptnr` | `PropTypes.number.isRequired` |
| `pts` | `PropTypes.string` |
| `ptsr` | `PropTypes.string.isRequired` |
| `ptnd` | `PropTypes.node` |
| `ptndr` | `PropTypes.node.isRequired` |
| `ptel` | `PropTypes.element` |
| `ptelr` | `PropTypes.element.isRequired` |
| `pti` | `PropTypes.instanceOf(ClassName)` |
| `ptir` | `PropTypes.instanceOf(ClassName).isRequired` |
| `pte` | `PropTypes.oneOf([...])` |
| `pter` | `PropTypes.oneOf([...]).isRequired` |
| `ptet` | `PropTypes.oneOfType([...])` |
| `ptetr` | `PropTypes.oneOfType([...]).isRequired` |
| `ptao` | `PropTypes.arrayOf(PropTypes.number)` |
| `ptaor` | `PropTypes.arrayOf(PropTypes.number).isRequired` |
| `ptoo` | `PropTypes.objectOf(PropTypes.number)` |
| `ptoor` | `PropTypes.objectOf(PropTypes.number).isRequired` |
| `ptsh` | `PropTypes.shape({...})` |
| `ptshr` | `PropTypes.shape({...}).isRequired` |

<details>
<summary>Full Expansions</summary>

#### `imp` — Import Package

```js
import name from 'module';
```

#### `imd` — Import Destructured

```js
import { | } from 'module';
```

#### `imr` — Import React

```js
import React from 'react';
```

#### `ipt` — Import PropTypes

```js
import PropTypes from 'prop-types';
```

#### `clg` — Console Log

```js
console.log(|);
```

#### `rcc` — Class Component

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

#### `rccp` — Class Component with PropTypes

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

#### `rfc` — Function Component

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

#### `rfcp` — Function Component with PropTypes

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

#### `est` — Empty State

```js
this.state = {
  |
};
```

#### `cdm` — componentDidMount

```js
componentDidMount() {
  |
}
```

#### `scu` — shouldComponentUpdate

```js
shouldComponentUpdate(nextProps, nextState) {
  |
}
```

#### `cdu` — componentDidUpdate

```js
componentDidUpdate(prevProps, prevState) {
  |
}
```

#### `cwu` — componentWillUnmount

```js
componentWillUnmount() {
  |
}
```

#### `gsb` — getSnapshotBeforeUpdate

```js
getSnapshotBeforeUpdate(prevProps, prevState) {
  |
}
```

#### `gds` — getDerivedStateFromProps

```js
static getDerivedStateFromProps(nextProps, prevState) {
  |
}
```

#### `cdc` — componentDidCatch

```js
componentDidCatch(error, info) {
  |
}
```

#### `sst` — setState with Object

```js
this.setState(|)
```

#### `ssf` — setState with Function

```js
this.setState((state, props) => { return { | }});
```

#### `props` — this.props

```js
this.props.|
```

#### `state` — this.state

```js
this.state.|
```

#### `bnd` — Bind Method in Constructor

```js
this.| = this.|.bind(this);
```

#### `useState`

```js
const [state, setState] = useState(|);
```

#### `useEffect`

```js
useEffect(() => {
  |
  return () => {

  };
}, []);
```

#### `useContext`

```js
const context = useContext(|);
```

#### `rncc` — React Native Class Component

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

#### `rnfc` — React Native Function Component

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

#### `describe`

```js
describe('|', () => {

});
```

#### `test`

```js
test('|', () => {

});
```

#### `it`

```js
it('|', () => {

});
```

</details>
