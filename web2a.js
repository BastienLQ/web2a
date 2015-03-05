exports.random = function(dash, toLowerCase, dict) {
	if (typeof dict !== 'string' && typeof dict !== 'object') dict = __dirname+'/web2a.json';
	if (typeof dash !== 'boolean') dash = false;
	if (typeof toLowerCase !== 'boolean') toLowerCase = false;

	var web2a = (typeof dict === "object") ? dict : require('./web2a.json');
	var output = web2a[Math.floor(Math.random()*web2a.length)];

	if (dash === true) output = output.replace(/ /g, "-");
	if (toLowerCase === true) output = output.toLowerCase();
	return output;
}

exports.generate = function(cb) {
	var fs = require('fs');

	fs.readFile(__dirname+'/web2a', {encoding: 'utf-8'}, function(err, data){
		if (err) return cb(err);
		var web2a = data.substring(0, data.lastIndexOf("\n")).split("\n");

		fs.writeFile(__dirname+'/web2a.json', JSON.stringify(web2a, null, '  '), function (err) {
			if (err) return cb(err);
			return cb(null);
		});
	});

}
