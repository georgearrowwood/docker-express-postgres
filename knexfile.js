module.exports = {
  development: {
    client: 'pg',
    connection: { 
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER, 
      database: 'testdb', 
      password: process.env.PGPASSWORD 
    }
  },
  migrations: {
    tableName: 'migrations'
  }
};
