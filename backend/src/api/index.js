import { Router } from 'express';
import { version } from '../../package.json';
import createUser from './createUser';
import login from './login';
import getAllUsers from './getAllUsers';
import updateUser from './updateUser';
import getUserDetail from './getUserDetail';

export default () =>  {

    let api = Router();
    
    api.use('/create', createUser());
    api.use('/login', login());
    api.use('/users', getAllUsers());
    api.use('/users/:id', getUserDetail());
    api.use('/update', updateUser());

    api.get('/', (req, res)=> {
        res.json({ version })
    });

    return api;

}