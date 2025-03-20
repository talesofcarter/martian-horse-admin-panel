import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full login-background">
      <div className="bg-white shadow-lg rounded-lg px-8 py-8 max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-colors duration-200 placeholder-gray-400"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-base font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-zinc-800 focus:border-zinc-800 outline-none transition-colors duration-200 placeholder-gray-400"
                type="password"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <a
                href="#"
                className="text-sm text-zinc-800 hover:text-black hover:underline transition-colors duration-200"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-2.5 px-4 rounded-md bg-black text-white font-medium hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-800 focus:ring-offset-2 transition-all cursor-pointer"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-slate-600 hover:text-black hover:underline font-medium"
          >
            Contact administrator
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
