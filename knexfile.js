module.exports = {
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'archis'
    },
    migrations: {
        directory: __dirname + '/database/migrations'
    },
    seeds: {
        directory: __dirname + '/database/seeds'
    },
}