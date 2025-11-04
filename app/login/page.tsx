import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-background-dark rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex justify-center mx-auto mb-4 w-12 h-12 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-text-light dark:text-text-dark">
            Welcome to MediTrack
          </h1>
          <p className="mt-2 text-sm text-subtle-light dark:text-subtle-dark">
            Your Biomedical CMMS Solution
          </p>
        </div>
        <form action="#" className="space-y-6" method="POST">
          <div>
            <label
              className="block text-sm font-medium text-text-light dark:text-text-dark"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                autoComplete="email"
                className="form-input block w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-DEFAULT shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-light dark:text-text-dark placeholder-subtle-light dark:placeholder-subtle-dark"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium text-text-light dark:text-text-dark"
              htmlFor="password"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                autoComplete="current-password"
                className="form-input block w-full px-4 py-3 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-DEFAULT shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm text-text-light dark:text-text-dark placeholder-subtle-light dark:placeholder-subtle-dark"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                className="font-medium text-primary hover:text-primary/80"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-DEFAULT shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
