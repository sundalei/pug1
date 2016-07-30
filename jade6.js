var pug = require('pug');
var fs = require('fs');

fs.readFile('test6.pug', 'utf8', function (err, data) {
    var jadeTemplate = data;
    var user = {name : 'John'};
    var fn = pug.compile(jadeTemplate, {pretty: true});
    var htmlOutput = fn({
        user : user
    });
    console.log(htmlOutput);
});