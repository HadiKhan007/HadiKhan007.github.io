import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "8px",
          fontSize: 18,
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
