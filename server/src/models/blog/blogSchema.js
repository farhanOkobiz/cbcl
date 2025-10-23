const mongoose = require("mongoose");
const { default: slugify } = require("slugify");
const Schema = mongoose.Schema;

const Blogschema = new Schema(
  {
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
    },
    blogCategoryRef: {
      type: Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
    },
    blogSubCategoryRef: {
      type: Schema.Types.ObjectId,
      ref: "BlogSubCategory",
      required: false,
    },
    details: {
      type: String,
      trim: true,
    },
    youtubeUrl: {
      type: String,
      required: false,
    },
    tags: [
      {
        type: String,
      },
    ],
    author: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

Blogschema.pre("save", function (next) {
  this.slug = slugify(this.title, {
    lower: true,
    locale: "bn",
    strict: false,
    remove: /[*+~.()'"!:@]/g,
  });
  next();
});

const BlogSchema = mongoose.model("blog", Blogschema);

module.exports = { BlogSchema };
