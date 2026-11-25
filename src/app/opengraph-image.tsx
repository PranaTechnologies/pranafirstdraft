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
          backgroundColor: "#F4F5F0",
          color: "#171C19",
          padding: "72px",
          fontFamily: "sans-serif",
          border: "1px solid #DDE1DA",
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
            Machines that understand the world they move through.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#5C645E",
              maxWidth: "900px",
              lineHeight: 1.45,
            }}
          >
            Visual-inertial navigation, spatial perception, and onboard autonomy systems for UAVs and robotic platforms.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #DDE1DA",
            paddingTop: "24px",
            fontSize: "18px",
            letterSpacing: "0.1em",
            color: "#171C19",
          }}
        >
          <span>PIVO CORE ENGINE · PX4 / ROS 2 READY</span>
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
