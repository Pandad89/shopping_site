const express = require('express');
const router = express.Router();
const Purchase = require('../models/purchases');

// Get all purchases
router.get('/', async (req, res) => {
    console.log(res)
    try {
        const purchases = await Purchase.find();
        res.json(purchases);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create Purchase
router.post('/', async (req, res) => {
    const purchase = new Purchase({
        purchase: req.body.purchase,
    })
    try {
        const newPurchase = await purchase.save();
        res.status(201).json(newPurchase);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//Delete Purchase
router.delete('/:id', getPurchase, async (req, res) => {
    try {
        await res.purchase.remove();
        res.json({ message: 'Purchase Deleted!' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getPurchase(req, res, next) {
    let purchase;
    try {
        purchase = await Purchase.findById(req.params.id);
        if (purchase === null) {
            return res.status(404).json({ message: 'Cannot find purchase' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.purchase = purchase;
    next();
}

module.exports = router;