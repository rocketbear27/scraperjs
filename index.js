import { getHTML, getTwitterFollowers } from './lib/scraper';

async function go() {
  const html = await getHTML('https://twitter.com/wesbos/');
  const twCount = await getTwitterFollowers(html);
  console.log(`You have ${twCount} followers`);
}

go();