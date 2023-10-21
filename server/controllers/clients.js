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
    return res.json(items);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Get one client from db
async function getOneClient(req, res) {
  const uuid = req.params.itemUuid; //req.params.listUuid;
  try {
    const item = await Client.findOne({
      where: { uuid },
    });
    return res.json(item);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Create a client
async function create(req, res) {
  const { firstName, lastName, dob, sex, contact } = req.body;
  const uuid = req.params.clientUuid;
  try {
    const clientList = await Client.findOne({ where: { uuid } });
    const client = await Client.create({
      firstName,
      lastName,
      dob,
      sex,
      contact,
    });
    return res.json(item);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Delete an item
async function deleteClient(req, res) {
  const uuid = req.params.clientUuid;
  try {
    const client = await Client.findOne({
      where: { uuid },
    });
    const id = client.id;
    await item.destroy();
    return res.json({ message: `Item - ${itemName} removed!` });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

async function updateClient(req, res) {
  const uuid = req.params.clientUuid;
  const { firstName, lastName, dob, sex, contact } = req.body;
  try {
    const client = await Client.findOne({
      where: { uuid },
    });
    client.firstName = firstName;
    client.lastName = lastName;
    client.dob = dob;
    client.sex = price;
    client.contact = contact;
    await client.save();
    return res.json(item);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}
