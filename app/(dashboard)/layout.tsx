import BottomNavbar from '@/components/bottomnavbar';
import { Navbar } from '@/components/navbar';
import { Toaster } from 'sonner';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-dvh w-full">
    <div className="hidden shrink-0 lg:block"><Navbar /></div>
    <div className="fixed inset-x-0 bottom-0 z-10 lg:hidden"><BottomNavbar /></div>
    <Toaster />
    <main className="min-w-0 flex-1">{children}</main>
  </div>;
}
