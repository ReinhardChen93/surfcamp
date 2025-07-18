import { getHomePage } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentList } from "@/components/ContentList";
import { BlogCard } from "@/components/BlogCard";

async function loader() {
  const data = await getHomePage()
  if(!data) notFound()
  console.log("data", data)
  return {...data.data}
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  console.log(data)
  return (
    <div className="container">
      <BlockRenderer blocks={blocks}/>
      <ContentList
        headline="Check out our featured articles"
        path="/api/articles"
        component={BlogCard}
        featured
      />
    </div>
  );
}
