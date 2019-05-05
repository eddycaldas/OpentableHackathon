const knex = require('./')

module.exports = {
  knowledgearticle: {
    delete(id) {
      return knex('knowledgearticle').where({id}).delete()
    },
    // create(body) {
    //   return knex('knowledgearticle').insert(body)
    // },
    // read(id) {
    //   return knex('knowledgearticle').where({id}).first()
    // },
    // update(id, body) {
    //   return knex("knowledgearticle").where({id}).update(body)
    // },
    list() {
      return knex('knowledgearticle')
    },
  }
}