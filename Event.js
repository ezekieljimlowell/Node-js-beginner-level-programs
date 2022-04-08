const EventEmitter = require("events");

const emitter = new EventEmitter();

//register a listener
emitter.on("message", (arg, arg1) => console.log("Listener", arg, arg1));

//Raise an event
emitter.emit("message", {id: 23123, url: "https://www.google.com"}, "Hi");