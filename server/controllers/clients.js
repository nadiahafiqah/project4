const { Client } = require("../models");

module.exports = {
  getAll,
  getOne: getOneClient,
  create,
  delete: deleteClient,
  updateClient,
};

// Get all clients
async function getAll(req, res) {
  try {
    const clientList = await Client.findAll();
    return res.json(clientList);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Get one client from db
async function getOneClient(req, res) {
  const id = req.params.clientId;
  try {
    const client = await Client.findOne({
      where: { id },
    });
    return res.json(client);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Create a client
async function create(req, res) {
  const { firstName, lastName, dob, sex, contact } = req.body;
  // const uuid = req.params.clientUuid;
  console.log("Client route create");
  try {
    // const clientList = await Client.findOne({ where: { uuid } });
    const client = await Client.create({
      firstName,
      lastName,
      dob,
      sex,
      contact,
    });
    return res.json(client);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Delete a client
async function deleteClient(req, res) {
  const id = req.params.clientId;
  try {
    const client = await Client.findOne({
      where: { id },
    });
    const id = client.id;
    await item.destroy();
    return res.json({ message: `Item - ${itemName} removed!` });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Edit a client
async function updateClient(req, res) {
  const id = req.params.clientId;
  const { firstName, lastName, dob, sex, contact } = req.body;
  try {
    const client = await Client.findOne({
      where: { id },
    });
    client.firstName = firstName;
    client.lastName = lastName;
    client.dob = dob;
    client.sex = sex;
    client.contact = contact;
    await client.save();
    return res.json(client);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}
