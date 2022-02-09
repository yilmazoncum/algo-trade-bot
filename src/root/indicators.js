import technicalindicators from "technicalindicators";

const BB = technicalindicators.BollingerBands;

var period = 10

var input = {
period : period, 
values : [48.16,48.61,48.75,48.63,48.74,49.03,49.07,49.32,49.91,50.13,49.53,49.50,49.75,50.03,50.31,50.52,50.41,49.34,49.37,50.23,49.24,49.93,48.43,48.18,46.57,45.41,47.77,47.72,48.62,47.85] ,
stdDev : 2
}
console.log(BB.calculate(input));
