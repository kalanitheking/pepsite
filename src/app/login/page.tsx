import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Sign In | King Research" };

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 max-w-sm w-full p-8">
        <div className="text-center mb-8">
          <Image
            src="/images/logo.svg"
            alt="King Research"
            width={160}
            height={40}
            className="h-10 w-auto mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-dark-text mb-2">
            Sign In
          </h1>
          <p className="text-muted-text text-sm">
            Sign in to your King Research account.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-dark-text mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-dark-text mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Your password"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-dark-text text-white py-3 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-xs text-muted-text mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-dark-text hover:opacity-70">
            Create one free
          </Link>
        </p>
      </div>
    </div>
  );
}
