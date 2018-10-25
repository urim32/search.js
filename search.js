

var path = require('path'), fs=require('fs');

var currentWorkingDir = process.cwd();
var extension = process.argv[2];
var sub_string = process.argv[3];

function search(startPath, arr) {

	// find all files in base folder
	var files=fs.readdirSync(startPath);


	for(var i=0;i<files.length;i++){

		// get full file name
		var filename=path.join(startPath,files[i]);

		// get file info
		var stat = fs.lstatSync(filename);

		// if  file is a folder
		if (stat.isDirectory()){
            search(filename, arr);
        } 

    	// if is a file
		// 1. check extension 
		// 2. check substring 
		
        else if (filename.endsWith(extension) && filename.includes(sub_string)) {
			arr.push(filename);
        }
	}
	return arr
}


var res = search(currentWorkingDir, []);
//  print to screen

if (res.length == 0) {
	console.log('No file was found')
} else {
	for(var i=0;i<res.length;i++) {
		console.log(res[i]);
	}
}