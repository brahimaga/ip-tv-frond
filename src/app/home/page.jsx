"use client";

import React, { useState } from "react";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit');
  const [email, setEmail] = useState('');
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [showPromoInput, setShowPromoInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      paymentMethod: selectedMethod,
      email,
      subscribeNewsletter,
      promoCode
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#3FCAAA] to-[#13CD7D] shadow-md rounded-lg">
          <span className="font-bold text-lg text-gray-700">3</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-700">Select Payment Method</h1>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-6 mb-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mb-8">
            {/* Credit Card Option */}
            <div 
              className={`p-4 rounded-lg border-2 ${selectedMethod === 'credit' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'} cursor-pointer transition-all`}
              onClick={() => setSelectedMethod('credit')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 ${selectedMethod === 'credit' ? 'border-blue-600 border-[7px]' : 'border-gray-300'}`}></div>
                  <span className="font-bold text-gray-900">Credit Card</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-4 bg-gray-200 rounded"></div>
                  <div className="w-6 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Revolut Option */}
            <div 
              className={`p-4 rounded-lg border ${selectedMethod === 'revolut' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'} cursor-pointer transition-all`}
              onClick={() => setSelectedMethod('revolut')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 ${selectedMethod === 'revolut' ? 'border-blue-600' : 'border-gray-300'}`}></div>
                  <span className="font-bold text-gray-900">Revolut Pay</span>
                </div>
                <div className="w-11 h-8 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Crypto Option */}
            <div 
              className={`p-4 rounded-lg border ${selectedMethod === 'crypto' ? 'border-blue-600 bg-blue-50' : 'border-gray-200'} cursor-pointer transition-all`}
              onClick={() => setSelectedMethod('crypto')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 ${selectedMethod === 'crypto' ? 'border-blue-600' : 'border-gray-300'}`}></div>
                  <span className="font-bold text-gray-900">Cryptocurrency</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg border-2 border-gray-100 bg-gray-50 mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded"></div>
                <span className="font-bold text-gray-700">12 Months Pass</span>
              </div>
              <span className="text-gray-700">47.88€</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-bold text-sm text-gray-700 mb-2">EMAIL ADDRESS</label>
            <div className="bg-gray-100 rounded p-4">
              <input
                type="email"
                className="w-full bg-transparent focus:outline-none placeholder:text-blue-400"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <input
              type="checkbox"
              id="newsletter"
              className="w-6 h-6 rounded border-2 border-gray-300 checked:bg-blue-500"
              checked={subscribeNewsletter}
              onChange={(e) => setSubscribeNewsletter(e.target.checked)}
            />
            <div className="text-center text-gray-700">
              <p>I WOULD LIKE TO SUBSCRIBE TO THE</p>
              <p>NEWSLETTER TO HEAR ABOUT OFFERS AND</p>
              <p>SERVICES</p>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
          >
            CONTINUE
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 7H23M23 7L17 1M23 7L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>

      <div className="text-center mb-8">
        {showPromoInput ? (
          <div className="flex gap-2 justify-center">
            <input
              type="text"
              placeholder="Enter promo code"
              className="px-4 py-2 rounded border border-gray-300"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => setShowPromoInput(false)}
            >
              Apply
            </button>
          </div>
        ) : (
          <button 
            className="text-white underline"
            onClick={() => setShowPromoInput(true)}
          >
            Have Promo Code? Click Here
          </button>
        )}
      </div>

      <div className="space-y-6 text-center">
        <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full">
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M11.375 6.5V4.625C11.375 2.55325 9.69675 0.875 7.625 0.875H6.375C4.30325 0.875 2.625 2.55325 2.625 4.625V6.5M7 10.0625V11.375M4.375 6.5H9.625C10.6605 6.5 11.5 7.33947 11.5 8.375V12.125C11.5 13.1605 10.6605 14 9.625 14H4.375C3.33947 14 2.5 13.1605 2.5 12.125V8.375C2.5 7.33947 3.33947 6.5 4.375 6.5Z" stroke="#005EFF" strokeOpacity="0.65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-bold text-blue-500 text-opacity-65 text-xs">BANK-LEVEL SECURITY</span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 16C10.866 16 14 12.866 14 9C14 5.13401 10.866 2 7 2C3.13401 2 0 5.13401 0 9C0 12.866 3.13401 16 7 16Z" fill="#37D348"/>
              <path d="M4 8L6.5 10.5L10.5 6.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-gray-900">You're 100% backed by our 30-day money-back guarantee.</p>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-center gap-2">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7144 9.5C13.7144 13.2217 10.7217 16.2144 7.00006 16.2144C3.2784 16.2144 0.285706 13.2217 0.285706 9.5C0.285706 5.77834 3.2784 2.78564 7.00006 2.78564C10.7217 2.78564 13.7144 5.77834 13.7144 9.5Z" fill="#37D348"/>
              <path d="M7 6.5V9.5L9.25 10.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.7143 5.75V2.78571H12.75" stroke="#37D348" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.0714 1.14285L15.7143 5.78571" stroke="#37D348" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-gray-900">These are not memberships/subscriptions. We don't do automatic rebilling/renewal.</p>
          </div>
          <p className="text-gray-900">When you're out of days, it's 100% up to you if you want to purchase more days (or not).</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
