var bike1={
    brand : "Honda",
    name:"Activa",
    fullname:function(mileage,price){
        console.log(this.brand+" "+this.name+" "+ mileage+" "+ price);
    }
}

var bike2={
    brand:"Suzuki",
    name:"Access"
}
var bike3={
    brand:"TVS",
    name:"Jupyter"
}
var bike4={
    brand:"hero",
    name:"Maestro"
}
x=["66kmpl","82,000"];
bike1.fullname.apply(bike1,["55kmpl","90,000"]);
bike1.fullname.apply(bike2,["60kmpl","95,000"]);
bike1.fullname.apply(bike3,["70kmpl","90,000"]);
bike1.fullname.apply(bike4,x);
