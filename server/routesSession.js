import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import jwtSecret from './configSecret';
import configMongoose from './configMongoose';
const User = configMongoose.User;

export default [
{
route: ['login'] ,
call: (callPath, args) =>
{
const saltedPassword = password+'pubApp';
// pubApp is our salt string
const saltedPassHash = crypto
.createHash('sha256')
.update(saltedPassword)
.digest('hex');
const userStatementQuery = {
$and: [
{ 'username': username },
{ 'password': saltedPassHash }
]
}
return User.find(userStatementQuery, function(err, user) {
if (err) throw err;
}).then((result) => {
if(result.length) {
return null;
// SUCCESSFUL LOGIN mocked now (will implement next)
} else {
// INVALID LOGIN
return [
{
path: ['login', 'token'],
value: "INVALID"
},
{
path: ['login', 'error'],
value: "NO USER FOUND, incorrect login information"
}
];
}
return result;
});
}
}
];