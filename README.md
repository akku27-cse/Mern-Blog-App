# Mern-Blog-App

post man test
1
```shell
![registerPostman](https://github.com/akku27-cse/Mern-Blog-App/assets/115920400/efcf6187-67a5-4e00-93ce-8597c69d294c)

```



##Installation 
1.Initialize node Project
```shell
npm init -y
```
2.Express
```shell
npm i express
```
3.Install Mongoose
```shell
npm i mongoose
```
4.Install Cors(for sending response to client)
```shell
npm i cors
//expamle
var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```
5.Install bcryptjs(for use hashed password)
```shell
npm i bcryptjs
ex==//
To hash a password:

var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

To check a password:

// Load hash from your password DB.
bcrypt.compare("B4c0/\/", hash, function(err, res) {
    // res === true
});
bcrypt.compare("not_bacon", hash, function(err, res) {
    // res === false
});
 
// As of bcryptjs 2.4.0, compare returns a promise if callback is omitted:
bcrypt.compare("B4c0/\/", hash).then((res) => {
    // res === true
});

Auto-gen a salt and hash:

bcrypt.hash('bacon', 8, function(err, hash) {
});

```

5.Install jwt (for json Web Token)
```shell
npm i jsonwebtoken

ex==//
const express = require('express'); 
const dotenv = require('dotenv'); 
const jwt = require('jsonwebtoken'); 

const app = express(); 

// Set up Global configuration access 
dotenv.config(); 

let PORT = process.env.PORT || 8000; 
app.listen(PORT, () => { 
console.log(`Server is up and running on ${PORT} ...`); 
}); 

// Main Code Here // 
// Generating JWT 
app.post("/user/generateToken", (req, res) => { 
	// Validate User Here 
	// Then generate JWT Token 

	let jwtSecretKey = process.env.JWT_SECRET_KEY; 
	let data = { 
		time: Date(), 
		userId: 12, 
	} 

	const token = jwt.sign(data, jwtSecretKey); 

	res.send(token); 
}); 

// Verification of JWT 
app.get("/user/validateToken", (req, res) => { 
	// Tokens are generally passed in header of request 
	// Due to security reasons. 

	let tokenHeaderKey = process.env.TOKEN_HEADER_KEY; 
	let jwtSecretKey = process.env.JWT_SECRET_KEY; 

	try { 
		const token = req.header(tokenHeaderKey); 

		const verified = jwt.verify(token, jwtSecretKey); 
		if(verified){ 
			return res.send("Successfully Verified"); 
		}else{ 
			// Access Denied 
			return res.status(401).send(error); 
		} 
	} catch (error) { 
		// Access Denied 
		return res.status(401).send(error); 
	} 
});
```

3. Concurently : it use to run frontend and backend at a time
```shell
npm i concurrently
```
Use of cuncurrently pack
```shell
"client": "npm start --prefix ./client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
```
## Fronted Install
1.React
```shell
npx create-react-app userauth
```
2.React-router-dom
```shell
npm i react-router-dom
```
3.Install axios(send request to backend)
```shell
npm i axios

ex==//
axio.post("http://localhos:5000/api/signup)
```

