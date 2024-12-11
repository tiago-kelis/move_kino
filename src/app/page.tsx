// import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
// import Image from "next/image";

export default function Home() {
  return (
  //  <Flex col className="w-screen h-screen">
  //    <p className="w-20 h-20 bg-teal-800">p1</p>
  //    <p className="w-20 h-20 bg-fuchsia-950">p2</p>
  //  </Flex>

   <Grid numCols={5} colums>
     <p className="w-20 h-20 bg-teal-800">p1</p>     
     <p className="w-20 h-20 bg-fuchsia-950">p2</p>
     <p className="w-20 h-20 bg-fuchsia-950">p3</p>
     <p className="w-20 h-20 bg-fuchsia-950">p4</p>
     <p className="w-20 h-20 bg-fuchsia-950">p5</p>    
   </Grid>
  );
}
