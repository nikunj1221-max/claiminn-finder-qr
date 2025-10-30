import React from "react";
import logo from "@/assets/logo.jpg";
/**
 * Claiminn Login Page
 * - TailwindCSS required
 * - Drop into any React/Next.js app (app/page.tsx or a route component)
 */
interface LoginProps {
  onLoginSuccess: () => void;
}
export default function ClaiminnLogin({ onLoginSuccess }: LoginProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo, we'll use hardcoded credentials
    // In production, replace with actual authentication
    onLoginSuccess();
  };
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Brand Panel - Hidden on mobile, visible on md screens and up */}
        <section className="hidden md:flex relative bg-amber-600/90 text-white p-8 md:p-12 flex-col gap-8 justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-sm">
              Claiminn
            </h1>
            <div className="mt-8 space-y-4 font-medium/relaxed max-w-md">
              <p>Find What You Lost, Fast and Securely.</p>
              <p>Connecting People to Their Lost Belongings.</p>
              <p>
                Report. Match. Reclaim — <span className="font-semibold">All in One Place.</span>
              </p>
            </div>
          </div>

          {/* Illustration (inline SVG to avoid external assets) */}
          <div className="mx-auto w-full max-w-sm">
            <LostFoundIllustration />
          </div>

          {/* subtle shadow pad at bottom */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
        </section>

        {/* Right Form Panel */}
        <section className="px-6 sm:px-10 md:px-12 lg:px-8 py-5 md:py-14 flex items-center bg-white">
          <div className="w-full max-w-md mx-auto">
            
             <div className="flex items-center gap-0 mt-0 mb-20 ">
            <img 
              src={logo} 
              alt="ClaimInn Logo" 
              className="w-8 h-8 rounded-full object-contain"
            />
            <span className="text-2xl font-bold text-foreground ml-2">ClaimInn</span>
          </div>
            <header className="mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Login to your Account
              </h2>
              <p className="text-slate-500 mt-2">Please enter your details to login</p>
            </header>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                  Email or Phone
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="username"
                  placeholder="demo@claiminn.com"
                  className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="inline-flex items-center gap-2 text-sm text-slate-600 select-none">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500" />
                  Remember me
                </label>
                <a href="#" className="text-sm font-medium text-rose-600 hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-amber-600 hover:bg-amber-700 active:bg-amber-800 transition px-4 py-2.5 text-base font-semibold text-white shadow-sm"
              >
                Login
              </button>

              <div className="flex items-center gap-4 my-2">
                <div className="h-px flex-1 bg-slate-200" />
                <span className="text-slate-400 text-sm">or</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <button
                type="button"
                className="w-full rounded-md border border-slate-300 bg-white hover:bg-slate-50 transition px-4 py-2.5 text-sm font-semibold text-slate-700 flex items-center justify-center gap-3"
              >
                <GoogleLogo className="size-5" />
                Continue with Google
              </button>

              <p className="text-sm text-slate-600 text-center pt-3">
                Don’t have and account yet ?{' '}
                <a href="" className="font-semibold text-amber-700 hover:underline">
                  Signup Now
                </a>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}


function GoogleLogo({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 11v3.6h5.1c-.2 1.3-1.5 3.8-5.1 3.8-3.1 0-5.7-2.6-5.7-5.8s2.6-5.8 5.7-5.8c1.8 0 3 .7 3.7 1.4l2.5-2.4C16.9 4.6 14.7 3.6 12 3.6 6.9 3.6 2.7 7.8 2.7 12.9S6.9 22.2 12 22.2c7.2 0 9.5-5 9.5-7.6 0-.5 0-.8-.1-1.1H12z" fill="currentColor"/>
    </svg>
  );
}

function LostFoundIllustration() {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lost and Found illustration">
      <rect x="32" y="64" width="352" height="320" rx="20" ry="20" fill="#111827" opacity="0.9" />
      <rect x="52" y="84" width="312" height="280" rx="12" ry="12" fill="#FFB020" />
      <rect x="70" y="102" width="276" height="244" rx="8" ry="8" fill="#111827" />
      <text x="210" y="170" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="54" fill="#FFB020">LOST</text>
      <text x="210" y="226" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="54" fill="#FFB020">&</text>
      <text x="210" y="282" textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontWeight="800" fontSize="54" fill="#FFB020">FOUND</text>
      {/* magnifying glass */}
      <circle cx="340" cy="188" r="42" fill="#111827" stroke="#111827" />
      <circle cx="340" cy="188" r="38" fill="#FFB020" />
      <rect x="332" y="226" width="16" height="78" rx="8" fill="#111827" />
      {/* tab/stand at bottom */}
      <path d="M64 364h288v16c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-16z" fill="#111827" />
      {/* base shadow */}
      <ellipse cx="208" cy="420" rx="140" ry="16" fill="#000" opacity=".18"/>
    </svg>
  );
} 
