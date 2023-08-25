const express = require('express')
const app = express()
const port = 7865;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Welcome to the payment system');
})

app.get('/cart/:id', (req, res) => {
    const id = req.params.id;
    if (Number(id)) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.send(`Payment methods for cart ${id}`);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        const out = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /cart/hello</pre>
</body>
</html>
        `;
        res.send(out);
    }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
})

module.exports = app;
