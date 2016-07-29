var pug = require('pug');
var fs = require('fs');

fs.readFile('test5.pug', 'utf8', function (err, data) {
    var jadeTemplate = data;
    var fn = pug.compile(jadeTemplate, {pretty: true});
    var htmlOutput = fn({
        maintainer: {
            name: 'Sun Dalei',
            twitter: '@sundalei2011',
            blog: 'sundalei.com.cn'
        }
    });
    console.log(htmlOutput);
});