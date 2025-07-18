const Category = require("../models/Category");

// POST /api/categories
exports.createCategory = async (req, res)=> {
    const category = await Category.create({ ...req.body, owner: req.user.id});
    res.json(category);
};

// GET /api/categories
exports.getAllCategories = async (req, res) => {
    const categories = await Category.find().populate("owner", "username name").sort({ createdAt: -1 });
    res.json(categories);
};