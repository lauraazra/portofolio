import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased relative bg-bg-site text-text-site">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
