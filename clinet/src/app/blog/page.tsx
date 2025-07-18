import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentList } from "@/components/ContentList";
import { BlogCard } from "@/components/BlogCard";

async function loader(slug: string) {
  const { data } = await getPageBySlug(slug);
  console.log("getPageBySlug", data);
  if (data?.length === 0) notFound();
  return { blocks: data[0]?.blocks };
}

interface PageProps {
  searchParams: Promise<{ page?: string, query?: string }>;
}

export default async function BlogPageRoute({ searchParams }: PageProps) {
  const { page, query } = await searchParams;
  const { blocks } = await loader("blog");
  return (
    <div className="blog-page">
      <BlockRenderer blocks={blocks} />
      <ContentList
        headline="Check out our latest articles"
        path="/api/articles"
        component={BlogCard}
        showSearch
        query={query}
        showPagination={true}
        page={page}
      />
    </div>
  );
}
