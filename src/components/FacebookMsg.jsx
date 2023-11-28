import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';
const FacebookMsg = () => {
  return (
    <FacebookProvider appId='1091402238421954' chatSupport>
      <CustomChat pageId='130846173456008' minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
