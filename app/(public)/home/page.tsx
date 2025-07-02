export const metadata = {
  title: "Home Page",
  description: "Esta es la página de home.",
  keywords: ["Next.js", "SEO", "Home Page"],
  authors: [
    {
      name: "Luis Felipe Alvarez",
      url: "https://example.com",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <span className="text-5xl">Home Page</span>
      <p className="mt-4 text-lg">
        This is the home page of our Next.js application.
      </p>
    </>
  );
}
