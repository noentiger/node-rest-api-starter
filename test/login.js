import axios from 'axios'
import assert from 'assert'
import config from './testConfig'

export default function login() {
  describe('POST /login', function () {

    it('name login', function () {
      return axios.post(`${config.BASEURL}/users/login`, {
        name: 'testuser',
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200)
      })
    })

    it('email login', function () {
      return axios.post(`${config.BASEURL}/users/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '123',
      }).then((res) => {
        assert.equal(res.status, 200)
      })
    })

    it('wrong user name', function () {
      return axios.post(`${config.BASEURL}/users/login`, {
        name: `testuser${Date.now()}`,
        password: '123',
      }).then((res) => {
        throw res
      }).catch((res) => {
        assert.equal(res.status, 400)
      })
    })

    it('wrong email', function () {
      return axios.post(`${config.BASEURL}/users/login`, {
        email: `testuser${Date.now()}@test.com`,
        password: '123',
      }).then((res) => {
        throw res
      }).catch((res) => {
        assert.equal(res.status, 400)
      })
    })

    it('wrong password with name', function () {
      return axios.post(`${config.BASEURL}/users/login`, {
        name: `testuser`,
        password: '1234',
      }).then((res) => {
        throw res
      }).catch((res) => {
        assert.equal(res.status, 400)
      })
    })

    it('wrong password with email', function () {
      return axios.post(`${config.BASEURL}/users/login`, {
        email: `${config.EMAIL_RECEIVING_VERIFICATION}`,
        password: '1234',
      }).then((res) => {
        throw res
      }).catch((res) => {
        assert.equal(res.status, 400)
      })
    })
  })
}
