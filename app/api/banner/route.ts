import { NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Banner from "@/app/models/banner";

export async function GET() {
  try {
    await connectToDatabase();

    const bannerList = await Banner.find();

    return NextResponse.json(bannerList);
  } catch (error) {
    console.error("Error fetching Banners:", error);

    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
