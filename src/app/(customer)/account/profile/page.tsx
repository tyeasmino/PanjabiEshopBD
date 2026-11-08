"use client";

import {
    ArrowLeft,
    ArrowRight,
    Camera,
    Check,
    ChevronRight,
    LockKeyhole,
    Package,
    Save,
    ShoppingBag,
    UserRound,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        district: "",
        area: "",
        address: "",
    });

    const [saved, setSaved] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setSaved(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Backend profile update API will be connected later.
        setSaved(true);
    };

    const inputClass =
        "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10";

    const labelClass = "mb-2 block text-sm font-medium";

    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

                {/* Breadcrumb */}
                <div className="mb-8 flex items-center gap-2 text-xs text-muted-foreground">
                    <Link href="/" className="transition hover:text-primary">
                        Home
                    </Link>
                    <ChevronRight className="h-3 w-3" />
                    <Link href="/account" className="transition hover:text-primary">
                        My Account
                    </Link>
                    <ChevronRight className="h-3 w-3" />
                    <span className="text-foreground">Personal Information</span>
                </div>

                {/* Page Heading */}
                <div className="mb-9">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Your Account
                    </p>

                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Personal Information
                    </h1>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
                        Manage your personal details and keep your account information up to date.
                    </p>
                </div>

                <div className="grid items-start gap-7 lg:grid-cols-[280px_1fr]">

                    {/* Left Sidebar */}
                    <aside className="space-y-5">

                        {/* Profile Card */}
                        <div className="rounded-2xl border border-border bg-card p-6">
                            <div className="flex items-center gap-4">
                                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                                    <UserRound className="h-8 w-8" />

                                    <button
                                        type="button"
                                        aria-label="Change profile photo"
                                        title="Profile photo upload will be available later"
                                        className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-card bg-primary text-primary-foreground"
                                    >
                                        <Camera className="h-3.5 w-3.5" />
                                    </button>
                                </div>

                                <div className="min-w-0">
                                    <h2 className="truncate text-base font-semibold">
                                        Your Profile
                                    </h2>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Customer Account
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 border-t border-border pt-5">
                                <p className="text-xs leading-6 text-muted-foreground">
                                    Keep your information updated for a smoother shopping and delivery experience.
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="overflow-hidden rounded-2xl border border-border bg-card p-2">
                            <Link
                                href="/account"
                                className="flex items-center gap-3 my-1 rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                            >
                                <ShoppingBag className="h-4 w-4" />
                                Dashboard
                                <ChevronRight className="ml-auto h-4 w-4" />
                            </Link>

                            <Link
                                href="/account/profile"
                                className="flex items-center gap-3 my-1 rounded-xl bg-primary-soft px-4 py-3 text-sm font-semibold text-primary"
                            >
                                <UserRound className="h-4 w-4" />
                                Personal Information
                                <ChevronRight className="ml-auto h-4 w-4" />
                            </Link>

                            <Link
                                href="/account/orders"
                                className="flex items-center gap-3 my-1 rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                            >
                                <Package className="h-4 w-4" />
                                My Orders
                                <ChevronRight className="ml-auto h-4 w-4" />
                            </Link>

                            <Link
                                href="/change-password"
                                className="flex items-center gap-3 my-1 rounded-xl px-4 py-3 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                            >
                                <LockKeyhole className="h-4 w-4" />
                                Change Password
                                <ChevronRight className="ml-auto h-4 w-4" />
                            </Link>
                        </div>

                        <Link
                            href="/account"
                            className="inline-flex items-center gap-2 px-2 text-xs text-muted-foreground transition hover:text-primary"
                        >
                            <ArrowLeft className="h-3.5 w-3.5" />
                            Back to Account
                        </Link>
                    </aside>

                    {/* Right Content */}
                    <section className="overflow-hidden rounded-2xl border border-border bg-card">

                        {/* Form Header */}
                        <div className="border-b border-border px-5 py-6 sm:px-8">
                            <h2 className="text-lg font-semibold">
                                Personal Details
                            </h2>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Your personal and contact information.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-5 sm:p-8">

                            {/* Basic Information */}
                            <div className="mb-8">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="h-5 w-1 rounded-full bg-primary" />
                                    <h3 className="text-sm font-semibold">
                                        Basic Information
                                    </h3>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="fullName" className={labelClass}>
                                            Full Name
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className={labelClass}>
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className={labelClass}>
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="01XXXXXXXXX"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="mb-8 border-t border-border" />

                            {/* Address Information */}
                            <div className="mb-8">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="h-5 w-1 rounded-full bg-primary" />
                                    <h3 className="text-sm font-semibold">
                                        Address Information
                                    </h3>
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="district" className={labelClass}>
                                            District
                                        </label>
                                        <input
                                            id="district"
                                            name="district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            placeholder="Enter your district"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="area" className={labelClass}>
                                            Area / City
                                        </label>
                                        <input
                                            id="area"
                                            name="area"
                                            value={formData.area}
                                            onChange={handleChange}
                                            placeholder="Enter your area"
                                            className={inputClass}
                                        />
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="address" className={labelClass}>
                                            Full Address
                                        </label>
                                        <textarea
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    address: e.target.value,
                                                })
                                            }
                                            rows={3}
                                            placeholder="House, road, block and other address details"
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Save Section */}
                            <div className="flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-muted-foreground">
                                    Your information is currently stored in this form only.
                                </p>

                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                                >
                                    <Save className="h-4 w-4" />
                                    Save Changes
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>

                            {saved && (
                                <div
                                    role="status"
                                    className="mt-5 flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-600 dark:text-green-400"
                                >
                                    <Check className="h-4 w-4 shrink-0" />
                                    Demo: Your changes are not saved to an account yet.
                                </div>
                            )}
                        </form>
                    </section>
                </div>
            </div>
        </main>
    );
}


