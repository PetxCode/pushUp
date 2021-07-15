const {
  getAllEntry,
  createdNewEntry,
  getSingleEntry,
  updateEntry,
  deleteEntry,
} = require("./router");
const express = require("express");
const router = express.Router();

router.route("/").get(getAllEntry).post(createdNewEntry);
router.route("/:id").get(getSingleEntry).patch(updateEntry).delete(deleteEntry);

module.exports = router;
