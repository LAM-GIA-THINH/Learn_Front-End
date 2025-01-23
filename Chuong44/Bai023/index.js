import postData from "./data.js";

function calcAverageLikes(data){
  const total = data.reduce((acc, curr)=> {
      return acc += curr.likes
  }, 0);
  return total / data.length;
} 


console.log(calcAverageLikes(postData))
