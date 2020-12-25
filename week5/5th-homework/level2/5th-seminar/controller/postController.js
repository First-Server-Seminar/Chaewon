const sequelize = require('sequelize');
const ut = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const {
    User,
    Post,
    Like
} = require('../models');

module.exports = {
    createPost: async (req, res) => {
        const {
            userId,
            title,
            contents
        } = req.body;
        try {
            const post = await Post.create({
                UserId: userId,
                title,
                contents
            });
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch (err) {
            console.log(err);
            res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL))
        }
    },
    readAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                attributes: ['title', 'contents'],
                include: [{
                    model: User,
                    attributes: ['id', 'userName', 'email']
                }, {
                    model: User,
                    as: 'Liker',
                    attributes: {
                        exclude: ['id','email','salt','password']
                    }
                }]
            });
            return res.status(sc.OK).send(ut.success(sc.OK, rm.READ_POST_ALL_SUCCESS, posts));
        } catch (err) {
            console.log(err);
            res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.READ_POST_ALL_FAIL))
        }
    },
    createLike: async (req, res) => {
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try {
            const like = await Like.create({
                PostId,
                UserId
            });
            return res.status(sc.OK).send(ut.success(sc.OK, rm.CREATE_LIKE_SUCCESS, like));
        } catch (err) {
            console.log(err);
            res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_LIKE_FAIL))
        }
    },
    deleteLike: async (req, res) => {
        const PostId = req.params.postId;
        const UserId = req.body.userId;
        try {
            const like = await Like.destroy({
                where: {
                    PostId: PostId,
                    UserId: UserId
                }
            });
            return res.status(sc.OK).send(ut.success(sc.OK, rm.DELETE_LIKE_SUCCESS, like));
        } catch (err) {
            console.log(err);
            res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, rm.DELETE_LIKE_FAIL))
        }
    }
}