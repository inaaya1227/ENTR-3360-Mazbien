(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AppShell.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2d$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw-clock.mjs [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.mjs [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-text.mjs [app-client] (ecmascript) <export default as MessageSquareText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/draftContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/AppShell.module.css [app-client] (css module)");
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
const LINKS = [
    {
        href: "/",
        label: "Discovery Intake",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
    },
    {
        href: "/followup",
        label: "Adaptive Follow-up",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__["MessageSquareText"]
    },
    {
        href: "/dashboard",
        label: "Consultant Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: "/history",
        label: "Assessment History",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2d$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"]
    }
];
function AppShellInner(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "8d39d7072d7703f3d53e99146fdf7c366f29677c9f0dec39897850f9b530ef65") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d39d7072d7703f3d53e99146fdf7c366f29677c9f0dec39897850f9b530ef65";
    }
    const { children, eyebrow, title, lede } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mark,
                    children: "M"
                }, void 0, false, {
                    fileName: "[project]/components/AppShell.js",
                    lineNumber: 44,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Mazbien"
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.js",
                            lineNumber: 44,
                            columnNumber: 81
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "AI Training Needs Assessment"
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.js",
                            lineNumber: 44,
                            columnNumber: 97
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AppShell.js",
                    lineNumber: 44,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== pathname) {
        t2 = LINKS.map({
            "AppShellInner[LINKS.map()]": (link)=>{
                const Icon = link.icon;
                const active = pathname === link.href;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: link.href,
                    className: active ? `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}` : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.js",
                            lineNumber: 55,
                            columnNumber: 124
                        }, this),
                        link.label
                    ]
                }, link.href, true, {
                    fileName: "[project]/components/AppShell.js",
                    lineNumber: 55,
                    columnNumber: 16
                }, this);
            }
        }["AppShellInner[LINKS.map()]"]);
        $[2] = pathname;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].consultant,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Elena Rostova"
                }, void 0, false, {
                    fileName: "[project]/components/AppShell.js",
                    lineNumber: 73,
                    columnNumber: 45
                }, this),
                "Lead consultant · internal use only"
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
            children: [
                t1,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t3;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== eyebrow) {
        t6 = eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
            children: eyebrow
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 88,
            columnNumber: 20
        }, this) : null;
        $[9] = eyebrow;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== title) {
        t7 = title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "serif",
            style: {
                fontSize: "2rem",
                marginBottom: "0.35rem"
            },
            children: title
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 96,
            columnNumber: 18
        }, this) : null;
        $[11] = title;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== lede) {
        t8 = lede ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "var(--muted)",
                maxWidth: "46rem",
                marginBottom: "1.25rem"
            },
            children: lede
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 107,
            columnNumber: 17
        }, this) : null;
        $[13] = lede;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== children) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraftProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[15] = children;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== t6 || $[18] !== t7 || $[19] !== t8 || $[20] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
            children: [
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
            children: [
                t5,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t5;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    return t11;
}
_s(AppShellInner, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AppShellInner;
function AppShell(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "8d39d7072d7703f3d53e99146fdf7c366f29677c9f0dec39897850f9b530ef65") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8d39d7072d7703f3d53e99146fdf7c366f29677c9f0dec39897850f9b530ef65";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
            children: "Loading workspace…"
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] !== props) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppShellInner, {
                ...props
            }, void 0, false, {
                fileName: "[project]/components/AppShell.js",
                lineNumber: 164,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[2] = props;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    return t1;
}
_c1 = AppShell;
var _c, _c1;
__turbopack_context__.k.register(_c, "AppShellInner");
__turbopack_context__.k.register(_c1, "AppShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AppShell.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "AppShell-module__JCX2KW__active",
  "brand": "AppShell-module__JCX2KW__brand",
  "consultant": "AppShell-module__JCX2KW__consultant",
  "eyebrow": "AppShell-module__JCX2KW__eyebrow",
  "link": "AppShell-module__JCX2KW__link",
  "main": "AppShell-module__JCX2KW__main",
  "mark": "AppShell-module__JCX2KW__mark",
  "nav": "AppShell-module__JCX2KW__nav",
  "shell": "AppShell-module__JCX2KW__shell",
  "sidebar": "AppShell-module__JCX2KW__sidebar",
});
}),
"[project]/components/HistoryTable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HistoryTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assessments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/assessments.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function HistoryTable() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(41);
    if ($[0] !== "9a038911a846ed6766f90a9e8b82e8388916edeb6e4eb3ed55b1a47487b80db6") {
        for(let $i = 0; $i < 41; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9a038911a846ed6766f90a9e8b82e8388916edeb6e4eb3ed55b1a47487b80db6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [warning, setWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HistoryTable[useEffect()]": ()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assessments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchAssessmentHistory"])().then({
                    "HistoryTable[useEffect() > (anonymous)()]": (result)=>{
                        setRows(result.rows || []);
                        setWarning(result.warning || "");
                    }
                }["HistoryTable[useEffect() > (anonymous)()]"]);
            }
        })["HistoryTable[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t10;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== query || $[5] !== rows || $[6] !== warning) {
        let t11;
        if ($[15] !== query) {
            t11 = ({
                "HistoryTable[rows.filter()]": (row)=>{
                    const haystack = `${row.company_name} ${row.industry} ${row.tier}`.toLowerCase();
                    return haystack.includes(query.toLowerCase());
                }
            })["HistoryTable[rows.filter()]"];
            $[15] = query;
            $[16] = t11;
        } else {
            t11 = $[16];
        }
        const filtered = rows.filter(t11);
        t9 = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card;
        let t12;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Past assessments"
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 72,
                columnNumber: 13
            }, this);
            $[17] = t12;
        } else {
            t12 = $[17];
        }
        let t13;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = {
                width: 260
            };
            $[18] = t13;
        } else {
            t13 = $[18];
        }
        let t14;
        if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = ({
                "HistoryTable[<input>.onChange]": (event)=>setQuery(event.target.value)
            })["HistoryTable[<input>.onChange]"];
            $[19] = t14;
        } else {
            t14 = $[19];
        }
        if ($[20] !== query) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    t12,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                        style: t13,
                        placeholder: "Search client or industry",
                        value: query,
                        onChange: t14
                    }, void 0, false, {
                        fileName: "[project]/components/HistoryTable.js",
                        lineNumber: 96,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 96,
                columnNumber: 13
            }, this);
            $[20] = query;
            $[21] = t10;
        } else {
            t10 = $[21];
        }
        t6 = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body;
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = {
                padding: 0
            };
            $[22] = t7;
        } else {
            t7 = $[22];
        }
        if ($[23] !== warning) {
            t8 = warning ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].callout,
                style: {
                    margin: "1rem"
                },
                children: warning
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 112,
                columnNumber: 22
            }, this) : null;
            $[23] = warning;
            $[24] = t8;
        } else {
            t8 = $[24];
        }
        t4 = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Client"
                        }, void 0, false, {
                            fileName: "[project]/components/HistoryTable.js",
                            lineNumber: 122,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Industry"
                        }, void 0, false, {
                            fileName: "[project]/components/HistoryTable.js",
                            lineNumber: 122,
                            columnNumber: 38
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Size"
                        }, void 0, false, {
                            fileName: "[project]/components/HistoryTable.js",
                            lineNumber: 122,
                            columnNumber: 55
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Tier"
                        }, void 0, false, {
                            fileName: "[project]/components/HistoryTable.js",
                            lineNumber: 122,
                            columnNumber: 68
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Score"
                        }, void 0, false, {
                            fileName: "[project]/components/HistoryTable.js",
                            lineNumber: 122,
                            columnNumber: 81
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Status"
                        }, void 0, false, {
                            fileName: "[project]/components/HistoryTable.js",
                            lineNumber: 122,
                            columnNumber: 95
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Date"
                        }, void 0, false, {
                            fileName: "[project]/components/HistoryTable.js",
                            lineNumber: 122,
                            columnNumber: 110
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HistoryTable.js",
                    lineNumber: 122,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 122,
                columnNumber: 12
            }, this);
            $[25] = t5;
        } else {
            t5 = $[25];
        }
        t3 = filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 7,
                children: "No assessments yet. Send For Review from the dashboard to store a packet."
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 127,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HistoryTable.js",
            lineNumber: 127,
            columnNumber: 34
        }, this) : filtered.map(_HistoryTableFilteredMap);
        $[4] = query;
        $[5] = rows;
        $[6] = warning;
        $[7] = t10;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t10 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t11;
    if ($[26] !== t3) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/HistoryTable.js",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[26] = t3;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t11 || $[29] !== t4 || $[30] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: t4,
            children: [
                t5,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/components/HistoryTable.js",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t4;
        $[30] = t5;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== t12 || $[33] !== t6 || $[34] !== t7 || $[35] !== t8) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            style: t7,
            children: [
                t8,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/HistoryTable.js",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[32] = t12;
        $[33] = t6;
        $[34] = t7;
        $[35] = t8;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== t10 || $[38] !== t13 || $[39] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/HistoryTable.js",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[37] = t10;
        $[38] = t13;
        $[39] = t9;
        $[40] = t14;
    } else {
        t14 = $[40];
    }
    return t14;
}
_s(HistoryTable, "c1ZWhxdPipxkpu6ziOWu74UqR5Q=");
_c = HistoryTable;
function _HistoryTableFilteredMap(row_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: row_0.company_name
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 191,
                columnNumber: 29
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: row_0.industry
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 191,
                columnNumber: 58
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: row_0.size
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 191,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$assessments$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tierLabel"])(row_0.tier)
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 191,
                columnNumber: 104
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: row_0.score
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 191,
                columnNumber: 136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: row_0.status
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 191,
                columnNumber: 158
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                children: row_0.created_at ? new Date(row_0.created_at).toLocaleDateString() : "\u2014"
            }, void 0, false, {
                fileName: "[project]/components/HistoryTable.js",
                lineNumber: 191,
                columnNumber: 181
            }, this)
        ]
    }, row_0.id, true, {
        fileName: "[project]/components/HistoryTable.js",
        lineNumber: 191,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HistoryTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "ui-module__gjHJ_W__badge",
  "body": "ui-module__gjHJ_W__body",
  "btn": "ui-module__gjHJ_W__btn",
  "btnBrass": "ui-module__gjHJ_W__btnBrass",
  "btnSecondary": "ui-module__gjHJ_W__btnSecondary",
  "callout": "ui-module__gjHJ_W__callout",
  "card": "ui-module__gjHJ_W__card",
  "chip": "ui-module__gjHJ_W__chip",
  "chipOn": "ui-module__gjHJ_W__chipOn",
  "chips": "ui-module__gjHJ_W__chips",
  "error": "ui-module__gjHJ_W__error",
  "field": "ui-module__gjHJ_W__field",
  "footer": "ui-module__gjHJ_W__footer",
  "grid2": "ui-module__gjHJ_W__grid2",
  "header": "ui-module__gjHJ_W__header",
  "high": "ui-module__gjHJ_W__high",
  "hint": "ui-module__gjHJ_W__hint",
  "input": "ui-module__gjHJ_W__input",
  "label": "ui-module__gjHJ_W__label",
  "low": "ui-module__gjHJ_W__low",
  "medium": "ui-module__gjHJ_W__medium",
  "modal": "ui-module__gjHJ_W__modal",
  "modalBack": "ui-module__gjHJ_W__modalBack",
  "select": "ui-module__gjHJ_W__select",
  "step": "ui-module__gjHJ_W__step",
  "stepOn": "ui-module__gjHJ_W__stepOn",
  "stepper": "ui-module__gjHJ_W__stepper",
  "tab": "ui-module__gjHJ_W__tab",
  "tabOn": "ui-module__gjHJ_W__tabOn",
  "table": "ui-module__gjHJ_W__table",
  "tabs": "ui-module__gjHJ_W__tabs",
  "textarea": "ui-module__gjHJ_W__textarea",
});
}),
"[project]/lib/assessments.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAssessmentHistory",
    ()=>fetchAssessmentHistory,
    "saveAssessmentForReview",
    ()=>saveAssessmentForReview,
    "tierLabel",
    ()=>tierLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/draftStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/catalog.js [app-client] (ecmascript)");
;
;
;
async function saveAssessmentForReview({ draft, scoring, displayTier, pathways }) {
    const payload = {
        company_name: draft.companyName,
        industry: draft.industry,
        size: draft.size,
        departments: draft.departments,
        ai_experience: draft.aiExperience,
        pain_points: draft.painPoints,
        tools: [
            ...draft.tools || [],
            draft.customTools
        ].filter(Boolean),
        tier: displayTier,
        score: scoring.total,
        status: "sent_for_review"
    };
    const localRecord = {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        ...payload,
        source: "local"
    };
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
    if (!supabase) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushLocalHistory"])(localRecord);
        return {
            ok: true,
            source: "local",
            warning: "Supabase env vars are missing. The review packet was saved on this device only. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY, then run supabase/schema.sql.",
            id: localRecord.id
        };
    }
    const { data, error } = await supabase.from("assessments").insert(payload).select("id").single();
    if (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushLocalHistory"])({
            ...localRecord,
            source: "local-fallback"
        });
        return {
            ok: true,
            source: "local-fallback",
            warning: `Supabase save failed (${error.message}). Saved on this device so you can keep working. Confirm tables from supabase/schema.sql.`,
            id: localRecord.id
        };
    }
    const assessmentId = data.id;
    const roleRows = pathways.map((pathway)=>({
            assessment_id: assessmentId,
            name: pathway.name,
            department: pathway.department,
            priority: pathway.priority,
            modules: pathway.modules
        }));
    if (roleRows.length) {
        const { error: roleError } = await supabase.from("roles").insert(roleRows);
        if (roleError) {
            return {
                ok: false,
                error: roleError.message
            };
        }
    }
    const followupRows = (draft.followupAnswers || []).filter((item)=>item.question).map((item)=>({
            assessment_id: assessmentId,
            question_text: item.question,
            answer_text: item.answer || ""
        }));
    if (followupRows.length) {
        const { error: followError } = await supabase.from("followup_answers").insert(followupRows);
        if (followError) {
            return {
                ok: false,
                error: followError.message
            };
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushLocalHistory"])({
        ...localRecord,
        id: assessmentId,
        source: "supabase"
    });
    return {
        ok: true,
        source: "supabase",
        id: assessmentId
    };
}
async function fetchAssessmentHistory() {
    const local = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadLocalHistory"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        return {
            rows: local,
            source: "local",
            warning: "Showing device history until Supabase is configured."
        };
    }
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
    const { data, error } = await supabase.from("assessments").select("id, company_name, industry, size, departments, tier, score, status, created_at").order("created_at", {
        ascending: false
    });
    if (error) {
        return {
            rows: local,
            source: "local",
            warning: error.message
        };
    }
    return {
        rows: data || [],
        source: "supabase"
    };
}
function tierLabel(tier) {
    const copy = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIER_COPY"][tier];
    return copy ? `${copy.name} — ${copy.title}` : tier;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/catalog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AI_LEVELS",
    ()=>AI_LEVELS,
    "DEPARTMENTS",
    ()=>DEPARTMENTS,
    "INDUSTRIES",
    ()=>INDUSTRIES,
    "MAX_DEPARTMENTS",
    ()=>MAX_DEPARTMENTS,
    "MAX_ROLES",
    ()=>MAX_ROLES,
    "ORG_SIZES",
    ()=>ORG_SIZES,
    "RADAR_AXES",
    ()=>RADAR_AXES,
    "SUGGESTED_ROLES",
    ()=>SUGGESTED_ROLES,
    "TIER_COPY",
    ()=>TIER_COPY,
    "TOOLS",
    ()=>TOOLS
]);
const INDUSTRIES = [
    "Technology",
    "Logistics & Transport",
    "Healthcare",
    "Financial Services",
    "Manufacturing",
    "Professional Services",
    "Retail",
    "Education"
];
const ORG_SIZES = [
    {
        value: "1-50",
        label: "1–50 staff"
    },
    {
        value: "51-150",
        label: "51–150 staff"
    },
    {
        value: "151-500",
        label: "151–500 staff"
    },
    {
        value: "501-2000",
        label: "501–2,000 staff"
    },
    {
        value: "2000+",
        label: "2,000+ staff"
    }
];
const DEPARTMENTS = [
    "Sales",
    "Customer Service",
    "Operations",
    "Finance",
    "Human Resources",
    "Marketing",
    "Engineering",
    "Legal & Compliance",
    "Logistics"
];
const SUGGESTED_ROLES = {
    Sales: [
        "Account Executive",
        "Sales Operations Analyst",
        "SDR / BDR"
    ],
    "Customer Service": [
        "Support Specialist",
        "Team Lead",
        "QA / Knowledge Manager"
    ],
    Operations: [
        "Operations Manager",
        "Process Analyst",
        "Coordinator"
    ],
    Finance: [
        "Financial Analyst",
        "Controller",
        "AP / AR Specialist"
    ],
    "Human Resources": [
        "HR Business Partner",
        "Recruiter",
        "People Ops"
    ],
    Marketing: [
        "Content Manager",
        "Demand Gen",
        "Brand Specialist"
    ],
    Engineering: [
        "Software Engineer",
        "Engineering Manager",
        "QA Engineer"
    ],
    "Legal & Compliance": [
        "Counsel",
        "Compliance Analyst",
        "Contract Manager"
    ],
    Logistics: [
        "Dispatcher",
        "Warehouse Supervisor",
        "Supply Planner"
    ]
};
const TOOLS = [
    "Excel / Google Sheets",
    "Salesforce",
    "HubSpot",
    "Slack",
    "Microsoft 365 / Teams",
    "ServiceNow",
    "Zendesk",
    "Jira",
    "SAP",
    "Notion",
    "ChatGPT",
    "Microsoft Copilot"
];
const AI_LEVELS = [
    "None",
    "Some",
    "Advanced"
];
const TIER_COPY = {
    bronze: {
        name: "Bronze",
        title: "Foundational Sprint",
        tagline: "Focused prompt foundations and one-department workflow labs.",
        price: "$12,000 – $18,000",
        duration: "3–4 weeks • 16–24 hours"
    },
    silver: {
        name: "Silver",
        title: "Operational Acceleration",
        tagline: "Cross-team pathways, champions, and measurable adoption checkpoints.",
        price: "$28,000 – $42,000",
        duration: "6–8 weeks • 32–48 hours"
    },
    gold: {
        name: "Gold",
        title: "Enterprise Transformation",
        tagline: "Multi-department rollout with governance, labs, and executive briefing.",
        price: "$54,000 – $78,000",
        duration: "8–10 weeks • 56–72 hours"
    },
    premium: {
        name: "Premium",
        title: "Manual Enterprise Scoping",
        tagline: "Custom configuration — never auto-assigned. Consultant-flagged only.",
        price: "Custom scoped",
        duration: "By engagement design"
    }
};
const RADAR_AXES = [
    "AI Awareness",
    "Tool Fluency",
    "Process Repeatability",
    "Data Literacy",
    "Change Readiness"
];
const MAX_DEPARTMENTS = 5;
const MAX_ROLES = 10;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/draftContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DraftProvider",
    ()=>DraftProvider,
    "useDraft",
    ()=>useDraft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/draftStore.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const DraftContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function DraftProvider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "e142cd6342cc54bf1233ab4427ef3e4634e83c74fbedc285b95602ef2d698916") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e142cd6342cc54bf1233ab4427ef3e4634e83c74fbedc285b95602ef2d698916";
    }
    const { children } = t0;
    const [draft, setDraftState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_DraftProviderUseState);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "DraftProvider[useEffect()]": ()=>{
                setDraftState((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDraft"])());
                setReady(true);
            }
        })["DraftProvider[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "DraftProvider[setDraft]": (next)=>{
                setDraftState({
                    "DraftProvider[setDraft > setDraftState()]": (current)=>{
                        const resolved = typeof next === "function" ? next(current) : next;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDraft"])(resolved);
                        return resolved;
                    }
                }["DraftProvider[setDraft > setDraftState()]"]);
            }
        })["DraftProvider[setDraft]"];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const setDraft = t3;
    let t4;
    if ($[4] !== draft || $[5] !== ready) {
        t4 = {
            draft,
            setDraft,
            ready
        };
        $[4] = draft;
        $[5] = ready;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const value = t4;
    let t5;
    if ($[7] !== children || $[8] !== value) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DraftContext.Provider, {
            value: value,
            children: children
        }, void 0, false, {
            fileName: "[project]/lib/draftContext.js",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[7] = children;
        $[8] = value;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
}
_s(DraftProvider, "omuX7VKj04u6YKOul3KVdEC3wpc=");
_c = DraftProvider;
function _DraftProviderUseState() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["emptyDraft"])();
}
function useDraft() {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "e142cd6342cc54bf1233ab4427ef3e4634e83c74fbedc285b95602ef2d698916") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e142cd6342cc54bf1233ab4427ef3e4634e83c74fbedc285b95602ef2d698916";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(DraftContext);
    if (!context) {
        throw new Error("useDraft must be used inside DraftProvider");
    }
    return context;
}
_s1(useDraft, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "DraftProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/draftStore.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearDraft",
    ()=>clearDraft,
    "emptyDraft",
    ()=>emptyDraft,
    "intakeIsComplete",
    ()=>intakeIsComplete,
    "loadDraft",
    ()=>loadDraft,
    "loadLocalHistory",
    ()=>loadLocalHistory,
    "pushLocalHistory",
    ()=>pushLocalHistory,
    "saveDraft",
    ()=>saveDraft
]);
const DRAFT_KEY = "mazbien-draft-v1";
const LOCAL_HISTORY_KEY = "mazbien-history-v1";
function emptyDraft() {
    return {
        companyName: "",
        industry: "",
        size: "",
        departments: [],
        roles: [],
        tools: [],
        customTools: "",
        painPoints: "",
        aiExperience: "",
        desiredOutcomes: "",
        followupAnswers: [],
        consultantNotes: "",
        premiumOverride: false,
        addonOverrides: {},
        checklist: {},
        status: "draft"
    };
}
function loadDraft() {
    try {
        const raw = window.localStorage.getItem(DRAFT_KEY);
        if (!raw) return emptyDraft();
        return {
            ...emptyDraft(),
            ...JSON.parse(raw)
        };
    } catch  {
        return emptyDraft();
    }
}
function saveDraft(draft) {
    window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}
function clearDraft() {
    window.localStorage.removeItem(DRAFT_KEY);
}
function loadLocalHistory() {
    try {
        return JSON.parse(window.localStorage.getItem(LOCAL_HISTORY_KEY) || "[]");
    } catch  {
        return [];
    }
}
function pushLocalHistory(record) {
    const next = [
        record,
        ...loadLocalHistory()
    ].slice(0, 40);
    window.localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(next));
}
function intakeIsComplete(draft) {
    return Boolean(draft.companyName?.trim() && draft.industry && draft.size && draft.departments?.length > 0 && draft.roles?.length > 0 && draft.roles.every((role)=>role.name?.trim() && role.department) && draft.aiExperience && draft.painPoints?.trim() && draft.desiredOutcomes?.trim());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/supabaseClient.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabaseClient",
    ()=>getSupabaseClient,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
"use client";
;
let client;
function getSupabaseClient() {
    const url = ("TURBOPACK compile-time value", "https://hynjttomzeqeilzlzxxl.supabase.co");
    const anonKey = ("TURBOPACK compile-time value", "sb_publishable_58K6L_8VCWny-geeuAbQBA_pL7KnITd");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!client) {
        client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(url, anonKey);
    }
    return client;
}
function isSupabaseConfigured() {
    return Boolean(("TURBOPACK compile-time value", "https://hynjttomzeqeilzlzxxl.supabase.co") && ("TURBOPACK compile-time value", "sb_publishable_58K6L_8VCWny-geeuAbQBA_pL7KnITd"));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0dr1y68._.js.map