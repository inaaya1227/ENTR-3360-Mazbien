import { Suspense } from "react";
import AuthScreen from "@/components/AuthScreen";

export default function SignupPage() {
  return (
    <Suspense fallback={<p style={{ padding: "1.5rem" }}>Loading sign up…</p>}>
      <AuthScreen mode="signup" />
    </Suspense>
  );
}
