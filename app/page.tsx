import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-200 dark:from-gray-900 dark:to-gray-800 text-slate-900 dark:text-white px-6">

    <div className="w-52 h-59  rounded-full overflow-hidden shadow-lg mb-6">
      <Image
        src="/davod.png"
        alt="Portfolio picture"
        width={208}
        height={208}
        className="object-cover object-center w-full h-full"
        priority
      />
    </div>
      <h1 className="text-4xl font-extrabold mb-4 text-center tracking-tight">
        Hi, I am <span className="text-blue-500 dark:text-blue-400">Davod</span>
      </h1>
      <p className="max-w-xl text-lg text-center mb-10 font-medium text-slate-600 dark:text-slate-300">
        Full stack web developer crafting clean, scalable and performant applications
      </p>

      <div className="flex gap-4">
        <a
          href="./projects"
          className="px-6 py-3 rounded-full bg-blue-500 text-white shadow hover:bg-blue-600 transition font-semibold text-base"
        >
          View Projects
        </a>
        <a
          href="./contact"
          className="px-6 py-3 rounded-full border-2 border-blue-400 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/20 transition font-semibold text-base"
        >
          Contact Me
          test test
        </a>
      </div>
      <footer className="mt-16 text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Davod Nikoyi. All rights reserved.
      </footer>
    </main>
  );
}
