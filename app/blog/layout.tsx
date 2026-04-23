export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-full bg-white text-ink">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-14">{children}</div>
    </div>
  );
}
