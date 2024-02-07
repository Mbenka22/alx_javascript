const welcomeMessage = function(fullName) {
    return function() {
        alert("Welcome " + fullName);
    };
};

const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");

// samples
guillaume();
alex();
fred();
