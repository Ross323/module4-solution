(function (window) {
  // Step 1: Define the array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Step 2: Create the helloSpeaker object
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log("Hello " + name);
  };
  // Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

  // Step 3: Create the byeSpeaker object
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
    console.log("Goodbye " + name);
  };
  // Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

  // Step 4: Create johnGreeter as given in the base code
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  };
  window.johnGreeter = johnGreeter;

  // Step 5: Loop over the names array and use appropriate speaker object
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})(window);
