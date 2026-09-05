import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { blogsData } from '../data/Blogs';
import '../components/Sections/Blogs.css';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogsData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post) {
      document.title = `${post.title} | AMFlix Insights`;
    }
  }, [post]);

  if (!post) {
    return (
      <main className="blog-article-view" style={{ minHeight: '80vh' }}>
        <div className="blog-article-container" style={{ textAlign: 'center', paddingTop: '5rem' }}>
          <h1 className="article-title">Article Not Found</h1>
          <p className="article-intro-lead">The article you are looking for does not exist or has moved.</p>
          <Link to="/insights" className="blog-back-btn" style={{ justifyContent: 'center' }}>
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all insights</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="blog-article-view">
      <div className="blog-article-container">
        {/* Back Button */}
        <button
          type="button"
          className="blog-back-btn"
          onClick={() => navigate('/insights')}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all insights</span>
        </button>

        {/* Article Header */}
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          <p className="article-intro-lead">{post.excerpt}</p>

          <div className="article-meta-row">
            <div className="article-author-info">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="article-author-avatar"
              />
              <div className="article-author-text">
                <span className="meta-label">Written by</span>
                <span className="author-name">{post.author.name}</span>
              </div>
            </div>

            <div className="article-pill-tags">
              <span className="article-pill category">{post.category}</span>
              <span className="article-pill date">{post.date}</span>
              <span className="article-pill readtime">{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Hero Media Image */}
        <div className="article-hero-wrap">
          <img
            src={post.heroImage}
            alt={post.title}
            className="article-hero-img"
          />
        </div>

        {/* Article Body */}
        <div className="article-body">
          <p className="article-lead-text">{post.intro}</p>

          {post.sections.map((sec, idx) => (
            <section key={idx} className="article-section-block">
              <h2 className="article-section-h2">{sec.heading}</h2>
              <p className="article-section-p">{sec.content}</p>
            </section>
          ))}

          {post.faqs && post.faqs.length > 0 && (
            <div className="article-faq-container">
              <h3 className="faq-lead-title">Frequently Asked Questions</h3>
              {post.faqs.map((f, i) => (
                <div key={i} className="faq-item">
                  <h4 className="faq-question">{f.q}</h4>
                  <p className="faq-answer">{f.a}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Article Bottom Action CTA */}
        <div className="article-cta-box">
          <div className="article-cta-copy">
            <h3>Have a challenge in {post.category}?</h3>
            <p>Discuss your brand roadmap and performance objectives directly with our strategy team.</p>
          </div>
          <Link to="/contact" className="article-cta-btn">
            <span>Start Collaboration</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}