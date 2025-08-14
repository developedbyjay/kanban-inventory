import { SideBar } from "../_components/ui/SideBar";

export const metadata = {
  description: "User dashboard for managing inventory",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SideBar />
      
    </div>
  );
}
