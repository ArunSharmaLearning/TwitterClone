import React, {  useState  , useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";


function Feed(){
  const [item, setitem] = useState([])
  const [page, setpage]= useState(1)
  const [loading, setloading] = useState(true)
  const [lastVisible , setlastVisible] = useState(-1)
  const [limit , setlimit]=useState(3)
  const [id , setid]=useState(2)
  
    
      const handleScroll = (e)=>
        {
     const {scrollTop , clientHeight , scrollHeight} = e.currentTarget
     if(scrollHeight - scrollTop === clientHeight)
     {
       
        setpage((prev)=>{ return(prev+1)})
        
        

        setid(id+1)
     }

   }
useEffect(()=>{
  
  setloading(true)
  

    db.collection('posts')
    .orderBy('id')
    .startAfter(lastVisible).limit(limit)
    .onSnapshot((snapshot) => {
       // this work twice, first call's snapshot contains doc of subscription describe upper
       setlastVisible(id)
       setlimit(1)
        
       setitem((prev)=> {return  [...prev , ...snapshot.docs.map((doc) => doc.data()) ]});
    });
    console.log(lastVisible , id , page)
    setloading(false)

  } , [page])
  
  return (
    <div className="feed" onScroll={handleScroll}>
      <div className="feed__header">
        <h2>Home</h2>
      </div>
    
      <TweetBox />
     
      <FlipMove>
      {item && item.map((post) =>{
          console.log("item" , item , page)
          return(
            
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        )}) }
         
      </FlipMove>
      {loading && <h1>Loading...</h1>}
     
      
    </div>
  );
}

export default Feed;