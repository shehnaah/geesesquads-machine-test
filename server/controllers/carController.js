const cars = require('../Model/carSchema');


// add car
exports.addCar = async (req, res) => {
    console.log("inside add project function");
    const { carname,carcategory } = req.body;

            const newCar = new cars({
                carname,carcategory
            });

            await newCar.save();
            res.status(200).json(newCar);
        }

