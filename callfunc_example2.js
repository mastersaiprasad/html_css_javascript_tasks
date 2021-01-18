var cars={
    brand:"TATA",
    name:"Altroz",
    fullname:function(mileage,price){
        console.log(this.brand+" "+this.name);
        console.log(mileage+" "+price);
    
    }
}
cars.fullname.call(cars,"60kmph","7lakhs");
var cars2={
    brand:"maruti",
    name:"Swift",
}
cars.fullname.call(cars2,"40kmph","6lakhs");