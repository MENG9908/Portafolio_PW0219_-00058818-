
const Producto = require('../../models/Producto');
var debug = require('debug')('proyectoWeb:EnfermedadesController');

module.exports.LoadIndex = async (req,res,next) => {

    var enfermedades = [];
 
    };

    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;

    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";


    await Producto.find({})
        .limit(perPage)
        .skip(perPage * page)
        .sort({ [sortProperty]: sort})
        .then((product) => {
            console.log(enfermedades);
            res.render('index', {title: 'Index', enfermedad: enfermedades});
        }).catch(err => {
            next(err);
        })


