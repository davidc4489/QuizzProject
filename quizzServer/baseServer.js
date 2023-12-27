import sqlite3 from 'sqlite3';

let db = new sqlite3.Database('./database.db');

const getAll = async (collection) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM "${collection}"`;  // Utilisation de guillemets doubles pour échapper le nom de la table
        db.all(query, (err, rows) => {
            if (err) {
                console.error('Error fetching data:', err);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

export { getAll };