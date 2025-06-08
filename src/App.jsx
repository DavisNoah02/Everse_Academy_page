import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/themeProvider"; 
import routes from "./routes/routes";
import { Theme as RadixTheme } from "@radix-ui/themes";
import "./App.css";
import "@radix-ui/themes/styles.css"; // IMPORTANT: include this for Radix theme styling

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RadixTheme>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
        </Router>
      </RadixTheme>
    </ThemeProvider>
  );
}

export default App;
