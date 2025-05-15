"use client";

import Header from "../../layout/header";
import Sidebar from "../../layout/sidebar";
import { SidebarProvider, useSidebar } from "../../components/sidebar-provider";

// DashboardContent component to consume the sidebar context
function DashboardContent({ children }) {
  const { isOpen } = useSidebar();
  
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main 
          className="flex-1 overflow-auto p-4 bg-gray-50"
          style={{ 
            width: isOpen ? 'calc(100% - 250px)' : 'calc(100% - 65px)',
            marginLeft: isOpen ? '250px' : '65px',
            transition: 'all 0.3s ease'
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

// Main dashboard layout
export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  );
}
