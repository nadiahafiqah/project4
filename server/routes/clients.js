var router = require("express").Router();
const clientsCtrl = require("../controllers/clients");

/* GET clients page. */
router.get("/", clientsCtrl.getAll);
//Get one client in db
router.get("/:clientId", clientsCtrl.getOne);
// Create a client
router.post("/", clientsCtrl.create);
// Delete a client
router.delete("/:clientId", clientsCtrl.delete);
// Update a client's detail
router.put("/:clientId", clientsCtrl.updateClient);

module.exports = router;
