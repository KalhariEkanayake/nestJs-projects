import { Injectable } from '@nestjs/common';
import { Book, books } from './bookDB';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return books;
  }

  findById(bookId : number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }

  create(book: Partial<Book>): Book {
    const newID = books[books.length-1].id + 1

    const newBook: Book = {
      id: newID,
      author: book.author ?? "",
      title: book.title ?? "",
      publicationYear: book.publicationYear ?? 0,
    }
    books.push(newBook);
    return newBook;
  }

  update(bookID: number, updatedBookFields: Partial<Book>): Book | undefined {
    const currentBook = books.find((book) => book.id === bookID);
    const updatedBook = {...updatedBookFields, ...currentBook };
    books.map((book) => {
      if (book.id === bookID) {
        return updatedBook;
      } else {
        return book;
      }
    });

    return updatedBook;
  }
}
