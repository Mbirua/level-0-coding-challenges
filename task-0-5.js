function areaOfTriangle(a,b,c){
var semiperimeter = (a+b+c)/2;
  const area =Math.sqrt(semiperimeter*(semiperimeter-a)*(semiperimeter-b)*(semiperimeter-c));
     return area;
}
console.log(areaOfTriangle(6,8,10));

