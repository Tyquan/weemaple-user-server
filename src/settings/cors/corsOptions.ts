const allowedUrls = require('./allowedUrls');

module.exports = {
    origin: (origin: string, callBack: Function) => {
        // if the request is from one of the allowed urls
        if (allowedUrls.indexOf(origin) !== -1 || !origin) {
            callBack(null, true)
        } else {
            callBack(new Error('Not allowed by cors'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}