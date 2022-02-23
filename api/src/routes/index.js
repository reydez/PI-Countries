const { Router } = require("express");

const { Country, Activity, op } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", (req, res) => {
  const { name } = req.query;

  if (name) {
    Country.findAll({
      where: {
        name: {
          [op.iLike]: `%${name}%`,
        },
      },
      include: Activity,
    }).then((response) => {
      if (response.length === 0) {
        return res.status(404).send("El pais no existe");
      }
      return res.status(200).json(response);
    });
  } else {
    Country.findAll({ include: Activity }).then((response) => {
      return res.status(200).json(response);
    });
  }
});

router.get("/countries/:idPais", (req, res) => {
  const { idPais } = req.params;

  if (!idPais) {
    return res.status(404).send("<h1>ID de pais no es valido</h1>");
  }

  Country.findOne({
    where: {
      ID: idPais,
    },
    include: Activity,
  })
    .then((country) => {
      res.status(200).json(country);
    })
    .catch((error) => {
      return res.status(404).send("<h1>" + error + "</h1>");
    });
});

router.post("/activity", (req, res) => {
  console.log(req.body);
  /* Activity.create(
    {
      nombre: req.body.nombre,
      dificultad: req.body.dificultad,
      duracion: req.body.duracion,
      temporada: req.body.temporada,
    },
    {
      include: [Country],
    }
  ); */
  res.status(200).json({ msg: "Actividad registrada correctamente" });
});

module.exports = router;
