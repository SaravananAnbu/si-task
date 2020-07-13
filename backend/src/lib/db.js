import mysql from 'mysql';
import configObj from "../config.json";
import dotenv from 'dotenv';

dotenv.config();

const config = configObj[process.env.APP_ENV]

const sql = config.mysqldev;

const pool  = mysql.createPool({
		host     : sql.host,
		user     : sql.user,
		password : sql.password,
		database : sql.database,
		charset : 'utf8mb4',
		queueLimit: 500,
		connectionLimit:100,
});

export default class functions {

    create(thequery, theobj, callback){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(thequery, theobj, function(err, res){
                callback(err, res);
                connection.release();
                return;
            });
        });
    }
    close(callback){
        pool.end(function (err) {
            callback(err)
        });
    }

    read(thequery, callback){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                thequery, function (err, rows){
                    callback(err, rows);
                    connection.release();
                    return;
                }
            );
        });
    }

    update(thequery, thevalues, callback){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(thequery, thevalues, function(err, res){
                callback(err, res);
                connection.release();
                return;
            });
        });
    }

    delete(thequery, thevalues, callback){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(thequery, thevalues, function(err, res){
                callback(err, res);
                connection.release();
                return;
            });
        });
    }
}
