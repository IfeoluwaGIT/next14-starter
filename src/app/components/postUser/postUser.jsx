import styles from './postUser.module.css';

const getData = async (userId) => { // start here to get the data
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"} ) // slug is passed in
    
    if(!res.ok) { // if not okay, if not.. 
      throw new Error('Something went wrong')
    }
    return res.json()
  }

const PostUser = async ({userId}) => {
    const user = await getData (userId);

  return (
    <div className={styles.container}>
        <span className={styles.title}> author</span>
        <span className={styles.username}> {user.username}</span>
        </div>
  )
}

export default PostUser
