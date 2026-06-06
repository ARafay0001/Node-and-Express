
//Class 3

const http = require('http')
const fs = require('fs')
// const server = http.createServer((req, res) => {
//   // console.log(req.url, req.method, req.headers);
//   if  (req.url === '/') {
//     res.setHeader('Content-Type', 'text/html');
//   res.write('<html>')
//   res.write('<head><title>node and express </title></head>')
//   res.write('<body><h1>Node and Express ./Home</body>')
//   res.write('</html>')
//   res.end()
//   } else if (req.url === '/product') {
//     res.setHeader('Content-Type', 'text/html');
//   res.write('<html>')
//   res.write('<head><title>node and express</title></head>')
//   res.write('<body><h1>Node and Express ./Product</body>')
//   res.write('</html>')
//   res.end()
//   } 
// });


const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers);

  
  if (req.url === '/submit' && req.method === 'POST') {
    fs.writeFileSync('user.txt', "dummytxt");
    res.statusCode = 302;
    res.setHeader('Location', '/')
    } 

    res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>node and express </title></head>')
  res.write('<body><h1>Node and Express ./Home')
  res.write(`<form action="/submit" method="POST">
  <lable>Name: </lable><input type="text" name="name" placeholder="Enter your name"><br>
  <lable>Age: </lable><input type="number" name="age" placeholder="Enter your age"><br>
  <lable>Gender: </lable><br>
  <lable>male</lable>
  <input type="radio" name="gender" value="male"><br>
  <lable>female</lable>
  <input type="radio" name="gender" value="female"><br>
  <input type="submit" value="Submit">
  </form>`)

  res.write('</body>')
  res.write('</html>')
  res.end()
  
});


const port = 3000
server.listen(port);

