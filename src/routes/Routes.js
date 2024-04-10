const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');


// Rutas de los productos
router.get('/products', (req,res)=>Controller.getProducts(req,res));
router.put('/products', (req,res)=>Controller.putProducts(req,res));
router.put('/updateProducts', (req,res)=>Controller.updateProducts(req,res));
router.delete('/products', (req,res)=>Controller.deleteProducts(req,res));

// Rutas para las marcas
router.get('/brands', (req,res)=>Controller.getBrands(req,res));
router.put('/brands', (req,res)=> Controller.putBrands(req,res));
router.delete('/brands', (req,res)=> Controller.deleteBrands(req,res));

// Rutas para los usuarios
router.get('/users', (req,res)=>Controller.getUsuarios(req,res))
router.put('/users', (req,res)=> Controller.putUsuarios(req,res))
router.delete('/users', (req,res)=> Controller.deleteUsuarios(req,res))

// Rutas para los descuentos
router.get('/discounts', (req,res)=>Controller.getDiscounts(req,res))
router.put('/discounts', (req,res)=> Controller.putDiscounts(req,res))
router.delete('/discounts', (req,res)=> Controller.deleteDiscounts(req,res))

// Rutas para los precios
router.get('/prices/:userid*/:nombreproducto*', (req,res)=>Controller.getPrices(req,res))


module.exports = router;