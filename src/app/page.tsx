import Image from "next/image";
import Bar from "@/app/components/Bar"
import Post from "@/app/components/Post"

export default function Home() {
  return (
    <div className="body">
      <Bar />
      <Post/>
      </div>
    


  );
}
