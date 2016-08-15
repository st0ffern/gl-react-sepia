# gl-react-sepia [![](https://img.shields.io/npm/v/gl-react-sepia.svg)](https://www.npmjs.com/package/gl-react-sepia) [![Travis](https://img.shields.io/travis/stoffern/gl-react-sepia.svg?maxAge=2592000)]() [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
## Props

- `children` **(required)**: the content to negate.
- `sepia`: optionally the intensity of the effect. 0 is normal. higher than 0 will add sepia.

## Usage Examples

```js
var Sepia = require("gl-react-sepia").Sepia;
// or
import {Sepia} from "gl-react-sepia";
```

```html
<Sepia>...</Sepia>
```

```html
<Sepia sepia={1.2}>...</Sepia>
```
