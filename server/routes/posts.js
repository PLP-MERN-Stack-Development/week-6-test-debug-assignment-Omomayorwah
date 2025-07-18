const express = require("express");
const { createPost, getMyPosts, getAllPosts, updatePost, deletePost, getAllPosts } = require("../controllers/postController");
const { protect } = require("../middleware/auth");
const router = express.Router();


router.post("/", protect, createPost);
router.get("/me", protect, getMyPosts);
router.get("/all", protect, getAllPosts);
router.put("/:id", protect, updatePost);
router.delete("/:id", protect, deletePost);

module.exports = router;