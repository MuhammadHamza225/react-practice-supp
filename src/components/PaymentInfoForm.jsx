import React, { useState } from 'react';

const PaymentInfoForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit');

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4">Payment Info.</h3>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Payment Method:</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'credit'}
              onChange={() => setPaymentMethod('credit')}
            />
            Credit Card
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === 'paypal'}
              onChange={() => setPaymentMethod('paypal')}
            />
            PayPal
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <input type="text" placeholder="Name on Card" className="w-full border rounded px-3 py-2" />
        <input type="text" placeholder="Card Number" className="w-full border rounded px-3 py-2" />
        <div className="flex gap-4">
          <select className="w-1/2 border rounded px-3 py-2">
            <option>05</option>
          </select>
          <select className="w-1/2 border rounded px-3 py-2">
            <option>2025</option>
          </select>
        </div>
        <input type="text" placeholder="CVV" className="w-full border rounded px-3 py-2" />
      </div>
    </div>
  );
};

export default PaymentInfoForm;
