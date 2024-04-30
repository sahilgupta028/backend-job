import dbConnect from "@/lib/dbConnect";
import CourseModel from "@/model/Course";
import { courseSchema } from "@/schema/courseSchema";


export async function GET(request: Request){

    console.log("function called 2")
    await dbConnect();

    console.log(request.url);

    try {
        const {searchParams} = new URL(request.url);
        const param = searchParams.get("id");
        console.log(param)

        const courses = await CourseModel.findById(param)
    
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
        console.log("Error fetching courses ", error)

        return Response.json({
            success: false,
            message: "Error connecting for courses"
        })
    }
}

