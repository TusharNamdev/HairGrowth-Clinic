(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Register/ProgressTabs.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgressTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function ProgressTabs({ stepIndex = 0, steps = [] }) {
    const percent = Math.round((stepIndex + 1) / steps.length * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 mb-4",
                children: steps.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mx-auto w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
              ${i <= stepIndex ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-600"}`,
                                children: i + 1
                            }, void 0, false, {
                                fileName: "[project]/components/Register/ProgressTabs.jsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs mt-2 text-gray-600",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/components/Register/ProgressTabs.jsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/Register/ProgressTabs.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/Register/ProgressTabs.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gray-200 h-2 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-2 rounded bg-emerald-400 transition-all",
                    style: {
                        width: `${percent}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Register/ProgressTabs.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Register/ProgressTabs.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Register/ProgressTabs.jsx",
        lineNumber: 7,
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
"[project]/components/Register/AnimatedInput.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function AnimatedInput({ type = "text", options = [], value, placeholder, onChange }) {
    if (type === "radio") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-gray-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "radio",
                            checked: value === opt,
                            onChange: ()=>onChange(opt),
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/components/Register/AnimatedInput.jsx",
                            lineNumber: 9,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-700",
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/components/Register/AnimatedInput.jsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this)
                    ]
                }, opt, true, {
                    fileName: "[project]/components/Register/AnimatedInput.jsx",
                    lineNumber: 8,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Register/AnimatedInput.jsx",
            lineNumber: 6,
            columnNumber: 7
        }, this);
    }
    if (type === "select") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: value || "",
            onChange: (e)=>onChange(e.target.value),
            className: "w-full border px-3 py-2 rounded",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Select"
                }, void 0, false, {
                    fileName: "[project]/components/Register/AnimatedInput.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: o,
                        children: o
                    }, o, false, {
                        fileName: "[project]/components/Register/AnimatedInput.jsx",
                        lineNumber: 26,
                        columnNumber: 29
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/AnimatedInput.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    // text / tel / number
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        value: value || "",
        onChange: (e)=>onChange(e.target.value),
        placeholder: placeholder || "",
        type: type,
        className: "w-full border px-3 py-2 rounded"
    }, void 0, false, {
        fileName: "[project]/components/Register/AnimatedInput.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = AnimatedInput;
var _c;
__turbopack_context__.k.register(_c, "AnimatedInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Register/PhotoUploader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotoUploader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PhotoUploader({ file, onChange }) {
    _s();
    const inputRef1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PhotoUploader.useEffect": ()=>{
            if (!file) {
                setPreview(null);
                return;
            }
            const url = URL.createObjectURL(file);
            setPreview(url);
            return ({
                "PhotoUploader.useEffect": ()=>URL.revokeObjectURL(url)
            })["PhotoUploader.useEffect"];
        }
    }["PhotoUploader.useEffect"], [
        file
    ]);
    function onFile(e) {
        const f = e.target.files?.[0];
        if (f) onChange(f);
    }
    function remove() {
        onChange(null);
        if (inputRef1.current) inputRef1.current.value = null;
        if (inputRef2.current) inputRef2.current.value = null;
        setPreview(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-48 h-48 rounded-xl bg-gray-100 flex items-center justify-center overflow-hidden border",
                children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: preview,
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/Register/PhotoUploader.jsx",
                    lineNumber: 32,
                    columnNumber: 20
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-400",
                    children: "No photo yet"
                }, void 0, false, {
                    fileName: "[project]/components/Register/PhotoUploader.jsx",
                    lineNumber: 32,
                    columnNumber: 83
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Register/PhotoUploader.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "px-4 py-2 bg-gray-800 text-white rounded cursor-pointer",
                        children: [
                            "Upload",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef1,
                                type: "file",
                                accept: "image/*",
                                onChange: onFile,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/PhotoUploader.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/PhotoUploader.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer",
                        children: [
                            "Take Picture",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef2,
                                type: "file",
                                accept: "image/*",
                                capture: "environment",
                                onChange: onFile,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/components/Register/PhotoUploader.jsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Register/PhotoUploader.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: remove,
                        className: "px-4 py-2 bg-white border rounded",
                        children: "Remove"
                    }, void 0, false, {
                        fileName: "[project]/components/Register/PhotoUploader.jsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Register/PhotoUploader.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Register/PhotoUploader.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(PhotoUploader, "pDIOMDHwf0ik9nJuA639CQKISTQ=");
_c = PhotoUploader;
var _c;
__turbopack_context__.k.register(_c, "PhotoUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Register/StepCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StepCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$AnimatedInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Register/AnimatedInput.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$PhotoUploader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Register/PhotoUploader.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function StepCard({ step, value, onChange, error, onTakePhoto }) {
    const type = step.type;
    if (type === "photo") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-lg p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-3",
                    children: step.label
                }, void 0, false, {
                    fileName: "[project]/components/Register/StepCard.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mb-4",
                    children: "Use camera for a clear image. Try natural light and show the thinning area."
                }, void 0, false, {
                    fileName: "[project]/components/Register/StepCard.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$PhotoUploader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    file: value,
                    onChange: (f)=>{
                        onChange(f);
                        if (onTakePhoto) onTakePhoto(f);
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Register/StepCard.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 text-sm mt-3",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/Register/StepCard.jsx",
                    lineNumber: 23,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/StepCard.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    if (type === "stages") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-lg p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-semibold mb-4",
                    children: step.label
                }, void 0, false, {
                    fileName: "[project]/components/Register/StepCard.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                    children: step.options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>onChange(opt.id),
                            className: `cursor-pointer rounded-xl border p-4 text-center ${value === opt.id ? "ring-2 ring-emerald-300" : "border-gray-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-[4/3] mb-3 bg-gray-50 rounded overflow-hidden flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: opt.img,
                                        alt: opt.title,
                                        className: "object-contain w-3/4 h-3/4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Register/StepCard.jsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Register/StepCard.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium",
                                    children: opt.title
                                }, void 0, false, {
                                    fileName: "[project]/components/Register/StepCard.jsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, opt.id, true, {
                            fileName: "[project]/components/Register/StepCard.jsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Register/StepCard.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-600 text-sm mt-3",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/components/Register/StepCard.jsx",
                    lineNumber: 46,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Register/StepCard.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    // generic text/select/number/radio
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-2xl shadow-lg p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-3",
                children: step.label
            }, void 0, false, {
                fileName: "[project]/components/Register/StepCard.jsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$AnimatedInput$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: type,
                options: step.options,
                value: value,
                placeholder: step.placeholder,
                onChange: onChange
            }, void 0, false, {
                fileName: "[project]/components/Register/StepCard.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-600 text-sm mt-3",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Register/StepCard.jsx",
                lineNumber: 64,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Register/StepCard.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = StepCard;
var _c;
__turbopack_context__.k.register(_c, "StepCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/register/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { motion } from "framer-motion";
// import ProgressBar from "@/components/shared/ProgressBar";
// export default function Register() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     gender: "",
//     location: "",
//   });
//   function handleChange(e) {
//     const { name, value } = e.target;
//     setForm((s) => ({ ...s, [name]: value }));
//   }
//   function next() {
//     if (step === 3) {
//       const qs = new URLSearchParams(form).toString();
//       router.push(`/stage?${qs}`);
//     } else setStep((s) => s + 1);
//   }
//   function prev() {
//     setStep((s) => Math.max(1, s - 1));
//   }
//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <main className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow">
//         <h2 className="text-2xl font-bold">Hair Health Assessment</h2>
//         <p className="text-gray-600 mt-2">
//           Understand the root cause of your hair fall with this doctor-designed questionnaire.
//         </p>
//         <div className="mt-6">
//           <ProgressBar step={step} />
//           <motion.div
//             key={step}
//             initial={{ opacity: 0, x: 10 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.35 }}
//           >
//             {step === 1 && (
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <Label>Name</Label>
//                   <Input name="name" value={form.name} onChange={handleChange} required />
//                 </div>
//                 <div>
//                   <Label>Email</Label>
//                   <Input name="email" type="email" value={form.email} onChange={handleChange} required />
//                 </div>
//                 <div>
//                   <Label>Phone</Label>
//                   <Input name="phone" value={form.phone} onChange={handleChange} required />
//                 </div>
//               </div>
//             )}
//             {step === 2 && (
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <Label>Age</Label>
//                   <Input name="age" type="number" value={form.age} onChange={handleChange} />
//                 </div>
//                 <div>
//                   <Label>Gender</Label>
//                   <select name="gender" className="w-full mt-2 p-2 border rounded" value={form.gender} onChange={handleChange}>
//                     <option value="">Select</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div>
//                   <Label>Location</Label>
//                   <Input name="location" value={form.location} onChange={handleChange} />
//                 </div>
//               </div>
//             )}
//             {step === 3 && (
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <Label>Any hair/health concerns (optional)</Label>
//                   <textarea
//                     name="concerns"
//                     value={form.concerns || ""}
//                     onChange={handleChange}
//                     className="w-full p-2 border rounded"
//                     rows={4}
//                   />
//                 </div>
//                 <div className="text-sm text-gray-500">
//                   Share symptoms like stress, dandruff, sleep issues, thinning, scalp itching or digestion concerns.
//                 </div>
//               </div>
//             )}
//             <div className="mt-6 flex items-center gap-3">
//               {step > 1 && <Button variant="ghost" onClick={prev}>Back</Button>}
//               <Button onClick={next}>{step === 3 ? "Proceed to Stage" : "Next"}</Button>
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>RegisterFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$ProgressTabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Register/ProgressTabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$StepCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Register/StepCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$PhotoUploader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Register/PhotoUploader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function RegisterFlow() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // flattened steps array (each step is a single question or group used consecutively)
    const steps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RegisterFlow.useMemo[steps]": ()=>{
            // hair + internal questions modeled after your images
            const hairQuestions = [
                {
                    key: "hair_family",
                    label: "Do you have a family history of hair loss?",
                    type: "radio",
                    options: [
                        "Mother side",
                        "Father side",
                        "Both",
                        "None"
                    ],
                    required: true
                },
                {
                    key: "hair_dandruff",
                    label: "Do you have dandruff?",
                    type: "radio",
                    options: [
                        "No",
                        "Mild",
                        "Heavy",
                        "Psoriasis/Seborrheic Dermatitis"
                    ],
                    required: true
                },
                {
                    key: "hair_shedding_pattern",
                    label: "How is the pattern of shedding?",
                    type: "radio",
                    options: [
                        "Diffuse thinning",
                        "Receding hairline",
                        "Patchy",
                        "Other"
                    ],
                    required: true
                }
            ];
            const internalQuestions = [
                {
                    key: "internal_sleep",
                    label: "How well do you sleep?",
                    type: "radio",
                    options: [
                        "Very well",
                        "Disturbed",
                        "Hard to fall asleep"
                    ],
                    required: true
                },
                {
                    key: "internal_stress",
                    label: "How stressed are you?",
                    type: "radio",
                    options: [
                        "None",
                        "Low",
                        "Moderate",
                        "High"
                    ],
                    required: true
                },
                {
                    key: "internal_constipation",
                    label: "Do you feel constipated?",
                    type: "radio",
                    options: [
                        "No",
                        "Sometimes",
                        "Often",
                        "IBS"
                    ],
                    required: true
                },
                {
                    key: "internal_gas",
                    label: "Do you have gas/acidity?",
                    type: "radio",
                    options: [
                        "No",
                        "Sometimes",
                        "Often"
                    ],
                    required: true
                },
                {
                    key: "internal_energy",
                    label: "Energy levels during the day?",
                    type: "radio",
                    options: [
                        "High",
                        "Low morning",
                        "Low afternoon",
                        "Low evening"
                    ],
                    required: true
                },
                {
                    key: "internal_supplements",
                    label: "Taking any hair supplements?",
                    type: "radio",
                    options: [
                        "Yes",
                        "No"
                    ],
                    required: false
                }
            ];
            // Stage selection question (single)
            const stageQuestion = {
                key: "stage",
                label: "Which stage matches your hair loss?",
                type: "stages",
                options: [
                    {
                        id: 0,
                        title: "Stage 1 (Mild)",
                        img: "/images/stages/male-1.svg"
                    },
                    {
                        id: 1,
                        title: "Stage 2 (Moderate)",
                        img: "/images/stages/male-2.svg"
                    },
                    {
                        id: 2,
                        title: "Stage 3 (Severe)",
                        img: "/images/stages/male-3.svg"
                    }
                ],
                required: true
            };
            // About you fields shown one-by-one
            const about = [
                {
                    key: "name",
                    label: "Your full name",
                    type: "text",
                    placeholder: "e.g. Rahul Mehta",
                    required: true
                },
                {
                    key: "phone",
                    label: "Phone number",
                    type: "tel",
                    placeholder: "+91 9XXXXXXXXX",
                    required: true
                },
                {
                    key: "age",
                    label: "Age",
                    type: "number",
                    placeholder: "e.g. 29",
                    required: true
                },
                {
                    key: "gender",
                    label: "Gender",
                    type: "select",
                    options: [
                        "Male",
                        "Female",
                        "Other"
                    ],
                    required: true
                },
                {
                    key: "location",
                    label: "Location (city)",
                    type: "text",
                    placeholder: "e.g. Mumbai (optional)",
                    required: false
                }
            ];
            // Build final ordered list: about -> stage -> hair questions -> internal -> scalp upload (special)
            return [
                ...about,
                stageQuestion,
                ...hairQuestions,
                ...internalQuestions,
                {
                    key: "scalp_photo",
                    label: "Upload a clear scalp photo",
                    type: "photo",
                    required: true
                }
            ];
        }
    }["RegisterFlow.useMemo[steps]"], []);
    // form state
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}); // store by key
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    function setValue(key, value) {
        setForm((s)=>({
                ...s,
                [key]: value
            }));
        setErrors((e)=>({
                ...e,
                [key]: null
            }));
    }
    function validateCurrent() {
        const step = steps[index];
        if (!step) return true;
        if (!step.required) return true;
        const val = form[step.key];
        if (step.type === "photo") {
            if (!val) {
                setErrors((e)=>({
                        ...e,
                        [step.key]: "Please upload or take a picture"
                    }));
                return false;
            }
            return true;
        }
        if (step.type === "stages") {
            if (val === undefined || val === null) {
                setErrors((e)=>({
                        ...e,
                        [step.key]: "Please choose a stage"
                    }));
                return false;
            }
            return true;
        }
        if (step.type === "select" || step.type === "text" || step.type === "tel" || step.type === "number" || step.type === "radio") {
            if (step.required && (val === undefined || val === "" || val === null)) {
                setErrors((e)=>({
                        ...e,
                        [step.key]: `${step.label} is required`
                    }));
                return false;
            }
        }
        return true;
    }
    function next() {
        if (!validateCurrent()) return;
        setIndex((i)=>Math.min(steps.length - 1, i + 1));
    }
    function prev() {
        setIndex((i)=>Math.max(0, i - 1));
    }
    // on final submit, validate all required fields; then push to /coach with params
    function submitAll() {
        // validate all required
        const err = {};
        steps.forEach((s)=>{
            if (s.required) {
                const v = form[s.key];
                if (s.type === "photo") {
                    if (!v) err[s.key] = "Required";
                } else if (s.type === "stages") {
                    if (v === undefined || v === null) err[s.key] = "Required";
                } else {
                    if (v === undefined || v === "") err[s.key] = "Required";
                }
            }
        });
        if (Object.keys(err).length) {
            setErrors(err);
            // jump to first error index
            const firstKey = Object.keys(err)[0];
            const firstIdx = steps.findIndex((s)=>s.key === firstKey);
            if (firstIdx >= 0) setIndex(firstIdx);
            return;
        }
        // build query params (prefix groups)
        const params = new URLSearchParams();
        Object.entries(form).forEach(([k, v])=>{
            // for file (photo) send file name only -- you should upload to server in prod
            if (v instanceof File) {
                params.set(k, v.name);
            } else {
                params.set(k, typeof v === "object" ? JSON.stringify(v) : String(v));
            }
        });
        router.push("/coach?" + params.toString());
    }
    const current = steps[index];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-3xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: prev,
                            className: "text-sm text-gray-600 hover:underline",
                            disabled: index === 0,
                            children: "← Previous"
                        }, void 0, false, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600",
                            children: [
                                index + 1,
                                " / ",
                                steps.length
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$ProgressTabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    stepIndex: index,
                    steps: steps.map((s)=>s.label || s.key)
                }, void 0, false, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            initial: false,
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                animate: {
                                    opacity: 1,
                                    x: 0
                                },
                                exit: {
                                    opacity: 0,
                                    x: -30
                                },
                                transition: {
                                    duration: 0.32
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Register$2f$StepCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    step: current,
                                    value: form[current.key],
                                    onChange: (val)=>setValue(current.key, val),
                                    error: errors[current.key],
                                    onTakePhoto: (file)=>setValue(current.key, file)
                                }, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this)
                            }, current.key, false, {
                                fileName: "[project]/app/register/page.jsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setIndex(0);
                                            setErrors({});
                                            setForm({});
                                        },
                                        className: "text-xs text-gray-500 hover:underline",
                                        children: "Reset"
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.jsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: index < steps.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: next,
                                        className: "px-5 py-2 bg-emerald-600 text-white rounded-md shadow hover:shadow-lg",
                                        children: "Next"
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.jsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: submitAll,
                                        className: "px-5 py-2 bg-indigo-600 text-white rounded-md shadow hover:shadow-lg",
                                        children: "Submit"
                                    }, void 0, false, {
                                        fileName: "[project]/app/register/page.jsx",
                                        lineNumber: 347,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/register/page.jsx",
                                    lineNumber: 338,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/register/page.jsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/register/page.jsx",
                    lineNumber: 311,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/register/page.jsx",
            lineNumber: 301,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/register/page.jsx",
        lineNumber: 300,
        columnNumber: 5
    }, this);
}
_s(RegisterFlow, "Ag3knpzRT9GZ2I/ZX52YagQfPEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RegisterFlow;
var _c;
__turbopack_context__.k.register(_c, "RegisterFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_22d2bcd9._.js.map