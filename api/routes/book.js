var BookModel   = require('../models/book');
var CollectionModel   = require('../models/collection');

exports.seeAll = function(req, res) {
  BookModel.Book.find({}, function(err, books) {
    res.json(books);
  });
}

exports.addBook = function(req, res) {
	console.log(req.body);
	var newBook = new BookModel.Book({title: req.body.title, isbn:req.body.isbn});
	newBook.save(function(err){
		if(err){
			console.log(err);
		}else{
			console.log(newBook);
		}
	});
}

exports.seeSingle = function(req, res) {
var isbn = req.params.isbn;
  BookModel.Book.find({isbn : isbn }, function(err, book) {
    res.json(book);
  });
}