import React from "react";
import { Routes, Route } from "react-router-dom";

import { paths } from "./config/paths";
import FormPage from "./pages/FormPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path={paths.form} element={<FormPage />} />
      <Route path={paths.notFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
