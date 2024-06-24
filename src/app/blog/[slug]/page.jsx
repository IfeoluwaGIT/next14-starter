import styles from './singlePost.module.css'
import Image from "next/image"
import PostUser from '@/app/components/postUser/PostUser'
import { Suspense } from 'react'
import { getPost } from '@/app/lib/data'


// FETCH DATA WITH AN API 
// const getData = async (slug) => { // start here to get the data
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, ) // slug is passed in
  
//   if(!res.ok) { // if not okay, if not.. 
//     throw new Error('Something went wrong')
//   }
//   return res.json()
// }

export const generateMetadata = async ({ params }) => { // SEO
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};


const SinglePostPage = async ({params}) => { // to reach this slug, we will destructure params
  
  const {slug} = params; // use params to get our slug
// EVEN IF YOU FETCH DATA TWICE IN NEXTJS, IT WILL FETCH IT ONCE
  // WITH API
  // const post = await getData(slug)

  // WITHOUT API
  // toString() remover the date error and .slice to reduce the letters in the date
  const post = await getPost(slug);

  console.log(post)
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}

export default SinglePostPage
