import Bar from "@/app/components/home/Bar"
import Post from "@/app/components/home/Post"
import Followlist  from "./components/home/Followlist";

export default function Home() {
  return (
    <div className="body">
      <Bar />
      <Post/>
      <Followlist/>
      </div>
  );
}
