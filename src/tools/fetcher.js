const fetch = require("node-fetch");
require("dotenv").config();

async function fetchValidateToken(token) {
    var user = {token: token};

    const response = await fetch(
        process.env.AUTHSERVICE_HOST + '/validate',
        {method: 'POST', body: JSON.stringify(user), headers: {'Content-Type': 'application/json'}}
    );

    if (response.ok) {
        return await response.json();
    } else {
        return {success: false, statuscode: response.status};
    }
}

module.exports = {
    fetchValidateToken,
}