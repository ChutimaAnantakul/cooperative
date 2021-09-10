const db = require('../util/database');

module.exports = class Course {
    constructor(course_id, course_code, course_name, course_unit, course_status, course_academic_year, course_semester_year) {
        this.course_id = course_id;
        this.course_code = course_code;
        this.course_name = course_name;
        this.course_unit = course_unit;
        this.course_status = course_status;
        this.course_academic_year = course_academic_year;
        this.course_semester_year = course_semester_year;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM course');
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
