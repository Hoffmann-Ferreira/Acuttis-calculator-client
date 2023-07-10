import React from 'react';
import './App.css';
import AppRouter from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <>
        <Toaster />
        <AppRouter />
      </>
    </div>
  );
}

export default App;
