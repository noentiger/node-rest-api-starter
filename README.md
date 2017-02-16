# node-api

## Features

- [jwt](https://github.com/auth0/node-jsonwebtoken) to verify user;
- [nodemailer](https://github.com/nodemailer/nodemailer) to send verification emails;
- [mongoose](https://github.com/Automattic/mongoose) to drive mongodb;
- [axios](https://github.com/mzabriskie/axios) to test RESTful api;

## Running the application

```bash
$ git clone git@github.com:noentiger/node-rest-api-starter.git && cd $_
$ yarn
$ npm run dev
```

* Run API with an e-mail server. Set the following environment variables
```term
$ EMAIL_ADDRESS=your@gmail.com EMAIL_PASS=yourpassword npm run dev
```

## Deploying the application

See the article [Deploying with Git](https://devcenter.heroku.com/articles/git) for more detailed information on deploying to Heroku.

* Create the heroku server
```term
§ heroku create
§ heroku config:set EMAIL_ADDRESS = your@gmail.com EMAIL_PASS = yourpassword
§ heroku addons:create mongolab
```

* Or just use the button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## API Endpoints

### Create users
```bash
POST /api/v1/users
```

### Login user
```bash
POST /api/v1/users/login
```

### Create a post
```bash
POST /api/v1/posts
```

### Get all posts
```bash
GET /api/v1/posts
```

### Get a post by an id
```bash
GET /api/v1/posts/:id
```

### Update a post by an id
```bash
PATCH /api/v1/posts/:id
```

### Get posts created by me
```bash
GET /api/v1/users/me/posts
```

## Result filtering, sorting & pagination

### Sorting
Get recently updated posts
```bash
GET /api/v1/posts?sort=-updated_at
```

### Pagination
```bash
GET /api/v1/posts?page=?page=0&perPage=25
```

### Select Fields
```bash
GET /api/v1/posts?fields=title,description
```

## Licensing

Copyright 2016 Kim Wijk

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
