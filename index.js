
function lowerCaseDrivers(arr) {
    let new_arr = arr.map(name => name.toLowerCase());
    return new_arr;
}

function createObjectPairs(string) {
    const nameArr = string.split(" ");
    const pair = Object.assign({}, {firstName: nameArr[0]}, {lastName: nameArr[1]});
    return pair;
}

function nameToAttributes(arr) {
    let new_arr = arr.map(name => createObjectPairs(name));
    return new_arr;
}

function attributesToPhrase(arr) {
    let new_arr = arr.map(person => `${person.name} is from ${person.hometown}`);
    return new_arr;
}

