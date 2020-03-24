# p "Hello World".upcase #HELLO WORLD
# p "Hello World".class # String
# class String
#   def is_palindrome?
#     self.upcase.reverse == self.upcase
#   end
# end
#
# p "Evan".is_palindrome?
# p "radar".is_palindrome?


class World

  attr_reader :people
  attr_accessor :name, :shape

  def initialize name, shape = "oblate spheroid"
    @name = name
    @shape = shape
    @people = []
  end

  def populate name, age
    @people << { name: name, age: age }
  end

end

world1 = World.new "Evan's World"
world2 = World.new "Tatooine", "sphere"
world3 = World.new "Nothing but Shrimp", "bowl"
world4 = World.new "San Junipero", "cylinder"

# p world1.shape
# p world2.shape
# p world3.shape
# p world4.shape
#
# p world1.name
# p world1.people
# world1.populate
# world1.populate
# world1.populate
#
# p world1.people
#
# p world1

planets = %w( Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune Pluto )

milky_way = []

planets.each do |planet|
  world = World.new planet
  milky_way << world
end

# p milky_way


class Mathy

  def self.evans_method (a, b, c)
    (a * (a + b + c)) + (b * (a + b + c)) + (c * (a + b + c))
  end

  def self.formula_1 (a, b, c)
     a + b * c
   end
  def self.subtract_and_divide (a , b, c)
    (a - c ) / b
  end

  def self.powers_of_3 a
     `a * a * a / 3`
  end

end


# p Mathy.evans_method 1, 2, 3

# dictionary = ["potato", "honey", "tea", "rice", "quinoa"]
#
# word = dictionary.sample
#
# puts "Guess which word I secretly chose!"
# puts "The word has #{word.length} letters."
#
#
# loop do
#   input = gets.chomp
#
#   if input == word
#   	puts "Yep. You got it. The word was #{word}."
#     break
#   else
#   	puts "WRONG"
#   	puts "(t)ry again or (q)uit?"
#   	again = gets.chomp.downcase
#   	break if again == "q"
#   end
#
# end


class Word
	def initialize word
    @word = word
		letters = word.split('')
		@letters_display = letters.map do |l|
			{ letter: l, hidden: true }
		end
	end
  def word
   @word
end
	def render
		@letters_display.each do |l|
			if l[:hidden]
				print " _ "
			else
				print l.letter
			end
		end
	end
end

dictionary = ["potato", "honey", "tea", "rice", "quinoa"]

word = dictionary.sample

puts "Hangman! Guess this word"
puts " The length of the word is #{word.length}"

current_word = Word.new word

loop do
	current_word.render
	input = gets.chomp
	if input == current_word.word
		puts "Yep. You got it. The word was #{current_word.word}."
		break
	else
		puts "WRONG"
		puts "(t)ry again or (q)uit?"
		again = gets.chomp.downcase
		break if again == "q"
	end
end




# end
