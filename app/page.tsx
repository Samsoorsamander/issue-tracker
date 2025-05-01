import Image from "next/image";

export default async function Home() {
  return (
    <main>
      <Image
        src={"https://bit.ly/react-cover"}
        alt="plane"
        className="object-cover"
        width={300}
        height={170}
      />
    </main>
  );
}
