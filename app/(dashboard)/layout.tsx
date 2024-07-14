import { Navbar } from '@/components/navbar';
import { Toaster } from 'sonner';

const NAVBAR_WIDTH = '250px';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row w-screen max-h-screen min-h-screen">
      <div style={{ width: NAVBAR_WIDTH }}>
        <Navbar />
        <Toaster />
      </div>
      <div className="flex-1 overflow-scroll ">{children}</div>
    </div>
  );
}
