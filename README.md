# gl-react-sepia ![](https://img.shields.io/npm/v/gl-react-sepia.svg) ![](https://img.shields.io/badge/gl--react->= 2.1-05F561.svg) ![](https://img.shields.io/badge/gl--react-dom%20%7C%20native-f90.svg)

## Props

- `children` **(required)**: the content to negate.
- `sepia`: optionally the intensity of the effect. 1.0 is normal. higher than 1 will add sepia.

## Usage Examples

```js
var Sepia = require("gl-react-sepia").Negative;
// or
import {Sepia} from "gl-react-sepia";
```

```html
<Sepia>...</Sepia>
```

```html
<Sepia sepia={1.2}>...</Sepia>
```
