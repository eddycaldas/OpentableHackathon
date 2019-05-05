
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost/opentableknowledge'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};

