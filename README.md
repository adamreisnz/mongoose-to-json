# @reis/mongoose-to-json

[![npm version](https://img.shields.io/npm/v/@reis/mongoose-to-json.svg)](https://www.npmjs.com/package/@reis/mongoose-to-json)
[![github issues](https://img.shields.io/github/issues/adamreisnz/mongoose-to-json.svg)](https://github.com/adamreisnz/mongoose-to-json/issues)


A plugin for Mongoose to normalize JSON output

## Installation

You can install this package using `yarn` or `npm`.

```shell
#yarn
yarn add @reis/mongoose-to-json

#npm
npm install @reis/mongoose-to-json --save
```

## Usage

Setup as a global plugin for all Mongoose schema's:

```js
import mongoose from 'mongoose'
import {toJson} from '@reis/mongoose-to-json'

//Global plugin
mongoose.plugin(toJson)
```

Or for a specific (sub) schema:

```js
import mongoose from 'mongoose'
import {toJson} from '@reis/mongoose-to-json'
const {Schema} = mongoose

//Define schema
const MySchema = new Schema(/* ... */})

//Apply plugin
MySchema.plugin(toJson)
```

This plugin will normalize JSON output for client side applications from:

```json
{
  "_id": "400e8324a71d4410b9dc3980b5f8cdea",
  "__v": 2,
  "name": "Item A"
}
```

To a cleaner:

```json
{
  "id": "400e8324a71d4410b9dc3980b5f8cdea",
  "name": "Item A"
}
```

You can also remove private paths from the JSON:

```js
import mongoose from 'mongoose'
import {toJson} from '@reis/mongoose-to-json'
const {Schema} = mongoose

const schema = new Schema({
  email: {type: String},
  password: {type: String, private: true},
})

schema.plugin(toJson)

const User = mongoose.model('users', schema)
const user = new User({email: 'test@test.com', password: 'test'})

console.log(user.toJSON())
```

This will output:

```json
{
  "id": "400e8324a71d4410b9dc3980b5f8cdea",
  "email": "test@test.com"
}
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [mongoose-to-json issue tracker](https://github.com/adamreisnz/mongoose-to-json/issues).

## License

(MIT License)

Copyright 2016-2023, Adam Reis
