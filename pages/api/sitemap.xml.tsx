import { NextApiRequest, NextApiResponse } from "next";

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const SiteMapApp = async (req:NextApiRequest, res:NextApiResponse) => {


  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      cacheTime: 600000,
    });

    // List of posts
    // const posts = [];

    // Create each URL row
    smStream.write({
      url: `/`,
      changefreq: 'daily',
      priority: 1.0
    });

    smStream.write({
      url: `/basketball`,
      changefreq: 'daily',
      priority: 1.0
    });

    smStream.write({
      url: `/disclaimer`,
      changefreq: 'daily',
      priority: 1.0
    });

    smStream.write({
      url: `/privacy`,
      changefreq: 'daily',
      priority: 1.0
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    res.end(sitemapOutput);
  } catch(e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
};

export default SiteMapApp;