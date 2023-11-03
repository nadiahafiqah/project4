var router = require("express").Router();
const policyCtrl = require("../controllers/policies");
const isUserAuthenticated = require("../middleware/isUserAuthenticated");

/* GET policy page. */
router.get("/:clientId", policyCtrl.getAll);
//Get one client in db
router.get("/:policyId", policyCtrl.getOne);
// Create a client
router.post("/:clientId", isUserAuthenticated, policyCtrl.create);
// Delete a client
router.delete("/:policyId", isUserAuthenticated, policyCtrl.delete);
// Update a client's detail
router.put("/:policyId", isUserAuthenticated, policyCtrl.updatePolicy);

module.exports = router;
