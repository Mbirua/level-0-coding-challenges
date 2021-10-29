var s1 = "great"
var s2 = "grate"
let commonLetters = 0;
function printCommonLetters(s1,s2)
{
for (let i in s1)
s2.includes (s1[i])? commonLetters++ :false;

console.log(commonLetters)
}
printCommonLetters(s1,s2)
