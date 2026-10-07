import { Suspense } from "react";
import AuthScreen from "@/components/AuthScreen";

export default function LoginPage() {
  return (
    <Suspense fallback={<p style={{ padding: "1.5rem" }}>Loading sign in…</p>}>
      <AuthScreen mode="login" />
    </Suspense>
  );
}
