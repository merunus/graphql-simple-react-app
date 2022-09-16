import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, NotFound, Project } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects/:id" element={<Project/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
