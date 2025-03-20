import { Outlet } from 'react-router';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import { TooltipProvider } from '@/components/ui/tooltip';

function AppLayout() {
  return (
    <SidebarProvider>
      <TooltipProvider
        delayDuration={300}
        disableHoverableContent
      >
        <AppSidebar />
        <SidebarTrigger />

        <Outlet />
      </TooltipProvider>
    </SidebarProvider>
  );
}

export default AppLayout;
