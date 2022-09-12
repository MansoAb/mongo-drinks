const Drink = require("../models/Drink.model");

module.exports.drinkControllers = {
  showDrinks: async function (req, res) {
    try {
      const drinks = await Drink.find({}, { name: 1, price: 1, _id: 1 });
      res.json(drinks);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  showDrinksInStock: async function (req, res) {
    try {
      const drinks = await Drink.find({ inStock: true });
      res.json(drinks);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  infoByDrink: async function (req, res) {
    const { id } = req.params;
    try {
      const drink = await Drink.findById(id);
      res.json(drink);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  addDrink: async function (req, res) {
    const { name, price, inStock, caffeine, volume, description } = req.body;
    try {
      await Drink.create({
        name,
        price,
        inStock,
        caffeine,
        volume,
        description,
      });
      res.json("Drink created");
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  deleteDrink: async function (req, res) {
    const { id } = req.params;
    try {
      await Drink.findByIdAndRemove(id);
      res.json("Drink deleted");
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  changeDrink: async function (req, res) {
    const { id } = req.params;
    try {
      const drink = await Drink.findByIdAndUpdate(id, { ...req.body });
      res.json(drink);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
};
