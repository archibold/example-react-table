
/**
 * Register your development apis as router middlewars
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send({ list: list });
});

module.exports = router;

const list = [{
    Id: 1,
    'User name': 'Bndrzej',
    'Post title': 'Suppa',
    Views: 73,
    Likes: 41,
    'Created at': '13-12-2014',
},
{
    Id: 3,
    'User name': 'Andrzesj',
    'Post title': 'Suppa',
    Views: 12,
    Likes: 21,
    'Created at': '13-12-2014',
},
{
    Id: 4,
    'User name': 'Andrzej',
    'Post title': 'Suppa',
    Views: 13,
    Likes: 31,
    'Created at': '13-12-2014',
},
{
    Id: 4,
    'User name': 'Konza',
    'Post title': 'Suppa',
    Views: 13,
    Likes: 40,
    'Created at': '13-12-2014',
},
{
    Id: 4,
    'User name': 'Andrzej',
    'Post title': 'Suppa',
    Views: 13,
    Likes: 71,
    'Created at': '13-12-2014',
},
{
    Id: 4,
    'User name': 'Tonna',
    'Post title': 'Suppa',
    Views: 13,
    Likes: 14,
    'Created at': '13-12-2014',
},
{
    Id: 4,
    'User name': 'Andrzej',
    'Post title': 'Suppa',
    Views: 13,
    Likes: 41,
    'Created at': '13-12-2014',
},
{
    Id: 4,
    'User name': 'Jnna',
    'Post title': 'Suppa',
    Views: 13,
    Likes: 75,
    'Created at': '13-12-2014',
},
{
    Id: 4,
    'User name': 'Donna',
    'Post title': 'Suppa',
    Views: 16,
    Likes: 41,
    'Created at': '13-12-2014',
},
{
    Id: 2,
    'User name': 'Conna',
    'Post title': 'Suppa Extras',
    Views: 12,
    Likes: 33,
    'Created at': '13-12-2014',
}];
