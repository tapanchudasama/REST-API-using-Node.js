const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json(err);
    }
});

router.post('/', function (req, res) {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    post.save()
        .then(data => { res.json(data) })
        .catch(err => {
            res.json(err);
        })
});

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }
    catch (err) {
        res.json(err);
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.postId });
        res.json(removedPost);
    }
    catch (err) {
        res.json(err);
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
        res.json(updatedPost);
    }
    catch (err) {
        res.json(err);
    }
})
module.exports = router;