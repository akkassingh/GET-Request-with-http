function hit(){
var http = require('http');
http.get("http://www.google.com", function(res) {
  var body = ''; // Will contain the final response
  // Received data is a buffer.
  // Adding it to our body
  res.on('data', function(data){
    body += data;
  });
  // After the response is completed, parse it and log it to the console
  // res.on('end', function() {
  //   var parsed = JSON.parse(body);
  //   console.log(parsed);
  // });
console.log(body);
})
// If any error has occured, log error to console
.on('error', function(e) {
  console.log("Got error: " + e.message);
});
}
module.exports= hit;   
