const { checkEmailEdit } = require("./checkEditEmail");
const { checkEmail } = require("./checkEmail");
const { checkLogin } = require("./checkLogin");
const { nameUpperCase } = require("./checkName");
const { readData } = require("./readData");

module.exports = { checkEmail, checkLogin, nameUpperCase, checkEmailEdit, readData }