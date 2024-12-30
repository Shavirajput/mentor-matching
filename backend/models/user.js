const pool = require("../config/db");

const createUser = async (userData) => {
    const { name, email, password, role, skills, bio } = userData;
    const result = await pool.query(
        `INSERT INTO users (name, email, password, role, skills, bio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [name, email, password, role, skills, bio]
    );
    return result.rows[0];
};

// Additional database methods
module.exports = { createUser };
