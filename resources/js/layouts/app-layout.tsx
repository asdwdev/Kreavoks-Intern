import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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