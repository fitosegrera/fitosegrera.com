import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts, getBlogPostBySlug } from "@/lib/blog-posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Artículo | Fito Segrera" };
  }
  return {
    title: `${post.title} | Fito Segrera`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Fito Segrera`,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      locale: "es_CO",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <nav className="font-sans text-fito-nav font-light text-ink/70">
        <Link href="/" className="underline underline-offset-4 hover:opacity-80">
          Inicio
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <Link href="/blog" className="underline underline-offset-4 hover:opacity-80">
          Blog
        </Link>
      </nav>
      <div className="mt-8">{post.children}</div>
    </div>
  );
}
