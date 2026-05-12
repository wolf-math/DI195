const getPosts = async (userId) => {
  console.log('Post', 'Done!');

  return [
    {
      title: 'Article on Javascript',
      idArticle: 1,
      idUser: userId
    }
  ];
};

const getComments = async (postId) => {
  console.log('Comments', 'Done!');

  return [
    { title: 'Great Article', author: 'John' },
    { title: 'Interesting Article', author: 'Lea' }
  ];
};

const getLikes = async (postId) => {
  console.log('Likes', 'Done!');

  return 5;
};

console.log('Test1');

const getLatestPostActivity = async (userId) => {
  const posts = await getPosts(userId);
  const latestPost = posts[0];

  const comments = await getComments(latestPost.idArticle);
  const likes = await getLikes(latestPost.idArticle);

  return { comments, likes };
};

const run = async () => {
  const res = await getLatestPostActivity(10);
  console.log('everything', res);
};

run();

console.log('Test2');
