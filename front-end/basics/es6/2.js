// spread operator

var arr = ['a', 'b', 'c']
console.log(arr)
arr.push('d')
console.log(arr);

var person = {name: 'Ravi'}
person.age = 23;
console.log(person)

// spread create a copy/clone of the existing objects

var newArr = [...arr, 'e', 'f']
console.log(newArr);

var newPerson = {...person, id: 2};
console.log(newPerson)