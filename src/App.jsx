import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ChatPopup from "./components/ChatPopup";
import Footer from "./components/Footer";
import InfoSidebar from "./components/InfoSidebar";
import MobileNav from "./components/MobileNav";
import Navbar from "./components/Navbar";
import PageShell from "./components/PageShell";
import YouTubeModal from "./components/YouTubeModal";
import PDFslip from "./components/PDFslip";
import {
  HomePageSkeleton,
  PageContentSkeleton,
} from "./components/ui/AppSkeletons";
import AboutCarrotSection from "./components/AboutCarrotSection";

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RateCalculator = lazy(() => import("./pages/RateCalculator"));
const Services = lazy(() => import("./pages/Services"));
const SignUp = lazy(() => import("./pages/SignUp"));
const StaticPage = lazy(() => import("./pages/StaticPage"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Tracking = lazy(() => import("./pages/Tracking"));

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const { pathname } = useLocation();
  const routeFallback = pathname === "/" ? <HomePageSkeleton /> : <PageContentSkeleton />;

  return (
    <Suspense fallback={routeFallback}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <PageShell title="About Us" subtitle="About Us">
              <AboutCarrotSection />
            </PageShell>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/blog-details"
          element={<StaticPage pageKey="blog-details" />}
        />
        <Route path="/invoice" element={<PDFslip />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/tracking/:trackingNumber" element={<Tracking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/rateCalculator" element={<RateCalculator />} />
        <Route path="/pricing" element={<StaticPage pageKey="pricing" />} />
        <Route path="/projects" element={<StaticPage pageKey="projects" />} />
        <Route
          path="/project-details"
          element={<StaticPage pageKey="project-details" />}
        />
        <Route
          path="/nation-wide"
          element={<StaticPage pageKey="nation-wide" />}
        />
        <Route
          path="/cash-on-delivery"
          element={<StaticPage pageKey="cash-on-delivery" />}
        />
        <Route
          path="/ecommerce-order-fullfillment"
          element={<StaticPage pageKey="ecommerce-order-fullfillment" />}
        />
        <Route
          path="/3pl-services"
          element={<StaticPage pageKey="3pl-services" />}
        />
        <Route
          path="/associated-delivery"
          element={<StaticPage pageKey="associated-delivery" />}
        />
        <Route
          path="/cargo-service"
          element={<StaticPage pageKey="cargo-service" />}
        />
        <Route path="/detain" element={<StaticPage pageKey="detain" />} />
        <Route path="/overland" element={<StaticPage pageKey="overland" />} />
        <Route
          path="/overnight"
          element={<StaticPage pageKey="overnight" />}
        />
        <Route
          path="/smart-ai-service"
          element={<StaticPage pageKey="smart-ai-service" />}
        />
        <Route
          path="/warehouse-facility"
          element={<StaticPage pageKey="warehouse-facility" />}
        />
        <Route
          path="/startup-business"
          element={<StaticPage pageKey="startup-business" />}
        />
        <Route
          path="/index-dark"
          element={<StaticPage pageKey="index-dark" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  const [activeYouTubeUrl, setActiveYouTubeUrl] = React.useState("");
  const isYouTubeModalOpen = Boolean(activeYouTubeUrl);

  const closeYouTubeModal = () => {
    setActiveYouTubeUrl("");
  };

  const handleGlobalLinkClick = (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const anchor = event.target.closest("a[href]");

    if (!anchor) {
      return;
    }

    const href = anchor.getAttribute("href");

    if (!href) {
      return;
    }

    const isYouTubeLink =
      href.includes("youtube.com/watch") ||
      href.includes("youtube.com/embed/") ||
      href.includes("youtube.com/shorts/") ||
      href.includes("youtu.be/");

    if (!isYouTubeLink) {
      return;
    }

    event.preventDefault();
    setActiveYouTubeUrl(href);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden" onClickCapture={handleGlobalLinkClick}>
        <Navbar />
        <MobileNav />
        <InfoSidebar />
        <ChatPopup />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <YouTubeModal
          isOpen={isYouTubeModalOpen}
          videoUrl={activeYouTubeUrl}
          onClose={closeYouTubeModal}
        />
      </div>
    </Router>
  );
}

export default App;
