function printOutVowels (mainStr) {
  let myStr = mainStr.toLowerCase();
  let vowelsPresent = "";
  if (myStr.includes ("a"))  {
 vowelsPresent  = vowelsPresent + "a";
}
 if (myStr.includes("e")) {
vowelsPresent = vowelsPresent + "e";
}
if (myStr.includes("i")) {
 vowelsPresent = vowelsPresent + "i";
}
 if (myStr.includes("o")) {
 vowelsPresent = vowelsPresent + "o";
}
if (myStr.includes("u")) {
 vowelsPresent = vowelsPresent + "u";
}
 return vowelsPresent;
}
 console.log(printOutVowels("Attention"));

