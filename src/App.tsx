import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import { Home } from "./_root/pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}

        <Route element={<AuthLayout />}>
          {
            " // This is the layout for the authentication pages, it will be used to wrap the SignIn and SignUp pages. "
          }

          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        {/* Private Routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

// In this file we have nested routes.
// ! Nested Routes
// Nested Routes:
// It is a way to group routes together. so like the authentication routes are grouped together and the private routes are grouped together. This way we can apply a layout to a group of routes instead of applying it to each route individually. so we can wrap the authentication routes with the AuthLayout and the private routes with the RootLayout. This way we don't have to repeat the layout for each route.
// in simple terms, it is a way to avoid repeating code and to group related routes together.
//  When the use goes to /sign-in: the AuthLayout will be rendered and inside it the SignInForm will be rendered.

// ! What is index?
// in simple it is path="/" but it is used in nested routes to indicate that it is the default route for that layout. so when the user goes to /, the Home page will be rendered inside the RootLayout.
