import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  shops?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  let data: Payload;
  try {
    data = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Μη έγκυρα δεδομένα." }, { status: 400 });
  }

  const firstName = (data.firstName || "").trim();
  const lastName = (data.lastName || "").trim();
  const company = (data.company || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const shops = (data.shops || "").trim();

  if (!firstName || !lastName || !company || !email || !phone || !shops) {
    return NextResponse.json(
      { error: "Συμπληρώστε όλα τα πεδία." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Μη έγκυρο email." }, { status: 400 });
  }

  const endpoint = process.env.APPS_SCRIPT_URL;
  if (!endpoint) {
    console.error("APPS_SCRIPT_URL is not configured");
    return NextResponse.json(
      { error: "Ο διακομιστής δεν είναι ρυθμισμένος." },
      { status: 500 }
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        company,
        email,
        phone,
        shops,
        userAgent: req.headers.get("user-agent") || "",
        referer: req.headers.get("referer") || "",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => "");
      console.error("Apps Script upstream error:", upstream.status, text);
      return NextResponse.json(
        { error: "Αποτυχία αποστολής. Δοκιμάστε ξανά." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apps Script fetch failed:", err);
    return NextResponse.json(
      { error: "Αποτυχία αποστολής. Δοκιμάστε ξανά." },
      { status: 502 }
    );
  }
}
