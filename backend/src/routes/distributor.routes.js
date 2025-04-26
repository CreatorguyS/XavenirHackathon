import express from 'express';
import { 
    getDashboard,
    getListings,
    createListing,
    updateListing,
    deleteListing,
    getProfile,
    updateProfile
} from '../controllers/distributor.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validateListing } from '../middlewares/validation.middleware.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Dashboard
router.get('/dashboard', getDashboard);

// Listings management
router.get('/listings', getListings);
router.post('/listings', validateListing, createListing);
router.put('/listings/:id', validateListing, updateListing);
router.delete('/listings/:id', deleteListing);

// Profile management
router.get('/profile', getProfile);
router.put('/profile', updateProfile);

export default router; 