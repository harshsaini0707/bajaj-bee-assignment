import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        is_success: true,
        official_email: process.env.OFFICIAL_EMAIL || "YOUR_CHITKARA_EMAIL",
    });
}
