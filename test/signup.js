import axios from 'axios'
import assert from 'assert'
import config from './testConfig'


export default function login() {

  describe('POST /signup', function () {

    it('email taken', function () {
      return axios.post(`${config.BASEURL}/users`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        name: `testuser2`,
        password: '123',
      }).then((res) => {
        throw res
      }).catch((res) => {
        assert.equal(res.status, 400)
      })
    })

    it('name taken', function () {
      return axios.post(`${config.BASEURL}/users`, {
        email: 'test@test.com',
        name: `testuser`,
        password: '123',
      }).then((res) => {
        throw res
      }).catch((res) => {
        assert.equal(res.status, 400)
      })
    })

  })
}
