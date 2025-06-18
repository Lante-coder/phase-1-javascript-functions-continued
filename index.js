// code your solution here
// 1. saturdayFun function declaration with default parameter
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

// 2. mondayWork function expression with default parameter
const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

// 3. wrapAdjective function that returns a function for wrapping adjectives
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}