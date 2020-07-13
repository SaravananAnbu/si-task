import mysql from 'mysql';
import config from "./config.json";
import dotenv from 'dotenv';

dotenv.config();

let configObj = Object.assign({},config[process.env.APP_ENV]);

const sql = configObj.mysqldev;

export function InitializeDB () {
    return new Promise ((resolve, reject) => {
        const db = mysql.createConnection({
            host     : sql.host,
            user     : sql.user,
            password : sql.password,
            database : sql.database
        });

        db.connect((err) => {
            if (!err) {
                resolve('CONNECTED TO DB')
            } else {
                resolve('Please make sure your Database is connected', err)
            }           
        });
    })
}
