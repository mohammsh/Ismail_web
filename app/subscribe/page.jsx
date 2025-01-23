"use client";

import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Subscribe for Email Alerts</h2>
      <form
        onSubmit={handleSubscribe}
        className="max-w-md mx-auto p-4 border rounded-md"
      >
        <label className="block mb-2 font-semibold">Email Address:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded-md mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
