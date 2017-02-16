/**
 * middleware used to verify that user
 * is the owner of the item
 */

export default function (req, res, next) {

  if (req.body.owner !== req.decoded.user.id) {
      return res.status(403).send({
          error: 'Not Authorized'
      })
  }
  next()

}
