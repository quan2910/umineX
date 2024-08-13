import Header from "@/components/Header";
import Banner from "@/components/Landing/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen mt-[64px] lg:mt-[191px] max-w-[1410px] px-0 mx-auto lg:pt-[30px] pb-[60px]">
        <Banner />
      </main>
    </>
  );
}
