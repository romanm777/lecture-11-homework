// Write your own analogue of setInterval() using setTimeout() function.
// It should work in the same way as original setInterval.

function mySetInterval(func, duration) {
  // if there is first mySetInterval() call - creates
  // an id array
  if(!mySetInterval.hasOwnProperty("ids"))
    mySetInterval.ids = [];

  // the service object
  var obj = {};

  // an unique identifier (from 1 to 1000) creation
  // and saving to the service object
  obj.id = Math.floor((Math.random() * 1000) + 1);

  // converts arguments object to array object
  var optArgs = Array.prototype.slice.call(arguments, 2);

  // first timeout creation (saved in the service object)
  obj.timeoutId = setTimeout(function myTimeoutFunc() {
    // launches callback with its arguments
    func.apply(null, optArgs);

    // next timeout creation (resaved in the service object)
    obj.timeoutId = setTimeout(myTimeoutFunc, duration);
  }, duration);

  // and saving the service object to the function property
  mySetInterval.ids.push(obj);

  return obj.id;
}

function myClearInterval(id) {
  // checks if mySetInterval() has that property
  if(!mySetInterval.hasOwnProperty("ids"))
    return;

  // loop for search a service object with proper interval data
  for(var i = 0; i < mySetInterval.ids.length; ++i) {
    var interval = mySetInterval.ids[i];

    // if proper interval id was found
    if(interval.id === id) {
      // stops myClearInterval() loop
      clearTimeout(interval.timeoutId);

      // erases a stopped interval id from the id array
      mySetInterval.ids.splice(i, 1);

      // ends the loop
      break;
    }
  }
}
