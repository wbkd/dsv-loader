# Webpack dsv loader

A Webpack plugin for loading dsv files (for example .csv).

## Installation

Install via npm:

```
npm install --save dsv-loader
```

## Usage

You can require dsv data like this:

``` javascript
var data = require('dsv!./data.csv');
// => returns data.csv content as json parsed object
```

The loader will translate the ```data.csv``` file into a JSON Object.

#### Usage with webpack.config

To require dsv files like this: ```require('data.csv')``` , you can add the dsv-loader to your webpack config:

``` javascript
module : {
  loaders : [
    { test: /\.csv$/, loader: 'dsv-loader' } //will load all .csv files with dsv-loader by default
  ]
}
```

#### Options

**delimiter**

Tells the loader which delimiter is used to seperate the data. *Default: ','*

Examples:

```javascript
var data = require('dsv?delimiter=;!./data.csv'); //load data seperated by semicolon

var data = require('dsv?delimiter=x!./data.csv'); //load data seperated by an 'x'
```

## Example
data.csv

| Hello | World |
| ----- | ----- |
| 42    | "fish"|
| foo   | bar   |


``` javascript
var data = require(data.csv) //[{"Hello": "42", "World": "fish"}, {"Hello": "foo", "World": "bar"}, columns: ["Hello", "World"]]
```

## Credits

* Inspired by webpack's [json-loader](https://github.com/webpack/json-loader)
* DSV parsing done with [dsv](https://github.com/mbostock/dsv) by Mike Bostock
