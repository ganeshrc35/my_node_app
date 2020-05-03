const express = require("express")
const router = express.Router()
const APIController = require("../controller/APIV1Controller")

router.get("/", APIController.index)
router.post("/v3/validate_passwd", APIController.validate_password)
/*router.get("/create", biodataController.create)
router.post("/", biodataController.store)
router.get("/:id/edit", biodataController.edit)
router.put("/:id", biodataController.update)
router.delete("/:id", biodataController.destroy)*/
module.exports = router