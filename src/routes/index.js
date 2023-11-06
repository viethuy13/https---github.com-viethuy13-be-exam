'use strict'
const authroute = require('./auth.route')
const express = require('express')
const { StatusCodes, ReasonPhrases } = require('http-status-codes')

const router = express.Router()
router.use('/user', authroute)

module.exports = router
