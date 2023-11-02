const { Policy, Client } = require("../models");

module.exports = {
  getAll,
  getOne: getOnePolicy,
  create,
  delete: deletePolicy,
  updatePolicy,
};

// Get all policies
async function getAll(req, res) {
  try {
    const policyList = await Policy.findAll();
    return res.json(policyList);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Get one policy from db
async function getOnePolicy(req, res) {
  const id = req.params.policyId;
  try {
    const policy = await Policy.findOne({
      where: { id },
    });
    return res.json(policy);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Create a policy
async function create(req, res) {
  const {
    category,
    policyName,
    policyNo,
    nextPayment,
    commencement,
    expiry,
    premium,
    lifeAssured,
    coverage,
    paymentPeriod,
  } = req.body;
  const id = req.params.clientId;
  try {
    const client = await Client.findOne({ where: { id } });
    const policy = await Policy.create({
      category,
      policyName,
      policyNo,
      nextPayment,
      commencement,
      expiry,
      premium,
      lifeAssured,
      coverage,
      paymentPeriod,
      clientId: client.id,
    });
    return res.json(policy);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Delete a policy
async function deletePolicy(req, res) {
  const id = req.params.policyId;
  try {
    const policy = await Policy.findOne({
      where: { id },
    });
    await policy.destroy();
    return res.json({ message: `Policy - ${policy.policyName} removed!` });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Edit a policy
async function updatePolicy(req, res) {
  const id = req.params.policyId;
  const {
    category,
    policyName,
    policyNo,
    nextPayment,
    commencement,
    expiry,
    premium,
    lifeAssured,
    coverage,
    paymentPeriod,
  } = req.body;
  try {
    const policy = await Policy.findOne({
      where: { id },
    });
    (policy.category = category),
      (policy.policyName = policyName),
      (policy.policyNo = policyNo),
      (policy.nextPayment = nextPayment),
      (policy.commencement = commencement),
      (policy.expiry = expiry),
      (policy.premium = premium),
      (policy.lifeAssured = lifeAssured),
      (policy.coverage = coverage),
      (policy.paymentPeriod = paymentPeriod),
      await policy.save();
    return res.json(policy);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}
