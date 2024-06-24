import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Employee from './pages/employee/Employee';
import AddEmployee from './pages/employee/add-employee/AddEmployee';

const router = createBrowserRouter([
    { path: "/", element: <>Home</>},
    { path: "/employee", element: <Employee />},
    { path: "/employee/action/", element: <AddEmployee />},
    { path: "/employee/action/:id", element: <AddEmployee />},
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
