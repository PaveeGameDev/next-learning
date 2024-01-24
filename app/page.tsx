import Link from "next/link";
import Image from "next/image";
import ProductCart from "@/app/components/ProductCart";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/authOptions";
import img1 from "@/public/images/DALL·E 2024-01-15 17.29.36 - An imaginative depiction of the concept of 'passport', styled for a presentation. The image should illustrate the idea of international travel and the.png";
import { Metadata } from "next";
// import { useState } from "react";
import dynamic from "next/dynamic";
// import loading from "@/app/loading";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
      <HeavyComponent />
      <Image src={img1} alt="an Image 1" />
      {/*<Image*/}
      {/*  src="https://bit.ly/react-cover"*/}
      {/*  alt="an Image 2"*/}
      {/*  fill*/}
      {/*  className="object-cover"*/}
      {/*  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"*/}
      {/*  quality={100}*/}
      {/*  priority*/}
      {/*/>*/}
    </main>
  );
}

// export default function Home() {
//   const [isVisible, setVisible] = useState(false);
//   // const session = await getServerSession(authOptions);
//   return (
//     <main className="relative h-screen">
//       {/*<h1>Hello {session && <span>{session.user!.name}</span>}</h1>*/}
//       <Link href="/users">Users</Link>
//       <ProductCart />
//       <button onClick={() => setVisible(!isVisible)}>Show</button>
//       <button
//         onClick={async () => {
//           const _ = (await import("lodash")).default;
//           const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
//           const sorted = _.orderBy(users, ["name"]);
//           console.log(sorted);
//         }}
//       >
//         Show
//       </button>
//       {isVisible && <HeavyComponent />}
//       <Image src={img1} alt="an Image 1" />
//       {/*<Image*/}
//       {/*  src="https://bit.ly/react-cover"*/}
//       {/*  alt="an Image 2"*/}
//       {/*  fill*/}
//       {/*  className="object-cover"*/}
//       {/*  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"*/}
//       {/*  quality={100}*/}
//       {/*  priority*/}
//       {/*/>*/}
//     </main>
//   );
// }

// export const metadata: Metadata = {
//     title: '...'
// }

export async function generateMetadata(): Promise<Metadata> {
  // const product = await fetch("");

  return {
    title: "product.title",
    description: "product.description",
  };
}
