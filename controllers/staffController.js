const asyncHandler = require('express-async-handler');

const Ticket = require('../models/ticketModel');
const User = require('../models/userModel');
const Note = require('../models/noteModel');


// @desc get notes
// @route /api/tickets/:ticketId/notes
// @access private
// GET request : we fetch current ticket notes
const getAllTickets = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = req.user;
    console.log(user);

    if(!user){
        res.status(401);
        throw new Error('User not found');
    }

    if(!user.isAdmin){
        res.status(401);
        throw new Error('User is not admin');
    }


    const ticket = await Ticket.find({ status: 'new' }); 
    res.status(200).json(ticket);
})

const getTicket = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = req.user;

    if(!user){
        res.status(401);
        throw new Error('User not found');
    }

    if(!user.isAdmin){
        res.status(401);
        throw new Error('User is not admin');
    }
    
    const { ticketId } = req.params;
    
    if(!ticketId){
        res.status(401);
        throw new Error('Ticket not found');
    }
    
    const ticket = await Ticket.findById(ticketId); 
    
    if(!ticket){
        res.status(401);
        throw new Error('Ticket not found');
    }
    
    const note = await Note.find({ ticket: ticketId })

    res.status(200).json({note, ticket});
})

// @desc Create a new note
// @route /api/tickets/:ticketId/notes
// @access private
// POST request : we create notes for current ticket
const createNote = asyncHandler(async (req, res) => {
    // Get user using the id in the JWT
    const user = req.user;
    
    if(!user){
        res.status(401);
        throw new Error('User not found');
    }

    if(!user.isAdmin){
        res.status(401);
        throw new Error('User is not admin');
    }
    
    const { ticketId } = req.params;

    if(!ticketId){
        res.status(401);
        throw new Error('Ticket not found');
    }
    
    // const ticket = await Ticket.findById(ticketId); 

    const note = await Note.create({ 
        text: req.body.text,
        isStaff: true,
        user: req.user.id,
        ticket: req.params.ticketId 
    })

    res.status(200).json(note);
})

module.exports = {
    getTicket,
    getAllTickets,
    createNote
}