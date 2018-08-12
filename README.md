# Temperature ReST endpoint in NodeJS

## Purpose
Practice with
* NodeJS
* Express
* Mocha
* Supertest
* Mongoose
* Gulp


## Use
To start the web service:
git clone the application into the current directory

 $ npm install<br>
 $ gulp

you should see:

Hello<br>
Gulp is running my app on  PORT: 8000


### get
GET /api/temperatures/ HTTP/1.1
Host: localhost:8000
Content-Type: application/json

GET /api/temperatures/5b6f91cbb563546bd2e09db3 HTTP/1.1
Host: localhost:8000
Content-Type: application/json


### post
POST /api/temperatures/ HTTP/1.1
Host: localhost:8000
Content-Type: application/json

{
	"temp":"72",
	"location": "bedroom",
	"time" : "2018-08-11 18:47:00"
}
