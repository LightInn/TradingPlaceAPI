/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hfup0u0rve2h2qy",
    "created": "2023-10-04 08:52:41.000Z",
    "updated": "2023-10-04 08:52:41.000Z",
    "name": "propositioncards",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mkiujib1",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ll80apn5",
        "name": "description",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hfup0u0rve2h2qy");

  return dao.deleteCollection(collection);
})
