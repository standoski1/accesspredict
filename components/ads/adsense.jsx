import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('an error occured loading adsense' + err);
    }
  }, []);

  return (
    <div style={{overflow: 'hidden', minWidth: '300px', minHeight: '250px',margin:'-.8rem auto 1.2rem auto'}}>
          <ins className="adsbygoogle"
          style={{display:'block'}}
          data-ad-client="ca-pub-9923528129954854"
          data-ad-slot="1035839795"
          data-ad-format="auto"
          data-full-width-responsive="true">
          </ins>
    </div> 
  );
};

export default AdBanner;