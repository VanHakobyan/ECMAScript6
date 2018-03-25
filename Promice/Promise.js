var promise=new Promise((resolve,reject)=>{
var flag = prompt("continue?");
if(flag=='yes') resolve();
else reject();
});

promise.then(()=>{console.log("Yes")})
	   .catch(()=>{console.log("No")});