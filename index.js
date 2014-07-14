var Query = require('cf-query');
var fs = require('fs');

var q;

fs.readFile('./query.json',{encoding: 'utf8'}, function(err, data) {
	if (data) {
		q = new Query(JSON.parse(data));
		console.log(q);

		console.log(q.getCurrentRow());
	}

});

