const obj1 = { 
    name: 'Thandi',
    age: '19',
    
}

console.log( "obj1", obj1);

const obj2 = obj1;

console.log("obj2", obj2)
obj2.name = 'Bendito'
console.log("obj2 edited", obj2) 
console.log( "obj1 edited", obj1);

const obj3 = {...obj2, age: 32};
console.log('obj3', obj3);
