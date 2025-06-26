import Link from "next/link";
import Header from "@/app/components/Header";
import { MagicContainer, MagicCard } from "@/components/magicui/magic-card";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 bg-gradient-to-br from-white via-orange-50 to-orange-100 dark:from-black dark:via-neutral-900 dark:to-neutral-800 transition-colors duration-500 ease-in-out">
        <MagicContainer className="flex flex-col gap-8 px-4">
          {/* Welcome Card */}
          <MagicCard className="flex flex-col items-center justify-center text-center px-10 py-20 shadow-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Welcome to <span className="text-orange-500">Next Query</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
              The modern Q&amp;A platform for developers. Ask questions, share knowledge, and grow your reputation in a friendly community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/questions/ask"
                className="rounded-xl bg-orange-500 px-8 py-3 text-white font-semibold shadow-lg hover:bg-orange-600 transition"
              >
                Ask a Question
              </Link>
              <Link
                href="/questions"
                className="rounded-xl border border-orange-500 px-8 py-3 text-orange-500 font-semibold hover:bg-orange-100 dark:hover:bg-neutral-800 transition"
              >
                Browse Questions
              </Link>
            </div>
          </MagicCard>

          {/* CTA Card */}
          <MagicCard className="flex flex-col items-center justify-center text-center px-10 py-16 shadow-2xl bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
            <h3 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-4">
              Ready to share your knowledge?
            </h3>
            <Link
              href="/register"
              className="rounded-xl bg-orange-500 px-10 py-4 text-white text-lg font-semibold shadow-lg hover:bg-orange-600 transition"
            >
              Create an Account
            </Link>
          </MagicCard>
        </MagicContainer>
      </main>
    </>
  );
}
