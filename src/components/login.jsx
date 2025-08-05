"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://109.123.252.86:8085/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, number }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Invalid email or number');
      }

      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/home');
    } catch (err) {
      setError(err.message || 'Something went wrong');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
    className="min-h-screen w-full p-[100px] px-8 py-8 flex items-center justify-center bg-cover "
    style={{ backgroundImage: "url('/backgrund.png')" }}
  >


  
      <div className="w-full h-full max-w-md p-8 px-8  text-black  ">
        <div className="flex justify-center  mb-6">
          <Image
            src="/logoiptv.svg"
            alt="Company Logo"
            width={181.99}
            height={46.45}
            className="object-contain"
            priority
          />
        </div>


        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* email field */}
          <div className="relative">
            <h1 className="text-[19px] text-white ml-3">Email Adress</h1>
         
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adam@*******.com"
              disabled={isLoading}
              required
              className="w-full h-[86px] pl-12  py-3 bg-[#F3F3F3] text-black rounded-[30px] border border-gray-200 focus:ring-2 focus:ring-green-400 focus:outline-none placeholder-gray-500"
            />
          </div>

          {/* number  field */}
          <div className="relative">
          <h1 className="text-[19px] text-white ml-3">Number Or WhatsApp Number</h1>

            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="+*****************"
              disabled={isLoading}
              required
              className="w-full pl-12   bg-[#F3F3F3]  h-[86px] py-3  text-black rounded-[30px] border border-gray-200 focus:ring-1 focus:ring-green-400 focus:outline-none placeholder-gray-500"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full h-[158px] py-3 px-4 rounded-[20px] text-white font-semibold transition-all duration-200 ${
              isLoading
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-[#0A1F48] hover:bg-gray-900 focus:ring-2 focus:ring-green-400 focus:ring-offset-2'
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                  />
                </svg>
                Processing...
              </span>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
