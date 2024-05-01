import { useState } from 'react';
import FormUser from './Layout/FormUser';
function App() {
  return (
    <>
      <h1 className="mb-5 font-bold text-2xl bg-gray-800 text-white p-5">Thông tin sinh viên</h1>
      <FormUser />
    </>
  );
}

export default App;
