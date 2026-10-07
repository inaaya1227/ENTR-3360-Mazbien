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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useSession.js [app-client] (ecmascript)");
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "79355ef2fedf7a7eb9369679ceac55804099ff8683ea06e72e4da219b5330436") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79355ef2fedf7a7eb9369679ceac55804099ff8683ea06e72e4da219b5330436";
    }
    const { children, eyebrow, title, lede } = t0;
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const session = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t1;
    let t2;
    if ($[1] !== router || $[2] !== session) {
        t1 = ({
            "AppShellInner[useEffect()]": ()=>{
                if (session === null) {
                    router.replace("/login");
                }
            }
        })["AppShellInner[useEffect()]"];
        t2 = [
            session,
            router
        ];
        $[1] = router;
        $[2] = session;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== router) {
        t3 = async function signOut() {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
            if (supabase) {
                await supabase.auth.signOut();
            }
            router.replace("/login");
        };
        $[5] = router;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const signOut = t3;
    if (!session) {
        let t4;
        if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
                children: "Checking session…"
            }, void 0, false, {
                fileName: "[project]/components/AppShell.js",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            $[7] = t4;
        } else {
            t4 = $[7];
        }
        return t4;
    }
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mark,
                    children: "M"
                }, void 0, false, {
                    fileName: "[project]/components/AppShell.js",
                    lineNumber: 93,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Mazbien"
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.js",
                            lineNumber: 93,
                            columnNumber: 81
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "AI Training Needs Assessment"
                        }, void 0, false, {
                            fileName: "[project]/components/AppShell.js",
                            lineNumber: 93,
                            columnNumber: 97
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AppShell.js",
                    lineNumber: 93,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== pathname) {
        t5 = LINKS.map({
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
                            lineNumber: 104,
                            columnNumber: 124
                        }, this),
                        link.label
                    ]
                }, link.href, true, {
                    fileName: "[project]/components/AppShell.js",
                    lineNumber: 104,
                    columnNumber: 16
                }, this);
            }
        }["AppShellInner[LINKS.map()]"]);
        $[9] = pathname;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
            children: t5
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== session.user.email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
            children: session.user.email
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[13] = session.user.email;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== signOut) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].signOut,
            onClick: signOut,
            children: "Sign Out"
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[15] = signOut;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== t7 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].consultant,
            children: [
                t7,
                "Signed in · internal use only",
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t6 || $[21] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
            children: [
                t4,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[20] = t6;
        $[21] = t9;
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== eyebrow) {
        t11 = eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].eyebrow,
            children: eyebrow
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 156,
            columnNumber: 21
        }, this) : null;
        $[23] = eyebrow;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== title) {
        t12 = title ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "serif",
            style: {
                fontSize: "2rem",
                marginBottom: "0.35rem"
            },
            children: title
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 164,
            columnNumber: 19
        }, this) : null;
        $[25] = title;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== lede) {
        t13 = lede ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                color: "var(--muted)",
                maxWidth: "46rem",
                marginBottom: "1.25rem"
            },
            children: lede
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 175,
            columnNumber: 18
        }, this) : null;
        $[27] = lede;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== children) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DraftProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[29] = children;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== t11 || $[32] !== t12 || $[33] !== t13 || $[34] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
            children: [
                t11,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[31] = t11;
        $[32] = t12;
        $[33] = t13;
        $[34] = t14;
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    let t16;
    if ($[36] !== t10 || $[37] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[36] = t10;
        $[37] = t15;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    return t16;
}
_s(AppShellInner, "p1GLEkhorUb0KXO3v33KSYI5iuY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSession$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = AppShellInner;
function AppShell(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "79355ef2fedf7a7eb9369679ceac55804099ff8683ea06e72e4da219b5330436") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "79355ef2fedf7a7eb9369679ceac55804099ff8683ea06e72e4da219b5330436";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AppShell$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shell,
            children: "Loading workspace…"
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 225,
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
                lineNumber: 232,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/AppShell.js",
            lineNumber: 232,
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
  "signOut": "AppShell-module__JCX2KW__signOut",
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
  "nested": "ui-module__gjHJ_W__nested",
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
"[project]/lib/addons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADDON_CATALOG",
    ()=>ADDON_CATALOG,
    "buildSelectedAddons",
    ()=>buildSelectedAddons,
    "isCatalogAddonSelected",
    ()=>isCatalogAddonSelected,
    "isCustomAddonSelected",
    ()=>isCustomAddonSelected,
    "suggestAddons",
    ()=>suggestAddons
]);
const ADDON_CATALOG = [
    {
        id: "change-office-hours",
        name: "Change-management office hours",
        detail: "Weekly working sessions for teams that are new to AI.",
        why: "AI experience is None — adoption risk is the binding constraint, not content volume."
    },
    {
        id: "champion-network",
        name: "Department champion network",
        detail: "Local owners who keep the labs going after Mazbien leaves.",
        why: "Multiple departments need local owners so labs survive after Mazbien leaves."
    },
    {
        id: "train-the-trainer",
        name: "Train-the-trainer cascade",
        detail: "Internal trainers who can teach the next cohort.",
        why: "Headcount tier is too large for a single consultant-led cohort."
    },
    {
        id: "governance-lab",
        name: "AI governance & allowed-use lab",
        detail: "Policy, tool boundaries, and what staff may paste into a model.",
        why: "Engineering or Legal is in scope — policy and tool boundaries should be explicit."
    },
    {
        id: "deflection-measurement",
        name: "Deflection measurement pack",
        detail: "Before-and-after ticket metrics for customer service.",
        why: "Customer Service is selected — leadership will ask for ticket-volume proof."
    },
    {
        id: "executive-brief",
        name: "90-day executive impact brief",
        detail: "One measurable outcome for leadership after the labs.",
        why: "Keeps the engagement tied to one measurable outcome after the labs."
    }
];
const ADDON_BY_ID = Object.fromEntries(_c1 = ADDON_CATALOG.map(_c = (item)=>[
        item.id,
        item
    ]));
_c2 = ADDON_BY_ID;
function pushId(ids, id) {
    if (!ids.includes(id)) ids.push(id);
}
function suggestAddons(draft, recommendedTier) {
    const ids = [];
    const size = draft.size || "";
    const large = size === "501-2000" || size === "2000+";
    const departments = draft.departments || [];
    if (draft.aiExperience === "None") pushId(ids, "change-office-hours");
    if (departments.length >= 3 || recommendedTier === "gold") pushId(ids, "champion-network");
    if (large) pushId(ids, "train-the-trainer");
    if (departments.includes("Engineering") || departments.includes("Legal & Compliance")) pushId(ids, "governance-lab");
    if (departments.includes("Customer Service")) pushId(ids, "deflection-measurement");
    if (ids.length === 0) pushId(ids, "executive-brief");
    return ids.map((id)=>ADDON_BY_ID[id]);
}
function isCatalogAddonSelected(draft, addonId, suggestedIds) {
    const override = draft.addonOverrides?.[addonId];
    if (typeof override === "boolean") return override;
    return suggestedIds.has(addonId);
}
function isCustomAddonSelected(draft, addonId) {
    return draft.addonOverrides?.[addonId] !== false;
}
function buildSelectedAddons(draft, recommendedTier) {
    const suggestedIds = new Set(suggestAddons(draft, recommendedTier).map((item)=>item.id));
    const catalog = ADDON_CATALOG.filter((item)=>isCatalogAddonSelected(draft, item.id, suggestedIds)).map((item)=>({
            id: item.id,
            name: item.name,
            custom: false
        }));
    const custom = (draft.customAddons || []).filter((item)=>item?.id && item?.name?.trim() && isCustomAddonSelected(draft, item.id)).map((item)=>({
            id: item.id,
            name: item.name.trim(),
            custom: true
        }));
    return [
        ...catalog,
        ...custom
    ];
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ADDON_BY_ID$Object.fromEntries$ADDON_CATALOG.map");
__turbopack_context__.k.register(_c1, "ADDON_BY_ID$Object.fromEntries");
__turbopack_context__.k.register(_c2, "ADDON_BY_ID");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$addons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/addons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/draftStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/catalog.js [app-client] (ecmascript)");
;
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
        status: "sent_for_review",
        selected_addons: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$addons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildSelectedAddons"])(draft, scoring.recommendedTier)
    };
    const localRecord = {
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        ...payload,
        source: "local"
    };
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
    if (supabase) {
        const { data: userResult, error: userError } = await supabase.auth.getUser();
        if (userError || !userResult?.user) {
            return {
                ok: false,
                error: "Sign in before sending for review."
            };
        }
        payload.consultant_id = userResult.user.id;
        localRecord.consultant_id = userResult.user.id;
    }
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
        customAddons: [],
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
"[project]/lib/useSession.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSession",
    ()=>useSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabaseClient.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useSession() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "30c36cb79b9de20ad1803ea64c0dfd260984e5f6c3c61c072b12ab3d0340e607") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "30c36cb79b9de20ad1803ea64c0dfd260984e5f6c3c61c072b12ab3d0340e607";
    }
    const [session, setSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "useSession[useEffect()]": ()=>{
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
                if (!supabase) {
                    return;
                }
                let active = true;
                supabase.auth.getSession().then({
                    "useSession[useEffect() > (anonymous)()]": (t2)=>{
                        const { data } = t2;
                        if (active) {
                            setSession(data.session ?? null);
                        }
                    }
                }["useSession[useEffect() > (anonymous)()]"]);
                const { data: data_0 } = supabase.auth.onAuthStateChange({
                    "useSession[useEffect() > supabase.auth.onAuthStateChange()]": (_event, next)=>{
                        setSession(next);
                    }
                }["useSession[useEffect() > supabase.auth.onAuthStateChange()]"]);
                return ()=>{
                    active = false;
                    data_0.subscription.unsubscribe();
                };
            }
        })["useSession[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabaseClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])()) {
        return null;
    }
    return session;
}
_s(useSession, "zb/96OsaowSSZ2r53/mGAn3PnsY=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0rn18b3._.js.map