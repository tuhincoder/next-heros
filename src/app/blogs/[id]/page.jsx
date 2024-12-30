const page = ({ params }) => {
  console.log(params.id);
  const { title, description } = blogs.find((blog) => blog.id == params.id);

  return (
    <div className="h-screen">
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
};

const blogs = [
  {
    id: 1,
    slug: "nextjs-getting-started",
    title: "Getting Started with Next.js",
    description:
      "Learn the basics of Next.js and how to build a modern web application step-by-step.",
  },
  {
    id: 2,
    slug: "react-vs-nextjs",
    title: "React vs. Next.js: Which One Should You Use?",
    description:
      "A detailed comparison between React and Next.js to help you choose the right framework for your project.",
  },
  {
    id: 3,
    slug: "seo-optimization-nextjs",
    title: "SEO Optimization with Next.js",
    description:
      "Discover how Next.js helps improve SEO with server-side rendering and other powerful features.",
  },
  {
    id: 4,
    slug: "nextjs-deployment-guide",
    title: "Next.js Deployment Guide",
    description:
      "Step-by-step instructions for deploying your Next.js application on various hosting platforms.",
  },
  {
    id: 5,
    slug: "dynamic-routing-nextjs",
    title: "Understanding Dynamic Routing in Next.js",
    description:
      "Master dynamic routes in Next.js to build flexible and scalable applications.",
  },
  {
    id: 6,
    slug: "nextjs-performance-optimization",
    title: "Performance Optimization in Next.js",
    description:
      "Learn the best practices to optimize the performance of your Next.js application.",
  },
  {
    id: 7,
    slug: "building-blog-nextjs",
    title: "Building a Blog with Next.js",
    description:
      "A comprehensive guide to creating a blog using Next.js and Markdown for content.",
  },
];
export default page;
