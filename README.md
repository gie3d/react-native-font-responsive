# react-native-font-responsive

A simple responsive font size which depends on screen size.

## Installation

```sh
yarn add react-native-font-responsive
```

## Usage

```js
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import FontResponsive from 'react-native-font-responsive';

export default function App() {
  return (
    <View>
      <Text style={{ fontSize: FontResponsive(20) }}>Hello World</Text>
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
