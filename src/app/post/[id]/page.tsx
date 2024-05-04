// 'use client'
// import { useParams } from "next/navigation"


// export default function PostId(){
// const params = useParams();
// console.log(params);

//   return <main>PostId{params.id}</main>
// }
'use client'
import { useParams, useSearchParams } from "next/navigation"


export default function PostId(){
const searchParams = useSearchParams
console.log(useSearchParams);


  return <main>PostId</main>
}