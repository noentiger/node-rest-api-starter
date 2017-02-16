import Post from '../../models/Post'

export default async function(req, res, next) {

  const { params, body} = req

  Post.findByIdAndUpdate(params.id, body, { new: true }, (err, result) => {

    if (err)
      return next(err)
    else if (!result)
      return next()

    res.send(result)

  })

}
