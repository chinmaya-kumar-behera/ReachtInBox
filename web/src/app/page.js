// "use client";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import DashboardHeader from "@/views/dashboard/DashboardHeader";
// import ContainerLayout from "@/components/layout/ContainerLayout";
// import React, { useEffect, useState } from "react";
// import IconBar from "@/views/dashboard/IconBar";
// import { useSelector } from "react-redux";
// import ItsTheBegining from "@/views/dashboard/ItsTheBegining";

// const EmailComponent = () => {
//   return (
//     <React.Fragment>
//       <ContainerLayout
//         leftContent={<div>Left contetnt</div>}
//         rightContent={<div>right content</div>}
//       />
//     </React.Fragment>
//   );
// }

// export default function Home() {
//   const activeIcon = useSelector((state) => state.navigation.activeIcon);
//   // const router = useRouter();

//   // useEffect(() => {
//   //   // if (isAuthenticated()) {
//   //   if (false) {
//   //     router.push("/");
//   //   } else {
//   //     router.push("/login");
//   //   }
//   // }, [router]);


//   const renderComponent = (route) => {
//     if (!route) return;
//     switch (route) {
//       case "email":
//         return EmailComponent;
//       default:
//         return ItsTheBegining
//     }
//   }

//   const [Component, setComponent] = useState(<div>hello</div>);

//   useEffect(() => {
//     setComponent(renderComponent(activeIcon));
//   }, [activeIcon]);

//   return (
//     <main className="">
//       <DashboardLayout iconbar={<IconBar />} header={<DashboardHeader />}>
//         <div>Hello</div>
//         {React.createElement(Component)}
//       </DashboardLayout>
//     </main>
//   );
// }


"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/views/dashboard/DashboardHeader";
import ContainerLayout from "@/components/layout/ContainerLayout";
import React, { useEffect, useState } from "react";
import IconBar from "@/views/dashboard/IconBar";
import { useSelector } from "react-redux";
import ItsTheBegining from "@/views/dashboard/ItsTheBegining";

const EmailComponent = () => {
  return (
    <React.Fragment>
      <ContainerLayout
        leftContent={<div>Left content</div>}
        rightContent={<div>Right content</div>}
      />
    </React.Fragment>
  );
};

export default function Home() {
  const activeIcon = useSelector((state) => state.navigation.activeIcon);

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

  return (
    <main className="">
      <DashboardLayout iconbar={<IconBar />} header={<DashboardHeader />}>
        {React.createElement(Component)}
      </DashboardLayout>
    </main>
  );
}
