const parse = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: "postgres",
      connection: {
        host: host,
        port: port,
        database: database,
        user: user,
        password: password,
        // ssl: {
        //   rejectUnauthorized: false,
        // },
      },
      debug: false,
    },
  };
};
