var emp={
    firstname:"sai",
    lastname:"prasad",
    fullname :function(){
        return this.firstname+ " " +this.lastname;
    }
}
console.log(emp.fullname());
var emp2={
    firstname:"master",
    lastname:"raju"
}
var emp3={
    firstname:"master",
    lastname:"vasudha"
}
console.log(emp.fullname.call(emp2));
console.log(emp.fullname.call(emp3));

