import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/themeProvider";
import { Theme as RadixTheme } from "@radix-ui/themes";
import { Analytics } from "@vercel/analytics/react"; // Import Vercel Analytics
import routes from "./routes/routes";
import "./App.css";
import "@radix-ui/themes/styles.css";



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
          <Analytics /> {/*  Analytics here */}
        </Router>
      </RadixTheme>
    </ThemeProvider>
  );
}

export default App;
