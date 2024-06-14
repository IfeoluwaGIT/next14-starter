import PostCard from '../components/postCard/postCard'
import styles from './blog.module.css'

const getData = async () => { // start here to get the data
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 3600}})
  
  if(!res.ok) { // if not okay, if not.. 
    throw new Error('Something went wrong')
  }
  return res.json()
}
// post passed in postcard below
const BlogPage = async () => {

  const posts = await getData() // second step to recieve the post data
  return (
    <div className={styles.container}>
      {posts.map((post) => ( 
      <div className={styles.post} key={post.id}>
      <PostCard post={post} /> 
      </div>
      ))}
    </div>
  )
}

export default BlogPage



/* this is how we got the pictures in boxes 
<div className={styles.container}>
      <div className={styles.post}
      >
      <PostCard />
      </div>
      <div className={styles.post}
      >
      <PostCard />
      </div>
      <div className={styles.post}
      >
      <PostCard />
      </div>
      <div className={styles.post}
      >
      <PostCard />
      </div>
      <div className={styles.post}
      >
      <PostCard />
      </div>
    </div>
*/