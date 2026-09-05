import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../../data/Blogs';
import './Blogs.css';

export default function Blogs({ activeCategory = 'All', searchTerm = '' }) {
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesCategory =
        activeCategory === 'All' ||
        post.category.toLowerCase() === activeCategory.toLowerCase();

      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section className="blogs-feed-section" id="blogs-feed">
      <div className="blogs-feed-container">
        {filteredBlogs.length === 0 ? (
          <div className="blogs-empty-state">
            <p>No insights found matching your search. Try another query or select "All".</p>
          </div>
        ) : (
          <div className="blogs-grid">
            {filteredBlogs.map((post) => (
              <Link
                key={post.id}
                to={`/insights/${post.slug}`}
                className="blog-card"
              >
                {/* Visual Thumbnail */}
                <div className="blog-card-image-wrap">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="blog-card-img"
                    loading="lazy"
                  />
                </div>

                {/* Content Box */}
                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>

                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}