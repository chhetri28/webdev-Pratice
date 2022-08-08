// Require http header
var http = require('http');

// Create server
http.createServer(function (req, res) {

	// HTTP Status: 200 : OK
	// Content Type: text/html
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	// Send the response body as "Hello World!"
	res.end('Hello World!');

}).listen(8080);
//Node.js REPL (READ, EVAL, PRINT, LOOP)

/*
Read : It reads the inputs from users and parses it into JavaScript data structure. It is then stored to memory.
Eval : The parsed JavaScript data structure is evaluated for the results.
Print : The result is printed after the evaluation.
Loop : Loops the input command. To come out of NODE REPL, press ctrl+c twice
*/

/*

NPM (Node Package Manager) is the default package manager for Node.js 
and is written entirely in Javascript. 
*/


/*

Node.js Modules
In Node.js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. 
Modules can be a single file or a collection of multiples files/folders. 
The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.
*/