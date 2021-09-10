const db = require('../util/database');

module.exports = class Grocery {
  constructor(teacher_id, teacher_name, teacher_position, teacher_school_of, teacher_course, teacher_email, teacher_telephone, teacher_image, username, password, admin_id) {
    this.teacher_id = teacher_id;
    this.teacher_name = teacher_name;
    this.teacher_position = teacher_position;
    this.teacher_school_of = teacher_school_of;
    this.teacher_course = teacher_course;
    this.teacher_email = teacher_email;
    this.teacher_telephone = teacher_telephone;
    this.teacher_img = teacher_img;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM userteacher');
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
