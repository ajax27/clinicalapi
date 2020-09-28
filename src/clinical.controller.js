import dao from './clinical.dao';
import mongodb from 'mongodb';

exports.getAll = (req, res) => {
  dao.get(
    { patient: mongodb.ObjectID(req.params.patientId) },
    (error, clinicalData) => {
      if (error) console.log(error);
      res.send(clinicalData);
    }
  );
};

exports.create = (req, res) => {
  const clinical = req.body;
  dao.create(clinical, (error, clinical) => {
    if (error) console.log(error);
    res.send(clinical);
  });
};
