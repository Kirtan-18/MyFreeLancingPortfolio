import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String },
  category: { type: String, required: true }, // e.g. 'Cloud & DevOps', 'Full Stack', 'Enterprise / Odoo'
  technologies: [{ type: String }],
  features: [{ type: String }],
  image: { type: String },
  githubUrl: { type: String },
  liveDemoUrl: { type: String },
  featured: { type: Boolean, default: false },
  priority: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema);
