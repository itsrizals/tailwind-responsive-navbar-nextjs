import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      <Navbar />
    </div>
  );
}
