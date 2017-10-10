// this is a test file
var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (messageL) {
        if (messageL === void 0) { messageL = string = 'whats up'; }
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
//# sourceMappingURL=magic.js.map