import mongoose from 'mongoose';

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['Publication', 'Certificate', 'Award', 'Event'], required: true },
  issuer: String,
  date: String,
  description: String,
  image: String, // e.g. /certificates/unlox.jpg — put the file in frontend/public/certificates
  link: String,
  order: { type: Number, default: 0 },
});

export default mongoose.model('Certification', certificationSchema);
