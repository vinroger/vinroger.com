import BottomNavbar from '@/components/bottomnavbar';
import { Navbar } from '@/components/navbar';
import { Toaster } from 'sonner';

const NAVBAR_WIDTH = '250px';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-screen max-h-screen min-h-screen">
      <div style={{ width: NAVBAR_WIDTH }} className="hidden lg:block">
        <Navbar />
      </div>
      <div className="block lg:hidden fixed bottom-0 w-full z-10">
        <BottomNavbar />
      </div>
      <Toaster />
      <div className="flex-1 overflow-scroll ">{children}</div>
    </div>
  );
}
