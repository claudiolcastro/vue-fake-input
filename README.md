Vue Fake Input
=============

[![License](https://claudiolcastro.github.io/img/vue-fake-input/mit.svg)](https://www.npmjs.com/package/vue-fake-input)

Vue Fake input is a Vue.js based component to create custom inputs for individual characters.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Demos

Type one char per time

![Demo1](https://claudiolcastro.github.io/img/vue-fake-input/inputdemo2.gif)

or... Paste the entire value

![Demo2](https://claudiolcastro.github.io/img/vue-fake-input/inputdemo.gif)

### Installation

```
npm install vue-fake-input
```

or if you prefer yarn

```
yarn add vue-fake-input
```

## Usage

### Global

You may install Vue Fake Input globally:

``` js
import Vue from 'vue';
import VueFakeInput from 'vue-fake-input';

Vue.use(VueFakeInput);
```
This will make VueFakeInput available to all components within your Vue app.

### Local

Include VueFakeInput directly into your component using import:

``` js
import VueFakeInput from 'vue-fake-input';

export default {
  ...
  components: {
    VueFakeInput
  }
  ...
};
```

### Local - SSR mode

``` js
var VueFakeInput
if (process.browser) {
  VueFakeInput = require('vue-fake-input').default
}
export default {
  ...
  components: {
    VueFakeInput
  }
  ...
};
```


 #### In order to get the full value of the inputs, you have to add a `v-model` bind on
 #### vue-fake-input and link to any data attribute on your component.

### Example
```js
<vue-fake-input
  :length="5"
  :fontSize="40"
  inputColor="#31bce6"
  fontColor="#ffc107"
  :allowPaste="false"
  v-model="fullValue"
/>
...
export default {
  ...
  data() {
    return {
      fullValue: '',
    };
  }
  ...
```

Result:

![Demo3](https://claudiolcastro.github.io/img/vue-fake-input/inputdemo3.png)

### Configuration (props accepted)
| Property | Type    | Required | Default | Description |
|:---------|:--------|:---------|:--------|:------------|
| length | Number | Yes |     | Length of the input. How many characters it will support (the value is coverted to pixel) |
| fontSize | Number | No | 22 | Font size of the individual characters (the value is coverted to pixel) |
| inputColor | String | No | '#42b983' | Color of the border bottom wen the input is filled |
| fontColor | String | No | '#42b983' | Color of the individual Characters |
| allowPaste | Boolean | No | true | Allow the user to paste values into the input |
| onlyNumber | Boolean | No | false | Only allow number input |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
