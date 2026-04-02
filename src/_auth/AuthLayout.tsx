// this file is used to wrap the auth pages and provide a common layout for them. It can be used to add a background image, a logo, or any other common elements that should be present on all auth pages.

import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-col flex-1 justify-center items-center py-10">
            <Outlet />
          </section>
          <img
            src="/images/side-img.svg"
            alt="logo"
            className="hidden xl:block bg-no-repeat w-1/2 h-screen object-cover"
          />
        </>
      )}
    </>
  );
};

export default AuthLayout;
