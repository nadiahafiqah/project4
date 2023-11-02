var router = require("express").Router();
const policyCtrl = require("../controllers/policies");

/* GET policy page. */
router.get("/", policyCtrl.getAll);
//Get one client in db
router.get("/:policyId", policyCtrl.getOne);
// Create a client
router.post("/:clientId", policyCtrl.create);
// Delete a client
router.delete("/:policyId", policyCtrl.delete);
// Update a client's detail
router.put("/:policyId", policyCtrl.updatePolicy);

module.exports = router;
