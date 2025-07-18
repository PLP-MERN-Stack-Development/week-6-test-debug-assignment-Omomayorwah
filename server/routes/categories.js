const express = require("express");
const { createCategory, getAllCategories } = require("../controllers/categoryController");
const { protect, authorize } = require("../middleware/auth");
const router = express.Router();

// POST /api/categories
router.post("/", protect, createCategory);
// GET /api/categories
router.get("/", protect, getAllCategories);

module.exports = router;