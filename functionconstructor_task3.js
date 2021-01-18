/* problem statement
take an array and create a function constructor then iterate through the array and create an 
userobject and display all the values of array through this userobject using function
constructor. */



var arr1=[{name:"ravi",address:"NZB"},
    {name:"prasad",address:"HYD"},
    {name:"sai",address:"Warangal"},
    {name:"krishnasai",address:"guntur"},
    {name:"thiru",address:"West Godavari"}
]
function Displayinfo(name,address)
{
    this.personname=name;
    this.personaddress=address;
}

i=0;
for (i=0;i<arr1.length;i++)
{
    var userobject=new Displayinfo(arr1[i].name,arr1[i].address);
    console.log(userobject);
}
