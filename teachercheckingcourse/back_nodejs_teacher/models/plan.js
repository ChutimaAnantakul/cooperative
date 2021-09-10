const db = require('../util/database');

module.exports = class Grocery {
    constructor(coursegroup_id, coursegroup_name, amount_of_credits_required) {
        this.coursegroup_id = coursegroup_id;
        this.coursegroup_name = coursegroup_name;
        this.amount_of_credits_required = amount_of_credits_required;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM coursegroup');
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
