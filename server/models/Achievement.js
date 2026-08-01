import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  category: { type: String, default: 'Award' }, // Winner, Certification, Hackathon, Leadership
  description: { type: String, required: true },
  badgeUrl: { type: String },
  verifyUrl: { type: String }
});

export default mongoose.models.Achievement || mongoose.model('Achievement', achievementSchema);
