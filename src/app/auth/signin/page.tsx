import { getProviders } from "next-auth/react";
import Image from "next/image";
import { SignInComponent } from "./SignInComponent";

export type Providers = Awaited<ReturnType<typeof getProviders>>;

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="mx-2 rounded-full object-cover"
          src="/images/yvbOx5two0W.png"
          alt=""
          width={700}
          height={700}
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  );
};

export default SignInPage;
