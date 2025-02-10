import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/instapost.css';
import '../assets/mobinstaposts.css';

const InstaPost = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(8); // Show 8 posts initially (2 rows)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://abunidhal-insta.codersalman.workers.dev/');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleViewMore = () => {
    if (visiblePosts >= posts.length) {
      // Redirect to Instagram handle when all posts are displayed
      window.open("https://www.instagram.com/abu_nidhal_jewellry1?igsh=MXA5MXdhYW94amZpNg==", "_blank");
    } else {
      setVisiblePosts((prevCount) => prevCount + 4); // Show 4 more posts
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-start pb-3">Our Premium Presence on Instagram</h2>
      <div className="row my-md-4">
        {posts.slice(0, visiblePosts).map((post) => (
          <div className="col-md-3 mb-4" key={post.id}>
            <div className="card instagram-card">
              <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                <div className="card-body text-center">
                  <img
                    src={post.media_url}
                    className="card-img-top"
                    alt={`Post ${post.id}`}
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <button className="btn" onClick={handleViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default InstaPost;
