function  convertTime(number) {
 var hours = Math.floor(number/60)
 var minutes =number %60;
 return  hours + "hours and" +minutes + "minutes"
}
 console.log(convertTime(126));
