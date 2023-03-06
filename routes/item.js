const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET ALL METHOD
router.get("/", async (req, res) => {
  try {
    const AllItem = await Item.find();
    res.json(AllItem);
  } catch (error) {
    res.json({ message: error });
  }
});

// POST A LIST ITEM
router.post("/", async (req, res) => {
  const post = new Item({
    title: req.body.title,
  });
  try {
    const addItem = await post.save();
    res.json(addItem);
  } catch (error) {
    res.json({ message: error });
  }
});

// UPDATE THE ITEM
router.put("/:itemId", async (req, res) => {
  try {
    const updateItem = await Item.updateOne(
      { _id: req.params.itemId },
      {
        $set: {
          title: req.body.title,
        },
      }
    );
    res.json(updateItem);
  } catch (error) {
    res.json({ message: error });
  }
});

// REMOVE ITEM
router.delete("/:itemId", async (req, res) => {
  try {
    const removeItem = await Item.findByIdAndDelete({ _id: req.params.itemId });
    res.json(removeItem);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
