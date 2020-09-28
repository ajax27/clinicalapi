import patientController from './patient.controller';
import clinicalController from './clinical.controller';

module.exports = (router) => {
  router.get('/patients', patientController.getAll);
  router.post('/patients', patientController.create);
  router.put('/patients/:id', patientController.update);
  router.delete('/patients/:id', patientController.delete);

  router.get('/clinical/:patientId', clinicalController.getAll);
  router.post('/clinical', clinicalController.create);
};
