const mongoose = require('mongoose');

const pathSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ['walking', 'cycling', 'accessibility'],
    default: 'walking'
  },
  points: [{
    lat: Number,
    lng: Number,
    name: String,
    type: {
      type: String,
      enum: ['waypoint', 'intersection', 'entrance', 'exit']
    }
  }],
  distance: Number,
  estimatedTime: Number,
  accessibility: {
    hasStairs: Boolean,
    hasElevator: Boolean,
    isWheelchairAccessible: Boolean
  },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Path', pathSchema); 