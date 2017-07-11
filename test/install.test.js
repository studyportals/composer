"use strict";

const chai = require('chai');
const composer = require('./../index');
const rimraf = require('@studyportals/product-deploy/lib/rimraf');

const CWD = `./testcases/install`;

const deleteVendorFolder = function(){
	return rimraf(`${CWD}/vendor`);
};

before(deleteVendorFolder);

it('It should install composer dependencies', () =>{

	return composer.install({
		cwd: CWD
	});
}).timeout(20000);

after(deleteVendorFolder);