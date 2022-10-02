import "../styles/globals.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import "./components/helloworld.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;