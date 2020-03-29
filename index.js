// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    let mappedDrivers = []
    drivers.map(function(driver) {
        mappedDrivers.push(driver.toLowerCase());
    });
    return mappedDrivers
}

function createObjectPairs(string) {
    const nameArr = string.split(" ");
    const pair = Object.assign({}, { firstName: nameArr[0] }, { lastName: nameArr[1] });
    return pair;
}

function nameToAttributes(arr) {
    let new_arr = arr.map(name => createObjectPairs(name));
    return new_arr;
}

function attributesToPhrase(drivers) {
    let mappedDrivers = []
    drivers.map(function(driver) {
        mappedDrivers.push(`${driver.name} is from ${driver.hometown}`);
    });
    return mappedDrivers
}