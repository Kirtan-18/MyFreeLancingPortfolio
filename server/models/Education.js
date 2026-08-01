import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  institution: { type: String, required: true },
  degree: { type: String, required: true },
  fieldOfStudy: { type: String },
  duration: { type: String, required: true },
  grade: { type: String },
  highlights: [{ type: String }]
});

export default mongoose.models.Education || mongoose.model('Education', educationSchema);
