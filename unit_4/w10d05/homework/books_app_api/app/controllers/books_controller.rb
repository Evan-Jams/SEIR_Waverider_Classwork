class BooksController < ApplicationController

  def index
    render json: {status: 200, books: Book.all}
  end

  def show
    found_book = Book.find(params[:id])
    render json: { status: 200, book: found_book}
  end

  def update
    found_book = Book.find(params[:id])
    found_book.update(book_params)
    render json: {message: "You updated this book", book: found_book}
  end

  def destroy
    found_book = Book.destroy(params[:id])
    render json: {status: 204, message: "This is the book you deleted", book: found_book}
  end

  private

  def book_params
    params.required(:book).permit(:title, :author, :genre)
  end

end
