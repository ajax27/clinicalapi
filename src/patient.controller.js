import dao from './patient.dao';

exports.getAll = (req, res) => {
  dao.get({}, (error, patients) => {
    if (error) console.log(error);
    res.send(patients);
  });
};

exports.create = (req, res) => {
  const patient = req.body;
  dao.create(patient, (error, patient) => {
    if (error) console.log(error);
    res.send(patient);
  });
};

exports.update = (req, res) => {
  const patient = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
  };
  dao.update({ _id: req.params.id }, patient, (error, patient) => {
    if (error) console.log(error);
    res.send(patient, 'Patient Updated!');
  });
};

exports.delete = (req, res) => {
  dao.delete({ _id: req.params.id }, (error, result) => {
    if (error) console.log(error);
    res.send(result);
  });
};
