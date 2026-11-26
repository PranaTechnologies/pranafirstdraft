import { ImageResponse } from "next/og";

export const alt = "Perception Labs — Intelligence for Autonomous Machines";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F3F3ED",
          color: "#171C19",
          padding: "72px",
          fontFamily: "sans-serif",
          border: "1px solid #DCDFD6",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#0B1110",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "9999px",
                  backgroundColor: "#B9E36A",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "24px",
                letterSpacing: "0.14em",
                fontWeight: 500,
              }}
            >
              PERCEPTION LABS
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              color: "#5C645E",
              letterSpacing: "0.12em",
            }}
          >
            AUTONOMY SYSTEMS · BHUBANESWAR
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: "-0.025em",
              maxWidth: "960px",
            }}
          >
            Intelligence for machines in motion.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#56635B",
              maxWidth: "900px",
              lineHeight: 1.45,
            }}
          >
            Building onboard perception and spatial intelligence for autonomous machines.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #DCDFD6",
            paddingTop: "24px",
            fontSize: "18px",
            letterSpacing: "0.1em",
            color: "#171C19",
          }}
        >
          <span>CORTEX · ONBOARD PERCEPTION &amp; STATE ESTIMATION</span>
          <span
            style={{
              backgroundColor: "#0B1110",
              color: "#B9E36A",
              padding: "8px 18px",
              borderRadius: "4px",
            }}
          >
            THE PERCEPTION FIELD
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
