# @studyportals/composer@v1.0.1

<a href="https://www.npmjs.com/package/@studyportals/composer" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/v/@studyportals/composer.svg?style=flat" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/@studyportals/composer" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/l/@studyportals/composer.svg?style=flat" alt="NPM license" /></a>
<a href="https://www.npmjs.com/package/@studyportals/composer" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/dm/@studyportals/composer.svg?style=flat" alt="NPM downloads" /></a>
<a href="https://david-dm.org/studyportals/composer" title="View this project on David" target="_blank"><img src="https://img.shields.io/david/studyportals/composer.svg?style=flat" alt="Dependencies" /></a>
<a href="https://david-dm.org/studyportals/composer" title="View this project on David" target="_blank"><img src="https://img.shields.io/david/dev/studyportals/composer.svg?style=flat" alt="Development Dependencies" /></a>

Handle composer dependencies

## Modules

<dl>
<dt><a href="#module_@studyportals/composer">@studyportals/composer</a></dt>
<dd></dd>
<dt><a href="#module_lib/install">lib/install</a></dt>
<dd></dd>
</dl>

<a name="module_@studyportals/composer"></a>

## @studyportals/composer
<a name="module_@studyportals/composer.install"></a>

### @studyportals/composer.install
**Kind**: static constant of [<code>@studyportals/composer</code>](#module_@studyportals/composer)  
**See**: [lib/install](#module_lib/install)  
<a name="module_lib/install"></a>

## lib/install
<a name="module_lib/install.install"></a>

### lib/install.install([opts]) ⇒ <code>Promise</code>
Composer dependencies will be installed only if a composer.json exists.

The installation will complete, without applying any changes, when no
`composer.json` file is found.

**Kind**: static method of [<code>lib/install</code>](#module_lib/install)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [opts] | <code>Object</code> |  |  |
| [opts.cwd] | <code>string</code> | <code>&quot;process.cwd()&quot;</code> | Directory in which to execute composer install. |


_README.md generated at: Tue Jul 11 2017 13:13:07 GMT+0800 (China Standard Time)_