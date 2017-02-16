// get an instance of mongoose and mongoose.Schema
import mongoose from 'mongoose'
const Schema = mongoose.Schema

// set up a mongoose model and export
const Post = mongoose.model('Post', new Schema(
{
  title: {
		type: String, required: true
	},
	description: {
		type: String, required: true
	},
  images: Array,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
},
))

export default Post
