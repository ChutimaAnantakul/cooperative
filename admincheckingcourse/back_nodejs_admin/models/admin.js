const db = require('../util/database');

module.exports = class Grocery {
    constructor(admin_id, admin_name, admin_position, admin_img) {
        this.admin_id = admin_id;
        this.admin_name = admin_name;
        this.admin_position = admin_position;
        this.admin_img = admin_img;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM admin');
    }

    // static post(item) {
    //   return db.execute('INSERT INTO groceries (item) VALUES (?)', [item]);
    // }

    // static update(id, item) {
    //   return db.execute('UPDATE groceries SET item = ? WHERE id = ?', [item, id]);
    // }

    // static delete(id) {
    //   return db.execute('DELETE FROM groceries WHERE id = ?', [id]);
    // }
};
