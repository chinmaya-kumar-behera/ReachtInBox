"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/views/dashboard/DashboardHeader";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   // if (isAuthenticated()) {
  //   if (false) {
  //     router.push("/");
  //   } else {
  //     router.push("/login");
  //   }
  // }, [router]);

  return (
    <main className="">
      <DashboardLayout
        header={<DashboardHeader/>}
        leftContent={<div>Left contetnt</div>}
        rightContent={<div>right content</div>}
      />
    </main>
  );
}
