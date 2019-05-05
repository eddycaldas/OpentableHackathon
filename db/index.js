// const knex = require('knex')
// const config = require('../knexfile')
// const env = process.env.NODE_ENV || 'development'
// 
// module.exports = knex(config[env])

const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')
const environmentConfig = config[environment];
const knex = require('knex');
const connection = knex(environmentConfig);
module.exports = connection;
