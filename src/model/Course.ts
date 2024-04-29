import mongoose, { Schema, Document } from "mongoose";

export interface Course extends Document {
    courseName: string;
    courseDescription: string;
    coursePrice: number;
    courseStartDate: Date;
    courseEndDate: Date;
    courseSyllabus: string;
    courseAbout: string;
    courseImage: string;
    courseOffering: string[];
    courseMentors: string[];
    courseCategories: string[];
}

const CourseSchema: Schema<Course> = new Schema({
    courseName: { type: String, required: true },
    courseDescription: { type: String, required: true },
    coursePrice: { type: Number, required: true },
    courseStartDate: { type: Date, required: true },
    courseEndDate: { type: Date, required: true },
    courseSyllabus: { type: String, required: true },
    courseAbout: { type: String, required: true },
    courseImage: { type: String, required: true },
    courseOffering: { type: [String], required: true },
    courseMentors: { type: [String], required: true },
    courseCategories: { type: [String], required: true }
});

const CourseModel = mongoose.models.Course as mongoose.Model<Course> || mongoose.model<Course>("Course", CourseSchema);

export default CourseModel;
