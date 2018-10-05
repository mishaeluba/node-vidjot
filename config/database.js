if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: "mongodb://blinkz:uba8080@ds123173.mlab.com:23173/vidjot-prod"}
} else {
  module.exports = {mongoURI: "mongodb://127.0.0.1:27017/vidjot-dev"}
}