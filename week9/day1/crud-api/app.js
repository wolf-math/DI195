const express = require('express');
const posts = require('./data');

const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/api/posts', (req, res) => {
  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    title: req.body.title,
    content: req.body.content
  };

  posts.push(newPost);

  res.status(201).json(newPost);
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.get('/api/posts/:postID', (req, res) => {
  const postID = Number(req.params.postID);
  const post = posts.find((post) => post.id === postID);

  if (!post) {
    return res.status(404).send('Post not found');
  }

  res.status(200).json(post);
});

app.put('/api/posts/:postID', (req, res) => {
  const postID = Number(req.params.postID);
  const postIndex = posts.findIndex((post) => post.id === postID);

  if (postIndex === -1) {
    return res.status(404).send('Post not found');
  }

  const updatedPost = {
    id: postID,
    title: req.body.title,
    content: req.body.content
  };

  posts[postIndex] = updatedPost;

  res.status(200).json({ message: 'Post updated' });
});

app.delete('/api/posts/:postID', (req, res) => {
  const postID = Number(req.params.postID);
  const postIndex = posts.findIndex((post) => post.id === postID);

  if (postIndex === -1) {
    return res.status(404).send('Post not found');
  }

  posts.splice(postIndex, 1);

  res.status(200).json({ message: 'Post deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
