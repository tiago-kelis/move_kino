import Flex from "@/components/template/Flex";
import Image from "next/image";

export default function Home() {
  return (
   <Flex col className="w-screen h-screen">
     <p className="w-20 h-20 bg-teal-800">p1</p>
     <p className="w-20 h-20 bg-fuchsia-950">p2</p>
   </Flex>
  );
}
