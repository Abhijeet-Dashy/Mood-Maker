import React, { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navi = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Login submitted:", formData);
  };

  const handleSignupRedirect = () => {
    console.log("Redirect to signup");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex">
      {/* Left Side Panel */}
      <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20">
        {/* Empty space for image */}
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 bg-black/20 backdrop-blur-sm">
        <div className="max-w-md w-full">
          {/* Welcome Message */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Feel Better?
            </h2>
          </div>

          {/* Login Form */}
          <div className="space-y-6 mb-8 ">
            {/* Email Input */}
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border-2 text-white placeholder-purple-300 transition-all duration-300 ${
                    focusedInput === "email"
                      ? "border-purple-400 shadow-lg shadow-purple-500/25"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedInput("password")}
                  onBlur={() => setFocusedInput(null)}
                  className={`w-full pl-12 pr-12 py-4 rounded-2xl bg-white/10 border-2 text-white placeholder-purple-300 transition-all duration-300 ${
                    focusedInput === "password"
                      ? "border-purple-400 shadow-lg shadow-purple-500/25"
                      : "border-white/20 hover:border-white/40"
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={handleLogin}
              className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
                hoveredButton === "login"
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-2xl shadow-pink-500/50 scale-105"
                  : "bg-gradient-to-r from-pink-500/80 to-purple-600/80 text-white hover:from-pink-500 hover:to-purple-600"
              }`}
              onMouseEnter={() => setHoveredButton("login")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Login
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center mb-8">
            <div className="flex-1 h-px bg-white/20"></div>
            <span className="mx-4 text-purple-200">or</span>
            <div className="flex-1 h-px bg-white/20"></div>
          </div>

          {/* Signup Section */}
          <div className="text-center">
            <p className="text-purple-200 mb-4">Don't have an account?</p>
            <button
              onClick={() => navi("/signup")}
              className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
                hoveredButton === "signup"
                  ? "bg-white text-purple-900 shadow-2xl shadow-purple-500/50 scale-105"
                  : "bg-white/10 text-white border-2 border-white/20 hover:border-white/40"
              }`}
              onMouseEnter={() => setHoveredButton("signup")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
