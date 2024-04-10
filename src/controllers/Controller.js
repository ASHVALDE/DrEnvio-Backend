
// Import any required models here
const Products = require('../models/products.js');
const Brands = require('../models/brands.js');
const Users = require('../models/users.js');
const Utils = require('../utils/utils.js');

const ObjectId = require('mongodb').ObjectId;



exports.getProducts = async (req, res) => {
  Products.find({}).then(async function (products) {
    return await res.send(products);
  });
};

exports.putProducts = async (req, res) => {

  // Verificaciones para comprobar que la marca del producto que se registra existe
  // En el caso de que si exista cambia la marca a su ID en la base de datos
  if (!req.body.brand) {
    return await res.send("No se especifico la marca!");
  }
  let marcaEnDB = await Brands.findOne({ "name": req.body.brand.toLowerCase() })
  if (!marcaEnDB) {
    return await res.send("No se encontro la marca!");
  }
  req.body.brand = marcaEnDB._id


  // Creamos el objeto
  const newObject = new Products(req.body)
  try {
    await newObject.save();
  } catch (err) {
    console.log(err)
    // Si hay algun error en la creacion del objeto, se hizo una peticion erronea
    return await res.status(400).send("Error en la peticion, verifique los parametros")
  }

  return await res.send("Producto creado correctamente!!");

};

exports.deleteProducts = async (req, res) => {
  if(!ObjectId.isValid(req.body.id)){
    return await res.status(400).send("ID No valida")
  }
  
  Products.deleteOne({_id: req.body.id}).then(async v=>{
    if(!v.acknowledged){return await res.send("error eliminando producto!");}
    return await res.send("Producto eliminado Satisfactoriamente!");
  });


};

exports.getBrands = async (req, res) => {
  Brands.find({}).then(async function (brand) {
    return await res.send(brand);
  });
};

exports.putBrands = async (req, res) => {

  const newObject = new Brands(req.body)
  try {
    await newObject.save();
  } catch (err) {
    console.log(err)
    // Si hay algun error en la creacion del objeto, se hizo una peticion erronea
    return await res.sendStatus(400)
  }
  return await res.send("Marca creada correctamente!!");

};

exports.deleteBrands = async (req, res) => {
  if(!ObjectId.isValid(req.body.id)){
    return await res.status(400).send("ID No valida")
  }
  
  Brands.deleteOne({_id: req.body.id}).then(async v=>{
    if(!v.acknowledged){return await res.send("error eliminando marca!");}
    return await res.send("Marca eliminada satisfactoriamente!");
  });
  
};

exports.getUsuarios = async (req, res) => {
  Users.find({}).then(async function (users) {
    return await res.send(users);
  });
};

exports.putUsuarios = async (req, res) => {

  if(!req.body.email){return await res.status(400).send("Verifique el correo!")}
  if(!Utils.ValidateEmail(req.body.email)){return await res.status(400).send("Verifique el correo!")}

  // Creamos el objeto
  const newObject = new Users(req.body)
  try {
    await newObject.save();
  } catch (err) {
    console.log(err)
    // Si hay algun error en la creacion del objeto, se hizo una peticion erronea
    return await res.sendStatus(400)
  }

  return await res.send("usuario creado correctamente!!");

};

exports.deleteUsuarios = async (req, res) => {
  if(!ObjectId.isValid(req.body.id)){
    return await res.status(400).send("ID No valida")
  }
  
  Users.deleteOne({_id: req.body.id}).then(async v=>{
    if(!v.acknowledged){return await res.send("error eliminando usuario!");}
    return await res.send("Usuario eliminado satisfactoriamente!");
  });;
};


async function getUserFromMail(email){
  return await Users.findOne({email: email})
}

exports.getDiscounts = async (req, res) => {
  //Hacemos las verificaciones de que existe un usuario con ese correo
  if(!req.body.email){return await res.status(400).send("Verifique el correo!")}
  if(!Utils.ValidateEmail(req.body.email)){return await res.status(400).send("Verifique el correo!")}
  let user = await getUserFromMail(req.body.email)
  if(!user){return await res.status(404).send("No se encontro un usuario con este correo!")}
  //Si todo es correcto enviamos el descuento
  res.send(user.discounts);
};



exports.putDiscounts = async (req, res) => {
  // Verificaciones para comprobar que el usuario existe
  if(!req.body.email){return await res.status(400).send("Verifique el correo!")}
  if(!Utils.ValidateEmail(req.body.email)){return await res.status(400).send("Verifique el correo!")}
  let user = await getUserFromMail(req.body.email)
  if(!user){return await res.status(404).send("No se encontro un usuario con este correo!")}

  // Verificaciones para comprobar que el descuento es valido
  if(!req.body.discount){return await res.status(400).send("No ha ingresado un descuento!")}
  if(isNaN(req.body.discount)){return await res.status(400).send("el descuento aplicado no es un numero!")}
  if(0>=req.body.discount || req.body.discount> 100 ){return await res.status(400).send("No se puede aplicar un descuento de menos del 0% o mas del 100%!")}

  // Verificaciones para comprobar que la marca a aplicar el descuento es valida
  if(!req.body.id){return await res.status(400).send("No ha ingresado un ID de marca!")}
  if(!ObjectId.isValid(req.body.id)){return await res.status(400).send("ID No valida")}
  const marca = Brands.findOne({_id: req.body.id})
  if(!marca){return await res.status(404).send("No existe una marca con esta ID!")}

  // Aplica el descuento en caso de que todos los campos sean validos
  user["discounts"][req.body.id] = req.body.discount
  await Users.findOneAndUpdate({email:req.body.email}, {discounts:user["discounts"]});
  return await res.send("usuario creado correctamente!!");

};

exports.deleteDiscounts = async (req, res) => {
  let user = await getUserFromMail(req.body.email)
  delete user["discounts"][req.body.id]
  await Users.findOneAndUpdate({email:req.body.email}, {discounts:user["discounts"]});
  return await res.send("usuario creado correctamente!!");
};