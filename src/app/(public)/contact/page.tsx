
"use client";

import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Mail,
    MessageCircle,
    Send
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const topics = [
    "Product Inquiry",
    "Order Information",
    "Shipping & Delivery",
    "Return & Exchange",
    "Other",
];

const faqs = [
    {
        question: "How can I place an order?",
        answer:
            "Browse our product collection, select your preferred product options, add it to your shopping bag, and continue to checkout.",
    },
    {
        question: "How can I ask about a product?",
        answer:
            "Use the contact form on this page and select Product Inquiry as your subject.",
    },
    {
        question: "Where can I find my order information?",
        answer:
            "Order tracking and order history features will be available as the shopping platform develops.",
    },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Product Inquiry",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setSubmitted(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Demo only: backend/email integration will be added later.
        setSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-background">

            {/* Hero & Contact Form */}
            <section className="relative overflow-hidden border-b border-border">
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />

                <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">

                    {/* Breadcrumb */}
                    <div className="mb-12 flex items-center gap-2 text-xs text-muted-foreground">
                        <Link href="/" className="transition-colors hover:text-primary">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="font-medium text-foreground">
                            Contact
                        </span>
                    </div>

                    <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

                        {/* Left Content */}
                        <div className="lg:sticky lg:top-32">

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-primary" />
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                                    Get In Touch
                                </p>
                            </div>

                            <h1 className="max-w-lg text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                                Let's start a
                                <span className="block text-primary">
                                    conversation.
                                </span>
                            </h1>

                            <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                                Have a question about our Panjabi collection
                                or need help with your shopping experience?
                                We'd love to hear from you.
                            </p>

                            {/* Contact Information */}
                            <div className="mt-12 space-y-5">

                                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <MessageCircle size={21} strokeWidth={1.7} />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground">
                                            Product & Order Support
                                        </h3>
                                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                                            Questions about products, orders,
                                            or your shopping experience?
                                            Send us a message through the form.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Mail size={21} strokeWidth={1.7} />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground">
                                            Send Us a Message
                                        </h3>
                                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                                            Fill out the contact form with
                                            your details and inquiry.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Clock3 size={21} strokeWidth={1.7} />
                                    </div>

                                    <div>
                                        <h3 className="text-sm font-semibold text-foreground">
                                            We're Here to Help
                                        </h3>
                                        <p className="mt-1 text-xs leading-6 text-muted-foreground">
                                            Share your question and we'll
                                            be ready to assist once our
                                            support channel is connected.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-9">
                                <Link
                                    href="/products"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-4"
                                >
                                    Explore Our Collection
                                    <ArrowRight size={17} />
                                </Link>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">

                            <div className="mb-8 border-b border-border pb-7">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                                    Contact Form
                                </p>

                                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                    Send us a message.
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                    Tell us how we can help you.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-xs font-semibold text-foreground"
                                    >
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-xs font-semibold text-foreground"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-xs font-semibold text-foreground"
                                    >
                                        What can we help you with?
                                    </label>

                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    >
                                        {topics.map((topic) => (
                                            <option key={topic} value={topic}>
                                                {topic}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-xs font-semibold text-foreground"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm leading-6 text-foreground outline-none transition-all placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90"
                                >
                                    Send Message
                                    <Send size={16} />
                                </button>

                                {submitted && (
                                    <div
                                        role="status"
                                        className="flex items-start gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="mt-0.5 shrink-0 text-primary"
                                        />

                                        <p className="text-xs leading-6 text-foreground">
                                            Form validation successful! This
                                            is currently a frontend demo.
                                            Your message has not been sent
                                            yet. Email/backend integration
                                            is needed to deliver it.
                                        </p>
                                    </div>
                                )}

                                <p className="text-center text-[11px] leading-5 text-muted-foreground">
                                    Your information will be used to handle
                                    your inquiry once the contact service
                                    is connected.
                                </p>

                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">

                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Helpful Information
                        </p>

                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                            Frequently asked
                            <span className="block text-muted-foreground">
                                questions.
                            </span>
                        </h2>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                            Looking for a quick answer? Here are some
                            common questions about shopping at
                            Panjabi Eshop BD.
                        </p>
                    </div>

                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.question}
                                className="border-b border-border py-6 first:pt-0"
                            >
                                <div className="flex gap-4">
                                    <span className="pt-0.5 text-xs font-semibold text-primary">
                                        0{index + 1}
                                    </span>

                                    <div>
                                        <h3 className="text-base font-semibold text-foreground">
                                            {faq.question}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="px-5 pb-20 sm:px-8 lg:pb-24">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 rounded-2xl border border-border bg-secondary/50 px-6 py-10 text-center sm:px-10 lg:flex-row lg:text-left">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                            Panjabi Eshop BD
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                            Ready to explore your style?
                        </h2>

                        <p className="mt-3 text-sm text-muted-foreground">
                            Discover our latest Panjabi collection.
                        </p>
                    </div>

                    <Link
                        href="/products"
                        className="inline-flex shrink-0 items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                    >
                        Shop Collection
                        <ArrowRight size={17} />
                    </Link>

                </div>
            </section>

        </main>
    );
}
