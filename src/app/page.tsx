import Bar from "@/app/components/Bar"
import Post from "@/app/components/Post"
import Followlist  from "./components/Followlist";

export default function Home() {
  return (
    <div className="body">
      <Bar />
      <Post/>
      <Followlist/>
      </div>
  );
}
