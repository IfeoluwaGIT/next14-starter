"use client" //userouter is a hook, so it must be lclient side
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

  // CLIENT SIDE NAVIGATION
  const router = useRouter()
  const pathname = usePathname() // this helpes us get path name
  const searchParams = useSearchParams() // this helpes us get search params

  console.log(pathname);


  const q = searchParams.get("q")

  console.log(q)

  const handleClick = ()=>{
    console.log("clicked")
    router.forward()
    //router.push("/") to homepage
    //r.replace('if you go back, bye bye lol)
  }
// Default navigation is to prefect, you can see we made it false below, because we have many links and we dont want eprformance issues
// instead of using a link we want functionality to redirect our uses
// useRouter hook from next/navigation
  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link> 
      <button onClick={handleClick}>Write and Redirect</button> 
    </div>
  )
}

export default NavigationTestPage