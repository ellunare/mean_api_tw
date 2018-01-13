const express = require('express');
const router = express.Router();
const config = require('../config/database')

const passport = require('passport');

const PROTECT = passport.authenticate('jwt', { session: false });

// // // // // // // // // // // // // // // // // // // // // //

const Comment = require('../models/comment');

// Get Comments For Task
router.get('/task/:id', PROTECT, (req, res, next) => {
	let task_id = req.params.id;

	Comment.getCommentsForTask(task_id, (err, comments) => {
		if (err) {
			throw err;
		}
		if (!comments.length) {
			res.json({
				success: false,
				msg: 'COMS Comments not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'COMS Comments send',
				data: comments
			});
		}
	});

});


// Get Comment By Id
router.get('/comment/:id', PROTECT, (req, res, next) => {
	let id = req.params.id;

	Comment.getCommentById(id, (err, comment) => {
		if (err) {
			throw err;
		}
		if (!comment) {
			res.json({
				success: false,
				msg: 'COMS Comment not found',
				data: null
			});
		}
		else {
			res.json({
				success: true,
				msg: 'COMS Comment ' + id + ' send',
				data: comment
			});
		}
	});
});


// Add Comment
router.post('/create', PROTECT, (req, res, next) => {

	Comment.getLastCommentId((err, lastComment) => {
		if (err) {
			console.log('COMS Cant find last comment');
		}
		else {
			// Формируем новый коммент
			let c = req.body;

			let newComment = new Comment({
				id: lastComment.id + 1,
				text: c.text,
				parentTaskId: c.parentTaskId,
				parentUserId: c.parentUserId
			});

			Comment.addComment(newComment, (err, new_comment) => {
				if (err) {
					res.json({
						success: false,
						msg: 'COMS Desk creation error',
						data: null
					});
				}
				else {
					res.status(201).json({
						success: true,
						msg: 'COMS Desk ' + new_comment.id + ' added',
						data: new_comment
					});
				}
			});

		}
	});

});


// Edit Comment By Id
router.put('/edit', PROTECT, (req, res, next) => {
	let data = req.body;

	Comment.editComment(data, (err, result) => {
		if (err) {
			throw err;
		}
		if (!result.n) {
			res.json({
				success: false,
				msg: 'COMS Comment not found'
			});
		}
		else {
			res.json({
				success: true,
				msg: 'COMS Comment ' + data.id + ' edited'
			});
		}
	});
});


// Delete Comment By Id
router.delete('/delete/:id', PROTECT, (req, res, next) => {
	let id = req.params.id;

	Comment.deleteComment(id, (err, result) => {
		if (err) {
			throw err;
		}
		if (!result.result.n) {
			res.json({
				success: false,
				msg: 'COMS Comment not found'
			});
		}
		else {
			res.json({
				success: true,
				msg: 'COMS Comment ' + id + ' deleted'
			});
		}
	});
});


module.exports = router;