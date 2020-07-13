import jwt from 'jsonwebtoken';
import Functions from '../lib/db';
import configObj from '../config';
import dotenv from 'dotenv';

dotenv.config();

const config = configObj[process.env.APP_ENV]

export default class Utils{
	constructor() {
        this.mysqlfn = new Functions();
	}

	idMaker() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (var i = 0; i < 6; i++)
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		return text;
	}

	decodeJWTToken(accesstoken){
		let userData = {};
		jwt.verify(accesstoken, config.SECRET_KEY, function (err, decoded) {
			userData =  (Object.assign({},decoded));
		});		
		return userData;
	}

	paginationHandler(query,currentPage, pageSize){
		let local = this;
		let offset = ((currentPage-1)*pageSize);
		query = query+" LIMIT  "+offset+","+pageSize;
		console.log("++++++++++++++++++++++++++", offset, pageSize, "=============",currentPage,pageSize)
		return new Promise(function(resolve,reject){
			if(currentPage === undefined || pageSize === undefined)
				resolve({"Code":0,"Message":"Params not proper"})
			else {
				local.mysqlfn.read(query, (err, rows)=>{
					if(err){
						console.log(err);
						resolve(err);
					}else{
						console.log(rows);
						resolve(rows);
					}
				});
			}
		});
	}
	dbRemover(query,values){
		console.log("Entering dbCallMaker");
        let local = this;
        console.log("=========================================");
        console.log(query);
        console.log("=========================================");
        return new Promise(function(resolve,reject){
			local.mysqlfn.delete(query,values, (err, rows)=>{
				if(err){
					console.log(err);
					resolve
				}else{
					console.log(rows);
					resolve(rows);
				}
			});
		});
	}
	dbCallMaker(query){
		console.log("Entering dbCallMaker");
        let local = this;
        console.log("=========================================");
        console.log(query);
        console.log("=========================================");
        return new Promise(function(resolve,reject){
			local.mysqlfn.read(query, (err, rows)=>{
				if(err){
					console.log(err);
					resolve(err);
				}else{
					console.log(rows);
					resolve(rows);
				}
			});
		});
	}
	dbInsertMaker(query,data){
		console.log("Entering dbInsertMaker");
        let local = this;
        console.log("=========================================");
        console.log(query);
        console.log("=========================================");
        return new Promise(function(resolve,reject){
			local.mysqlfn.create(query, data,  (err, rows)=>{
				if(err){
					resolve(err);
				}else{
					resolve(rows);
				}
			});
		});
	}
	generate_jwt_token(userObject){
		let secret = config.SECRET_KEY;
		console.log("@@@@@@@@@@@@@@@@ userobject",userObject)
		let token = jwt.sign(userObject, secret);
		console.log("@@@@@@@@@@@@@@@@ token",token)
		let jwt_token = token;
		return jwt_token;
	}
}
