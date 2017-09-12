"use strict";

/**
 * @module lib/install
 */

const fs = require('fs');
const path = require('path');
const log = require('@studyportals/node-log');
const composer = require('gulp-composer');

/**
 * Composer dependencies will be installed only if a composer.json exists.
 *
 * The installation will complete, without applying any changes, when no
 * `composer.json` file is found.
 *
 * @param {Object} [opts]
 * @param {string} [opts.cwd=process.cwd()] Directory in which to execute
 * composer install.
 *
 * @static
 * @return {Promise}
 */
const install = (opts) =>{

	let defaults = {
		'cwd': process.cwd()
	};

	opts = Object.assign(defaults, opts);

	return new Promise((resolve, reject) => {

		const composerFile = path.resolve(opts.cwd, 'composer.json');
		if(!fs.existsSync(composerFile)){

			log.debug('No composer.json found, skipping composer.install');
			resolve();
			return;
		}

		const options = {
			'bin': `php "${path.resolve(__dirname, '..', 'bin', 'composer.phar')}"`,
			'working-dir': `"${opts.cwd}"`
		};

		composer('install --no-interaction', options)
			.on('error', reject)
			.on('end', resolve);
	});
};

module.exports = install;