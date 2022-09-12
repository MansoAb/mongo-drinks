const { Router } = require("express");
const router = Router();
const { drinkControllers } = require("../controllers/drink.controller");

router.get("/drinks", drinkControllers.showDrinks);
router.get("/drinks/in-stock", drinkControllers.showDrinksInStock);
router.get("/drinks/:id", drinkControllers.infoByDrink);
router.post("/drinks", drinkControllers.addDrink);
router.delete("/drinks/:id", drinkControllers.deleteDrink);
router.patch("/drinks/:id", drinkControllers.changeDrink);

module.exports = router;
