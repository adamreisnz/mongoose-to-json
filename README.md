# meanie-mongoose-to-json

[![npm version](https://img.shields.io/npm/v/meanie-mongoose-to-json.svg)](https://www.npmjs.com/package/meanie-mongoose-to-json)
[![node dependencies](https://david-dm.org/meanie/mongoose-to-json.svg)](https://david-dm.org/meanie/mongoose-to-json)
[![github issues](https://img.shields.io/github/issues/meanie/mongoose-to-json.svg)](https://github.com/meanie/mongoose-to-json/issues)
[![codacy](https://img.shields.io/codacy/400e8324a71d4410b9dc3980b5f8cdea.svg)](https://www.codacy.com/app/meanie/mongoose-to-json)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A simple plugin for Mongoose to normalize JSON output, for use with [Meanie Express Seed](https://github.com/meanie/express-seed) projects

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `npm`.

```shell
npm install meanie-mongoose-to-json --save
```

## Usage

As a global plugin for all Mongoose schema's:

```js
let mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));
```

*NOTE: as of Mongoose 4.5.4 this does not work for sub schema's yet, see [ #4271](https://github.com/Automattic/mongoose/issues/4271).*

For a specific (sub) schema:

```js
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let MySchema = new Schema({});
MySchema.plugin(require('meanie-mongoose-to-json'));
```

This plugin will normalize JSON output for client side applications from:

```json
{
  "_id": "400e8324a71d4410b9dc3980b5f8cdea",
  "__v": 2,
  "name": "Item A"
}
```

To a simpler:

```json
{
  "id": "400e8324a71d4410b9dc3980b5f8cdea",
  "name": "Item A"
}
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-mongoose-to-json issue tracker](https://github.com/meanie/mongoose-to-json/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Credits

* Meanie logo designed by [Quan-Lin Sim](mailto:quan.lin.sim+meanie@gmail.com)

## License
(MIT License)

Copyright 2016, [Adam Buczynski](http://adambuczynski.com)
