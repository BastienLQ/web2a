var assert = require("assert"),
	web2a = require('./web2a.js');

var dict = [
	"A acid",
	"abacus major",
	"abacus pythagoricus",
	"A battery",
	"abbey counter",
	"abbey laird",
	"abbey lands",
	"abbey lubber",
	"abbot cloth",
	"Abbott papyrus",
	"abb wool",
	"A-b-c book"
];

describe('web2a.generate()', function(){
	it('should not return any error', function(){
		web2a.generate(function(err){
			assert.strictEqual(err, null);
		});
	});
});

describe('web2a.random()', function(){
	it('should return a string', function(){
		assert.strictEqual('string', typeof web2a.random(false, false, dict));
	})
});
