import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { MainLayoutsContainer } from "./MainLayouts.styled";

export const MainLayouts = () => {
  return (
    <MainLayoutsContainer>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </MainLayoutsContainer>
  );
};
