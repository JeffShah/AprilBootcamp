// Step 2: Require the https module

var https = require('https');

console.log('I did it!');

// Terminal: I did it!

//Step 3: Make a simple request
var options = {
    host: 'www.example.org',
    path: '/'
  };

// Step 4: read the step 4 and "where's my response?" 
//and view souce code at https://example.org

//Step 5: This response. Modified the car callback function and included response.
//for step 5, node the file in terminal.

// called by https when the request is made.
var callback = function(response) {
    console.log('In response handler callback!');
    console.log('Response: ', response);
  }
  
  console.log("I'm about to make the request!");
  
  https.request(options, callback).end();
  
  console.log("I've made the request!");

/*
Terminal:
I did it!
I'm about to make the request!
I've made the request!
In response handler callback!
*/


