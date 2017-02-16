import axios from 'axios'
import assert from 'assert'
import config from './testConfig'

export default function password_reset() {
  describe('GET /needingToken', function () {

    let token = ''

    before(async function() {
      const loginRes = await axios.post(`${config.BASEURL}/users/login`, {
        name: 'testuser',
        password: '123',
      }).catch((res) => { throw res.data})

      token = loginRes.data.token
    })

    it('should need token', function () {
      return axios.get(`${config.BASEURL}/posts`)
        .then((res) => { throw res })
        .catch((res) => {
          assert.equal(res.status, 403)
        })
    })

    it('should success', function () {
      return axios.get(`${config.BASEURL}/posts`, {params: {token}})
        .then((res) => {
          assert.equal(res.status, 200)
        })
    })

  })
}
