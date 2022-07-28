const express = require('express')
const app = express()
const port = 10000

app.use(express.static('/home/files/Documents/resume/public'));

app.get('/', (req, res) => {
  res.sendFile('/home/files/Documents/resume/index.html');
})

app.listen(port, () => {
  console.log(`Resume server listening at http://prayujt.com:${port}`)
})

