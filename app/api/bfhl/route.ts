import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getFibonacci, isPrime, getLCM, getHCF } from "../../utils/math";
import { getAIResponse } from "../../utils/ai";

// Schema for input validation
const BFHLSchema = z.object({
    fibonacci: z.number().int().optional(),
    prime: z.array(z.number().int()).optional(),
    lcm: z.array(z.number().int()).optional(),
    hcf: z.array(z.number().int()).optional(),
    AI: z.string().optional(),
}).refine((data) => {
    // Ensure exactly one key is present
    const keys = Object.keys(data).filter(key => data[key as keyof typeof data] !== undefined);
    return keys.length === 1;
}, {
    message: "Request must contain exactly one functional key (fibonacci, prime, lcm, hcf, or AI)",
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate request body
        const result = BFHLSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json({
                is_success: false,
                error: result.error.issues[0].message,
            }, { status: 400 });
        }

        const { fibonacci, prime, lcm, hcf, AI } = result.data;
        const official_email = process.env.OFFICIAL_EMAIL || "YOUR_CHITKARA_EMAIL";
        let data: any;

        if (fibonacci !== undefined) {
            data = getFibonacci(fibonacci);
        } else if (prime !== undefined) {
            data = prime.filter(isPrime);
        } else if (lcm !== undefined) {
            data = getLCM(lcm);
        } else if (hcf !== undefined) {
            data = getHCF(hcf);
        } else if (AI !== undefined) {
            data = await getAIResponse(AI);
        }

        return NextResponse.json({
            is_success: true,
            official_email,
            data,
        });

    } catch (error) {
        console.error("BFHL API Error:", error);
        return NextResponse.json({
            is_success: false,
            error: "Internal Server Error",
        }, { status: 500 });
    }
}

// Security: Optional GET method to handle unauthorized access
export async function GET() {
    return NextResponse.json({
        is_success: false,
        error: "Method Not Allowed. Use POST for this endpoint.",
    }, { status: 405 });
}
