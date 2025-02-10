import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../assets/instapost.css';
import '../assets/mobinstaposts.css';
import '../assets/modal.css'; // Import the new CSS file for modal styling

const InstaPost = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(8); // Show 8 posts initially (2 rows)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://abunidhal-insta.codersalman.workers.dev/');
        setPosts(response.data.data);
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

  const openModal = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPost(null);
  };

  return (
      <div className="container py-4">
        <h2 className="text-center pb-3">مختارتنا</h2>
        <div className="row my-md-4">
          {posts.slice(0, visiblePosts).map((post) => (
              <div className="col-md-3 mb-4" key={post.id}>
                <div className="card instagram-card" onClick={() => openModal(post)}>
                  <div className="card-body text-center">
                    <img
                        src={post.thumbnail_url || post.media_url}
                        className="card-img-top"
                        alt={`Post ${post.id}`}
                    />
                  </div>
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

        {/* Lightbox Modal */}
        {selectedPost && (
            <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Post Modal" className="custom-modal" overlayClassName="custom-overlay">
              <button className="close-button" onClick={closeModal}>×</button>
              <div className="modal-content">
                {selectedPost.media_type === 'VIDEO' ? (
                    <video controls className="modal-media">
                      <source src={selectedPost.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={selectedPost.media_url} alt={`Post ${selectedPost.id}`} className="modal-media" />
                )}
              </div>
            </Modal>
        )}
      </div>
  );
};

export default InstaPost;
