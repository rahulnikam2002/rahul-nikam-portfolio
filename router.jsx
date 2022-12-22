import React from "react";
import { Routes, Route } from "react-router";

export default (
  <Routes>
    <Route path="/" />
    <Route path="/projects" />
    <Route path="/projects/:key" />
    <Route path="/about" />
    <Route path="/contact" />
  </Routes>
);
