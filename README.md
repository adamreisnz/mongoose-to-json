# meanie-mongoose-to-json

[![npm version](https://img.shields.io/npm/v/meanie-mongoose-to-json.svg)](https://www.npmjs.com/package/meanie-mongoose-to-json)
[![node dependencies](https://david-dm.org/meanie/mongoose-to-json.svg)](https://david-dm.org/meanie/mongoose-to-json)
[![github issues](https://img.shields.io/github/issues/meanie/mongoose-to-json.svg)](https://github.com/meanie/mongoose-to-json/issues)
[![codacy](https://img.shields.io/codacy/400e8324a71d4410b9dc3980b5f8cdea.svg)](https://www.codacy.com/app/meanie/mongoose-to-json)


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
const mongoose = require('mongoose');
mongoose.plugin(require('meanie-mongoose-to-json'));
```

*NOTE: as of Mongoose 4.5.4 this does not work for sub schema's yet, see [ #4271](https://github.com/Automattic/mongoose/issues/4271).*

For a specific (sub) schema:

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MySchema = new Schema({});
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

From version 1.1.0 onwards, this plugin now also removes private paths from the JSON, e.g.:

```js
const mongoose = require('mongoose');
const toJson = require('meanie-mongoose-to-json');

const schema = new mongoose.Schema({
  email: {type: String},
  password: {type: String, private: true},
});

schema.plugin(toJson);

const User = mongoose.model('users', schema);
const user = new User({email: 'test@test.com', password: 'test'});

console.log(user.toJSON());
```

This will output:

```json
{
  "id": "400e8324a71d4410b9dc3980b5f8cdea",
  "email": "test@test.com"
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

Copyright 2016-2017, [Adam Reis](http://adam.reis.nz)
