export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-800 text-slate-900 dark:text-white px-6">
      <h1 className="text-4xl font-extrabold mb-4 text-center tracking-tight">
        Get in Touch
      </h1>
      <p className="max-w-xl text-lg text-center mb-10 font-medium text-slate-600 dark:text-slate-300">
        I would love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.
      </p>
      <a
        href="mailto:info@example.com"
        className="px-6 py-3 rounded-full bg-blue-500 text-white shadow hover:bg-blue-600 transition font-semibold text-base"
      >
        Email Me
      </a>
    </main>
  );
}
