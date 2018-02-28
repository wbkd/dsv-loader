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


## Example
data.csv

| Hello | World |
| ----- | ----- |
| 42    | "fish"|
| foo   | bar   |


``` javascript
const data = require(data.csv) //[{"Hello": "42", "World": "fish"}, {"Hello": "foo", "World": "bar"}, columns: ["Hello", "World"]]
```


#### Options

**delimiter**

Tells the loader which delimiter is used to seperate the data. *Default: ','*

Examples:

``` javascript
const data = require('dsv-loader?delimiter=;!./data.csv'); //load data seperated by semicolon

const data = require('dsv-loader?delimiter=x!./data.csv'); //load data seperated by an 'x'
```

**rows**

Tells the loader if it should use the first row as columns row. *Default: Yes*

Examples:

``` javascript
const data = require('dsv-loader!./data.csv'); //[{"Hello": "42", "World": "fish"}, {"Hello": "foo", "World": "bar"}, columns: ["Hello", "World"]]

const data = require('dsv-loader?rows!./data.csv'); //[{"Hello": "World"}, { "42": "fish"},{ "foo": "bar"}
```


## Credits

* Inspired by webpack's [json-loader](https://github.com/webpack/json-loader)
* DSV parsing done with [dsv](https://github.com/mbostock/dsv) by Mike Bostock
