	(function() {
		'use strict';

		var testMails = 
		[{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		},
		{
			mailbox: '580ca4e99de15a250410dbc9',
			subject: 'test',
			body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuereerat non mi fringilla scelerisque. Praesentut ipsum quis eros gravida interdum. In egetodio vel mauris ultricies bibendum id in nulla.Nam volutpat iaculis posuere. Class aptent tacitisociosqu ad litora torquent per conubia nostra, perinceptos himenaeos. Nam non nibh molestie, rutrum enim id,venenatis eros. Quisque eleifend placerat porta. Cras justofelis, venenatis sed luctus ac, dignissim eget purus. Sed porttitor,risus sit amet ultricies cursus, nulla lectus dapibus massa, etiaculis nulla sem eu orci. Pellentesque sed lacinia est. Vestibulum id diam odio. Vivamus in interdum dui. Donec aliquetdolor sed orci facilisis consectetur. `,
			to: 'test@test.com'
		}]



		angular.module('MailBox')
		.constant('testMails', testMails)
	})();