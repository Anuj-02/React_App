// reverser string

const reverString = (string_1) => {
    let str_1 = string_1.split("").reverse().join("");
    return str_1;

}

console.log(reverString("hello"));

