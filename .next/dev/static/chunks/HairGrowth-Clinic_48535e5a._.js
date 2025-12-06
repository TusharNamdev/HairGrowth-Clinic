(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function ProgressTabs({ step = 0 }) {
    const tabs = [
        "About You",
        "Hair Health",
        "Internal Health",
        "Scalp Assessment"
    ];
    const percent = Math.round(step / (tabs.length - 1) * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 hidden md:block"
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "   flex gap-3    overflow-x-auto    no-scrollbar    max-w-full    py-1   ",
                        children: tabs.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `
                px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
                ${i <= step ? "bg-primary/20 text-foreground" : "bg-muted text-muted-foreground"}
              `,
                                children: t
                            }, t, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-right text-sm text-muted-foreground hidden md:block",
                        children: [
                            percent,
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 bg-muted rounded-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 bg-primary rounded-full transition-all",
                        style: {
                            width: `${percent}%`
                        }
                    }, void 0, false, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden text-right text-xs text-muted-foreground mt-1",
                children: [
                    percent,
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ProgressTabs;
var _c;
__turbopack_context__.k.register(_c, "ProgressTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
function QuestionCard({ question, options = [], value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 bg-card rounded-2xl border border-border shadow-soft",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-foreground mb-4",
                children: question
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: options.map((opt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-4 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "radio",
                                name: question,
                                checked: value === opt,
                                onChange: ()=>onChange(opt),
                                className: "form-radio text-primary h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-foreground",
                                children: opt
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = QuestionCard;
var _c;
__turbopack_context__.k.register(_c, "QuestionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PhotoUploader({ file, onChange }) {
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoUploader.useEffect": ()=>{
            if (file) {
                const url = URL.createObjectURL(file);
                setPreview(url);
                return ({
                    "PhotoUploader.useEffect": ()=>URL.revokeObjectURL(url)
                })["PhotoUploader.useEffect"];
            } else {
                setPreview(null);
            }
        }
    }["PhotoUploader.useEffect"], [
        file
    ]);
    function handleFileChange(e) {
        const f = e.target.files?.[0];
        if (f) onChange(f);
    }
    function handleRemove() {
        onChange(null);
        if (inputRef.current) inputRef.current.value = null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 h-48 rounded-xl bg-muted flex items-center justify-center overflow-hidden shadow-soft border border-border",
                children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: preview,
                    alt: "preview",
                    className: "object-cover w-full h-full"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center text-muted-foreground",
                    children: "No photo yet"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 w-full justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "inline-flex items-center justify-center px-6 py-3 border border-border bg-card rounded text-sm cursor-pointer hover:bg-muted transition",
                        children: [
                            "Upload Scalp Photo",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                type: "file",
                                accept: "image/*",
                                style: {
                                    display: "none"
                                },
                                onChange: handleFileChange
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded text-sm cursor-pointer hover:opacity-90 transition shadow-soft",
                        children: [
                            "Take a Picture",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: "image/*",
                                capture: "environment",
                                style: {
                                    display: "none"
                                },
                                onChange: handleFileChange
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleRemove,
                    className: "px-4 py-2 bg-card border border-border rounded shadow-soft text-sm hover:bg-muted transition",
                    children: "Remove"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(PhotoUploader, "xaLO3RhTgGw22w6sB1hSAWEykJ0=");
_c = PhotoUploader;
var _c;
__turbopack_context__.k.register(_c, "PhotoUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/hooks/useBaseURL.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useBaseURL
]);
"use client";
function useBaseURL() {
    if ("TURBOPACK compile-time truthy", 1) {
        return window.location.origin; // auto-detects IP + port
    }
    //TURBOPACK unreachable
    ;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/hooks/useApiBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>useApiBase
]);
function useApiBase() {
    if ("TURBOPACK compile-time truthy", 1) {
        const host = window.location.hostname; // auto IP of device
        const port = 5006; // backend port
        return `http://${host}:${port}`;
    }
    //TURBOPACK unreachable
    ;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegisterFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$ProgressTabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/Register/ProgressTabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$QuestionCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/Register/QuestionCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$PhotoUploader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/components/Register/PhotoUploader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/lib/firebase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/@firebase/auth/dist/esm2017/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useBaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/hooks/useBaseURL.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useApiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/hooks/useApiBase.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$Redux$2d$store$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/Redux-store/authSlice.js [app-client] (ecmascript)");
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
;
;
;
;
;
function RegisterFlow() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { loading, error, consultantId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "RegisterFlow.useSelector": (state)=>state.auth
    }["RegisterFlow.useSelector"]);
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        age: "",
        region: "",
        gender: "",
        stage: null,
        hair: {},
        internal: {},
        scalpPhoto: null
    });
    const [openDropdown, setOpenDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confirmationResult, setConfirmationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const recaptchaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [otpModalOpen, setOtpModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [verificationId, setVerificationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const baseURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useBaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const apiBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useApiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const regionList = [
        "India",
        "Asia",
        "Europe, Australia",
        "USA, Canada",
        "South America, Africa"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RegisterFlow.useEffect": ()=>{
            if (!recaptchaRef.current) {
                recaptchaRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecaptchaVerifier"]("recaptcha-container", {
                    size: "invisible"
                }, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"] // auth is placed here
                );
            }
        }
    }["RegisterFlow.useEffect"], []);
    async function sendOtp() {
        try {
            if (!recaptchaRef.current) {
                alert("Recaptcha not ready! Try again.");
                return;
            }
            const phone = "+91" + form.phone;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm2017$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signInWithPhoneNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], phone, recaptchaRef.current);
            setConfirmationResult(result);
            setOtpSent(true);
        } catch (err) {
            console.log("SEND OTP ERROR:", err);
            alert("OTP sending failed. Try again.");
        }
    }
    async function verifyOtp() {
        try {
            if (!confirmationResult) {
                alert("OTP expired. Please resend.");
                return;
            }
            const cred = await confirmationResult.confirm(otp);
            // Firebase token
            const idToken = await __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$lib$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser.getIdToken();
            // Register user
            const registerResult = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$Redux$2d$store$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerUser"])({
                name: form.name,
                mobile: form.phone,
                age: form.age,
                gender: form.gender,
                region: form.region,
                apiBase
            })).unwrap();
            // Verify OTP
            await dispatch(verifyOtp({
                mobile: form.phone,
                idToken: idToken,
                consultantId: registerResult.consultantId,
                apiBase
            })).unwrap();
            // Move to Step 1
            setOtpModalOpen(false);
            setStep(1);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } catch (err) {
            console.log("VERIFY ERROR", err);
            alert(err || "Invalid OTP");
        }
    }
    // VALIDATION
    function validateStep() {
        let err = {};
        if (step === 0) {
            if (!form.name.trim()) err.name = "Name is required";
            if (!form.phone.trim()) err.phone = "Phone is required";
            if (!form.age) err.age = "Age is required";
            if (!form.gender) err.gender = "Gender is required";
            if (!form.region) err.region = "Region is required";
        }
        if (step === 1) {
            if (form.stage === null) err.stage = "Please choose your stage";
        }
        if (step === 3) {
            if (!form.scalpPhoto) err.scalpPhoto = "Scalp photo is required";
        }
        setErrors(err);
        return Object.keys(err).length === 0;
    }
    function next() {
        if (!validateStep()) return;
        if (step === 0) {
            setOtpModalOpen(true);
            return;
        }
        setStep((p)=>p + 1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function prev() {
        setStep((p)=>Math.max(0, p - 1));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    function updateField(field, value) {
        setForm((prev)=>({
                ...prev,
                [field]: value
            }));
    }
    function updateNested(section, id, value) {
        setForm((prev)=>({
                ...prev,
                [section]: {
                    ...prev[section],
                    [id]: value
                }
            }));
    }
    // SUBMIT
    function submit() {
        if (!validateStep()) return;
        const params = new URLSearchParams();
        Object.entries(form).forEach(([key, val])=>{
            if (key !== "hair" && key !== "internal" && key !== "scalpPhoto") {
                params.set(key, val);
            }
        });
        Object.entries(form.hair || {}).forEach(([key, val])=>params.set("hair_" + key, val));
        Object.entries(form.internal || {}).forEach(([key, val])=>params.set("internal_" + key, val));
        params.set("scalpPhoto", form.scalpPhoto?.name || "");
        router.push("/HairGrowth/coach?" + params.toString());
    }
    const hairQuestions = [
        {
            id: "family",
            q: "Do you have a family history of hair loss?",
            options: [
                "Mother or mother's side",
                "Father or father's side",
                "Both",
                "None"
            ]
        },
        {
            id: "dandruff",
            q: "Do you have Dandruff?",
            options: [
                "No Dandruff",
                "Mild Dandruff",
                "Heavy Dandruff",
                "Psoriasis / Seborrheic Dermatitis"
            ]
        }
    ];
    const internalQuestions = [
        {
            id: "sleep",
            q: "How well do you sleep?",
            options: [
                "Peacefully 6-8 hours",
                "Disturbed sleep",
                "Difficulty sleeping"
            ]
        },
        {
            id: "stress",
            q: "How stressed are you?",
            options: [
                "None",
                "Low",
                "Moderate",
                "High"
            ]
        },
        {
            id: "constipation",
            q: "Do you feel constipated?",
            options: [
                "No",
                "Yes (fewer than 3 stools/week)",
                "Unsatisfied after stools",
                "IBS"
            ]
        },
        {
            id: "gas",
            q: "Gas, Acidity, or Bloating?",
            options: [
                "No",
                "Sometimes",
                "Often"
            ]
        },
        {
            id: "energy",
            q: "How is your energy during the day?",
            options: [
                "Normal",
                "Low in morning",
                "Low afternoon",
                "Low evening",
                "Always low"
            ]
        },
        {
            id: "supplements",
            q: "Are you taking supplements?",
            options: [
                "Yes",
                "No"
            ]
        }
    ];
    const stageData = {
        male: [
            {
                id: 0,
                label: "Stage 1 (Mild)",
                img: "/images/stages/male-stage1.png"
            },
            {
                id: 1,
                label: "Stage 2 (Moderate)",
                img: "/images/stages/male-stage2.png"
            },
            {
                id: 2,
                label: "Stage 3 (Severe)",
                img: "/images/stages/male-stage3.png"
            }
        ],
        female: [
            {
                id: 0,
                label: "Stage 1 (Mild)",
                img: "/images/stages/female-stage1.png"
            },
            {
                id: 1,
                label: "Stage 2 (Moderate)",
                img: "/images/stages/female-stage2.png"
            },
            {
                id: 2,
                label: "Stage 3 (Severe)",
                img: "/images/stages/female-stage3.png"
            }
        ]
    };
    const gender = form.gender || "male";
    const stageImages = stageData[gender];
    const DropdownShell = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full left-0 w-full mt-2 bg-card border border-border shadow-lg rounded-xl p-2 z-20",
            children: children
        }, void 0, false, {
            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
            lineNumber: 307,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-8 bg-background-soft",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-4xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "recaptcha-container"
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between mb-4 text-sm text-muted-foreground",
                    children: [
                        step > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prev,
                            children: "← Previous"
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 321,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 321,
                            columnNumber: 68
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "hover:text-accent",
                            children: "Exit"
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 320,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$ProgressTabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    step: step
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card mt-6 rounded-2xl shadow-soft border border-border p-6",
                    children: [
                        step === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-center font-bold mb-8 text-foreground",
                                    children: "Tell us about you"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 333,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 339,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground",
                                            value: form.name,
                                            onChange: (e)=>updateField("name", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 340,
                                            columnNumber: 17
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 346,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground",
                                            value: form.phone,
                                            onChange: (e)=>updateField("phone", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 353,
                                            columnNumber: 17
                                        }, this),
                                        errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.phone
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 359,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 351,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Age"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 365,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            className: "w-full border border-border bg-background px-3 py-2 rounded mt-1 text-foreground",
                                            value: form.age,
                                            onChange: (e)=>updateField("age", e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 366,
                                            columnNumber: 17
                                        }, this),
                                        errors.age && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.age
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 373,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-foreground",
                                            children: "Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 379,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-3 mt-2",
                                            children: [
                                                "male",
                                                "female"
                                            ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateField("gender", g),
                                                    className: `px-5 py-2 rounded border 
                        ${form.gender === g ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border-border"}`,
                                                    children: g.toUpperCase()
                                                }, g, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 383,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 381,
                                            columnNumber: 17
                                        }, this),
                                        errors.gender && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.gender
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 398,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col relative mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-foreground mb-1",
                                            children: "Region"
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setOpenDropdown(openDropdown === "region" ? null : "region"),
                                            className: "flex items-center justify-between bg-background border border-border px-3 py-2 rounded-xl w-full text-foreground",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            size: 18,
                                                            className: "text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this),
                                                        form.region || "Select Region"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 16,
                                                    className: "text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        openDropdown === "region" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DropdownShell, {
                                            children: regionList.length > 0 ? regionList.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>{
                                                        updateField("region", r);
                                                        setOpenDropdown(null);
                                                    },
                                                    className: "px-3 py-2 hover:bg-secondary/15 rounded-lg cursor-pointer text-sm text-foreground",
                                                    children: r
                                                }, r, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 426,
                                                    columnNumber: 25
                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-2 text-sm text-muted-foreground",
                                                children: "No regions available"
                                            }, void 0, false, {
                                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                lineNumber: 438,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this),
                                        errors.region && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-600 text-sm mt-1",
                                            children: errors.region
                                        }, void 0, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 446,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-center font-bold mb-8 text-foreground",
                                    children: "Hair Health"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: stageImages.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>updateField("stage", s.id),
                                            className: `rounded-xl border p-4 cursor-pointer transition 
                      ${form.stage === s.id ? "ring-2 ring-primary bg-primary/10" : "border-border bg-muted"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: s.img,
                                                    className: "w-full mb-3 rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-foreground",
                                                    children: s.label
                                                }, void 0, false, {
                                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                                    lineNumber: 474,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, s.id, true, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 464,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 462,
                                    columnNumber: 15
                                }, this),
                                errors.stage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm mt-2",
                                    children: errors.stage
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 480,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-6",
                                    children: hairQuestions.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$QuestionCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            question: q.q,
                                            options: q.options,
                                            value: form.hair[q.id],
                                            onChange: (v)=>updateNested("hair", q.id, v)
                                        }, q.id, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 486,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl text-center font-bold mb-8 text-foreground",
                                    children: "Internal Health"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 501,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: internalQuestions.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$QuestionCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            question: q.q,
                                            options: q.options,
                                            value: form.internal[q.id],
                                            onChange: (v)=>updateNested("internal", q.id, v)
                                        }, q.id, false, {
                                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-semibold text-center mb-4 text-foreground",
                                    children: "Upload your scalp picture"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$components$2f$Register$2f$PhotoUploader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    file: form.scalpPhoto,
                                    onChange: (file)=>updateField("scalpPhoto", file)
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                errors.scalpPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-600 text-sm mt-2",
                                    children: errors.scalpPhoto
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 532,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mt-6",
                            children: step < 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: next,
                                className: "px-6 py-2 bg-primary text-primary-foreground rounded shadow-soft hover:bg-primary-dark",
                                children: "Next →"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 540,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: submit,
                                className: "px-6 py-2 bg-accent text-accent-foreground rounded shadow-soft hover:bg-accent/80",
                                children: "Submit Assessment"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 547,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                            lineNumber: 538,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 328,
                    columnNumber: 9
                }, this),
                otpModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white p-6 rounded-xl shadow-xl w-full max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-center mb-4",
                                children: "Verify Your Phone"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 561,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-gray-600 text-sm mb-2",
                                children: "OTP will be sent to:"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 566,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center font-medium mb-4",
                                children: [
                                    "+91 ",
                                    form.phone
                                ]
                            }, void 0, true, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-600 text-sm text-center mb-4",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 574,
                                columnNumber: 17
                            }, this),
                            !otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: sendOtp,
                                    className: "w-full bg-primary text-white py-2 rounded-lg",
                                    children: "Send OTP"
                                }, void 0, false, {
                                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                    lineNumber: 579,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "w-full border px-3 py-2 rounded mb-3",
                                        placeholder: "Enter OTP",
                                        value: otp,
                                        onChange: (e)=>setOtp(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                        lineNumber: 592,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: verifyOtp,
                                        disabled: loading,
                                        className: "w-full bg-primary text-white py-2 rounded-lg disabled:opacity-50",
                                        children: loading ? "Verifying..." : "Verify OTP"
                                    }, void 0, false, {
                                        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                        lineNumber: 600,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOtpModalOpen(false);
                                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$Redux$2d$store$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearError"])());
                                },
                                className: "mt-4 w-full text-center text-gray-500 text-sm",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                                lineNumber: 610,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                        lineNumber: 559,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
                    lineNumber: 558,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
            lineNumber: 316,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/HairGrowth-Clinic/app/HairGrowth/register/page.jsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
_s(RegisterFlow, "ifhZxhyNw2y8W9T6TWzE3ZSC+7Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useBaseURL$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$hooks$2f$useApiBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = RegisterFlow;
var _c;
__turbopack_context__.k.register(_c, "RegisterFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$HairGrowth$2d$Clinic$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/HairGrowth-Clinic/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=HairGrowth-Clinic_48535e5a._.js.map