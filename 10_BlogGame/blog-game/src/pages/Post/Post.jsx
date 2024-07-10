import {useParams} from "react-router-dom"

import { useFetchDocument } from "../../hooks/useFetchDocument"


const Post = () => {

   const {id} = useParams()
   const {document: post} = useFetchDocument("Posts", id);
  return (
    <div>
        {post && (
            <>
             <h1>{post.title}</h1>
            </>
        )}
    </div>
  )
}

export default Post