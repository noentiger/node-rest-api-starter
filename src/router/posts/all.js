import Post from '../../models/Post'

export default async function(req, res, next) {

  let { page, perPage, sort = '', fields = '' } = req.query

  page = parseInt(page) || 0
  perPage = parseInt(perPage) || 20

  sort = sort.replace(',', ' ')
  fields = fields.replace(',', ' ')

  Post
    .find()
    .limit(perPage)
    .skip(perPage * page)
    .sort(sort)
    .select(fields)
    .populate('owner', 'name _id')
    .exec((err, result) => {
      if (err)
        return next(err)
      else if (!result)
        return next()

      res.send(result)
    })

}
