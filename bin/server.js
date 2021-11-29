const mongoose = require('mongoose')
const app = require('../app')

const { PORT = 3000, DB_HOST } = process.env

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Database connection successful')
      console.log(`Port: ${PORT}`)
    })
    console.log('')
  }).catch(error => {
    console.log(error.message)
    process.exit(1)
  })
