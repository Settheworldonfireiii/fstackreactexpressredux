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
const { username, password } = args[0];
const userStatementQuery = {
$and: [
{ 'username': username },
{ 'password': password }
]
}
}
}
];