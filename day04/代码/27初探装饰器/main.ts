function test(target: any) {
    target.a = 100;
    target.b = 200;
}

@test
class Person{}

console.log(Person.a);
console.log(Person.b);