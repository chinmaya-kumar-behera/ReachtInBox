"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/views/dashboard/DashboardHeader";
import ContainerLayout from "@/components/layout/ContainerLayout";
import React, { useEffect, useState } from "react";
import IconBar from "@/views/dashboard/IconBar";
import { useDispatch, useSelector } from "react-redux";
import ItsTheBegining from "@/views/dashboard/ItsTheBegining";
import EmailList from "@/views/dashboard/EmailList";
import EmailContainer from "@/views/dashboard/EmailContainer";
import { useRouter } from "next/navigation";
import { login } from "@/redux/slice/authSlice";
import { isAuthenticated } from "@/utils/auth";
// import { useRouter } from "next/router";

const EmailComponent = () => {
  return (
    <React.Fragment>
      <ContainerLayout
        leftContent={<EmailList />}
        rightContent={<EmailContainer />}
      />
    </React.Fragment>
  );
};

export default function Home() {
  const activeIcon = useSelector((state) => state.navigation.activeIcon);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  const renderComponent = (route) => {
    switch (route) {
      case "email":
        return EmailComponent;
      default:
        return ItsTheBegining;
    }
  };


  const [Component, setComponent] = useState(() => renderComponent(activeIcon));

  useEffect(() => {
    setComponent(() => renderComponent(activeIcon));
  }, [activeIcon]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      dispatch(login({ token, isAuthenticated: true }));
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [router]);

  useEffect(() => {
    const tkn = localStorage.getItem("authToken");
    if (tkn) {
      dispatch(login({ token: tkn, isAuthenticated: true }));
    }
  }, [router]);

    useEffect(() => {
      if (isAuthenticated) {
        router.push("/");
      } else {
        router.push("/login");
      }
    }, [router]);

  return (
    <main className="">
      {isAuthenticated && (
        <DashboardLayout iconbar={<IconBar />} header={<DashboardHeader />}>
          {React.createElement(Component)}
        </DashboardLayout>
      )}
    </main>
  );
}
