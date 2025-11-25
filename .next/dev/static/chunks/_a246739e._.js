(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/blog/BlogCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function BlogCard({ post }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true
        },
        transition: {
            duration: 0.5
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/blog/${post.slug}`,
            className: "   block rounded-2xl overflow-hidden    bg-card/70 backdrop-blur-xl    border border-border shadow-sm hover:shadow-md   transition-all duration-300 hover:-translate-y-1   ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-48",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: post.image,
                        alt: post.title,
                        fill: true,
                        className: "object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                    }, void 0, false, {
                        fileName: "[project]/components/blog/BlogCard.jsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/blog/BlogCard.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-primary font-medium",
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/components/blog/BlogCard.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: post.date
                                }, void 0, false, {
                                    fileName: "[project]/components/blog/BlogCard.jsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/blog/BlogCard.jsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-2 text-lg font-semibold text-foreground leading-snug",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/components/blog/BlogCard.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground mt-2 leading-relaxed",
                            children: post.excerpt
                        }, void 0, false, {
                            fileName: "[project]/components/blog/BlogCard.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-primary text-sm font-medium",
                            children: "Read more →"
                        }, void 0, false, {
                            fileName: "[project]/components/blog/BlogCard.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blog/BlogCard.jsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/blog/BlogCard.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/blog/BlogCard.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/blog/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blog$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blog/BlogCard.jsx [app-client] (ecmascript)");
"use client";
;
;
function BlogPage() {
    const posts = [
        {
            title: "How Hair Fall Really Starts",
            excerpt: "Understanding the root causes behind early-stage thinning and scalp inflammation.",
            slug: "how-hair-fall-starts",
            date: "March 10, 2025",
            category: "Hair Health",
            image: "/images/blog/hairfall.jpg"
        },
        {
            title: "Alopecia Areata: Why It Happens & How Homeopathy Helps",
            excerpt: "Sudden round patches of hair loss can be reversed with targeted immune balancing.",
            slug: "alopecia-areata-causes-homeopathy",
            date: "February 28, 2025",
            category: "Hair Health",
            image: "/images/blog/alopecia.jpg"
        },
        {
            title: "Dandruff vs. Dry Scalp: The Real Difference",
            excerpt: "Most people mix them up — here’s how to identify and fix the correct one.",
            slug: "dandruff-vs-dry-scalp",
            date: "February 12, 2025",
            category: "Scalp Care",
            image: "/images/blog/dandruff.jpg"
        },
        {
            title: "Acne Triggers You Didn’t Know About",
            excerpt: "Hormones, stress and hidden inflammation can flare acne unexpectedly.",
            slug: "acne-hidden-triggers",
            date: "January 29, 2025",
            category: "Skin Health",
            image: "/images/blog/acne.jpg"
        },
        {
            title: "Thyroid Imbalance & Hair Fall: The Missing Link",
            excerpt: "Thyroid hormones directly control hair growth cycles — here's why thinning happens.",
            slug: "thyroid-hairfall-connection",
            date: "January 18, 2025",
            category: "Chronic Conditions",
            image: "/images/blog/thyroid.jpg"
        },
        {
            title: "Stress Hair Fall Is Real — Here’s How It Works",
            excerpt: "Cortisol spikes can shrink hair follicles. Learn how to reduce stress-related shedding.",
            slug: "stress-hairfall-cortisol",
            date: "December 20, 2024",
            category: "Mental Wellness",
            image: "/images/blog/stress.jpg"
        },
        {
            title: "Boosting Immunity Naturally in 2025",
            excerpt: "Your immune system needs more than supplements — real strengthening starts within.",
            slug: "boost-immunity-naturally",
            date: "December 12, 2024",
            category: "Immunity",
            image: "/images/blog/immunity.jpg"
        },
        {
            title: "Why Migraine Pain Keeps Coming Back",
            excerpt: "Identifying patterns and internal triggers is the first step toward long-term migraine relief.",
            slug: "migraine-causes-patterns",
            date: "November 30, 2024",
            category: "Chronic Pain",
            image: "/images/blog/migraine.jpg"
        },
        {
            title: "Sleep Disturbance & Hormones: The Deep Connection",
            excerpt: "Poor sleep can destabilize stress hormones, worsening hair and skin conditions.",
            slug: "sleep-disturbance-hormone-link",
            date: "November 22, 2024",
            category: "Lifestyle",
            image: "/images/blog/sleep.jpg"
        },
        {
            title: "Healthy Scalp = Healthy Hair: Here’s the Science",
            excerpt: "Hair problems start weeks before strands fall — keep your scalp microbiome balanced.",
            slug: "healthy-scalp-science",
            date: "October 15, 2024",
            category: "Hair Health",
            image: "/images/blog/science-scalp.jpg"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-6 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-foreground text-center mb-2",
                children: [
                    "Clinic ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-primary",
                        children: "Blogs"
                    }, void 0, false, {
                        fileName: "[project]/app/blog/page.jsx",
                        lineNumber: 92,
                        columnNumber: 88
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/blog/page.jsx",
                lineNumber: 92,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground text-center mb-12 max-w-2xl mx-auto",
                children: "Expert insights on hair, skin, immunity and chronic health."
            }, void 0, false, {
                fileName: "[project]/app/blog/page.jsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: posts.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blog$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        post: p
                    }, i, false, {
                        fileName: "[project]/app/blog/page.jsx",
                        lineNumber: 99,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/blog/page.jsx",
                lineNumber: 97,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/blog/page.jsx",
        lineNumber: 91,
        columnNumber: 9
    }, this);
}
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a246739e._.js.map