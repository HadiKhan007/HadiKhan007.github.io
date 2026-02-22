import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
          borderRadius: 36,
          fontSize: 72,
          fontWeight: 700,
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        AH
      </div>
    ),
    { ...size }
  );
}
