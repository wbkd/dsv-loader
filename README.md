# Webpack dsv loader

A Webpack plugin for loading dsv files (for example .csv).

## Installation

Install via npm:

```
npm install --save-dev dsv-loader
```

## Usage

You can require dsv data like this:

``` javascript
const data = require('dsv-loader!./data.csv');
```

The loader will translate the ```data.csv``` file into a JSON Object.

#### Usage with webpack.config

To require dsv files like this: ```require('data.csv')``` , you can add the dsv-loader to your webpack config:

```javascript
module: {
  rules: [{
    test: /\.(c|d|t)sv$/, // load all .csv, .dsv, .tsv files with dsv-loader
    use: ['dsv-loader'] // or dsv-loader?delimiter=,
  }]
}
```

---

**Note**: Do not use both the `webpack.config` setup and the `dsv!` prefix to load DSV data, or it will be parsed twice. When loading anything other than CSV data, the `dsv!delimiter=x` option should be used and no modifications to the `webpack.config` file should be made.

#### Options

**delimiter**

Tells the loader which delimiter is used to seperate the data. *Default: ','*

Examples:

``` javascript
const data = require('dsv-loader?delimiter=;!./data.csv'); //load data seperated by semicolon

const data = require('dsv-loader?delimiter=x!./data.csv'); //load data seperated by an 'x'
```

## Example
data.csv

| Hello | World |
| ----- | ----- |
| 42    | "fish"|
| foo   | bar   |


``` javascript
const data = require(data.csv) //[{"Hello": "42", "World": "fish"}, {"Hello": "foo", "World": "bar"}, columns: ["Hello", "World"]]
```

## Credits

* Inspired by webpack's [json-loader](https://github.com/webpack/json-loader)
* DSV parsing done with [dsv](https://github.com/mbostock/dsv) by Mike Bostock
