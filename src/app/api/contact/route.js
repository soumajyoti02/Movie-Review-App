import dbConnect from "@/utils/dbconn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();
        console.log("Body received")
        await dbConnect();
        console.log("connected")

        await Contact.create(body);

        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}