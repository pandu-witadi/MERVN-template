//
//  /api/test
//
const CF = require('../config/default')


test_get = async (req, res) => {
    try {
        curDate = new Date()
        strDate = curDate.toISOString().slice(0, 10)
        strTime = curDate.toLocaleTimeString('en-US', {
            hour12: false,
            timeZone: "Asia/Jakarta"
        })

        return res.send({
            appName: CF.app.name,
            port: CF.server.port,
            appVersion: CF.app.version,
            random: Math.random(),
            toString: strDate + ' ' + strTime,
            toISOString: curDate.toISOString()
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}




module.exports = {
    test_get
}
