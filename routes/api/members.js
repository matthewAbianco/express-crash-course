const express = require('express')
const members = require('../../Members');
const uuid = require('uuid')
const router = express.Router();

// GETS all members
router.get('/', (req, res) => res.json(members))

// GET single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ message: ` No member with the id of ${req.params.id}`})
    }
});

// POST Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email:req.body.email,
        status: 'active'
    }

    if(!newMember.name || !newMember.email) {
        res.status(400).json({ message: 'Please include a name and email'})
    }

    members.push(newMember);
    res.json(members)
})

// PUT update member

router.put('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    
    if(found) {
    const updateMember = req.body;
    members.forEach(member => {
        if(member.id === parseInt(req.params.id)) {
            member.name = updateMember.name? updateMember.name : member.name;
            member.email = updateMember.email? updateMember.email : member.email;

            res.json({ msg: 'Member was updated', member})
        }
    })
    } else {
        res.status(400).json({ message: ` No member with the id of ${req.params.id}`})
    }
});

module.exports = router;