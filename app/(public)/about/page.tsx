export const metadata = {
  title: "SEO Title",
  description: "SEO Title",
  keywords: ["Next.js", "SEO", "About Page"],
  authors: [
    {
      name: "Luis Felipe Alvarez",
      url: "https://example.com",
    },
  ],
  creator: "Luis Felipe Alvarez",
  applicationName: "Next.js App",
  openGraph: {
    title: "SEO Title",
    description: "SEO Description",
    url: "https://example.com/about",
    siteName: "Next.js App",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <span className="text-5xl">About Page</span>
      <p className="mt-4 text-lg">
        This is the about page of our Next.js application.
      </p>
    </>
  );
}
