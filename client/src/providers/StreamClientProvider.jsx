import { StreamVideo, StreamVideoClient } from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { tokenProvider } from '../../../server/actions/stream.actions';

const apiKey = import.meta.env.VITE_PUBLIC_STREAM_API_KEY;

const StreamClientVideoProvider = ({children}) => {
  const [videoClient, setVideoClient] = useState();
  const {currentUser}=useSelector((state)=>state.user);

  useEffect(() => {
    if (!currentUser) 
      return;
    if (!apiKey)
      throw new Error ('Stream API key missing');

    const client=new StreamVideoClient({
      apiKey: apiKey,
      user: {
          id: currentUser._id,
          name: currentUser.userName || currentUser._id,
          image: currentUser.profilePicture,
      },
      tokenProvider: () => tokenProvider(), // Pass a reference to the tokenProvider function
    });

    setVideoClient(client);
  }, [currentUser])
  
  // if (!videoClient){
  //   return <div>Loading...</div>;
  // }

  return (
      <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
  );
};

export default StreamClientVideoProvider;