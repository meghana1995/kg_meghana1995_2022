//creating dictionary with number and string value pair
var dict={'1':'One','2':'Two','3':'Three','4':'Four','5':'Five','6':'Six',
          '7':'Seven','8':'Eight','9':'Nine','0':'Zero'};
//storing the commandline arguement in variable
var a=process.argv.slice(2);
var result="";
//looping over the arguements
a.forEach(function (val, index, array) {
    for(var i=0;i<val.length;i++){
        var c=val.charAt(i);
        //check whether the number is in the dictionary
        if(dict[c]){            
            result=result+dict[c];
        }
      }
      result=result+',';
  });
  //printing out the result
  console.log(result.slice(0,result.length-1));