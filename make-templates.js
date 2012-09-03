#!/usr/bin/env node

var fs = require('fs');
var hogan = require('hogan.js');
var uglifyjs = require('uglify-js');
var parser = uglifyjs.parser;
var uglify = uglifyjs.uglify;

fs.readdir('public/templates', function(e, files){
	if (e) throw e;

	var code = '(function(t){'
		+ 'TEMPLATES={';

	files.forEach(function(file){
		if (/\.mustache$/i.test(file)){
			var mustache = fs.readFileSync('public/templates/' + file, 'ascii');
			var key = file.match(/^([^.]+)\./i)[1];
			// Clean up some spaces
			mustache = mustache.replace(/[\r\n\t]+/g, '');
			code += "'" + key + "':new t({code:" + hogan.compile(mustache, {asString: true}) + ",partials:{},subs:{}}),";
		}
	});

	code += '}'
		+ '})(Hogan.Template);';

	// Uglify to further shrink the file size
/*
	var ast = parser.parse(code);
	ast = uglify.ast_mangle(ast);
	ast = uglify.ast_squeeze(ast, {
	});
	var finalCode = uglify.gen_code(ast);
*/
	
	finalCode = code;
	
	fs.writeFile('public/templates.js', finalCode, function(){
		console.log('public/templates.js created.');
	});
});