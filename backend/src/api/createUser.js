import resource from 'resource-router-middleware';
import UserModel from '../models/UserModel';

export default () => resource({

    id: 'createUser',

    index({ params }, res) {
        res.json('Invalid Request')
    },

    create({ headers, body }, res){
        const userToken = headers.authorization;
        let helper = new UserModel();
        helper.createUser(body, userToken).then((result) => {
            res.json(result)
        })
    }
})