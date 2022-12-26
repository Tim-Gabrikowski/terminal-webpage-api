const {fetchValidateToken} = require("./fetcher")

async function validateToken (req, res, next){
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null) {
        return res.status(401).send({ token: false, valid: false });
    }

    let result = await fetchValidateToken(token);

    if(result.success == false && result.statuscode == 401) return res.status(401).send({token: true, valid: false});
    if(result.success == false && result.statuscode == 400) return res.status(401).send({token: true, valid: false});

    if(result.valid){
        var user = result.user;
        req.user = user;
        next();
    } else {
        return res.status(401).send({token: true, valid: false});
    }
}

module.exports = {
    validateToken,
}