"use client";

import { usePathname } from "next/navigation";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function SiteShell({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const isAuthPage = [
        "/sign-",
        "/verify-",
        "/email-verified",
        "/verification-expired",
        "/resend-verification",
        "/forgot-password",
        "/reset-password",
        "/change-password",
        "/password-reset-success",
    ].some((path) => pathname.startsWith(path));

    if (isAuthPage) {
        return <>{children}</>;
    }

    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}