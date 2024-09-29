import React, { useEffect } from 'react'

export default function Taboola() {
    useEffect(() => {
        try {
            window._taboola = window._taboola || [];
            _taboola.push({flush: true});

            window._taboola = window._taboola || [];
            _taboola.push({article:'auto'});
            !function (e, f, u, i) {
                if (!document.getElementById(i)){
                e.async = 1;
                e.src = u;
                e.id = i;
                f.parentNode.insertBefore(e, f);
                }
            }(document.createElement('script'),
            document.getElementsByTagName('script')[0],
            '//cdn.taboola.com/libtrc/fulltimepredict/loader.js',
            'tb_loader_script');
            if(window.performance && typeof window.performance.mark == 'function')
                {window.performance.mark('tbl_ic');}

            window._taboola = window._taboola || [];
            _taboola.push({
                mode: 'thumbnails-mid-a',
                container: 'taboola-mid-article-thumbnails',
                placement: 'Mid Article Thumbnails',
                target_type: 'mix'
            });

        } catch (err) {
          console.log('an error occured loading taboola' + err);
        }
        
      }, []);
  return (
    <div style={{overflow: 'hidden', minWidth: '300px', minHeight: '250px'}}>
     <div id="taboola-mid-article-thumbnails"></div>
    </div>
  )
}
