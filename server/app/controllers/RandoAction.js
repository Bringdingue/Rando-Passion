const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const randos = await tables.rando.readAll();
    res.json(randos);
  } catch (err) {
    next(err);
  }
};

const randoByUser = async (req, res, next) => {
  try {
    const rando = await tables.rando.readByRando(req.query.user);
    res.json(rando);
  } catch (err) {
    next(err);
  }
};

// const add = async (req, res, next) => {
//   try {
//     const { title, location, description, user_id } = req.body;
//     const image = req.file ? req.file.filename : null;

//     const newRando = {
//       title,
//       location,
//       description,
//       image,
//       user_id,
//     };

//     const newRandoId = await tables.rando.create(newRando);
//     res.status(201).json({ id: newRandoId });
//   } catch (err) {
//     next(err);
//   }
// };

const add = async (req, res, next) => {
  // Extract the item data from the request body
  const formData = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.rando.create(formData);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const updatedVosRandos = await tables.rando.update(req.body);
    res.status(200).json({ updatedVosRandos });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  randoByUser,
  add,
  edit,
};
