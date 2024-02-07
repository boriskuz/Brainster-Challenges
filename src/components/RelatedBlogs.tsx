import React from 'react';
import { BlogData } from '../types';
import Link from 'next/link';

interface RelatedBlogsProps {
  relatedBlog: BlogData;
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ relatedBlog }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        <li className="mb-4">
          <Link href={`/blog/${relatedBlog.id}`}>
            <a className="wrao-pic-w">
              <img src={relatedBlog.img} alt={relatedBlog.title} className="img-fluid" />

              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">{relatedBlog.title}</div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RelatedBlogs;
