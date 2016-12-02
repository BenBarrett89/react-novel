const express = require('express')
const { json, urlencoded } = require('body-parser')

const API = (app) => {
  app.use(json())
  app.use(urlencoded({ extended: true }))

  // set up routes
}

module.exports = {
  init: API
}
