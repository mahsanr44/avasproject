import Navbar from "@/components/LandingPage/Navbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import CheckoutForm from "@/components/Stripe/CheckoutForm";
import { Separator } from "@/components/ui/separator";

const page = () => {
  const cards = [
    {
      href: "/donate/chai-lifeline",
      img: "https://avasproject.com/wp-content/uploads/2023/05/New-Project-1-200x200.jpg",
      title: "Chai Lifeline",
    },
    {
      href: "/donate/shabbat-angels",
      img: "",
      title: "Shabbat Angels",
    },
    {
      href: "/donate/love-n-groceries",
      img: "https://avasproject.com/wp-content/uploads/2023/06/lng-200x200.png",
      title: "Love N Groceries",
    },
    {
      href: "/donate/ahava-baby",
      img: "",
      title: "Ahava Baby",
    },
    {
      href: "/donate/avas-project",
      img: "https://avasproject.com/wp-content/uploads/2023/06/avaround-200x200.png",
      title: "Avas Project",
    },
    {
      href: "/donate/fountain-of-kindness",
      img: "",
      title: "Fountain of Kindness",
    },
    {
      href: "/donate/avas-project",
      img: "https://avasproject.com/wp-content/uploads/2023/06/New-Project-200x200.jpg",
      title: "Avas Project",
    },
    {
      href: "/donate/sbh",
      img: "",
      title: "SBH",
    },
    {
      href: "/donate/the-safe-foundation",
      img: "https://avasproject.com/wp-content/uploads/2023/06/tsf-1-200x200.png",
      title: "The Safe Foundation",
    },
    {
      href: "/donate/the-yellow-house",
      img: "https://avasproject.com/wp-content/uploads/2023/06/YelloHouse-200x200.png",
      title: "The Yellow House",
    },
    {
      href: "/donate/a-giving-hand",
      img: "",
      title: "A Giving Hand",
    },
    {
      href: "/donate/habayit",
      img: "https://avasproject.com/wp-content/uploads/2023/06/habayit-200x200.png",
      title: "Habayit",
    },
    {
      href: "/donate/michael-kameo-foundation",
      img: "https://avasproject.com/wp-content/uploads/2023/06/MKF-200x200.png",
      title: "Michael Kameo Foundation",
    },
    {
      href: "/donate/ohr-naava",
      img: "https://avasproject.com/wp-content/uploads/2023/06/ohrnavaa-200x200.png",
      title: "Ohr Naava",
    },
    {
      href: "/donate/ezra-cornman-fund",
      img: "https://avasproject.com/wp-content/uploads/2023/06/ECBF2-200x200.png",
      title: "Ezra Cornman Fund",
    },
    {
      href: "/donate/semahot",
      img: "",
      title: "Semahot",
    },
    {
      href: "/donate/bike-4-friendship",
      img: "https://avasproject.com/wp-content/uploads/2023/06/BIK4FRIENDSHIP-200x200.png",
      title: "Bike 4 Friendship",
    },
    {
      href: "/donate/a-time",
      img: "",
      title: "A Time",
    },
    {
      href: "/donate/rccs",
      img: "",
      title: "Rccs",
    },
  ];

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex h-[396px] items-center justify-center bg-[url('https://avasproject.com/wp-content/uploads/2023/06/ava2.png')] bg-cover bg-center bg-no-repeat text-3xl font-semibold text-white">
          DONATE
        </div>
        <div className="mt-20 px-45">
          <h1 className="text-2xl font-semibold text-zinc-600">
            Ava&apos;s GPT
          </h1>
          <Separator className="my-4 rounded-full border-2" />
          <CheckoutForm />
        </div>
        <div className="my-10 flex flex-col items-center justify-center">
          <h1>ORGANIZATIONS</h1>
          <h3 className="text-2xl font-semibold">FRIENDS & PARTNERS</h3>
          <div className="mt-4 grid grid-cols-3 gap-8 px-16">
            {cards.map((card) => (
              <Card
                key={card.title}
                className="flex flex-col items-center justify-center space-y-4 p-4 shadow-lg"
              >
                <CardContent className="flex flex-col items-center justify-center">
                  <Link href={card.href}>
                    {card.img ? (
                      <img
                        src={card.img}
                        alt={card.title}
                        className="h-32 w-32 rounded-full object-cover"
                      />
                    ) : null}
                  </Link>
                  <CardTitle className="mt-4 text-center text-lg font-semibold">
                    <Link href={card.href}>{card.title}</Link>
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
