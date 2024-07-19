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

const add = async (req, res, next) => {
  try {
    const { title, location, description, userId } = req.body;

    const newRando = {
      title,
      location,
      description,

      userId,
    };
    // console.log("coucou2");
    // console.log(newRando);
    const newRandoId = await tables.rando.create(newRando);

    res.status(201).json({ id: newRandoId });
  } catch (err) {
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
