const express = require("express");
const router = express.Router();
const queries = require("../db/queries")

router.delete('/:id', (req, res) => [
  queries.knowledgearticle.delete(req.params.id)
  .then(() => res.send(202))
])

router.get('/', (req, res) => {
  queries.knowledgearticle.list()
  .then((data) => res.json(data))
})

module.exports = router