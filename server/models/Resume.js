import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    fileUrl: { type: String, required: true },
    fileSize: { type: String },
    uploadedAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default mongoose.models.Resume || mongoose.model('Resume', resumeSchema);
