import mongoose from 'mongoose';
import clinicalSchema from './clinical.model';

clinicalSchema.statics = {
  get: function (query, cb) {
    this.find(query, cb);
  },
  create: function (data, cb) {
    const clinicalData = new this(data);
    clinicalData.save(cb);
  },
};

const clinicalModel = mongoose.model('Clinical', clinicalSchema, 'clinical');

module.exports = clinicalModel;
