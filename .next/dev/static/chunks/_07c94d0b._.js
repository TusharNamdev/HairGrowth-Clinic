(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ui/button.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ children, className = '', variant = 'default', ...props }) {
    const base = 'px-4 py-2 rounded-md font-medium';
    const styles = variant === 'ghost' ? 'bg-transparent border' : 'bg-emerald-600 text-white';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${base} ${styles} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/button.jsx",
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
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/app/page.jsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
]);

//# sourceMappingURL=_07c94d0b._.js.map