//Day 3 Task

// Task - 1

var object1 = {
    name: 'Person1',
    age:5
  };

      
  var object2 = {
    age:5,
    name: 'Person1'
  };
      
  console.log(JSON.stringify(object1) === JSON.stringify(object2))
  
//Task - 2

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
  var res=JSON.parse(request.response)
  for(i=0;i<res.length;i++){
    console.log(res[i].flag)
}
}

// Task - 3

var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload=function(){
  var res=JSON.parse(request.response)
  for(i=0;i<res.length;i++){
   console.log("Country : ",res[i].name.common,", Region : ",res[i].region,", SubRegion : ",res[i].subregion,", Population : ",res[i].population)
 } 
}
