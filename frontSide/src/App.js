import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMessages from "./pages/AdminMessages";
import AdminRoute from "./components/AdminRoute";


function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


function App() {
  return (
    <Routes>
      {/* Portfolio */}
      <Route path="/" element={<Portfolio />} />

      {/* Admin Login */}
      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* Protected Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      {/* Protected Messages */}
      <Route
        path="/admin/messages"
        element={
          <AdminRoute>
            <AdminMessages />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default App;