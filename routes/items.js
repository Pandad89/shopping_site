const express = require('express');
const router = express.Router();
const Item = require('../models/items');

// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Item
router.post('/', async (req, res) => {
    const item = new Item({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
    })
    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete Item
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.item.remove();
        res.json({ message: 'Item Deleted!' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getItem(req, res, next) {
    let item;
    try {
        item = await Item.findById(req.params.id);
        if (item === null) {
            return res.status(404).json({ message: 'Cannot find item' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.item = item;
    next();
}

module.exports = router;