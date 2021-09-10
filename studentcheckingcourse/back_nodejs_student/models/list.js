const db = require('../util/database');

module.exports = class List {
    constructor(id, item) {
        this.student_id = student_id;
        this.student_code = student_code;
        this.student_name = student_name;
        this.student_class = student_class;
        this.student_school_of = student_school_of;
        this.student_course = student_course;
        this.student_gpa = student_gpa;
        this.student_gpax = student_gpax;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM userstudent');
    }

    static post(student_id) {
        return db.execute('INSERT INTO userstudent (student_id) VALUES (?)', [student_id]);
    }

    // static update(id, item) {
    //   return db.execute('UPDATE groceries SET item = ? WHERE id = ?', [item, id]);
    // }

    // static delete(id) {
    //   return db.execute('DELETE FROM groceries WHERE id = ?', [id]);
    // }
};
