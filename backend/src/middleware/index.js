import { Router } from 'express';
import jwt from 'jsonwebtoken';

export default ({ config, db }) => {
	let routes = Router();
	routes.use('/api', function (req, res, next) {
		let url = req.url;
		if (url.includes('login')){
			next();
		}else {
			if (('authorization' in req.headers)) {
				let accesstoken = req.headers.authorization;
				jwt.verify(accesstoken, config.SECRET_KEY, function (err, decoded) {
					if (err) {
						let result = {
							"MESSAGE": err,
							"STATUS": "FAIL",
							"DATA": {err}
						};
						console.log(err);
						res.json(result);
					}else {
						if (Number(req.headers.userid) === Number(decoded.User_id)) {
							if(decoded.Role === 'DB'){
								const unaccessibleToQA = [ "addChecklist","alterchecklist","create"]
								if(unaccessibleToQA.includes(url.substring(url.lastIndexOf('/')+ 1))){
									const result = {"Code":0, "Message":"You are not authorized for this service"}
									res.json(result);
								}
							}
							else if(decoded.Role === 'SM'){
								const unaccessibleToQA = ["invite","getOrganisationRequests"]
								if(unaccessibleToQA.includes(url.substring(url.lastIndexOf('/')+ 1))){
									const result = {"Code":0, "Message":"You are not authorized for this service"}
									res.json(result);
								}
							}
							else if(decoded.Role === 'GM'){
								const unaccessibleToQA = ["update"]
								if(unaccessibleToQA.includes(url.substring(url.lastIndexOf('/')+ 1))){
									const result = {"Code":0, "Message":"You are not authorized for this service"}
									res.json(result);
								}
							}
							next();
						}else {
							let result = {
								"MESSAGE": "You are not authorize to use this service",
								"STATUS": "FAIL",
								"DATA": []
							};
							res.json(result);
						}
					}
				});
			}else {
				let result = {
					"MESSAGE": "No Authorization Token Found",
					"STATUS": "FAIL",
					"DATA": []
				};
				res.json(result);
			}
		}
	});
	return routes;
}
