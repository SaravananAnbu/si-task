import resource from 'resource-router-middleware';
import UserModel from '../models/UserModel';

export default () => resource({

	id: 'login',

	index({ params }, res) {
		res.json('invalid request')
	},

	create({headers, body}, res) {
		const { email, password } = body;
			let helper = new UserModel();
			helper.Signin(email, password).then((result) => {
				res.json(result);
			});
		}
})