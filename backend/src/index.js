import express from 'express';
import dotenv from 'dotenv';
import configObj from './config.json';
import bodyParser from 'body-parser';
import api from './api';
import { InitializeDB } from './db.js';
import cors from 'cors';

dotenv.config();

let config = Object.assign({}, configObj[process.env.APP_ENV])

let app = express();
const server = require('http').Server(app);

// app.use(morgan('devs'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('uploads'))

app.use(cors({
	exposedHeaders: config.corsHeaders,
	origin: ['http://localhost:3000'],
	maxAge: 31536000

}));

// app.use(middleware({ config }))

InitializeDB().then((res) => {
    console.log(res)
    app.use('/api/', api({ config }))
    // The event will be called when a client is connected.
   
    server.listen(process.env.PORT, () => {
        console.log(`App is listening at the port ${process.env.PORT}`)
    });
})



