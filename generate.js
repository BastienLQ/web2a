#!/usr/bin/env node

require('./web2a.js').generate(function(err){
	if (err) return console.log(err);
});
