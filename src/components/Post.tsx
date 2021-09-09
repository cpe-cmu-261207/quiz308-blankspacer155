import { comments } from "../data/comments"
import Comment from "./Comment"


const Post = () => {

    return (
      <div className="mx-auto max-w-2xl bg-gray-800 rounded-md shadow p-4 space-y-2 divide-y">

     
      <div className="space-y-2">

       
        <div className="flex space-x-2 items-center">
          <img className="w-12 h-12 rounded-full" src="/profileImages/MoreHandsome.jpg"></img>
          <span className='font-semibold text-lg text-white'>Chanchai Chaisalee 630610726</span>
        </div>

      
        <p className='text-white'>กว่าจะหาเส้นขาวๆนี่เจอก็ครึ่งวันละครับ #261207</p>

        
        <div className='flex items-center'>
          <img className='w-4 h-4 mr-1' src='/like.svg'></img>
          <p className='text-gray-300'>999999 คน</p>
        </div>

      </div>
        <div>
     {comments.map(x=><Comment prop={x}></Comment>)}
    </div>
      </div>
    )
}

export default Post