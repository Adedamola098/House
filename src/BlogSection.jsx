import { FaUser, FaTags } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { blogPosts } from "./Data/Index";

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const loadMoreBlogs = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  const seeLessBlogs = () => {
    setVisiblePosts(3);
  };

  return (
<section className="py-20 bg-blue-50">
      <div className="max-w-6xl w-full mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-700" data-aos="fade-down">
          From the Blog
        </h2>
        <p className="text-xl text-gray-800 text-center mb-10">
          Explore our latest articles filled with insights, tips, and inspiration. Stay informed, stay inspired!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center justify-between px-5 py-3 bg-blue-600 text-white" data-aos="fade-right">
                <div className="text-center">
                  <p className="text-3xl font-bold">{post.date}</p>
                  <p className="text-lg">{post.year}</p>
                </div>
                <div className="p-3 bg-white text-blue-600 rounded-full text-xl">{post.icon}</div>
              </div>

              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" data-aos="flip-left" />

              <div className="p-6" data-aos="fade-up">
                <h3 className="text-2xl font-bold text-gray-900">{post.title}</h3>
                <div className="flex items-center text-lg text-gray-700 space-x-3 mt-3">
                  <FaUser className="text-blue-600" />
                  <span className="font-semibold">{post.author}</span>
                  {post.tags.map((tag, i) => (
                    <span key={i} className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-sm">
                      <FaTags />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mt-4 leading-relaxed">{post.description}</p>

                <button className="mt-6 w-full text-lg font-semibold text-white bg-blue-600 py-3 rounded-lg hover:bg-blue-700 transition">
                  READ MORE »
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {visiblePosts < blogPosts.length && (
            <button
              onClick={loadMoreBlogs}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              data-aos="fade-up"
            >
              View More Blogs
            </button>
          )}
          {visiblePosts > 3 && (
            <button
              onClick={seeLessBlogs}
              className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition mt-4"
              data-aos="fade-up"
            >
              See Less
            </button>
          )}
        </div>
        <p className="text-center text-gray-700 mt-14 text-lg">
          Looking for more content? Keep checking back as we update regularly with new posts!
        </p>
      </div>
    </section>

  );
};

export default BlogSection;
