const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  price: String,
  description: String,
  images: [String],
  location: String,
  lat: Number,
  long: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review"
    }
  ]
});

module.exports = mongoose.model("Post", PostSchema);

// Post
// -title -string
// -price - string
// -description -string
// -iamges-array of strings
// -location - string
// -lat - number
// -long - number
// -author - object id ref Post
// -reviews - array of objects
