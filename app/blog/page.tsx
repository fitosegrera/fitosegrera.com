import type { Metadata } from "next";
import Link from "next/link";

import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Fito Segrera",
  description:
    "Artículos sobre meditación, ansiedad, paz interior, terapia somática y acompañamiento espiritual.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <div>
      <nav className="font-sans text-fito-nav font-light text-ink/70">
        <Link href="/" className="underline underline-offset-4 hover:opacity-80">
          Inicio
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-ink">Blog</span>
      </nav>
      <h1 className="font-julius mt-8 text-balance text-fito-section font-bold tracking-[0.1em] text-ink">
        Blog
      </h1>
      <p className="font-sans mt-4 text-fito-lead font-light text-ink/90">
        Textos para profundizar en meditación, mindfulness, ansiedad y sanación
        emocional.
      </p>
      <ul className="mt-12 space-y-6 border-t border-ink/10 pt-10">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-lg outline-none transition-opacity hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ink/25 focus-visible:ring-offset-2"
            >
              <span className="font-julius text-fito-subhead font-bold tracking-[0.08em] text-ink group-hover:underline group-hover:underline-offset-4">
                {post.title}
              </span>
              <span className="font-sans mt-2 block text-fito-body font-light text-ink/80">
                {post.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
