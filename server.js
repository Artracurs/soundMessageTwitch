const express = require('express')
const app = express()

// use the express-static middleware
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port ${port}`)
})