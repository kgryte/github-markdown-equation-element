'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an `options` argument which is not an object, the function returns a type error', function test( t ){
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, values[i] );
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided a `className` option which is not an string primitive, the function returns a type error', function test( t ){
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'className': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided an `align` option which is not an string primitive, the function returns a type error', function test( t ){
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'align': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided an `equation` option which is not an string primitive, the function returns a type error', function test( t ){
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'equation': values[ i ]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided a `label` option which is not an string primitive, the function returns a type error', function test( t ){
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'label': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided a `src` option which is not a valid URI, the function returns a type error', function test( t ){
	var values;
	var err;
	var i;

	values = [
		'5',
		'beep/boop',
		'beep.com',
		'dafjaldkjfas:/dafdkaj\\dakjfd',
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'src': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'if provided an `alt` option which is not an string primitive, the function returns a type error', function test( t ){
	var values;
	var err;
	var i;

	values = [
		5,
		NaN,
		null,
		true,
		undefined,
		[],
		{},
		function(){}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, {
			'alt': values[i]
		});
		t.ok( err instanceof TypeError, 'returns a type error when provided ' + values[i] );
	}
	t.end();
});

tape( 'the function returns `null` if all options are valid', function test( t ) {
	var opts;
	var err;
	var obj;

	obj = {};

	opts = {
		'className': 'eqn',
		'align': 'left',
		'equation': 'y=x',
		'label': 'eq',
		'src': 'https://cdn.rawgit.com/math-io/erf/master/docs/img/eqn.svg',
		'alt': 'Error function'
	};

	err = validate( obj, opts );

	t.equal( err, null, 'returns null' );

	t.deepEqual( obj, opts, 'updates destination object' );
	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var opts;
	var err;

	opts = {};
	err = validate( opts, {
		'beep': 'boop',
		'a': {'b':'c'}
	});
	t.equal( err, null, 'returns null' );
	t.deepEqual( opts, {}, 'destination object is empty' );
	t.end();
});
