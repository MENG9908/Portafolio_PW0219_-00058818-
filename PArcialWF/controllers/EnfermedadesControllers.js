var Sick = require('../models/enfermedad')

module.exports.getOne = (req,res,next) => {
    debug("Search Enfermedad", req.params);
    Watch.findOne({
        username: req.params.modelo
    })
    .then((Enfound)=> {
        if(Enfound)
            return res.status(200).json(Enfound);
        else 
            return res.status(400).json(null);
    })
    .catch(err=>{
        next(err);
    })
}

module.exports.getAll = (req,res,next) => {

    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;
    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";

    debug("ENfermedades", {size: perPage, page, sortby:sortProperty,sort});

    Watch.find({})
        .limit(perPage)
        .skip(perPage*page)
        .sort({ [sortProperty]: sort})
        .then((watches) => {
            return res.status(200).json(watches);
        }).catch(err=>{
            next(err);
        })
}

module.exports.updateSick = (req,res,next) => {
    let update = {
        nombre: req.params.nombre,
        causa: req.params.causa,
        sintomas: req.params.sintomas,
        es_mortal: req.params.es_mortal,
        ...req.body
    };

   

module.exports.deleteSick = (req,res,next) => {
    debug("Delete enfermedad", {
        modelo: req.params.nombre
    });

    Watch.findOneAndDelete({nombre: req.params.nombre})
    .then((data) =>{
        if (data) res.status(200).json(data);
        else res.status(404).send();
    }).catch( err => {
        next(err);
    })
}

module.exports.register = (req,res,next) => {
    debug("enfermedad", {body : req.body});
    User.findOne({
        nombre : req.body.nombre
    })
    .then((Enfound) => {
        if(Enfound){
            debug("Enfermedad duplicada");
            throw new Error(`Enfermedad duplicada ${req.body.username}`);
        }
        else{
            let newEnfer = new Enfer({
                nombre: req.body.nombre,
                causa: req.body.causa,
                sintomas: req.body.sintomas,
                Es_mortal: req.body.Es_mortal
            });
            return newEnfer.save();
        }
    }).then(Sick => {
        return res
                .header( '/enfermedad/' + enfermedad.nombre)
                .status(201)
                .json({
                    _id: enfermedad._id
                });

    }).catch(err =>{
        next(err);
    }
