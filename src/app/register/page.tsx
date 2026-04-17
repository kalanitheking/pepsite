import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Create Account | King Research" };

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 max-w-md w-full p-8">
        <div className="text-center mb-8">
          <Image
            src="/images/logo.svg"
            alt="King Research"
            width={160}
            height={40}
            className="h-10 w-auto mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-dark-text mb-2">
            Create Your Account
          </h1>
          <p className="text-muted-text text-sm">
            Account required to browse pricing and complete purchases. For
            research use only.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-dark-text mb-1">
                First Name
              </label>
              <input
                type="text"
                placeholder="First"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-dark-text mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last"
                className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
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
              placeholder="Create a password"
              className="w-full px-3 py-2.5 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-gray-400"
            />
          </div>

          <label className="flex items-start gap-2 text-xs text-muted-text cursor-pointer">
            <input type="checkbox" className="mt-0.5 accent-gray-600" />
            <span>
              I confirm I am 21 or older and purchasing for legitimate research
              purposes only. I agree to the{" "}
              <Link href="/terms" className="underline hover:text-dark-text">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-dark-text">
                Privacy Policy
              </Link>
              .
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-dark-text text-white py-3 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-opacity"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-xs text-muted-text mt-6">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-dark-text hover:opacity-70">
            Sign in
          </Link>
        </p>

        <p className="text-center text-xs text-gray-400 mt-4">
          All products are sold for research purposes only and are not intended
          for human consumption.
        </p>
      </div>
    </div>
  );
}
