import "./papper.css";

export default function Paper({ children }: { children?: React.ReactNode }) {
  return <div className="papper">{children}</div>;
}
