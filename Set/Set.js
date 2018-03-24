const soccerPlayers = new Set(['Pique']);

soccerPlayers.add('Messi');
soccerPlayers.add('ter Stegen');
soccerPlayers.add('Ineiesta');
soccerPlayers.add('Ineiesta');

console.log(soccerPlayers);
soccerPlayers.forEach(value=>{
console.log(value);
})

soccerPlayers.delete('Messi')

console.log(soccerPlayers);
soccerPlayers.clear();
console.log(soccerPlayers);
// for(let item of user.entries()){
// console.log(item);
// }


// var animal=new Map([
// ['country','Armenia'],
// ['city','Yerevan']
// ])

// animal.delete('city');
// console.log(animal);

// animal.clear();
// console.log(animal);

