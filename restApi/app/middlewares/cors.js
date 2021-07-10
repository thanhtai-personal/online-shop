const cors = require('cors');
const { origin } = require('../../env')
const origins = [origin]

const corsOptions = {
  origin: (orig, callback) => {
    if (origins.indexOf(orig) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

const useCore = cors(corsOptions)

module.exports = useCore