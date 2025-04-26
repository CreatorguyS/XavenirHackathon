import express from 'express';
import { 
    createDonation, 
    getDonations, 
    getDonationById, 
    updateDonation, 
    deleteDonation,
    selectNGO
} from '../controllers/donation.controller.js';
import { authenticate } from '../middlewares/auth.middleware.js';
import { validateDonation } from '../middlewares/validation.middleware.js';

const router = express.Router();

// All routes require authentication
router.use(authenticate);

// Donation CRUD operations
router.post('/', validateDonation, createDonation);
router.get('/', getDonations);
router.get('/:id', getDonationById);
router.put('/:id', validateDonation, updateDonation);
router.delete('/:id', deleteDonation);

// NGO selection
router.post('/:id/select-ngo', selectNGO);

export default router; 