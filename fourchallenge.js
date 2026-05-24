const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Molti</title></head>')
  res.write('<body>')
  res.write('<nav><ul><li><a href="/">Home</a></li><li><a href="/product">Product</a></li><li><a href="/about">About</a></li></ul></nav>')

  res.write('<h1>Wlcome Home</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end();
  } else if (req.url === '/product') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Molti</title></head>')
  res.write('<body>')
  res.write('<nav><ul><li><a href="/">Home</a></li><li><a href="/product">Product</a></li><li><a href="/about">About</a></li></ul></nav>')

  res.write('<h1>Wlcome Product</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end();
  } else if (req.url === '/about') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Molti</title></head>')
  res.write('<body>')
  res.write('<nav><ul><li><a href="/">Home</a></li><li><a href="/product">Product</a></li><li><a href="/about">About</a></li></ul></nav>')

  res.write('<h1>Wlcome About</h1>')
  res.write('</body>')
  res.write('</html>')
  res.end();
  }
})

server.listen(3000)