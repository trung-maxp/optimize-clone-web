import { Suspense, lazy } from "react";
import Header from "./components/header/Header";

// Lazy load non-critical components
const Main = lazy(() => import("./components/main"));
const Footer = lazy(() => import("./components/footer/Footer"));

const MainSkeleton = () => (
  <main className="flex flex-col gap-8 bg-black min-h-screen">
    <div className="bg-gray-800 animate-pulse h-64 rounded-lg mx-4"></div>
    <div className="bg-gray-800 animate-pulse h-48 rounded-lg mx-4"></div>
    <div className="bg-gray-800 animate-pulse h-56 rounded-lg mx-4"></div>
  </main>
)

const FooterSkeleton = () => (
  <footer className="bg-gray-900 h-32 animate-pulse"></footer>
)

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={<MainSkeleton />}>
        <Main />
      </Suspense>

      <Suspense fallback={<FooterSkeleton />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;