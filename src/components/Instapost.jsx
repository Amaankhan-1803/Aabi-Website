import React, { useState } from 'react';
import postsData from '../assets/post.json'; // Adjust the path to your JSON file
import '../assets/instapost.css'


import p1 from "../imgs/p1.png";
import p2 from "../imgs/p2.png";
import p3 from "../imgs/p3.png";
import p4 from "../imgs/p4.png";
import p5 from "../imgs/p5.png";
import p6 from "../imgs/p6.png";
import p7 from "../imgs/p7.png";
import p8 from "../imgs/p8.png";
import p9 from "../imgs/p9.png";

const thumbnailMap = {
  1:p1,
  2:p2,
  3:p3,
  4:p4,
  5:p5,
  6:p6,
  7:p7,
  8:p8,
  9:p9,
  10:p1,
  11:p3,
  12:p6,
}


const InstaPost = () => {
  const [visiblePosts, setVisiblePosts] = useState(8); // Show 8 posts initially (2 rows)

  const handleViewMore = () => {
    if (visiblePosts >= postsData.length) {
      // Redirect to Instagram handle when all posts are displayed
      window.open("https://www.instagram.com/abu_nidhal_jewellry1?igsh=MXA5MXdhYW94amZpNg==", "_blank");
    } else {
      setVisiblePosts((prevCount) => prevCount + 4); // Show 4 more posts
    }
  };

  return (
    <div className="container py-4">
      <h2 className="text-start pb-3">Our Premium Presence on Instagram</h2>
    <div className="row my-4">
      {postsData.slice(0, visiblePosts).map((post) => (
        <div className="col-md-3 mb-4" key={post.id}>
          <div className="card instagram-card">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div className="card-body text-center">
                <img 
                  src={thumbnailMap[post.id]} // Using the local thumbnail image
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
