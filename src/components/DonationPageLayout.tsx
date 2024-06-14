import Navbar from "@/components/LandingPage/Navbar";
import CheckoutForm from "@/components/Stripe/CheckoutForm";
import { Separator } from "@/components/ui/separator";

const DonationPageLayout = ({ title }: { title: string }) => {
  return (
    <div>
      <Navbar />
      <div className="flex h-[396px] items-center justify-center bg-pink-200 text-3xl font-semibold text-white">
        {title}
      </div>
      <div className="mt-20 px-45">
        <h1 className="text-2xl font-semibold text-zinc-600">
          Donate to {title}
        </h1>
        <Separator className="my-4 rounded-full border-2" />
        <CheckoutForm />
      </div>
    </div>
  );
};

export default DonationPageLayout;
