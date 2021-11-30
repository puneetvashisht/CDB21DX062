// es6
class Employee{
    // fields
    // id;
    // name;
    // salary; 
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // methods
    incrementSalary(increaseByAmount){
        this.salary += increaseByAmount;
    }
}
class Manager extends Employee{
    constructor(id, name, salary, resourcesManaged){
        super(id, name, salary);
        this.resourcesManaged = resourcesManaged;
    }
}

let ravi = new Employee(2, "Ravi", 10000);
console.log(ravi);

let priya = new Employee(21, "Priya", 15000);
console.log(priya);
priya.incrementSalary(5000);
console.log(priya);

let rahul = new Manager(33, "Rahul", 30000, 5);
console.log(rahul);
rahul.incrementSalary(10000);
console.log(rahul)