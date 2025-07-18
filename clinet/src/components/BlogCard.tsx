
import { Card, type CardProps } from "@/components/Card";

export const BlogCard = (props: Readonly<CardProps>) => (
    <Card {...props} basePath="blog" />
  );