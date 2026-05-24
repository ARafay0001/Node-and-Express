// console.log("Hello, World!");

// const fs = require('fs');

// fs.writeFile("output.txt", "Writing File", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("File written successfully!");
//   }
// });


//Class 3

const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
});


const port = 3000
server.listen(port , () => {
  console.log(`Server is listning on port ${port}`);
  // process.exit();// to exit the server
});

