# drop-down

Installs styling and javascript for a drop-down menu opened via click.

## Install

```
$ npm install @bobericksonjr89/drop-down
```

## Instructions

- You'll need to access the style sheet, so make sure style-loader and css-loader are installed, and then add to the webpack.config.js file:

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

- import dropDown function and stylesheet, and call it in your javascript

```
import { dropDown } from "@bobericksonjr89/drop-down/dropdown.js";
import "@bobericksonjr89/drop-down/dropdown.css";

dropDown();

```

- Create a continer div with class "drop-down"
- Create a button element for your menu with class "drop-down\_\_main"
- Unordered list gets class "drop-down\_\_submenu"
- List items get class "drop-down\_\_item"
- Submenu buttons get class "drop-down\_\_link"

```
<div class="drop-down">
      <button class="drop-down__main">Menu</button>
      <ul class="drop-down__submenu">
        <li class="drop-down__item">
          <button class="drop-down__link">Account</button>
        </li>
        <li class="drop-down__item">
          <button class="drop-down__link">Messages</button>
        </li>
        <li class="drop-down__item">
          <button class="drop-down__link">Feed</button>
        </li>
      </ul>
    </div>
```
