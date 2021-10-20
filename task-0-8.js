function  convertTime(number) {
 var hours = Math.floor(number/60)
 var minutes =number %60;
 return hours  + "and" +minutes;
}
 console.log(convertTime(126));
