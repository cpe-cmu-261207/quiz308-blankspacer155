import { CommentType } from "../data/comments"


const Reply = ({prop}:{prop:CommentType}) => {

    return (
        <div className="flex p-2 items-start space-x-2  pl-14">
        <img className="w-10 w-10 rounded-full" src={prop.userImagePath}></img>
        <div className="bg-gray-500 rounded-lg p-2">
          <p className="font-semibold text-white">{prop.username}</p>
          <p className='text-white'>{prop.commentText}</p>
          {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
          <div className='flex items-center'>
          {prop.likeNum>0?<div className='flex flex-row items-center'><img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-300'>{prop.likeNum} คน</p></div>
                :null}
            
          </div>
        </div>
      </div>
    )
}

export default Reply