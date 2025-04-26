import express from 'express';
import { registerDistributor, loginDistributor, registerReceiver, loginReceiver } from '../controllers/auth.controller.js';
import { validateRegistration, validateLogin } from '../middlewares/validation.middleware.js';

const router = express.Router();

// Distributor routes
router.post('/distributor/register', validateRegistration, registerDistributor);
router.post('/distributor/login', validateLogin, loginDistributor);

// Receiver routes
router.post('/receiver/register', validateRegistration, registerReceiver);
router.post('/receiver/login', validateLogin, loginReceiver);

export default router; 