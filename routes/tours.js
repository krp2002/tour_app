
import express from 'express';
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

// create new tour
router.post('/', verifyAdmin, createTour)

// update new tour
router.put('/:id', verifyAdmin, updateTour)

// delete new tour
router.delete('/:id', verifyAdmin, deleteTour)

// get single new tour
router.get('/:id', getSingleTour)

// get all new tour
router.get('/', getAllTour)

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

// get featured tour
router.get('/search/getFeaturedTours', getFeaturedTour)

// get tourcount
router.get('/search/getTourCount', getTourCount)

export default router;