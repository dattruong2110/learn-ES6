class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price
    }

    run() {
        const isSuccess = false;
        
        if(price < 3000) {
            isSuccess = true;
        }
    }
}

const reactCourse = new Course('ReactJS', 1000);
const jsCourse = new Course('Javascript', 2000);

console.log(reactCourse);
console.log(jsCourse);