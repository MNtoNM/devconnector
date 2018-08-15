const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      avatar: {
        type: String,
        required: true
      },
      date: {
        type: Date, // This date refers to the comment
        default: Date.now
      }
    }
  ],
  date: {
    type: Date, // This date refers to the post
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);