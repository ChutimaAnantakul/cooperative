const Plan = require('../models/plan');

exports.getAllPlans = async (req, res, next) => {
    try {
        const [allPlans] = await Plan.fetchAll();
        res.status(200).json(allPlans);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};

// exports.getListsById = async (req, res, next) => {
//   try {
//     const postResponse = await List.get(req.body.student_id, req.body.item);
//     res.status(200).json(postResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// exports.getListsById = (req, res) => {
//   List.findByPk(req.params.student_id,
//     { attributes: ['student_id', 'student_code', 'student_name', 'student_class', 'student_school_of', 'student_course', 'student_gpa', 'student_gpax'] })
//     .then(list => {
//       res.status(200).json(list);
//     }).catch(error => {
//       // log on console
//       console.log(error);

//       res.status(500).json({
//         message: "Error!",
//         error: error
//       });
//     })
// }

// exports.postProfile = async (req, res, next) => {
//     try {
//         const postResponse = await Profile.post(req.body.item);
//         res.status(201).json(postResponse);
//     } catch (err) {
//         if (!err.statusCode) {
//             err.statusCode = 500;
//         }
//         next(err);
//     }
// };

// exports.putGrocery = async (req, res, next) => {
//   try {
//     const putResponse = await Grocery.update(req.body.id, req.body.item);
//     res.status(200).json(putResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };

// exports.deleteGrocery = async (req, res, next) => {
//   try {
//     const deleteResponse = await Grocery.delete(req.params.id);
//     res.status(200).json(deleteResponse);
//   } catch (err) {
//     if (!err.statusCode) {
//       err.statusCode = 500;
//     }
//     next(err);
//   }
// };
