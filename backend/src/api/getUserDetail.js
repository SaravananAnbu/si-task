import resource from 'resource-router-middleware';
import UserModel from '../models/UserModel';

export default () => resource({

    id: 'getUserDetail',
    
    mergeParams: true,

	index({ params }, res) {
        const id  = parseInt(params.id);
        let helper = new UserModel();
        helper.getUserDetail(id).then((result) => {
            res.json(result)
        })
    }
})