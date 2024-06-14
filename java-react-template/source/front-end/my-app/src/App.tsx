import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    { path: "/", element: <><a href="#" className="btn btn-bg-primary">Primary</a></>},
    // { path: "/admin/login", element: <Login />},
    // { path: "/admin", element: <Admin />, children: [
    //   { path: "", element: "adminhome"}
    // ]},
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;