Equation Element
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Generate an HTML string for displaying an SVG equation in a Github Markdown file.


## Installation

``` bash
$ npm install github-markdown-equation-element
```


## Usage

``` javascript
var createElement = require( 'github-markdown-equation-element' );
```

#### createElement( [options] )

Generate an HTML `string` for displaying an SVG equation in a Github Markdown file.

``` javascript
var html = createElement();
// returns '<div class="equation" align="center" data-raw-text="" data-equation="">\n\t<img src="" alt="">\n\t<br>\n</div>'
```

The `function` accepts the following `options`:
*	__className__: element class name. Default: `'equation'`.
*	__align__: element alignment. Default: `'center'`.
*	__equation__: raw equation text.
*	__label__: equation label.
*	__src__: image source URL.
*	__alt__: alternative image text.

Each `option` corresponds an HTML attribute. For example, to set the image source URL, set the `src` option.

``` javascript
var opts = {
	'src': 'https://cdn.rawgit.com/math-io/gamma/master/docs/img/eqn.svg'
};

var html = createElement();
// returns '<div class="equation" align="center" data-raw-text="" data-equation="">\n\t<img src="https://cdn.rawgit.com/math-io/gamma/master/docs/img/eqn1.svg" alt="">\n\t<br>\n</div>'
```

To include a raw equation [TeX][tex] or [LaTeX][latex] `string` in the element, set the `equation` option.

``` javascript
var opts = {
	'equation': '\Gamma ( n ) = (n-1)!',
	'src': 'https://cdn.rawgit.com/math-io/gamma/master/docs/img/eqn.svg'
};

var html = createElement();
// returns '<div class="equation" align="center" data-raw-text="\Gamma ( n ) = (n-1)!" data-equation="">\n\t<img src="https://cdn.rawgit.com/math-io/gamma/master/docs/img/eqn1.svg" alt="">\n\t<br>\n</div>'
```


## Examples

``` javascript
var createElement = require( 'github-markdown-equation-element' );

var opts = {
	'className': 'eqn',
	'align': 'left',
	'equation': '\\operatorname{erf}(x) = \\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}\\,\\mathrm dt',
	'label': 'eq:erf',
	'src': 'https://cdn.rawgit.com/math-io/erf/master/img/docs/eqn.svg',
	'alt': 'Error function.'
};

var html = createElement( opts );

console.log( html );
// returns <string>
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g github-markdown-equation-element
```


### Usage

``` bash
Usage: gheqn [options]

Options:

  -h,  --help               Print this message.
  -V,  --version            Print the package version.
       --class name         Element class name. Default: equation.
       --align alignment    Element alignment. Default: center.
       --equation text      Raw equation text.
       --label label        Equation label.
       --src url            Image source URL.
       --alt text           Alternative image text.
```


### Examples

``` bash
$ gheqn --equation '\Gamma ( n ) = (n-1)!' --src 'https://cdn.rawgit.com/math-io/gamma/master/docs/img/eqn1.svg'
# => <div class="equation" align="center" data-raw-text="\Gamma ( n ) = (n-1)!" data-equation="">\n\t<img src="https://cdn.rawgit.com/math-io/gamma/master/docs/img/eqn1.svg" alt="">\n\t<br>\n</div>
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/github-markdown-equation-element.svg
[npm-url]: https://npmjs.org/package/github-markdown-equation-element

[build-image]: http://img.shields.io/travis/kgryte/github-markdown-equation-element/master.svg
[build-url]: https://travis-ci.org/kgryte/github-markdown-equation-element

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/github-markdown-equation-element/master.svg
[coverage-url]: https://codecov.io/github/kgryte/github-markdown-equation-element?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/github-markdown-equation-element.svg
[dependencies-url]: https://david-dm.org/kgryte/github-markdown-equation-element

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/github-markdown-equation-element.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/github-markdown-equation-element

[github-issues-image]: http://img.shields.io/github/issues/kgryte/github-markdown-equation-element.svg
[github-issues-url]: https://github.com/kgryte/github-markdown-equation-element/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[tex]: https://en.wikipedia.org/wiki/TeX
[latex]: https://en.wikipedia.org/wiki/LaTeX
