const { Policy } = require("../models");

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
  const uuid = req.params.policyUuid;
  try {
    const policy = await Policy.findOne({
      where: { uuid },
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
  const uuid = req.params.policyUuid;
  try {
    const policyList = await Policy.findOne({ where: { uuid } });
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
    });
    return res.json(policy);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Delete a policy
async function deletePolicy(req, res) {
  const uuid = req.params.clientUuid;
  try {
    const policy = await Policy.findOne({
      where: { uuid },
    });
    const id = policy.id;
    await policy.destroy();
    return res.json({ message: `Policy - ${policyName} removed!` });
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}

// Edit a policy
async function updatePolicy(req, res) {
  const uuid = req.params.clientUuid;
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
      where: { uuid },
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
      await client.save();
    return res.json(policy);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
}
