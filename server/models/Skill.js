import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g. 'Programming', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Tools'
  proficiency: { type: Number, required: true }, // 0 to 100
  level: { type: String, default: 'Advanced' }, // Beginner, Intermediate, Advanced, Expert
  iconName: { type: String },
  yearsExperience: { type: String, default: '2+ yrs' }
});

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema);
