
import styles from './postUser.module.css';
import { getUser } from "../../lib/data";
import Image from "next/image";



// with API
// const getData = async (userId) => { // start here to get the data
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"} ) // slug is passed in
    
//     if(!res.ok) { // if not okay, if not.. 
//       throw new Error('Something went wrong')
//     }
//     return res.json()
//   }

const PostUser = async ({userId}) => {
    // const user = await getData (userId);
    const user = await getUser (userId);
    console.log(user)
    return (
      <div className={styles.container}>
        <Image
          className={styles.avatar}
          src={user.img ? user.img : "/noavatar.png"}
          alt=""
          width={50}
          height={50}
        />
        <div className={styles.texts}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user.username}</span>
        </div>
      </div>
    );
}

export default PostUser
