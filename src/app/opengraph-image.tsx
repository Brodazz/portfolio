// OG image generata dinamicamente (1200×630). Next la collega in automatico
// ai meta Open Graph/Twitter. Coerente col tema dark + accent verde.

import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = "Alessandro Broda — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0f0d",
          backgroundImage:
            "radial-gradient(circle at 75% 25%, rgba(52,211,153,0.30), transparent 55%)",
          color: "#e8edeb",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge disponibilità */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#34d399",
            fontSize: 26,
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              backgroundColor: "#34d399",
            }}
          />
          {profile.availability}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: "-3px",
            lineHeight: 1.05,
            color: "#34d399",
          }}
        >
          {profile.name}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#e8edeb",
            marginTop: "8px",
          }}
        >
          {profile.role}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#7e928a",
            marginTop: "32px",
            maxWidth: "900px",
          }}
        >
          {profile.tagline}
        </div>
      </div>
    ),
    size
  );
}
