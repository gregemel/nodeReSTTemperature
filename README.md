# Temperature ReST endpoint in NodeJS
Yet another implementation of the temperature recorder endpoint.  This time, the endpoint is written in NodeJS and uses MongoDB.



## Purpose
More Practice with
* NodeJS
* Mocha
* Mongoose
* Gulp


## Use
To start the web service:
git clone the application into the current directory

 $ npm install<br>
 $ gulp

you should see:

Hello<br>
Gulp is running Temperature app on PORT: 8000


### get
GET /api/temperatures/ HTTP/1.1<br>
Host: localhost:8000<br>
Content-Type: application/json<br>

GET /api/temperatures/5b6f91cbb563546bd2e09db3 HTTP/1.1<br>
Host: localhost:8000<br>
Content-Type: application/json<br>


### post
POST /api/temperatures/ HTTP/1.1<br>
Host: localhost:8000<br>
Content-Type: application/json<br>

{
	"temp":"72",
	"location": "bedroom",
	"time" : "2018-08-11 18:47:00"
}

# todo
* more tests: verbs like put, patch, delete
