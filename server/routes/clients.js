var router = require("express").Router();
const clientsCtrl = require("../controllers/clients");
const isUserAuthenticated = require("../middleware/isUserAuthenticated");

/* GET clients page. */
router.get("/", clientsCtrl.getAll);
//Get one client in db
router.get("/:clientId", clientsCtrl.getOne);
// Create a client
router.post("/", isUserAuthenticated, clientsCtrl.create);
// Delete a client
router.delete("/:clientId", isUserAuthenticated, clientsCtrl.delete);
// Update a client's detail
router.put("/:clientId", isUserAuthenticated, clientsCtrl.updateClient);

module.exports = router;
