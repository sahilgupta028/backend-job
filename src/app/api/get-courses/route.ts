import dbConnect from "@/lib/dbConnect";
import CourseModel from "@/model/Course";
import { courseSchema } from "@/schema/courseSchema";


export async function GET(request: Request){

    console.log("function called")
    await dbConnect();

    try {
        const courses = await CourseModel.find()
    
        if(!courses){
            console.log("No course found")
            return Response.json({
                success: false,
                message: "No course found",
                courses: []
            })
        }
    
        console.log("courses: ", courses)
    
        return Response.json(
            {
                success: true,
                message: "all courses fetched",
                courses: courses
            }
        )
    } catch (error) {
        console.log("Error fetching corses ", error)

        return Response.json({
            success: false,
            message: "Error connecting for courses"
        })
    }
}

