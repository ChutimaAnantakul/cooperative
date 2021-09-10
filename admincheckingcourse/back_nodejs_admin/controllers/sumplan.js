const Sumplan = require('../models/sumplan');

exports.getAllSumplan = async (req, res, next) => {
    try {
        const [allSumplan] = await Sumplan.fetchAll();
        res.status(200).json(allSumplan);
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
//     List.findByPk(req.params.student_id,
//         { attributes: ['student_id', 'student_code', 'student_name', 'student_class', 'student_school_of', 'student_course', 'student_gpa', 'student_gpax'] })
//         .then(list => {
//             res.status(200).json(list);
//         }).catch(error => {
//             // log on console
//             console.log(error);

//             res.status(500).json({
//                 message: "Error!",
//                 error: error
//             });
//         })
// }

exports.postSumplan = async (req, res, next) => {
    try {
        const postResponse = await Sumplan.post(req.body.item);
        res.status(201).json(postResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
