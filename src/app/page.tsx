import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Banner from "@/components/Landing/Banner";
import ListProduct from "@/components/Landing/ListProducts";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen mt-[64px] gap-[60px] lg:mt-[191px] max-w-[1410px] px-0 mx-auto lg:pt-[30px] pb-[60px]">
        <Banner />
        <ListProduct />
      </main>
      <Footer />
    </>
  );
}
