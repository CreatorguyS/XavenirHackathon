import express from 'express';
import { 
    getProviders,
    getProviderById,
    createProvider,
    updateProvider,
    deleteProvider,
    getProviderProfile,
    updateProviderProfile
} from '../controllers/provider.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validateProvider } from '../middlewares/validation.middleware.js';

const router = express.Router();

// Public routes
router.get('/', getProviders);
router.get('/:id', getProviderById);

// Protected routes
router.use(authenticate);

// Provider management
router.post('/', validateProvider, createProvider);
router.put('/:id', validateProvider, updateProvider);
router.delete('/:id', deleteProvider);

// Profile management
router.get('/profile', getProviderProfile);
router.put('/profile', updateProviderProfile);

export default router; 