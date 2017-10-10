// this is a test file

class Greeter{
    saySomething(messageL string = 'whats up'){
        return message + ' something';
    }
}

var greeter = new Greeter();
greeter.saySomething('hello');