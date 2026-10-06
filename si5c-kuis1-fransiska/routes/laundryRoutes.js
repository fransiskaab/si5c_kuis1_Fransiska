const express = require("express");
const router = express.Router();

const laundryController = require("../controllers/laundryController");
const cekApiKey = require("../middlewares/cekApiKey");

router.get("/", laundryController.getAll);
router.get("/:id", laundryController.getById);

router.post("/", cekApiKey, laundryController.create);
router.put("/:id", cekApiKey, laundryController.update);
router.delete("/:id", cekApiKey, laundryController.remove);

module.exports = router;