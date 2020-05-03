module.exports = {
  	get: async(connection, callback) => {
		const promise = new Promise((resolve, reject) => {
    		connection.query("SELECT id,company_name FROM users limit 10", function (error,data,fields) {
	    		if (error) {
				  	reject(error);
				} else {
				  	resolve(data);
				}
    		});
  		});
  		return promise;
	},
	validate_password:async(connection,requestData,callback) => {
		const promise = new Promise((resolve, reject) => {
    		connection.query('SELECT id,email FROM users where email = "'+requestData.email+'" and password = "'+requestData.password+'" ', function (error,data,fields) {
	    		if (error) {
				  	reject(error);
				} else {
					var userDetails = data
				  	resolve(data);
				}
    		});
  		});
  		return promise;	
	}
}