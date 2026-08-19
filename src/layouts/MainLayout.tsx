import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import SocialLeft from "./SocialLeft";
import EmailRight from "./EmailRight";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased relative bg-bg-site text-text-site">
      <Navbar />
      <SocialLeft />
      <EmailRight />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
