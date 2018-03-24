const name="Van";
const age=23;
const obj = {
    name: name,
    age: age,
    get info() {
        return  `My name is ${name}, age ${age}`
    },
    set info(name) {
        this.name = name;
    }
};
console.log(obj);
console.log(obj.info='Ann');
console.log(obj.info);
