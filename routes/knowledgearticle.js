const express = require("express");
const router = express.Router();
const queries = require("../db/queries")

router.post('/', (req, res) => {
  queries.knowledgearticle.create(req.body)
  .then((knowledgearticle) => res.json(knowledgearticle))
})

router.get('/:id', (req, res) => {
  queries.knowledgearticle.read(req.params.id)
  .then((knowledgearticle) => res.json(knowledgearticle))
})

router.put('/:id', (req, res) => {
  queries.knowledgearticle.update(req.params.id, req.body)
  .then((knowledgearticle) => res.sendStatus(200))
})

router.delete('/:id', (req, res) => [
  queries.knowledgearticle.delete(req.params.id)
  .then(() => res.sendStatus(202))
])

router.get('/', (req, res) => {
  queries.knowledgearticle.list()
  .then((data) => res.json(data))
})

module.exports = router
