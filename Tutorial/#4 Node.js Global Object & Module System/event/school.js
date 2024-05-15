const EventEmitter = require("events");

class School extends EventEmitter {
  school() {
    console.log("first period");

    setTimeout(() => {
      this.emit("event", {
        period: "second period",
        text: "thrid period",
      });
    }, 2000);
  }
}

module.exports = School;
