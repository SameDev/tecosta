// routes/clienteRoutes.js

const express = require('express');
const clienteController = require('../controllers/clienteController');
const router = express.Router();

router.get('/', clienteController.getAllClientes);
router.get('/new', clienteController.renderCreateForm);
router.post('/', clienteController.createCliente);
router.get('/:id', clienteController.getClienteById);
router.get('/:id/edit', clienteController.renderEditForm);
router.put('/:id', clienteController.updateCliente);
router.delete('/:id', clienteController.deleteCliente);

module.exports = router;
