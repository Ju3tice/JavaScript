age = 45;
name = "One two three four";

console.log(name + "1s" + "a" + age + "years old" + "man");
console.log(`${name} is a ${age} years old man`);

console.log("this isn't an \\ apple");
console.log('He Said\' "shut up"');

console.log(name.length);
console.log(name[name.length - 2]);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

name = name.replace("school", "Church");
console.log(name);

let splt = name.split(" ");
console.log(splt);

console.log(name.charAt(4));

name = name.slice(7, 13);
console.log(name);
