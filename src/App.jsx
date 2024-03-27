import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveDrawer from "./components/Layout/ResponsiveDrawer.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout component={Dashboard} />} />
        <Route path="/dashboard" element={<Layout component={Dashboard} />} />
      </Routes>
    </BrowserRouter>
  );
}

// Layout component to wrap the content with ResponsiveDrawer
const Layout = ({ component: Component }) => (
  <ResponsiveDrawer>
    <Component />
  </ResponsiveDrawer>
);

export default App;
