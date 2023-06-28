import Navbar from "./navbar";

export default function DLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <p>Footer</p>
    </>
  );
}
