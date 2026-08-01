import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    issuer: { type: String, required: true },
    issueDate: { type: String, required: true },
    credentialId: { type: String },
    imageUrl: { type: String },
    verifyUrl: { type: String }
  },
  { timestamps: true }
);

export default mongoose.models.Certificate || mongoose.model('Certificate', certificateSchema);
