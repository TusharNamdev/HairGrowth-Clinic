(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/modernfronted/HairGrowth-Clinic/lib/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/firebase.js
__turbopack_context__.s([
    "analytics",
    ()=>analytics,
    "app",
    ()=>app,
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/@firebase/app/dist/esm/index.esm2017.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/@firebase/analytics/dist/esm/index.esm2017.js [app-client] (ecmascript)");
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyC-sfCC3GgeuZHfsZ8ft8a1Sfy3D-2SGec",
    authDomain: "modernclinic-5ef30.firebaseapp.com",
    projectId: "modernclinic-5ef30",
    storageBucket: "modernclinic-5ef30.firebasestorage.app",
    messagingSenderId: "779266766038",
    appId: "1:779266766038:web:40875ef21f586091518577",
    measurementId: "G-4RY9HVV8XL"
};
// IMPORTANT:
// Prevent initialization errors during Next.js hot reload
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApp"])();
// Auth must be created AFTER app is initialized
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
// Analytics must run only in browser
let analytics = null;
if ("TURBOPACK compile-time truthy", 1) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupported"])().then((yes)=>{
        if (yes) analytics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$analytics$2f$dist$2f$esm$2f$index$2e$esm2017$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAnalytics"])(app);
    });
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/modernfronted/HairGrowth-Clinic/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ children, className = '', variant = 'default', ...props }) {
    const base = 'px-4 py-2 rounded-md font-medium';
    const styles = variant === 'ghost' ? 'bg-transparent border' : 'bg-emerald-600 text-white';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${base} ${styles} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/ui/button.jsx",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppointmentSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/components/ui/button.jsx [app-client] (ecmascript)");
;
;
const appointmentPlans = [
    {
        id: "consultation-only",
        title: "Consultation Only",
        price: 1999,
        summary: "One-time consultation",
        includes: [
            "Doctor consultation"
        ]
    },
    {
        id: "1-month",
        title: "1 Month Plan",
        price: 3499,
        summary: "1 month medication and support",
        includes: [
            "Doctor consultation",
            "Medication (1 month)",
            "Basic WhatsApp Support"
        ]
    },
    {
        id: "3-months",
        title: "3 Months Plan",
        price: 6499,
        summary: "3 months comprehensive care",
        includes: [
            "Unlimited consultations",
            "Medication",
            "Priority WhatsApp Support"
        ]
    },
    {
        id: "6-months",
        title: "6 Months Plan",
        price: 10999,
        summary: "6 months premium care",
        includes: [
            "Unlimited consultations",
            "Medication",
            "Premium WhatsApp Support"
        ]
    }
];
function AppointmentSelector({ plans: propPlans, onSelect, selectedPlan }) {
    const displayPlans = propPlans || appointmentPlans;
    const handleSelect = (plan)=>{
        onSelect(plan);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
        children: displayPlans.map((p)=>{
            const isSelected = selectedPlan === p.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative bg-white rounded-2xl shadow-md border p-6 flex flex-col transition-all ${isSelected ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-200"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-lg",
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold",
                                children: [
                                    "₹",
                                    p.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 mt-2",
                        children: p.summary
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 text-sm text-gray-700 space-y-2 flex-1",
                        children: p.includes.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "✔"
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                                        lineNumber: 66,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    item
                                ]
                            }, item, true, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        className: "w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white",
                        onClick: ()=>handleSelect(p),
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                ]
            }, p.id, true, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
                lineNumber: 46,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = AppointmentSelector;
var _c;
__turbopack_context__.k.register(_c, "AppointmentSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppointmentForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/redux/slices/appointmentSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$components$2f$AppointmentSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/components/AppointmentSelector.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/heart-pulse.js [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/modernfronted/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function AppointmentForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { loading, error, registerAppointmentSuccess, verifyAppointmentSuccess, appointmentId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "AppointmentForm.useSelector": (state)=>state.appointment
    }["AppointmentForm.useSelector"]);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        region: "",
        disease: ""
    });
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmationResult, setConfirmationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showOtpModal, setShowOtpModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showPlanSelector, setShowPlanSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const recaptchaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* RESET STATE ON MOUNT */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentForm.useEffect": ()=>{
            setSelectedPlan(null);
            setErrors({});
            setShowOtpModal(false);
            setOtp("");
            setOtpSent(false);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearApiState"])());
        }
    }["AppointmentForm.useEffect"], [
        dispatch
    ]);
    /* HANDLE CLICK OUTSIDE */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentForm.useEffect": ()=>{
            function handleClickOutside(e) {
                if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                    setOpenDropdown(null);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "AppointmentForm.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["AppointmentForm.useEffect"];
        }
    }["AppointmentForm.useEffect"], []);
    // Initialize Recaptcha
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentForm.useEffect": ()=>{
            if (!recaptchaRef.current) {
                recaptchaRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecaptchaVerifier"]("recaptcha-container-appointment", {
                    size: "invisible"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
            }
        }
    }["AppointmentForm.useEffect"], []);
    // Handle verify appointment success → close modal, show plan selector
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentForm.useEffect": ()=>{
            if (verifyAppointmentSuccess) {
                setShowOtpModal(false);
                setShowPlanSelector(true);
            }
        }
    }["AppointmentForm.useEffect"], [
        verifyAppointmentSuccess
    ]);
    // Handle errors
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentForm.useEffect": ()=>{
            if (error) {
                console.log("Appointment error occurred:", error);
                // Only alert if we are in the appointment flow (showPlanSelector or showOtpModal)
                if (showPlanSelector || showOtpModal) {
                    alert(error);
                }
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearApiState"])());
            }
        }
    }["AppointmentForm.useEffect"], [
        error,
        dispatch,
        showPlanSelector,
        showOtpModal
    ]);
    // Send OTP via Firebase
    async function sendOtp() {
        console.log("sendOtp called from:", ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable");
        try {
            if (!registerAppointmentSuccess) {
                alert("Registration not complete. Please wait.");
                return;
            }
            if (!recaptchaRef.current) {
                alert("Recaptcha not ready! Try again.");
                return;
            }
            // Validate phone number
            const cleanPhone = form.phone.replace(/\D/g, ''); // Remove non-digits
            if (cleanPhone.length !== 10) {
                alert("Please enter a valid 10-digit phone number.");
                return;
            }
            const phone = "+91" + cleanPhone;
            console.log("Sending OTP to phone:", phone);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPhoneNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], phone, recaptchaRef.current);
            setConfirmationResult(result);
            setOtpSent(true);
            console.log("OTP sent successfully");
        } catch (err) {
            console.log("SEND OTP ERROR:", err);
            console.log("Error code:", err.code);
            console.log("Error message:", err.message);
            alert("OTP sending failed. Try again.");
        }
    }
    // Verify OTP
    async function verifyOtp() {
        console.log("verifyOtp called from:", ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable");
        try {
            if (!confirmationResult) {
                alert("OTP expired. Please resend.");
                return;
            }
            console.log("Verifying OTP:", otp);
            // Confirm OTP with Firebase
            await confirmationResult.confirm(otp);
            // Get Firebase ID token
            const idToken = await __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.getIdToken();
            console.log("Firebase verification successful, dispatching backend verify");
            // Dispatch verify action
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAppointmentOtp"])({
                phone: form.phone,
                idToken: idToken,
                appointmentId: appointmentId
            }));
        } catch (err) {
            console.log("VERIFY ERROR", err);
            console.log("Error code:", err.code);
            console.log("Error message:", err.message);
            alert("Invalid OTP");
        }
    }
    function validateForm() {
        let err = {};
        if (!form.name.trim()) err.name = "Name is required";
        if (!form.email.trim()) err.email = "Email is required";
        if (!form.phone.trim()) err.phone = "Phone is required";
        if (!form.region) err.region = "Region is required";
        if (!form.disease) err.disease = "Condition is required";
        setErrors(err);
        return Object.keys(err).length === 0;
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$redux$2f$slices$2f$appointmentSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerAppointment"])({
            name: form.name,
            email: form.email,
            phone: form.phone,
            region: form.region,
            condition: form.disease
        }));
        setShowOtpModal(true);
    }
    const diseaseCategories = [
        "Hair Fall",
        "Respiratory",
        "Skin Disorders",
        "Gastrointestinal",
        "Mental & Emotional Health",
        "Musculoskeletal",
        "ENT Problems",
        "Women’s Health",
        "Children’s Health",
        "Chronic Conditions",
        "Lifestyle-Related Problems",
        "Obesity"
    ];
    const regionList = [
        "India",
        "Asia",
        "Europe, Australia",
        "USA, Canada",
        "South America, Africa"
    ];
    const fade = {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ...fade,
        id: "appointment-form",
        transition: {
            duration: 0.6
        },
        className: "max-w-3xl mx-auto bg-card/70 backdrop-blur-xl border border-border shadow-lg rounded-3xl p-6 md:p-8 mt-10",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "recaptcha-container-appointment"
            }, void 0, false, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                lineNumber: 236,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-bold text-foreground flex justify-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                className: "text-primary"
                            }, void 0, false, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            " Book an ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "Online"
                            }, void 0, false, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                lineNumber: 240,
                                columnNumber: 69
                            }, this),
                            "Appointment"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground mt-2",
                        children: "Get a consultation with our doctor within 24 hours."
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 242,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                lineNumber: 238,
                columnNumber: 13
            }, this),
            !showPlanSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            size: 18,
                                            className: "text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                            lineNumber: 255,
                                            columnNumber: 31
                                        }, void 0),
                                        label: "Name",
                                        name: "name",
                                        placeholder: "Your full name",
                                        value: form.name,
                                        onChange: (e)=>{
                                            setForm((prev)=>({
                                                    ...prev,
                                                    name: e.target.value
                                                }));
                                            if (errors.name) setErrors((prev)=>({
                                                    ...prev,
                                                    name: undefined
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 254,
                                        columnNumber: 21
                                    }, this),
                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.name
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 265,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                lineNumber: 253,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 18,
                                            className: "text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                            lineNumber: 271,
                                            columnNumber: 31
                                        }, void 0),
                                        label: "Email",
                                        name: "email",
                                        type: "email",
                                        placeholder: "Your email",
                                        value: form.email,
                                        onChange: (e)=>{
                                            setForm((prev)=>({
                                                    ...prev,
                                                    email: e.target.value
                                                }));
                                            if (errors.email) setErrors((prev)=>({
                                                    ...prev,
                                                    email: undefined
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 270,
                                        columnNumber: 21
                                    }, this),
                                    errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.email
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 282,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                lineNumber: 269,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputField, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 18,
                                            className: "text-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                            lineNumber: 288,
                                            columnNumber: 31
                                        }, void 0),
                                        label: "Phone",
                                        name: "phone",
                                        type: "tel",
                                        placeholder: "9999999999",
                                        value: form.phone,
                                        onChange: (e)=>{
                                            setForm((prev)=>({
                                                    ...prev,
                                                    phone: e.target.value
                                                }));
                                            if (errors.phone) setErrors((prev)=>({
                                                    ...prev,
                                                    phone: undefined
                                                }));
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 287,
                                        columnNumber: 21
                                    }, this),
                                    errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.phone
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 299,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                lineNumber: 286,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium text-foreground mb-1",
                                        children: "Region"
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 304,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setOpenDropdown(openDropdown === "region" ? null : "region"),
                                        className: "flex items-center justify-between bg-background border border-border px-3 py-2 rounded-xl w-full text-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 18,
                                                        className: "text-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                                        lineNumber: 316,
                                                        columnNumber: 29
                                                    }, this),
                                                    form.region || "Select Region"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                                lineNumber: 315,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                                lineNumber: 319,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 308,
                                        columnNumber: 21
                                    }, this),
                                    openDropdown === "region" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownShell, {
                                        children: regionList.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    setForm({
                                                        ...form,
                                                        region: r
                                                    });
                                                    setOpenDropdown(null);
                                                    if (errors.region) setErrors((prev)=>({
                                                            ...prev,
                                                            region: undefined
                                                        }));
                                                },
                                                className: "px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm",
                                                children: r
                                            }, r, false, {
                                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                                lineNumber: 326,
                                                columnNumber: 31
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 324,
                                        columnNumber: 25
                                    }, this),
                                    errors.region && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.region
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 341,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                lineNumber: 303,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:col-span-2 flex flex-col relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-medium text-foreground mb-1",
                                        children: "Condition"
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 346,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setOpenDropdown(openDropdown === "disease" ? null : "disease"),
                                        className: "flex items-center justify-between bg-background border border-border px-3 py-3 rounded-xl w-full text-foreground",
                                        children: [
                                            form.disease || "Select Condition",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                                lineNumber: 358,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 350,
                                        columnNumber: 21
                                    }, this),
                                    openDropdown === "disease" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownShell, {
                                        children: diseaseCategories.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    setForm({
                                                        ...form,
                                                        disease: d
                                                    });
                                                    setOpenDropdown(null);
                                                    if (errors.disease) setErrors((prev)=>({
                                                            ...prev,
                                                            disease: undefined
                                                        }));
                                                },
                                                className: "px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm",
                                                children: d
                                            }, d, false, {
                                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                                lineNumber: 365,
                                                columnNumber: 31
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 363,
                                        columnNumber: 25
                                    }, this),
                                    errors.disease && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.disease
                                    }, void 0, false, {
                                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                        lineNumber: 380,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                lineNumber: 345,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 250,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition disabled:opacity-50",
                            children: loading ? "Processing..." : "Next Step"
                        }, void 0, false, {
                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                            lineNumber: 386,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 385,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                lineNumber: 248,
                columnNumber: 17
            }, this),
            showPlanSelector && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-center mb-6",
                        children: "Choose Your Appointment Plan"
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 400,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$components$2f$AppointmentSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        selectedPlan: selectedPlan,
                        onSelect: (plan)=>{
                            setSelectedPlan(plan.id);
                            const data = {
                                amount: plan.price,
                                appointmentId: appointmentId,
                                timestamp: Date.now()
                            };
                            localStorage.setItem("appointmentData", JSON.stringify(data));
                            localStorage.setItem("selectedPlan", plan.id);
                        }
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 401,
                        columnNumber: 25
                    }, this),
                    selectedPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setShowPlanSelector(false);
                                router.push("/payment-method");
                            },
                            className: "px-6 py-3 rounded-xl bg-primary text-primary-foreground shadow-soft hover:bg-primary-dark transition",
                            children: "Proceed to Payment"
                        }, void 0, false, {
                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                            lineNumber: 416,
                            columnNumber: 33
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 415,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                lineNumber: 399,
                columnNumber: 21
            }, this),
            showOtpModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card p-6 rounded-2xl shadow-lg max-w-sm w-full mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-center mb-4",
                            children: "Verify Your Phone"
                        }, void 0, false, {
                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                            lineNumber: 434,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-muted-foreground mb-4",
                            children: [
                                "OTP will be sent to +91 ",
                                form.phone
                            ]
                        }, void 0, true, {
                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                            lineNumber: 435,
                            columnNumber: 25
                        }, this),
                        !otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: sendOtp,
                            disabled: loading || !registerAppointmentSuccess,
                            className: "w-full px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/80 transition disabled:opacity-50 mb-4",
                            children: loading ? "Sending OTP..." : "Send OTP"
                        }, void 0, false, {
                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                            lineNumber: 439,
                            columnNumber: 29
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full border border-border bg-background px-3 py-2 rounded text-foreground text-center text-lg mb-4",
                                    placeholder: "Enter 6-digit OTP",
                                    value: otp,
                                    onChange: (e)=>{
                                        const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                                        if (value.length <= 6) {
                                            setOtp(value);
                                        }
                                    },
                                    maxLength: 6
                                }, void 0, false, {
                                    fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                    lineNumber: 448,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowOtpModal(false),
                                            className: "flex-1 px-4 py-2 rounded-xl border border-border hover:bg-secondary/15 transition",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                            lineNumber: 462,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: verifyOtp,
                                            disabled: loading,
                                            className: "flex-1 px-4 py-2 rounded-xl bg-accent text-accent-foreground hover:bg-accent/80 transition disabled:opacity-50",
                                            children: loading ? "Verifying..." : "Verify"
                                        }, void 0, false, {
                                            fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                            lineNumber: 468,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                                    lineNumber: 461,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                    lineNumber: 433,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                lineNumber: 432,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
        lineNumber: 229,
        columnNumber: 9
    }, this);
}
_s(AppointmentForm, "GGn+dcsCkZaS5NwjmDx+SX7dF6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = AppointmentForm;
/* INPUT FIELD */ function InputField({ icon, label, name, setForm, value, onChange, ...rest }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium text-foreground mb-1",
                children: label
            }, void 0, false, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                lineNumber: 489,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-xl",
                children: [
                    icon,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: name,
                        value: value,
                        onChange: onChange || ((e)=>setForm((prev)=>({
                                    ...prev,
                                    [name]: e.target.value
                                }))),
                        className: "bg-transparent w-full outline-none text-foreground",
                        ...rest
                    }, void 0, false, {
                        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                        lineNumber: 494,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
                lineNumber: 492,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
        lineNumber: 488,
        columnNumber: 9
    }, this);
}
_c1 = InputField;
/* DROPDOWN SHELL */ function DropdownShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$modernfronted$2f$HairGrowth$2d$Clinic$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 6
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 6
        },
        className: "   absolute top-full left-0    mt-2 z-40 w-full    bg-card/90 backdrop-blur-xl    border border-border    rounded-2xl shadow-xl    p-2    max-h-48 overflow-y-auto   ",
        children: children
    }, void 0, false, {
        fileName: "[project]/modernfronted/HairGrowth-Clinic/components/AppointmentForm.jsx",
        lineNumber: 509,
        columnNumber: 9
    }, this);
}
_c2 = DropdownShell;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AppointmentForm");
__turbopack_context__.k.register(_c1, "InputField");
__turbopack_context__.k.register(_c2, "DropdownShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=modernfronted_HairGrowth-Clinic_2204f081._.js.map