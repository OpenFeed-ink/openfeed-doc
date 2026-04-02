import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blog } from '@/lib/source';
import { Metadata } from 'next';
import { Calendar, User, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navbar';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

        {/* Hero Card */}
        <Card className="border-border/50 shadow-xl backdrop-blur-sm overflow-hidden mb-12">
          <div className="bg-linear-to-r from-teal-600 to-emerald-600 h-2 w-full" />
          <CardContent className="p-6 md:p-8 space-y-6">
            {/* Optional icon */}
            {page.data.icon && (
              <div className="text-5xl">{page.data.icon}</div>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              {page.data.title}
            </h1>
            {page.data.description && (
              <p className="text-lg text-muted-foreground border-l-4 border-teal-500 pl-4">
                {page.data.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border/50">
              {page.data.author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{page.data.author}</span>
                </div>
              )}
              {page.data.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(page.data.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              )}
              {!page.data.author && !page.data.date && (
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>OpenFeed Team</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Article content */}
        <article className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl max-w-none">
          <div className="mb-8">
            <InlineTOC items={page.data.toc} />
          </div>
          <Mdx components={defaultMdxComponents} />
        </article>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>Thank you for reading.</p>
          <Link href="/blog" className="text-teal-600 hover:underline mt-2 inline-block">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
