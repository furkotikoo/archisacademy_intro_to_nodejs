
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'admin',
        password: 'admin',
        database: 'app'
    }
});


const getUsersDetails = async (req, res) => {

    try {
        const customers = await knex('customers').select('*')
        res.json(customers)
    } catch (error) {
        res.json('error' + error)
    }
};
const getUserDetails = async (req, res) => {

    const { id: customerid } = req.params;
    try {
        const customers = await knex('customers').where({ customerid }).first()
        res.json(customers)
    } catch (error) {
        res.json('error' + error)
    }
};

const createUser = async (req, res) => {

    try {
        const { firstname, lastname } = req.body;

        const user = await knex('customers')
            .insert({
                firstname, lastname
            })
            .returning('*')

        res.json(user)

    } catch (error) {
        res.json('error' + error)
    }
};

const updateUser = async (req, res) => {

    try {
        const { id: customerid } = req.params;
        const { firstname, lastname } = req.body;

        const user = await knex('customers')
            .update({
                firstname, lastname
            })
            .where({ customerid })
            .returning('*')

        res.json(user)

    } catch (error) {
        res.json('error' + error)
    }
};

const deleteUser = async (req, res) => {

    try {
        const { id: customerid } = req.params;

        const user = await knex('customers')
            .where({ customerid })
            .del()

        res.json("User deleted successfully")

    } catch (error) {
        res.json('error' + error)
    }
};

module.exports = {
    getUsersDetails,
    getUserDetails,
    createUser,
    updateUser,
    deleteUser
}