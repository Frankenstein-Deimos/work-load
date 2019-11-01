"use strict";

var books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false,
        hasImage: true
    }, {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true,
        hasImage: true
    }
];

// TODO: For each book, create a p element with the book title and author and append it to the page.
books.forEach(function (book) {
    var html = "<p>" + book.title + "</p>";
    $("body").append(html);
});

// TODO: Use a ul and li to display the books.
//  Add an img to each book that links to a URL of the book cover.
//  Change the style of the book depending on whether you have read it or not.

function renderList(books) {
    var html = "";
    books.forEach(function (book) {
        html += "<ul>";
        html += "<li>" + "<img src=\"\" alt=\"\" class=\"hide-list book-image\">" +"</li>";
        html += "<li>" + book.title + "</li>";
        html += "<li>" + book.author + "</li>";
        html += "</ul>";
    });
    return html;
}

$("body").append(renderList(books));

var bookImages = [
    "img/backfly.jpg","img/book.jpg"
];

books.forEach(function (book,index) {
    $("img").attr("src",bookImages[index]);
    if (book.alreadyRead === true) {
        $("ul li:nth-child(2)").addClass("book-read");
    }
});
