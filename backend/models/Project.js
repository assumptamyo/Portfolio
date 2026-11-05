import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, default: 'Full-Stack' },
    description: { type: String, required: true },
    highlights: [String],
    image: String,
    tags: [String],
    liveUrl: String,
    repoUrl: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
