var UserModel   = require('../models/user');
var BookModel   = require('../models/book');

var http = require("http");
var bookApi = "http://isbndb.com/api/v2/json/EO1UF406/book/";

// 

exports.addUser = function(req, res) {
  var newUser = new UserModel.User({username: req.body.username, pass: req.body.pass});
  newUser.save(function(err){
    if(err)
      console.log(err);
    else
      console.log(newUser);
  });
}

exports.seeSingle = function(req, res) {
var isbn = req.params.isbn;
  UserModel.User.find({isbn : isbn }, function(err, users) {
    res.json(users);
  });
}

exports.editUser = function(req, res) {
  var id = req.params.id;
  var mdp = req.body.pass;
  if (mdp !="") {  
    UserModel.User.findOne({_id: id}, function (err, user) {
        user.pass = mdp;

        user.save(function (err) {
            if(err) {
                console.error('ERROR!');
            }
        });
    });
  }
}

exports.seeBooks = function(req, res) {
  UserModel.User.findOne({isbn: req.params.isbn}, function (err, user) {
        //res.send(user.unread)
        //res.send(user.read)
        user.save(function (err) {
            if(err) {
                console.error('ERROR!');
            }
        });
    });
}

exports.verifBook = function(req, res) {
  // si le livre est lu -> alert(vous avez lu le livre)
  // sinon -> envoi sur api amazon pour achat
  var isbnbook = req.params.isbn;
  BookModel.Book.findOne({isbn: isbnbook}, function (err, book) {
    // Le livre existe forcément puisque l'utilisateur aura cliquer dessus
      // vérifier son état (read ou pas)  Si il y est pas -> unread
      UserModel.User.findOne({read: book.isbn}, function (err, booketat) {
        if (booketat) {
          // livre déjà lu
          console.log("Livre déjà lu")
        } else {
          // On va transférer le livre dans la liste des lus
          console.log("Livre non lu");

          UserModel.User.findByIdAndUpdate(
            req.params.id,
            {$push: {read: isbnbook}},
            {safe: true, upsert: true},
            function(err, model) {
              console.log("erreur :" +err);
              var i = 0;
              model.unread.forEach(function(element) {
                console.log(element);
                if (element == isbnbook) {
                  console.log("element a la place "+i)
                }else{
                  i++;
                }
              });
            }
           );         
        }
      });
  });
}


exports.scanBook = function(req, res) {
      // ajouter dans la base + unread

      // on récupère les data pour taper sur l'api
      var fullUrl = bookApi+req.params.isbn;

      var request = http.get(fullUrl, function (response) {
        var buffer = ""
        var data

        // On récupère la réponse

        response.on("data", function (chunk) {
          buffer += chunk;
        }); 

        response.on("end", function (err) {
          console.log("\n");
          data = JSON.parse(buffer);
          var titreBook = data.data[0].title;

          var newBook = new BookModel.Book({title: titreBook, isbn:isbnbook});
            newBook.save(function(err){
              if(err){
                console.log(err);
              }else{
                console.log(newBook);
              }
            });
          }); 
      }); 

    }
}