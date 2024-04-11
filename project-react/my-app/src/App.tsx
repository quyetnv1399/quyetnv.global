import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Login from './pages/Account/Login';

const router = createBrowserRouter([
    { path: "/", element: "ádasdasd"},
    { path: "/dang-nhap", element: <Login />},
    { path: "/admin", element: <Admin />, children: [
      { path: "", element: "adminhome"}
    ]},
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
