import resource from 'resource-router-middleware';
import UserModel from '../models/UserModel';

export default () => resource({

	id: 'getAllUsers',

	index({ headers, query }, res) {
        const userToken = headers.authorization;
        const { page, limit } = query;
        let helper = new UserModel();
        helper.getAllUsers(userToken, page, limit).then((result) => {
            res.json(result)
        })
	}
})