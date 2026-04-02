import * as motion from "motion/react-client"
import Link from "next/link";
import { Calendar, User, ArrowRight, FileText } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blog } from "@/lib/source";
import { Navbar } from "@/components/navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function BlogIndex() {
  const posts = blog.getPages();

  // Sort posts by date (newest first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  // Featured post (first one)
  const featured = sortedPosts[0];
  const rest = sortedPosts.slice(1);

  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            OpenFeed Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, updates, and stories from the OpenFeed team.
          </p>
        </div>

        {/* Featured Post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link href={featured.url} className="group block">
              <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border/50">
                {/* Icon / placeholder */}
                <div className="h-64 md:h-full min-h-75 bg-linear-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
                  {featured.data.icon ? (
                    <span className="text-6xl">{featured.data.icon}</span>
                  ) : (
                    <FileText className="h-16 w-16 text-white opacity-80" />
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold group-hover:text-teal-600 transition-colors">
                    {featured.data.title}
                  </h2>
                  <p className="text-muted-foreground">{featured.data.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {featured.data.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featured.data.date).toLocaleDateString()}</span>
                      </div>
                    )}
                    {featured.data.author && (
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{featured.data.author}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-teal-600 font-medium gap-1 group-hover:gap-2 transition-all">
                    Read more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Post Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((post) => (
            <motion.div key={post.url} variants={itemVariants}>
              <Link href={post.url} className="block h-full">
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border-border/50">
                  {/* Placeholder icon / gradient */}
                  <div className="h-32 bg-linear-to-br from-teal-500/20 to-emerald-500/20 flex items-center justify-center border-b border-border/50">
                    {post.data.icon ? (
                      <span className="text-3xl">{post.data.icon}</span>
                    ) : (
                      <FileText className="h-8 w-8 text-teal-600" />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-teal-600 transition-colors">
                      {post.data.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground line-clamp-3">
                      {post.data.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4">
                    <div className="flex items-center gap-3">
                      {post.data.date && (
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.data.date).toLocaleDateString()}</span>
                        </div>
                      )}
                      {post.data.author && (
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span className="truncate max-w-25">{post.data.author}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-teal-600">
                      Read <ArrowRight className="h-3 w-3" />
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {rest.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No more posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
