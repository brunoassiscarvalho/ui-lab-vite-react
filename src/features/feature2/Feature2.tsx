import { Outlet } from "react-router";

export default function Feature2() {
  return (
    <div>
      <h1>Feature 2</h1>
      <p>This is the content of Feature 2.</p>
      <Outlet />
    </div>
  );
}
