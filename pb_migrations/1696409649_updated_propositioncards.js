/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hfup0u0rve2h2qy")

  collection.createRule = "@request.auth.id != null"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hfup0u0rve2h2qy")

  collection.createRule = null

  return dao.saveCollection(collection)
})
