"use client";

import BlogCard from "@/components/blog/BlogCard";

export default function BlogPage() {
    const posts = [
        {
            title: "How Hair Fall Really Starts",
            excerpt: "Understanding the root causes behind early-stage thinning and scalp inflammation.",
            slug: "how-hair-fall-starts",
            date: "March 10, 2025",
            category: "Hair Health",
            image: "/images/blog/hairfall.jpg",
        },
        {
            title: "Alopecia Areata: Why It Happens & How Homeopathy Helps",
            excerpt: "Sudden round patches of hair loss can be reversed with targeted immune balancing.",
            slug: "alopecia-areata-causes-homeopathy",
            date: "February 28, 2025",
            category: "Hair Health",
            image: "/images/blog/alopecia.jpg",
        },
        {
            title: "Dandruff vs. Dry Scalp: The Real Difference",
            excerpt: "Most people mix them up — here’s how to identify and fix the correct one.",
            slug: "dandruff-vs-dry-scalp",
            date: "February 12, 2025",
            category: "Scalp Care",
            image: "/images/blog/dandruff.jpg",
        },
        {
            title: "Acne Triggers You Didn’t Know About",
            excerpt: "Hormones, stress and hidden inflammation can flare acne unexpectedly.",
            slug: "acne-hidden-triggers",
            date: "January 29, 2025",
            category: "Skin Health",
            image: "/images/blog/acne.jpg",
        },
        {
            title: "Thyroid Imbalance & Hair Fall: The Missing Link",
            excerpt: "Thyroid hormones directly control hair growth cycles — here's why thinning happens.",
            slug: "thyroid-hairfall-connection",
            date: "January 18, 2025",
            category: "Chronic Conditions",
            image: "/images/blog/thyroid.jpg",
        },
        {
            title: "Stress Hair Fall Is Real — Here’s How It Works",
            excerpt: "Cortisol spikes can shrink hair follicles. Learn how to reduce stress-related shedding.",
            slug: "stress-hairfall-cortisol",
            date: "December 20, 2024",
            category: "Mental Wellness",
            image: "/images/blog/stress.jpg",
        },
        {
            title: "Boosting Immunity Naturally in 2025",
            excerpt: "Your immune system needs more than supplements — real strengthening starts within.",
            slug: "boost-immunity-naturally",
            date: "December 12, 2024",
            category: "Immunity",
            image: "/images/blog/immunity.jpg",
        },
        {
            title: "Why Migraine Pain Keeps Coming Back",
            excerpt: "Identifying patterns and internal triggers is the first step toward long-term migraine relief.",
            slug: "migraine-causes-patterns",
            date: "November 30, 2024",
            category: "Chronic Pain",
            image: "/images/blog/migraine.jpg",
        },
        {
            title: "Sleep Disturbance & Hormones: The Deep Connection",
            excerpt: "Poor sleep can destabilize stress hormones, worsening hair and skin conditions.",
            slug: "sleep-disturbance-hormone-link",
            date: "November 22, 2024",
            category: "Lifestyle",
            image: "/images/blog/sleep.jpg",
        },
        {
            title: "Healthy Scalp = Healthy Hair: Here’s the Science",
            excerpt: "Hair problems start weeks before strands fall — keep your scalp microbiome balanced.",
            slug: "healthy-scalp-science",
            date: "October 15, 2024",
            category: "Hair Health",
            image: "/images/blog/science-scalp.jpg",
        },
    ];


    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <h1 className="text-4xl font-bold text-foreground text-center mb-2">Clinic <span className="text-primary">Blogs</span></h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Expert insights on hair, skin, immunity and chronic health.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {posts.map((p, i) => (
                    <BlogCard key={i} post={p} />
                ))}
            </div>
        </div>
    );
}
