// Write your own polyfill for assign method.
// Invocation example:
//  var defaults = { width: 100, height: 100 };
//  var options = { width: 150 };
//  var configs = Object.assign({}, defaults, options); // -> {width: 150, height: 100}

function assign(obj) {
  // begins loop from 1, because the first argument is obj
  for(var i = 1; i < arguments.length; ++i) {
    var protoObj = arguments[i];

    // copies all of the properties
    for(var prop in protoObj) {
      obj[prop] = protoObj[prop];
    }
  }

  return obj;
}
