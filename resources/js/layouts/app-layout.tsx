import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default ({ children }: AppLayoutProps) => (
    <div>
        {/* Navbar */}
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
);