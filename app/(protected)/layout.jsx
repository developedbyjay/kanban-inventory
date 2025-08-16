import { LayoutHeader } from "../_components/ui/LayoutHeader";
import { SideBar } from "../_components/ui/SideBar";
import { NavigationProvider } from "../context/ToggleNavigation";

export const metadata = {
  description: "User dashboard for managing inventory",
};


export default function DashboardLayout({ children }) {
  return (
    <NavigationProvider>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <main className="flex-1 grid grid-rows-[8rem_1fr] bg-gray-100 overflow-y-auto">
          <LayoutHeader />
          {children}
        </main>
      </div>
    </NavigationProvider>
  );
}
