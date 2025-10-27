import connectDB from "@/lib/connectDB";
import { formatZodError } from "@/lib/formatZodError";
import UserModel from "@/models/User";
import { signupSchema } from "@/schemas/signupSchema";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectDB();

  try {
    const body = await request.json();

    const result = signupSchema.safeParse(body);

    if (!result.success) {
      const formattedErrors = formatZodError(result.error);
      return NextResponse.json(
        { success: false, errors: formattedErrors },
        { status: 400 }
      );
    }

    const { name, email, password, bio, profilePic, currentFocus, subjects } =
      result.data;

    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Please fill all the fields" },
        { status: 400 }
      );
    }

    if (!subjects.length) {
      return NextResponse.json(
        { success: false, message: "Please add at least one subject" },
        { status: 400 }
      );
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserModel({
      name,
      email,
      password: hashedPassword,
      bio,
      profilePic,
      currentFocus,
      subjects,
    });

    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "User created successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json(
      { success: false, message: "Error while creating user" },
      { status: 500 }
    );
  }
}
