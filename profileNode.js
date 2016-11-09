 //Problem - We need a simple way to look at user's badge count and Javascript points
 //Solution use node.js to connect to treehouse's API to get profile information to print out


 !function () {
   var https = require('https');
   var username = 'jesusmarcodelcarmen';
   var user = "";
   var badgeCount = 0;
   var points = 0;

   function printError (error) {
     console.error(error.message);
   }

   function printMessage (username, badgeCount, points) {
     var message = username + ' has ' + badgeCount + ' total badge(s) and ' + points + ' points in JavaScript.';
     console.log(message);
   }


   //Connect to the API url (http://teamtreehouse.com/username.json)
   var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
     console.log('The status code is ' + response.statusCode);
     var body = "";
     //Read the data

     response.on("data", function (chunk) {
       //do something with chunk of data
       body += chunk;
     });

     response.on("end", function () {
       //logs the var body which has typeof = 'object'
       //parses body 'string' into JSON format
       var dataObj = JSON.parse(body);
       var points_per_course;

       //name of dataObj
       user = dataObj.name;
       //locates JS property of points property of dataObj
       points = dataObj.points.JavaScript;
       // badgeCount = dataObj.
       badgeCount = dataObj.badges.length;

       printMessage(user, badgeCount, points);


       for (var x in dataObj.points) {
         // x = property name in points object
         //dataObj.points[x] = value of property
         points_per_course = x + ': ' + dataObj.points[x];
         //spaces for separation
         console.log('');
         //property + value
         //Print data out to console
         console.log(points_per_course);

       };
       console.log('');
       console.log('No more data in response');
     });

   });

   request.on('error', printError);
 } ();





































