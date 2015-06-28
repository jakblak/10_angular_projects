'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Car Schema
 */
var CarSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: 'New Listing',
		trim: true,
		required: 'Title cannot be blank'
	},
	type: {
		type: String,
		default: 'used',
		trim: true,
		required: 'Type cannot be blank'
	},
	make: {
		type: String,
		default: '',
		trim: true,
		required: 'Make cannot be blank'
	},
	model: {
		type: String,
		default: '',
		trim: true,
		required: 'Model cannot be blank'
	},
	year: {
		type: String,
		default: '',
		trim: true
	},
	price: {
		type: String,
		default: 'used',
		trim: true
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	imageUrl: {
		type: String,
		default: '',
		trim: true
	},
	state: {
		type: String,
		default: '',
		trim: true
	},
	contact_email: {
		type: String,
		default: '',
		trim: true
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Car', CarSchema);