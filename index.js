const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
})