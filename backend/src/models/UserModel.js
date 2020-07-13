import Utils from '../lib/utils';

export default class UserModel {
    constructor() {
        this.utilObj = new Utils();
    }

    createUser(body, userToken) {
        let userRole = this.utilObj.decodeJWTToken(userToken).Role;
        const { Name, Email, Phone, Password, Role} = body;
        let selectquery = `SELECT Email from Users where Email = "${Email}"`;
        let insertQuery = `INSERT INTO Users (Name, Email, Phone, Password, Role)
                        VALUES("${Name}","${Email}","${Phone}","${Password}","${Role}")`;
        return new Promise((resolve, reject) => {
            if(userRole === "Admin") {
                this.utilObj.dbCallMaker(selectquery).then((rows) => {
                    if(rows.length === 0) {
                        this.utilObj.dbCallMaker(insertQuery).then((ins_obj) => {
                            if(ins_obj.affectedRows > 0) {
                                resolve({ success: true, "Message": "User Created" })
                            }
                        })
                    } else {
                        resolve({ "success": false, "Message": "This user already exists" });
                    }
                })
            } else {
                resolve({ "success": false, "Message": "You are not Authorized to use this service" });
            }
        })
    }

    updateUser(body, userToken) {
        let userRole = this.utilObj.decodeJWTToken(userToken).Role;
        const { Name, Email, Phone, Password, Role, User_id } = body;
        let selectquery = `SELECT Email from Users where User_id = "${User_id}"`;
        let updateQuery = `UPDATE Users SET Name="${Name}", Email="${Email}", Phone="${Phone}", Password="${Password}", Role="${Role}"
                        WHERE User_id = ${User_id}`;
        return new Promise((resolve, reject) => {
            if(userRole === "Admin") {
                this.utilObj.dbCallMaker(selectquery).then((rows) => {
                    if(rows.length > 0) {
                        this.utilObj.dbCallMaker(updateQuery).then((ins_obj) => {
                            if(ins_obj.affectedRows > 0) {
                                resolve({ success: true, "Message": "User Details Updated" })
                            }
                        })
                    } else {
                        resolve({ "success": false, "Message": "User does not exists" });
                    }
                })
            } else {
                resolve({ "success": false, "Message": "You are not Authorized to use this service" });
            }
        })
    }

    Signin(email, password) {
        console.log(email, password)
        let selectQuery = `SELECT User_id, Name, Email, Phone, Password, Role FROM Users WHERE Email = "${email}"`
        return new Promise((resolve, reject) => {
            this.utilObj.dbCallMaker(selectQuery).then((data) => {
                if(data.length > 0 ) {
                    const userObj = Object.assign({},data[0]);
                    data = data[0];
                    if(data.Password === password) {
                        const userToken = {
                            User_id: userObj.User_id,
                            Name: userObj.Name,
                            Email: userObj.Email,
                            Role: userObj.Role
                        }
                        console.log("userToken", userToken)
                        resolve({"success": true, "Message": "Login Success", "data": this.createUserJson(userToken)});
                    }
                    else{
                        resolve({"success": false, "Message": "Credentials did not match"});
                    }
                } else {
                    resolve({"success": false, "Message": "Account does not exists"});
                }
            })
        })
    }

    createUserJson(dataset){
        let utilObj = new Utils();       
        dataset.user_token = utilObj.generate_jwt_token(dataset);
        return dataset;
    }

    getUserDetail(id) {
        let selectQuery = `SELECT User_id, Name, Email, Phone, Role FROM Users WHERE User_id=${id}`
        return new Promise((resolve, reject) => {
            this.utilObj.dbCallMaker(selectQuery).then((data) => {
                if(data.length > 0 ) {
                    resolve({ success: true, result: data[0] })
                } else {
                    resolve({"success": false, "Message": "Something went Wrong"});
                }
            })
        })
    }
    
    deleteUser(id) {
        let deletetQuery = `DELETE Users WHERE User_id=${id}`
        return new Promise((resolve, reject) => {
            this.utilObj.dbCallMaker(deletetQuery).then((data) => {
                if(data.affectedRows > 0 ) {
                    resolve({ success: true, result: 'User removed Successfully' })
                } else {
                    resolve({"success": false, "Message": "Something went Wrong"});
                }
            })
        })
    }

    getAllUsers(userToken, page, limit) {
        let userRole = this.utilObj.decodeJWTToken(userToken).Role;
        let selectQuery = `SELECT User_id, Name, Email, Phone, Password, Role FROM Users`;
        let totalCountQuery = `SELECT COUNT(User_id) AS count FROM Users`;
        return new Promise((resolve, reject) => {
            if(userRole === "Admin") {
                this.utilObj.paginationHandler(selectQuery, page, limit).then((data) => {
                    let response = {};
                    response.rows = data;
                    this.utilObj.dbCallMaker(totalCountQuery).then((totalCount) => {
                        response.count = totalCount[0].count;
                        console.log("#########",response)
                        resolve(response);
                    })
                })
            } else {
                resolve({ "success": false, "Message": "You are not Authorized to use this service" });
            }
        })
    }

    searchUsers(searchString, page, limit) {
        const selectQuerywithStr = `SELECT * FROM Users WHERE (Name LIKE '${searchString}%' or Name LIKE '%${searchString}' or Name LIKE '%${searchString}%')`;
        let totalCountQuery = `SELECT COUNT(User_id) AS count FROM Users`
        return new Promise((resolve, reject) => {
            this.utilObj.paginationHandler(selectQuerywithStr, page, limit).then((data) => {
                let response = {};
                response.rows = data;
                this.utilObj.dbCallMaker(totalCountQuery).then((totalCount) => {
                    response.count = totalCount[0].count;
                    console.log("#########",response)
                    resolve(response);
                })
            })
        })
    }
}