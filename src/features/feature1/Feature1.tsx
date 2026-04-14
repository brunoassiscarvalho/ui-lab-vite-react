import { Outlet } from "react-router";

export default function Feature1() {
  return (
    <div>
      <h1>Feature 1</h1>
      <p>This is the content of Feature 1.</p>
      <Outlet />
    </div>
  );
}
