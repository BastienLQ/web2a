# web2a [![Build Status](https://secure.travis-ci.org/BastienLQ/web2a.svg?branch=master)](http://travis-ci.org/BastienLQ/web2a)

A JS implementation of the [Webster's Second Internations appendix english wordlist](http://savannah.gnu.org/projects/miscfiles/).

# Installation

    npm install web2a

# API

Get a random entry from the list:

```javascript
var web2a = require('web2a');
console.log(web2a.random(dash, toLowerCase, dict));
```

`dash` and `toLowerCase` are booleans. `dict` can be an array or a path to a dictionary.

# License
See LICENSE.
