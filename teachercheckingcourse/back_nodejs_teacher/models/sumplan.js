const db = require('../util/database');

module.exports = class List {
    constructor(id, item) {
        this.studyplan_id = studyplan_id;
        this.studyplan_name = studyplan_name;
        this.studyplan_img = studyplan_img;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM studyplan');
    }

    static post(studyplan_id) {
        return db.execute('INSERT INTO studyplan (studyplan_id) VALUES (?)', [studyplan_id]);
    }

    // static update(id, item) {
    //   return db.execute('UPDATE groceries SET item = ? WHERE id = ?', [item, id]);
    // }

    // static delete(id) {
    //   return db.execute('DELETE FROM groceries WHERE id = ?', [id]);
    // }
};
