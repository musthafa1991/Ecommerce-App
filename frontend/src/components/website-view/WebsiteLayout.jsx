import { Outlet } from "react-router-dom";
import WebsiteFooter from "./WebsiteFooter";
import WebsiteNavbar from "./WebsiteNavbar";

function WebsiteLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <WebsiteNavbar />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <WebsiteFooter />
    </div>
  );
}

export default WebsiteLayout;
