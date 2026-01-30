'use client';

import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { attemptSignIn, completeNewPassword } from './auth-service';

Amplify.configure(outputs);

export default function TestAuthPage() {
  const [step, setStep] = useState<'SIGN_IN' | 'NEW_PW'>('SIGN_IN');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('');
    try {
      if (step === 'SIGN_IN') {
        const nextStep = await attemptSignIn(email, password);
        if (nextStep === 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED') {
          setStep('NEW_PW');
          setPassword('');
          setMsg('Challenge: Please set your permanent password.');
        } else {
          setMsg('Login Successful!');
        }
      } else {
        await completeNewPassword(password);
        setMsg('Password updated! You are now logged in.');
        setStep('SIGN_IN');
      }
    } catch (err: any) {
      setMsg(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h2>Auth Test Route: {step}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        {step === 'SIGN_IN' && (
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
        )}
        <input 
          type="password" 
          placeholder={step === 'SIGN_IN' ? "Temp Password" : "New Permanent Password"} 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">{step === 'SIGN_IN' ? 'Sign In' : 'Set Password'}</button>
      </form>
      {msg && <p style={{ marginTop: '20px', color: msg.includes('Error') ? 'red' : 'green' }}>{msg}</p>}
    </div>
  );
}