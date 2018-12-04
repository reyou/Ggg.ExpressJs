// https://www.npmjs.com/package/debug
var debug = require('debug')('http');
const createDebug = require('debug');
var error = debug('app:error');
var http = require('http');
var name = 'My App';
// ============================================================================
debug('GggExpressCore loaded in %s', name);
createDebug.formatters.h = (v) => {
  return v.toString('hex')
}
// ============================================================================
// …elsewhere 
const debugFoo = createDebug('foo')
debugFoo('this is hex: %h', new Buffer('hello world'))
//   foo this is hex: 68656c6c6f20776f726c6421 +0ms 
// by default stderr is used 
// ============================================================================

// ============================================================================
console.log("GggMessage: GggDebuggingSamples finished.");