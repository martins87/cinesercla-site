import { NextRequest, NextResponse } from "next/server";

import connectToDatabase from "@/lib/db/connection";
import Schedule from "@/app/models/schedule";

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const idUnidade = searchParams.get("idUnidade");
    const idFilme = searchParams.get("idFilme");

    let query = {};

    if (idUnidade) {
      query = { ...query, idUnidade };
    }
    if (idFilme) {
      query = { ...query, idFilme };
    }

    const scheduleList = await Schedule.find(query).lean();

    return NextResponse.json(scheduleList, { status: 200 });
  } catch (error) {
    console.error("Error fetching schedule list:", error);

    return NextResponse.json(
      { error: "Failed to fetch schedule list" },
      { status: 500 }
    );
  }
}
