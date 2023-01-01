const express = require('express');
const router = express.Router({ mergeParams: true });
const { protect } = require('../middleware/authMiddleware');

const { getTicket, getAllTickets, createNote } = require('../controllers/staffController.js'); 

router.route('/').get(protect, getAllTickets)
// router.route('/').post(protect, createNote)

router.route('/:ticketId').get(protect, getTicket);
router.route('/:ticketId').post(protect, createNote);

module.exports = router;

// /api/tickets/:ticketId/notes