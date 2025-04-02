import { writeFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Define local folder path (public/uploads)
    const uploadDir = join(process.cwd(), "public/uploads");
    const filePath = join(uploadDir, file.name);

    // Save the file
    await writeFile(filePath, buffer);

    return NextResponse.json({ message: "File uploaded", url: `/uploads/${file.name}` });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
