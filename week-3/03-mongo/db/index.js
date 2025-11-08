const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    minlength: [3, "Username must be at least 3 characters long"]
  },
  fullname: {
    type: String,
    required: [true, "Full name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  hashedPassword: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"]
  },
  role: {
    type: String,
    enum: ['admin', 'superadmin'],
    default: 'admin'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  profileImage: {
    type: String, // URL to profile image
    default: ""
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
    minlength: [3, "Username must be at least 3 characters long"]
  },
  fullname: {
    type: String,
    required: [true, "Full name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"]
  },
  hashedPassword: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"]
  },
  role: {
    type: String,
    enum: ['student', 'instructor'],
    default: 'student'
  },
  profileImage: {
    type: String,
    default: ""
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  enrolledCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  completedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  lastLogin: {
    type: Date
  }
}, { timestamps: true });

const CourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: [true, "Course name is required"],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    trim: true,
    enum: ['programming', 'design', 'marketing', 'business', 'data science', 'other'],
    default: 'other'
  },
  level: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  thumbnail: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    default: 0,
    min: [0, "Price cannot be negative"]
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // assuming instructor is a user
    required: true
  },
  studentsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    totalReviews: {
      type: Number,
      default: 0
    }
  },
  duration: {
    type: String, // e.g., "5h 30m"
    default: "0h 0m"
  },
  lessonsCount: {
    type: Number,
    default: 0
  },
  published: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}