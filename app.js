const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOLA MUNDO");
});

//Crear un registo
app.post(`/post`, async (req, res) => {
  const { Document, Name, Surname, D_Birth, Address, Email, Phone } = req.body;
  const result = await prisma.post.create({
    data: {
      Document,
      Name,
      Surname,
      D_Birth,
      Address,
      Email,
      Phone,
    },
  });
  res.json(result);
});

//Mostrar todos los registos
app.get(`/posts`, async (req, res) => {
  const posts = await prisma.post.findMany();

  res.json((data = { posts }));
});

//Actualizar un registro
app.put(`/post/:id`, async (req, res) => {
  const { id } = req.params;
  const { Document, Name, Surname, D_Birth, Address, Email, Phone } = req.body;
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { Document, Name, Surname, D_Birth, Address, Email, Phone },
  });
  res.json(post);
});

//Eliminar un registro
app.delete(`/post/:id`, async (req, res) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });
  res.json("Eliminado");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Escuchando el puerto, ${PORT}`));
