import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  clinical: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Clinical',
    },
  ],
});

module.exports = patientSchema;
