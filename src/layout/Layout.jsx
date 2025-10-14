import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
import { Outlet } from "react-router";

import Navbar from ".Navbar"

export default function Layout() {
return (
<>
<Navbar />
<main>
    <Outlet />
</main>

</>

);

}