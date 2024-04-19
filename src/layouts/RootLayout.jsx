import { Outlet } from "react-router-dom";
import Nav from "../navigations/Nav";
import Footer from "../navigations/Footer";
// import { DrawerProvider } from "../hooks/useDrawer";

function RootLayout() {
  return (
    <div>
      {/* <DrawerProvider> */}
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      {/* </DrawerProvider> */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RootLayout;
