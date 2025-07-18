const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    featuredImage: { type: String, default: 'default-post.jpg'},
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true },
    description: { type: String, required: true, maxlength: 500 }
});

module.exports = mongoose.model("User", categorySchema);