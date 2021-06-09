# drop-down

Drop-down menu

## Install

```
$ npm install @bobericksonjr89/drop-down
```

## Instructions

- add CSS stylesheet

```
<link
      rel="stylesheet"
      href="/node_modules/@bobericksonjr89/drop-down/dropdown.css"
    />
```

- import dropBox function, and call it in your javascript

```
import { dropBox } from "./dropbox.js";

dropBox();

```

- Create a continer div with class "drop-down"
- Create a button element for your menu with class "drop-down\_\_main"
- Unordered list gets class "drop-down\_\_submenu"
- List items get class "drop-down\_\_item"
- Submenu buttons get class "drop-down\_\_link"

## Example

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
