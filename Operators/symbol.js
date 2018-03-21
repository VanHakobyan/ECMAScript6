const id=Symbol();
const user={
    name:'van',
    age:'22',
    width:182,
    [id]:'it\'s id'
};
console.log(user);

for(let key in user ){
    console.log(user[key]);
}

user.id='new id';//not working