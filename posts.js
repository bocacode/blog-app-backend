import { posts } from './mongoConnect.js'
import { ObjectId } from 'mongodb'

export const addPost = async (req, res) => {
  await posts.insertOne(req.body)
  res.send('item was added')
}

export const deletePost = async (req, res) => {
  console.log(req.params)

  await posts.findOneAndDelete({ id: new ObjectId(req.params) })
  res.send('item removed ')
}
