import React, { useState , useEffect} from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [id , setid]=useState(0)


  useEffect(()=>{
    db.collection('posts').get().then(snap => {
      setid(snap.size) // will return the collection size
   })
  } , [])

  
  const sendTweet = (e) => {
    e.preventDefault();

    
   

    db.collection("posts").add({
      displayName: "Ritesh Tiwari",
      username: "officialriteshtiwari",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:"",
      id:id
    });

    setid(id+1)
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;