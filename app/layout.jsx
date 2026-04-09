// app/layout.jsx
export const metadata = {
  title: "Abdulhafid Portfolio",
  description: "Graphic Designer, Video Editor, Social Media Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
