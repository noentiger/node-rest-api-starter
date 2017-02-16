import Post from '../../models/Post'

export default async function(req, res, next) {

  Post
    .findById(req.params.id)
    .populate('owner', 'name _id')
    .exec((err, result) => {
      if (err)
        return next(err)
      else if (!result)
        return next()

      res.send(result)
    })

}
