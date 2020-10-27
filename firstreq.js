var request = require('request');
request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  var parseddata=JSON.parse(body);
  console.log(parseddata["results"]["day_length"])
});
// var request=require('request');
// request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400',function(error,response,body){
//     if(error){
//         console.log("something went wrong!!!");
//         console.log(error)
//     }
//     else{
//         if(response.statusCode==200){
//             //things worked
//             console.log(body)
//         }
//     }
// })