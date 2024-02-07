import React from 'react';
import { BlogData } from '../types';
import Link from 'next/link';

interface BlogItemProps {
  blogData: BlogData;
}

const BlogItem: React.FC<BlogItemProps> = ({ blogData }) => {
  return (
    <a className="p-b-63 d-block">
      <span className="hov-img0 how-pos5-parent">
        <img src={blogData.img} alt={blogData.title} />
      </span>

      <div className="p-t-32">
        <h4 className="p-b-15">
          <span className="ltext-108 cl2 hov-cl1 trans-04">{blogData.title}</span>
        </h4>

        <p className="stext-117 cl6">{blogData.excerpt}</p>

        <div className="flex-w flex-sb-m p-t-18">
          <span className="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
            <span>
              <span className="cl4">By</span> {blogData.author}
              <span className="cl12 m-l-4 m-r-6">|</span>
            </span>

            <span>{blogData.category}</span>
          </span>
          <Link href={`/blog/${blogData.id}`}>
            <span className="stext-101 cl2 trans-04 m-tb-10">
              Continue Reading
              <i className="fa fa-long-arrow-right m-l-9"></i>
            </span>
          </Link>
        </div>
      </div>
    </a>
  );
};

export default BlogItem;
