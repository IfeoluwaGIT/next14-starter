import styles from './singlePost.module.css'
import Image from "next/image"
import PostUser from '@/app/components/postUser/PostUser'
import { Suspense } from 'react'


const getData = async (slug) => { // start here to get the data
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, ) // slug is passed in
  
  if(!res.ok) { // if not okay, if not.. 
    throw new Error('Something went wrong')
  }
  return res.json()
}

const SinglePostPage = async ({params}) => { // to reach this slug, we will destructure params
  
  const {slug} = params; // use params to get our slug

  const post = await getData(slug)
  return (
    
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/24514570/pexels-photo-24514570/free-photo-of-a-woman-in-a-suit-and-sunglasses-is-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="hello" 
        fill
        className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image 
          className={styles.avatar}
          src='https://images.pexels.com/photos/24514570/pexels-photo-24514570/free-photo-of-a-woman-in-a-suit-and-sunglasses-is-standing-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  alt=""
                  width={50}
                  height={50}
                  />
                  <Suspense fallback={<div>Loading...</div>}>
                    <PostUser userId={post.userId} />
                  </Suspense>
               
        <div className={styles.detailText}>
        <span className={styles.detailTitle}> published</span>
        <span className={styles.detailValue}> 01.01.2024</span>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
