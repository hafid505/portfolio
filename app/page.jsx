export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      {/* Profile Image */}
      <div className="mb-6">
        <img
          src="/profile.jpg"
          alt="Abdulhafid"
          className="w-40 h-40 rounded-full object-cover border border-gray-700"
        />
      </div>

      {/* Name */}
      <h1 className="text-3xl md:text-5xl font-semibold mb-3 text-center">
        Abdulhafid
      </h1>

      {/* Role */}
      <p className="text-gray-400 text-center mb-6">
        Graphic Designer | Video Editor | Social Media Manager
      </p>

      {/* CV Button */}
      <a
        href="/cv.pdf"
        download
        className="bg-lime-400 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
      >
        Download my CV
      </a>

    </main>
  );
}
