import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

// post from blog is passed here
// there is a container, a top and a buttom
// by default nextjs caches responses
// the Link bellow is to help with the slug link
// if post has an img, use that image
// switched from id to slug
const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>}
        <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard