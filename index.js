// var q1 = "What is Chaitanya's favorite color?";
var o1 = ["blue", "orange", "green"];

// var q2 = "What is Chaitanya's passion?";
var o2 = ["Software Developer", "Web developer", "DataScientist"];


var qna = {
  "What is Chaitanya's favorite color?":o1,
  "What is Chaitanya's passion?":o2
}

console.log(qna.len())

for(let q in qna){
  console.log(q);
}