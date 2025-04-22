import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900"
    style={{
      backgroundImage: "url(src/assets/blur-hospital_1203-7972.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        
        <form className="mt-6">
          <label className="block text-gray-700">Full Name</label>
          <input type="text" className="w-full p-2 border rounded mt-1" placeholder="Enter your full name" />

          <label className="block text-gray-700 mt-4">Email</label>
          <input type="email" className="w-full p-2 border rounded mt-1" placeholder="Enter your email" />

          <label className="block text-gray-700 mt-4">Password</label>
          <input type="password" className="w-full p-2 border rounded mt-1" placeholder="Create a password" />

          <button className="w-full bg-blue-500 text-white p-2 rounded mt-6 hover:bg-blue-700">Sign Up</button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
