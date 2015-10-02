# React Smartdate

> A react component for [smartdate](https://github.com/ivelum/smartdate).

## Install

```
npm install react-smartdate --save
```

## Usage

```js
var React = require("react");
var Smartdate = require("react-smartdate");

var d = new Date();

React.render(<Smartdate date={d} />, document.getElementById("myApp"));
```

You can pass mode (see smartdate documentation):

```js
var React = require("react");
var Smartdate = require("react-smartdate");

var d = new Date();

React.render(<Smartdate date={d} mode="datetime" />, document.getElementById("myApp"));
```

You can pass date in ISO format:

```js
var React = require("react");
var Smartdate = require("react-smartdate");

var d = "2015-10-09T17:30:12Z";

React.render(<Smartdate date={d} />, document.getElementById("myApp"));
```
