const { Client } = require('pg');

const client = new Client({
  user: 'app_user', // or 'postgres'
  host: 'localhost',
  database: 'mentorship',
  password: '123456',
  port: 5432,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log(res.rows);
  }
  client.end();
});
