module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/case-studies/case-data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/case-studies/case-data.js
// Sample case-studies data (10 cases). Use/update images as needed.
__turbopack_context__.s([
    "caseStudies",
    ()=>caseStudies
]);
const caseStudies = [
    {
        slug: "female-hair-regrowth-28",
        title: "Sustained Hair Regrowth — Female, 28",
        condition: "Hair Fall",
        age: 28,
        duration: "6 months",
        summary: "Significant reduction in shedding and improved hair density after a personalised homeopathic + nutritional plan.",
        before: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        after: "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
        details: {
            presentation: "Diffuse thinning over crown and increased hair fall on combing.",
            assessment: "Stress-related telogen effluvium with mild nutritional deficiency.",
            plan: "Homeopathic constitutional treatment + iron/vitamin D support + scalp circulation therapy.",
            monitoring: "Monthly photo-tracking and teleconsult follow-ups."
        },
        outcome: "Reduced daily shedding by 80% within 3 months and visible density improvement at 6 months."
    },
    {
        slug: "alopecia-patch-regrowth-34",
        title: "Patch Regrowth After Alopecia Areata — 34-year-old",
        condition: "Alopecia",
        age: 34,
        duration: "5 months",
        summary: "Regrowth of patchy areas with immune-modulating homeopathic medicines and stress management.",
        before: "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
        after: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        details: {
            presentation: "Multiple round alopecic patches on scalp and eyebrows.",
            assessment: "Likely autoimmune trigger with recent life stressor.",
            plan: "Individualised homeopathic protocol focusing on immune regulation; counseling for stress.",
            monitoring: "Fortnightly remote photo review and monthly clinic review."
        },
        outcome: "Noticeable regrowth in eyebrow area and 70% scalp regrowth by month five."
    },
    {
        slug: "dandruff-scalp-healing-40",
        title: "Scalp Healing & Flake Control — Male, 40",
        condition: "Dandruff",
        age: 40,
        duration: "3 months",
        summary: "Reduced scaling and itching with combined gut-support, topical hygiene, and homeopathy.",
        before: "/mnt/data/756ea43d-185d-4e74-895a-1003a4b460fc.png",
        after: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        details: {
            presentation: "Persistent scaling, greasiness and itching for 2+ years.",
            assessment: "Seborrheic tendencies with intermittent fungal overgrowth.",
            plan: "Diet + probiotics + anti-inflammatory homeopathic Rx + medicated shampoo protocol.",
            monitoring: "2-week remote checks and product guidance."
        },
        outcome: "Itching reduced by 90% and visible reduction in flakes within 6 weeks."
    },
    {
        slug: "acne-control-teen-19",
        title: "Acne Control & Scar Reduction — Teen, 19",
        condition: "Acne",
        age: 19,
        duration: "4 months",
        summary: "Marked improvement in active lesions and gradual reduction in post-inflammatory pigmentation.",
        before: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        after: "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
        details: {
            presentation: "Inflammatory & comedonal acne across jawline and cheeks.",
            assessment: "Hormonal fluctuations + gut dysbiosis suspected.",
            plan: "Hormone-supportive homeopathy, gut-focused nutrition and topical care.",
            monitoring: "Monthly photos + acne scoring."
        },
        outcome: "60% reduction in inflammatory lesions by 8 weeks; significant texture improvement by 4 months."
    },
    {
        slug: "eczema-children-7",
        title: "Eczema Calm & Barrier Repair — Child, 7",
        condition: "Eczema",
        age: 7,
        duration: "3 months",
        summary: "Reduced flares, less itching and restored skin hydration with barrier-support and gentle homeopathy.",
        before: "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
        after: "/mnt/data/756ea43d-185d-4e74-895a-1003a4b460fc.png",
        details: {
            presentation: "Dry, itchy patches on flexural areas with recurrent flares.",
            assessment: "Atopic tendency with food triggers.",
            plan: "Diet modification, emollient regimen and constitutional homeopathic medicines.",
            monitoring: "Weekly parental check-ins for first month, then bi-weekly."
        },
        outcome: "Significant itch reduction within 2 weeks and >70% clearance in 3 months."
    },
    {
        slug: "migraine-frequency-reduction-29",
        title: "Migraine Frequency Reduction — Female, 29",
        condition: "Migraine",
        age: 29,
        duration: "6 months",
        summary: "Lowered frequency and intensity of migraine episodes with neural calming and lifestyle work.",
        before: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        after: "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
        details: {
            presentation: "Recurrent throbbing headaches with photophobia, 2-4/month.",
            assessment: "Stress-linked migraine with sleep disruption.",
            plan: "Nervous system support via homeopathy, sleep hygiene, trigger avoidance.",
            monitoring: "Monthly check-ins + headache diary."
        },
        outcome: "Episodes reduced to 0-1/month and milder intensity within 4 months."
    },
    {
        slug: "thyroid-hormone-support-45",
        title: "Thyroid Symptom Improvement — Female, 45",
        condition: "Thyroid",
        age: 45,
        duration: "5 months",
        summary: "Improved energy, reduced hair fall and better metabolism with hormonal balancing protocol.",
        before: "/mnt/data/756ea43d-185d-4e74-895a-1003a4b460fc.png",
        after: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        details: {
            presentation: "Fatigue, weight gain, coarse hair and cold intolerance.",
            assessment: "Biochemical hypothyroid background with sluggish metabolism.",
            plan: "Homeopathic supportive therapy + targeted nutrition & lifestyle changes.",
            monitoring: "Labs review + monthly clinical follow-up."
        },
        outcome: "Improved energy and reduced hair fall; weight stabilized with better sleep."
    },
    {
        slug: "stress-recovery-33",
        title: "Stress Recovery & Sleep Restoration — 33-year-old",
        condition: "Stress",
        age: 33,
        duration: "8 weeks",
        summary: "Substantial reduction in anxiety, improved sleep and daytime energy with mind–body approach.",
        before: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        after: "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
        details: {
            presentation: "Chronic worry, poor sleep and daytime fatigue.",
            assessment: "Chronic stress with adrenal imbalance.",
            plan: "Homeopathic emotional support + sleep routine and breathing exercises.",
            monitoring: "2-week check-ins for first month."
        },
        outcome: "Sleep normalized and anxiety substantially reduced within 8 weeks."
    },
    {
        slug: "child-immunity-boost-6",
        title: "Child Immunity Boost — 6-year-old",
        condition: "Low Immunity",
        age: 6,
        duration: "4 months",
        summary: "Fewer infections, improved appetite and better school attendance after immune-building plan.",
        before: "/mnt/data/924498da-20ab-4ed6-9788-e7d6499fabde.png",
        after: "/mnt/data/756ea43d-185d-4e74-895a-1003a4b460fc.png",
        details: {
            presentation: "Frequent colds and slow recovery.",
            assessment: "Low baseline immunity with nutritional gaps.",
            plan: "Immune-building homeopathy, nutrition, and sleep hygiene.",
            monitoring: "Parent log + monthly follow-ups."
        },
        outcome: "Significant reduction in infection frequency and better energy after 3 months."
    },
    {
        slug: "behavioral-support-8",
        title: "Behavioral Support Progress — 8-year-old",
        condition: "Behavioral Support",
        age: 8,
        duration: "3 months",
        summary: "Improved focus, reduced outbursts and better school behavior with therapy + homeopathy.",
        before: "/mnt/data/756ea43d-185d-4e74-895a-1003a4b460fc.png",
        after: "/mnt/data/447e7718-610e-4b26-8bb9-86240b66eb93.png",
        details: {
            presentation: "Low attention span, frequent tantrums at home.",
            assessment: "Behavioral dysregulation with poor routine.",
            plan: "Behavioral strategies, routine coaching & constitutional homeopathy.",
            monitoring: "Weekly caregiver reports + monthly review."
        },
        outcome: "Improved concentration and fewer behavioral episodes in 8–12 weeks."
    }
];
}),
"[project]/components/BeforeAfterSlider.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/BeforeAfterSlider.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/BeforeAfterSlider.jsx <module evaluation>", "default");
}),
"[project]/components/BeforeAfterSlider.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/BeforeAfterSlider.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/BeforeAfterSlider.jsx", "default");
}),
"[project]/components/BeforeAfterSlider.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BeforeAfterSlider$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/BeforeAfterSlider.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BeforeAfterSlider$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/BeforeAfterSlider.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BeforeAfterSlider$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/case-studies/[slug]/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CaseDetail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$case$2d$studies$2f$case$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/case-studies/case-data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BeforeAfterSlider$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/BeforeAfterSlider.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
async function CaseDetail({ params }) {
    const { slug } = await params; // required for Next.js 14+
    const caseItem = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$case$2d$studies$2f$case$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["caseStudies"].find((c)=>c.slug === slug);
    if (!caseItem) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Case not found"
                    }, void 0, false, {
                        fileName: "[project]/app/case-studies/[slug]/page.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/case-studies",
                        className: "text-accent hover:underline",
                        children: "Back to cases"
                    }, void 0, false, {
                        fileName: "[project]/app/case-studies/[slug]/page.jsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/case-studies/[slug]/page.jsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/case-studies/[slug]/page.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-background via-background-soft to-background-muted",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-5xl mx-auto px-6 py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/case-studies",
                    className: "inline-flex items-center gap-2 text-accent mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        " Back to Case Studies"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-8 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl overflow-hidden bg-card/60 border border-border p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$BeforeAfterSlider$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                before: caseItem.before,
                                after: caseItem.after,
                                beforeLabel: "Before",
                                afterLabel: "After"
                            }, void 0, false, {
                                fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-foreground",
                                    children: caseItem.title
                                }, void 0, false, {
                                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground mt-2",
                                    children: [
                                        caseItem.condition,
                                        " • ",
                                        caseItem.age,
                                        " yrs • ",
                                        caseItem.duration
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-6 text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                            title: "Presentation",
                                            text: caseItem.details.presentation
                                        }, void 0, false, {
                                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                            title: "Assessment",
                                            text: caseItem.details.assessment
                                        }, void 0, false, {
                                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                            title: "Treatment Plan",
                                            text: caseItem.details.plan
                                        }, void 0, false, {
                                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                                            title: "Monitoring",
                                            text: caseItem.details.monitoring
                                        }, void 0, false, {
                                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-semibold text-foreground mb-2",
                                                    children: "Outcome"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-foreground",
                                                    children: caseItem.outcome
                                                }, void 0, false, {
                                                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/HairGrowth/register",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-5 py-3 rounded-xl bg-primary text-primary-foreground",
                                            children: "Book Consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/case-studies/[slug]/page.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/case-studies/[slug]/page.jsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/case-studies/[slug]/page.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/case-studies/[slug]/page.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
function Section({ title, text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-semibold text-foreground mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/case-studies/[slug]/page.jsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: text
            }, void 0, false, {
                fileName: "[project]/app/case-studies/[slug]/page.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/case-studies/[slug]/page.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/case-studies/[slug]/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/case-studies/[slug]/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8ea04981._.js.map