import Post from '../../models/Post'

export default async function(req, res, next) {

  const { title, description, images } = req.body

  const post = new Post({
    title,
    description,
    images,
    owner: req.decoded.user.id,
  })

  post.save( (err, result) => {

    if (err)
      return next(err)
    else if (!result)
      return next()

    res.send(result)

  });

}
