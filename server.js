var express = require('express')
var app = express()
var articles = {}
var port = process.env.PORT || 8080

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

app.get('/harry', function (request, response) {
  response.render('pages/charpages', {
    articles: articles,
    wizard: articles[0]
  })
})

app.get('/hermione', function (request, response) {
  response.render('pages/charpages', {
    articles: articles,
    wizard: articles[1]
  })
})

app.get('/ron', function (request, response) {
  response.render('pages/charpages', {
    articles: articles,
    wizard: articles[2]
  })
})

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

createArticle({
  title: 'Harry Potter',
  content: 'Harry Potter is a wizard who has an important fate, which involves him battling the darkest wizard of the time.',
  url: '/harry',
  img: '/harry.jpg'
})
createArticle({
  title: 'Hermione Granger',
  content: 'Hermione Granger is a very clever witch who was born to two muggle parents.',
  url: '/hermione',
  img: '/hermione.jpg'
})

createArticle({
  title: 'Ron Weasley',
  content: 'Ron Weasley is a boy that is from a very large wizarding family with many siblings.',
  url: '/ron',
  img: '/ron.jpeg'
})

app.listen(port)
