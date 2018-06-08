let anotherVar =()=> 50;
let newFunc = function(value:any = 10, anotherMultiple: number = anotherVar() * value){
    return value + anotherMultiple;
}

console.log(newFunc());
console.log(newFunc(34));
