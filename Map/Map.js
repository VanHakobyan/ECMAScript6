const user = new Map();

user.set('firstName', 'Van');
user.set('lastName', 'Hakobyan');
user.set('Age', '89');

console.log(user);

for(let item of user.entries()){
console.log(item);
}


var animal=new Map([
['country','Armenia'],
['city','Yerevan']
])

animal.delete('city');
console.log(animal);

animal.clear();
console.log(animal);

