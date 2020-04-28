const args = process.argv;
let newargs = args.slice(2);
const reverse = function(str){
  let str2 = ''
  for (let i = String(str).length - 1; i >= 0; i--){
      str2 = str2 + String(str).charAt(i);
  }
  return str2;
}
for (let i of newargs){
  console.log(reverse(i));
}
