var express = require('express')
var editRouter = express.Router()
const path = require('path')
const fs = require('fs').promises
const bcrypt = require('bcryptjs')
const { editSchema } = require('../schema/editSchema')

const { readData, checkEmailEdit } = require('../middleware')
const { EditController } = require('../controller/EditController')
const editController = new EditController()

// edit get
editRouter.get('/edit/:id', readData, editController.getEdit)
editRouter.post('/edit/:id', readData, checkEmailEdit, editController.postEdit)

module.exports = editRouter 