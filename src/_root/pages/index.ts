export { default as Home } from "./Home";

//! Why is that file for?
// THis file is used to export all the pages in the application. This way, we can import them from a single file instead of importing them from their respective files.
// so instead of:
// import Home from "./Home";
//  import Profile from "./Profile";
// we can do:
// import { Home, Profile } from "./pages";
// so it is just a convenience file to export all the pages in the application. It does not contain any logic or code, it just exports the pages.
