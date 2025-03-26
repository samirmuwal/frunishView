// 📁 src/context/Constant.jsx
import React, { createContext, useState } from 'react';

const ConstantContext = createContext(); // ✅ Yeh sahi hai

export default function Constant({ children }) {
  const [flag, setFlag] = useState(true);
  

  const stateGlobal = { flag, setFlag }; // ✅ spelling sahi honi chahiye

  return (
    <ConstantContext.Provider value={stateGlobal}>
      {children}
    </ConstantContext.Provider>
  );
}

export { ConstantContext }; // ✅ ye export karna zaroori ha
