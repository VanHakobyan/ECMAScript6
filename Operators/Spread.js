const first={
    name: 'Van',
    age:22,
    width:181
};
const data={
    color:'Red',
    goal:[],
    width:182
};

const result={
    name: 'Van',
    age:22,
    color:'Red',
    goal:[],
    width:182
}
const resultObj=Object.assign({},data,result,{newValue:'value'});
console.log(data);

