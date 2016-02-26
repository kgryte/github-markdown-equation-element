'use strict';

// MODULES //

var tape = require( 'tape' );
var render = require( './../lib/render.js' );


// SETUP //

function setup() {
	return {
		'className': 'equation',
		'align': 'center',
		'equation': 'y = mx + b',
		'label': 'eq:line',
		'src': 'https://cdn.rawgit.com/math-io/repo/branch/docs/img/eqn.svg',
		'alt': 'Equation for a line.'
	};
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof render, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a string', function test( t ) {
	var str = render( setup() );
	t.equal( typeof str, 'string', 'returns a string' );
	t.end();
});

tape( 'the function returns an HTML string for rendering an SVG equation in Github Markdown', function test( t ) {
	var expected;
	var actual;

	expected = '<div class="equation" align="center" data-raw-text="y = mx + b" data-equation="eq:line">\n\t<img src="https://cdn.rawgit.com/math-io/repo/branch/docs/img/eqn.svg" alt="Equation for a line.">\n\t<br>\n</div>';
	actual = render( setup() );

	t.equal( actual, expected, 'returns a HTML string' );
	t.end();
});
