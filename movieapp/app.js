var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs")
app.get("/",function(req,res){
    res.render("search")
})
app.get("/results",function(req,res){
    var query=req.query.search;
    var url='http://www.omdbapi.com/?s='+query+'&apikey=82a2d2bd'
    request(url,function(error,response,body){
        // console.error('error:', error); // Print the error if one occurred
        //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
          var data=JSON.parse(body);
          res.render("results",{data:data})
    
    })
})





app.listen(process.env.PORT,process.env.IP,function(){
    console.log("movie app started")
})