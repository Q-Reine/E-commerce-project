import React from "react";
import '../styles/blog.css'
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'
import blog5 from '../assets/blog5.jpg'
import blog6 from '../assets/blog6.jpg'

const blogs = [
  {
    title: "Sed magna dui, dignissim id felis vitae, consectetur",
    date: "July 18, 2021",
    image: blog1,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
  },
  {
    title: "Fusce suscipit risus tempor, blandit urna at, laoreet ex",
    date: "July 18, 2021",
    image: blog2,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
  },
  {
    title: "Pellentesque varius, diam vitae mattis luctus, mi mi cursus",
    date: "July 18, 2021",
    image: blog3,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
  },
  {
    title: "Nam pharetra fringilla justo, et commodo lacus molestie ut",
    date: "July 18, 2021",
    image: blog4,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
  },
  {
    title: "Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi",
    date: "July 18, 2021",
    image: blog5,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
  },
  {
    title: "Duis lacinia convallis odio, quis efficitur dolor pulvinar nec",
    date: "July 18, 2021",
    image: blog6,
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit [...]",
  },
];

function Blog() 
{
  return (
    <div className="blog-list">
      <h1>Blog</h1>
      <div className="blog-content">
        {blogs.map((blog, index) => (
          <div key={index}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content-1">
              <p>{blog.date}</p>
              <h2>{blog.title}</h2>
              <p>{blog.excerpt}</p>
              <a href="#">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
