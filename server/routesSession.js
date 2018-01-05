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
}
}
];