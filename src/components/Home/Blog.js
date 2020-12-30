import React from 'react';
import styles from './Blog.module.scss';
import BlogItem from './BlogItem';

const Blog = () => {
  return (  
    <section className={styles.blogWrap}>
      <div className={styles.blog}>
        <BlogItem 
          title="웹팩 사용 방법"
          description="웹팩에 대해서 간단히 이해해 봅니다."
          image="https://picsum.photos/300"
        />
        <BlogItem 
          title="JWT Token에 대해서"
          description="JWT Token을 NodeJS에서 쓰는 방법을 소개합니다."
          image="https://picsum.photos/301"
        />
        <BlogItem 
          title="리액트 하나부터 열까지"
          description="리액트를 이용한 예제"
          image="https://picsum.photos/302"
        />
        <BlogItem 
          title="그리드의 모든 것"
          description="그리드에 대해서 자세히 살펴봅니다."
          image="https://picsum.photos/303"
        />
      </div>
    </section>
  );
}
 
export default Blog;