"use strict";

const chai = require('chai');
const composer = require('./../index');
const rimraf = require('rimraf');

const CWD = `./testcases/install`;

const deleteVendorFolder = function(){

	this.timeout(5000);

	return new Promise((resolve, reject) =>{
		rimraf(`${CWD}/vendor`, function(err){
			(err) ? reject(err) : resolve();
		});
	});
};

before(deleteVendorFolder);

it('It should install composer dependencies', () =>{

	return composer.install({
		cwd: CWD
	});
}).timeout(20000);

after(deleteVendorFolder);