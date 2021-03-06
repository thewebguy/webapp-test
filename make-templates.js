#!/usr/bin/env node

var fs = require('fs');
var hogan = require('hogan.js');
var uglifyjs = require('uglify-js');
var parser = uglifyjs.parser;
var uglify = uglifyjs.uglify;

fs.readdir('public/templates/mustache', function(e, files){
	if (e) throw e;

	var code = '(function(t){'
		+ 'TEMPLATES={';

	files.forEach(function(file){
		if (/\.html$/i.test(file)){
			var mustache = fs.readFileSync('public/templates/mustache/' + file, 'ascii');
			var key = file.match(/^([^.]+)\./i)[1];
			// Clean up some spaces
			mustache = mustache.replace(/[\r\n\t]+/g, '');
			code += "'" + key + "':new t(" + hogan.compile(mustache, {asString: true}) + "),";
		}
	});

	code += '}'
		+ '})(Hogan.Template);';

	// Uglify to further shrink the file size
	var ast = parser.parse(code);
	ast = uglify.ast_mangle(ast);
	ast = uglify.ast_squeeze(ast, {
		make_seqs: false // it somehow f'ed up the sequence for this piece of code
	});
	var finalCode = uglify.gen_code(ast);
	finalCode = code;
	
	
	fs.writeFile('public/templates.js', finalCode, function(){
		console.log('public/templates.js created.');
	});
});