import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String },
  duration: { type: String, required: true },
  type: { type: String, default: 'Internship' }, // Full-time, Internship, Contract
  responsibilities: [{ type: String }],
  techStack: [{ type: String }],
  priority: { type: Number, default: 0 }
});

export default mongoose.models.Experience || mongoose.model('Experience', experienceSchema);
