const cors = require('cors');
const { origin } = require('../../env')

const corsOptions = {
  origin,
  optionsSuccessStatus: 200
}

module.exports = cors(corsOptions)