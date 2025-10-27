import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import { cloudinary } from "@/lib/cloudinary";

interface ImageResponse {
  public_id: string;
  secure_url: string;
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  // console.log("Session", session);

  if (!session) {
    return NextResponse.json(
      { success: false, message: "Unauthorized access" },
      { status: 401 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file uploaded" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await new Promise<ImageResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: `elevetr/users/${session.user._id}` },
        (err, result) => {
          if (err) reject(err);
          else resolve(result as ImageResponse);
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json(
      { success: true, publicId: result.public_id, url: result.secure_url },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { success: false, message: "Error uploading image" },
      { status: 500 }
    );
  }
}
