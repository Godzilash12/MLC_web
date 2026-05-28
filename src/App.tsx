import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSiteCopy } from "@/lib/siteCopy";

const HomePage = lazy(() => import("@/pages/HomePage").then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import("@/pages/AboutPage").then((module) => ({ default: module.AboutPage })));
const CommunityPage = lazy(() => import("@/pages/CommunityPage").then((module) => ({ default: module.CommunityPage })));
const EducationPage = lazy(() => import("@/pages/EducationPage").then((module) => ({ default: module.EducationPage })));
const DevelopmentPage = lazy(() => import("@/pages/DevelopmentPage").then((module) => ({ default: module.DevelopmentPage })));
const AiMediaPage = lazy(() => import("@/pages/AiMediaPage").then((module) => ({ default: module.AiMediaPage })));
const PartnerPage = lazy(() => import("@/pages/PartnerPage").then((module) => ({ default: module.PartnerPage })));
const GraduatePage = lazy(() => import("@/pages/GraduatePage").then((module) => ({ default: module.GraduatePage })));

function RouteSkeleton() {
  const copy = useSiteCopy();

  return (
    <div className="section-shell flex min-h-[50vh] items-center justify-center py-16">
      <div className="h-12 w-12 rounded-full border-2 border-white/10 border-t-white/70 animate-spin" aria-label={copy.status.loadingPage} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/community"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <CommunityPage />
            </Suspense>
          }
        />
        <Route
          path="/education"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <EducationPage />
            </Suspense>
          }
        />
        <Route
          path="/development"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <DevelopmentPage />
            </Suspense>
          }
        />
        <Route
          path="/ai-media"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <AiMediaPage />
            </Suspense>
          }
        />
        <Route
          path="/partners/:id"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <PartnerPage />
            </Suspense>
          }
        />
        <Route
          path="/graduates/:id"
          element={
            <Suspense fallback={<RouteSkeleton />}>
              <GraduatePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
