const knex = require('knex')
const config = require('../knexfile')
const env = process.env.NODE_ENV || 'development'

module.exports = knex(config[env])

// var environment = process.env.NODE_ENV || 'development';
// var config = require('../knexfile')[environment];
// var knex = require('knex')(config);
// 
// module.exports = knex;