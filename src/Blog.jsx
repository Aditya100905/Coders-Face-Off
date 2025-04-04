export default function BlogSection() {
    return (
      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-semibold">FRESH FROM OUR BLOG</h2>
        <p className="text-gray-600 mt-2">
          You Are Going To Love This Amazing Shopify Theme.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[1, 2].map((_, index) => (
            <div key={index} className="text-center">
              <img
                src="/bg/blog.png" // Replace with actual image URL
                alt="Blog post"
                className="w-full object-cover rounded-lg"
              />
              <h3 className="font-medium text-lg mt-4">
                7 Easy Rules To Write Product Descriptions That Sell
              </h3>
              <p className="text-gray-500 mt-1">July 16, 2022</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  