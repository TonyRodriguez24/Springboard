function logger(req, res, next) {
    console.log(`sending ${req.method} request to ${req.path}`)
    return next();
}

function checkPassword(req, res, next)
{
    try {
        if (req.query.password !== 'monkeybreath') {
            throw new TypeError;
        }
        else {
            next()
        }
    }
    catch (e) {
        next(e)
    }
}


module.exports = {logger, checkPassword};