export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <img
          src="/profile.jpg"
          alt="Abdulhafid"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #444",
            display: "block",
          }}
        />
      </div>

      <h1
        style={{
          fontSize: "44px",
          fontWeight: "700",
          margin: "0 0 12px 0",
          lineHeight: "1.1",
        }}
      >
        Abdulhafid
      </h1>

      <p
        style={{
          fontSize: "20px",
          color: "#b3b3b3",
          margin: "0 0 32px 0",
          maxWidth: "700px",
          lineHeight: "1.6",
        }}
      >
        Graphic Designer | Video Editor | Social Media Manager
      </p>

      <a
        href="/cv.pdf"
        download
        style={{
          backgroundColor: "#7CFC00",
          color: "#000000",
          padding: "14px 28px",
          borderRadius: "999px",
          fontWeight: "700",
          fontSize: "18px",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Download my CV
      </a>
    </main>
  );
}
