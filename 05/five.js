const http = require('http');
const fs = require('fs');

const reqHandler = (req, res) => {



  if (req.url === '/submit' && req.method === 'POST') {

      res.statusCode = 302;
      res.setHeader('Location', '/')

      const body = [];
  req.on('data', (chunk) => {
    console.log(chunk)
    body.push(chunk)
    console.log(body, 'bodyyy');
  });

  req.on('end', ()=> {
    let fullbody = Buffer.concat(body).toString()
    console.log(fullbody, 'fullbodyyyy');
    let param = new URLSearchParams(fullbody)
    console.log(param);
    const bodyObj = {}
    for (const [key , value] of param.entries()) {
      bodyObj[key] = value;
    }
    const jsonString = JSON.stringify(bodyObj)
    fs.writeFileSync("userdetail.txt", jsonString)
  })
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
}

module.exports = reqHandler