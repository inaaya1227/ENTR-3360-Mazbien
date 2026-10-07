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
"[project]/components/IntakeForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntakeForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/catalog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/draftStore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/draftContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/ui.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const STEPS = [
    {
        n: 1,
        title: "Organization"
    },
    {
        n: 2,
        title: "Departments"
    },
    {
        n: 3,
        title: "Roles"
    },
    {
        n: 4,
        title: "Readiness"
    }
];
function IntakeForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { draft, setDraft, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const stepError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "IntakeForm.useMemo[stepError]": ()=>{
            if (step === 1 && (!draft.companyName.trim() || !draft.industry || !draft.size)) {
                return "Company, industry, and size are required.";
            }
            if (step === 2 && draft.departments.length === 0) {
                return "Select at least one department.";
            }
            if (step === 3 && (draft.roles.length === 0 || draft.roles.some({
                "IntakeForm.useMemo[stepError]": (role)=>!role.name.trim() || !role.department
            }["IntakeForm.useMemo[stepError]"]))) {
                return "Add at least one complete role (name and department).";
            }
            if (step === 4 && (!draft.aiExperience || !draft.painPoints.trim() || !draft.desiredOutcomes.trim())) {
                return "AI experience, pain points, and desired outcomes are required.";
            }
            return "";
        }
    }["IntakeForm.useMemo[stepError]"], [
        step,
        draft
    ]);
    function update(fields) {
        setDraft({
            ...draft,
            ...fields
        });
        setError("");
    }
    function toggleDepartment(name) {
        setDraft((current)=>{
            const exists = current.departments.includes(name);
            if (exists) {
                return {
                    ...current,
                    departments: current.departments.filter((item)=>item !== name),
                    roles: current.roles.filter((role_0)=>role_0.department !== name)
                };
            }
            if (current.departments.length >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_DEPARTMENTS"]) return current;
            return {
                ...current,
                departments: [
                    ...current.departments,
                    name
                ]
            };
        });
    }
    function toggleTool(name_0) {
        setDraft((current_0)=>({
                ...current_0,
                tools: current_0.tools.includes(name_0) ? current_0.tools.filter((item_0)=>item_0 !== name_0) : [
                    ...current_0.tools,
                    name_0
                ]
            }));
    }
    function addRole(prefill = {
        name: "",
        department: draft.departments[0] || ""
    }) {
        if (draft.roles.length >= __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_ROLES"]) return;
        update({
            roles: [
                ...draft.roles,
                {
                    id: crypto.randomUUID(),
                    ...prefill
                }
            ]
        });
    }
    function patchRole(id, fields_0) {
        update({
            roles: draft.roles.map((role_1)=>role_1.id === id ? {
                    ...role_1,
                    ...fields_0
                } : role_1)
        });
    }
    function next() {
        if (stepError) {
            setError(stepError);
            return;
        }
        if (step < 4) {
            setStep(step + 1);
            return;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftStore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["intakeIsComplete"])(draft)) {
            setError("Complete every required intake field before follow-up.");
            return;
        }
        router.push("/followup");
    }
    const roleCount = draft.roles.length;
    if (!ready) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading intake…"
    }, void 0, false, {
        fileName: "[project]/components/IntakeForm.js",
        lineNumber: 112,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Client discovery intake"
                    }, void 0, false, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].badge,
                        children: "Consultant workspace"
                    }, void 0, false, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/IntakeForm.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepper,
                        children: STEPS.map((item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: item_1.n === step ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepOn : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].step,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "Step ",
                                            item_1.n
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    item_1.title
                                ]
                            }, item_1.n, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 120,
                                columnNumber: 32
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid2,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        htmlFor: "company",
                                        children: "Company name *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "company",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        value: draft.companyName,
                                        onChange: (event)=>update({
                                                companyName: event.target.value
                                            }),
                                        placeholder: "Apex Supply Chain Logistics"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        htmlFor: "industry",
                                        children: "Industry *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "industry",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                        value: draft.industry,
                                        onChange: (event_0)=>update({
                                                industry: event_0.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select industry..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/IntakeForm.js",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INDUSTRIES"].map((item_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: item_2
                                                }, item_2, false, {
                                                    fileName: "[project]/components/IntakeForm.js",
                                                    lineNumber: 143,
                                                    columnNumber: 43
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        htmlFor: "size",
                                        children: "Organization size *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        id: "size",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                        value: draft.size,
                                        onChange: (event_1)=>update({
                                                size: event_1.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select headcount..."
                                            }, void 0, false, {
                                                fileName: "[project]/components/IntakeForm.js",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ORG_SIZES"].map((item_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: item_3.value,
                                                    children: item_3.label
                                                }, item_3.value, false, {
                                                    fileName: "[project]/components/IntakeForm.js",
                                                    lineNumber: 154,
                                                    columnNumber: 42
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 126,
                        columnNumber: 23
                    }, this) : null,
                    step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                style: {
                                    marginBottom: "0.75rem"
                                },
                                children: [
                                    "Select up to ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_DEPARTMENTS"],
                                    " departments. ",
                                    draft.departments.length,
                                    " selected."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 162,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEPARTMENTS"].map((dept)=>{
                                    const on = draft.departments.includes(dept);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: on ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chipOn : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                                        onClick: ()=>toggleDepartment(dept),
                                        children: dept
                                    }, dept, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 170,
                                        columnNumber: 20
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 161,
                        columnNumber: 23
                    }, this) : null,
                    step === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                                style: {
                                    marginBottom: "0.75rem"
                                },
                                children: [
                                    roleCount,
                                    " / ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_ROLES"],
                                    " roles. Use suggested titles or type your own."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            draft.roles.map((role_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid2,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Role name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/IntakeForm.js",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                    value: role_2.name,
                                                    onChange: (event_2)=>patchRole(role_2.id, {
                                                            name: event_2.target.value
                                                        }),
                                                    placeholder: "Account Executive"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/IntakeForm.js",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/IntakeForm.js",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                    children: "Department *"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/IntakeForm.js",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
                                                    value: role_2.department,
                                                    onChange: (event_3)=>patchRole(role_2.id, {
                                                            department: event_3.target.value
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/IntakeForm.js",
                                                            lineNumber: 195,
                                                            columnNumber: 21
                                                        }, this),
                                                        draft.departments.map((dept_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: dept_0
                                                            }, dept_0, false, {
                                                                fileName: "[project]/components/IntakeForm.js",
                                                                lineNumber: 196,
                                                                columnNumber: 54
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/IntakeForm.js",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/IntakeForm.js",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, role_2.id, true, {
                                    fileName: "[project]/components/IntakeForm.js",
                                    lineNumber: 183,
                                    columnNumber: 40
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                                style: {
                                    marginBottom: "0.75rem"
                                },
                                children: draft.departments.flatMap((dept_1)=>(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUGGESTED_ROLES"][dept_1] || []).map((name_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                                            onClick: ()=>addRole({
                                                    name: name_1,
                                                    department: dept_1
                                                }),
                                            children: [
                                                "+ ",
                                                name_1
                                            ]
                                        }, `${dept_1}-${name_1}`, true, {
                                            fileName: "[project]/components/IntakeForm.js",
                                            lineNumber: 203,
                                            columnNumber: 98
                                        }, this)))
                            }, void 0, false, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                                onClick: ()=>addRole(),
                                children: "Add blank role"
                            }, void 0, false, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 177,
                        columnNumber: 23
                    }, this) : null,
                    step === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Current tools / workflows"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOOLS"].map((tool)=>{
                                            const on_0 = draft.tools.includes(tool);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: on_0 ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chipOn : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                                                onClick: ()=>toggleTool(tool),
                                                children: tool
                                            }, tool, false, {
                                                fileName: "[project]/components/IntakeForm.js",
                                                lineNumber: 221,
                                                columnNumber: 22
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        style: {
                                            marginTop: "0.65rem"
                                        },
                                        placeholder: "Other tools, comma-separated",
                                        value: draft.customTools,
                                        onChange: (event_4)=>update({
                                                customTools: event_4.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        htmlFor: "pain",
                                        children: "Pain points / repetitive tasks *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "pain",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                        value: draft.painPoints,
                                        onChange: (event_5)=>update({
                                                painPoints: event_5.target.value
                                            }),
                                        placeholder: "Sales spends 12 hours/week on custom proposals; support is flooded with tier-1 tickets..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "AI experience level *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chips,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$catalog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_LEVELS"].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: draft.aiExperience === level ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chipOn : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip,
                                                onClick: ()=>update({
                                                        aiExperience: level
                                                    }),
                                                children: level
                                            }, level, false, {
                                                fileName: "[project]/components/IntakeForm.js",
                                                lineNumber: 243,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        htmlFor: "outcomes",
                                        children: "Desired outcomes *"
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        id: "outcomes",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                        value: draft.desiredOutcomes,
                                        onChange: (event_6)=>update({
                                                desiredOutcomes: event_6.target.value
                                            }),
                                        placeholder: "Reduce proposal cycle time, deflect 30% of tier-1 tickets, establish an AI use policy..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/IntakeForm.js",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/IntakeForm.js",
                                lineNumber: 250,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 215,
                        columnNumber: 23
                    }, this) : null,
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 260,
                        columnNumber: 18
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/IntakeForm.js",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                        onClick: ()=>setStep((current_1)=>Math.max(1, current_1 - 1)),
                        disabled: step === 1,
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                        onClick: next,
                        children: step === 4 ? "Continue to follow-up" : "Next step"
                    }, void 0, false, {
                        fileName: "[project]/components/IntakeForm.js",
                        lineNumber: 266,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/IntakeForm.js",
                lineNumber: 262,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/IntakeForm.js",
        lineNumber: 113,
        columnNumber: 10
    }, this);
}
_s(IntakeForm, "zcMyhXIka0tbA+eB+Bx8BWmLQjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$draftContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDraft"]
    ];
});
_c = IntakeForm;
var _c;
__turbopack_context__.k.register(_c, "IntakeForm");
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

//# sourceMappingURL=_0voexed._.js.map