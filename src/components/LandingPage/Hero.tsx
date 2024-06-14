import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Waves from "../../../public/images/waves.svg";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Footer from "./Footer";

const Hero = () => {
  const cards = [
    {
      title: "Become a Partner",
      image:
        "https://avasproject.com/wp-content/uploads/2021/06/home11-i1-1.png",
      link: "/become-a-partner",
    },
    {
      title: "Our Team",
      image:
        "https://avasproject.com/wp-content/uploads/2021/06/home11-i2-1.png",
      link: "/#",
    },
    {
      title: "Donate Now",
      image:
        "https://avasproject.com/wp-content/uploads/2021/06/home11-i3-1.png",
      link: "/donate",
    },
    {
      title: "Volunteer",
      image:
        "https://avasproject.com/wp-content/uploads/2021/06/home11-i4-1.png",
      link: "/#",
    },
  ];
  return (
    <div className="h-screen bg-[#f78da7] text-white">
      <section className="flex w-full justify-between p-10">
        <div className="max-w-2xl space-y-4 p-5 pl-25">
          <h1 className="font-amatic text-4xl font-bold">
            THE AVA ABEHSERA PROJECT
          </h1>
          <h3 className="font-quicksand text-5xl font-bold">Who is Ava?</h3>
          <p className="font-nunito text-lg font-semibold">
            Ava Abehsera was a beautiful soul who loved to do Chessed. After her
            passing, her uncle Edan decided to create Ava&apos;s Project. In
            short, Ava is a phone number that anyone can text at any time, 24/7.
            She is an Artificial Intelligence that is designed to learn and help
            Jews in need of any Chessed. Any request received is then sent out
            to the appropriate organization right away who can then get involved
            and help the user with what&apos;s needed. She is a great source of
            help for people in need when no one is around to help them.
          </p>
          <Link href={"sms:+17163375144"}>
            <Button
              variant={"outline"}
              size={"lg"}
              className="mt-10 rounded-full bg-[#F7DFF5] py-6 font-bold text-[#501F54] duration-500 hover:bg-[#501F54] hover:text-white"
            >
              TEXT AVA
            </Button>
          </Link>
        </div>
        <div style={{ transitionDelay: "1200ms" }}>
          <img
            decoding="async"
            src="https://avasproject.com/wp-content/uploads/2023/06/output-onlinegiftools.gif"
            alt="output-onlinegiftools"
            className="w-full align-bottom"
          />
        </div>
      </section>
      <Image
        src={Waves}
        alt=""
        className="absolute h-auto w-full -translate-y-8"
      />
      <div className="mt-30 flex h-screen items-center justify-center gap-10 bg-white text-black">
        <img
          src="https://avasproject.com/wp-content/uploads/2023/05/home11-3-1.png"
          alt="home11-3-1"
          className="w-full max-w-2xl"
        />
        <div>
          <h1 className="font-amatic text-3xl font-bold text-[#C9004F]">
            AVA IS HERE TO HELP
          </h1>
          <h3 className="font-quicksand text-4xl font-bold">
            any chessed, anytime.
          </h3>
          <p className="max-w-lg font-semibold text-zinc-500">
            Reaching out for help can sometimes be difficult. That&apos;s why we
            have created this virtual AI to provide a safe and welcoming space
            where you can seek assistance and guidance in a convenient and
            confidential manner. AVA is designed to offer a personalized
            experience tailored to your unique needs.
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <h1 className="flex items-center text-xl font-bold">
                <Check className="mr-2 text-[#C9004F]" /> We Use Donations to
                Help People
              </h1>
              <p className="max-w-lg pl-10 font-semibold text-zinc-500">
                Our mission is to provide support, resources, and assistance to
                those facing various challenges.
              </p>
            </li>
            <li>
              <h1 className="flex items-center text-xl font-bold">
                <Check className="mr-2 text-[#C9004F]" /> Private and
                confidential.
              </h1>
              <p className="max-w-lg pl-10 font-semibold text-zinc-500">
                Private and confidential. We adhere to strict data protection
                protocols, and any information you share with us will be treated
                with the utmost care and respect.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex h-screen items-center gap-10 bg-[#f78da7] p-10">
        <div className="max-w-2xl space-y-4 p-5 pl-25 text-black">
          <h1 className="font-amatic text-3xl font-bold text-[#C9004F]">
            EASY FUND DONATIONS
          </h1>
          <h3 className="font-quicksand text-4xl font-bold">
            The Mission and Goals for Our Charity Program
          </h3>
          <p className="font-nunito text-lg font-semibold text-zinc-500">
            Ultricies lacus turpis tincidunt aliquet. Eget nunc lobortis mattis
            aliquam faucibus purus in. Bibendum est ultricies integer quis
            auctor elit sed. Ultrices tincidunt arcu non sodales neque.
          </p>
          <div className="flex items-center gap-10">
            <Link href={"/donate"}>
              <Button
                variant={"outline"}
                size={"lg"}
                className="mt-4 rounded-full border-2 border-[#501F54] bg-transparent py-6 font-bold text-[#501F54] duration-500 hover:bg-[#501F54] hover:text-white"
              >
                DONATE NOW ❤️
              </Button>
            </Link>
            <img
              src="https://avasproject.com/wp-content/uploads/2021/06/home11-1.png"
              alt="with love"
              className="max-w-60"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {cards.map((card, index) => (
            <Link href={card.link} key={index}>
              <Card className="flex aspect-square flex-col items-center justify-center pt-5 transition-all duration-500 hover:-translate-y-5">
                <CardContent>
                  <img src={card.image} alt="" />
                </CardContent>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[20vh] bg-[#D18182]" />
      <div className="h-[20vh] bg-white" />
      <Footer />
    </div>
  );
};

export default Hero;
