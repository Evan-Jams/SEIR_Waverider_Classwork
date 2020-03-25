
###################################################################
# Classes
###################################################################

class Player

  attr_accessor :name, :bank, :hand, :count

  def initialize name, bank = 100, count = 0
    @name = name
    @bank = bank
    @hand = []
    @count = count
  end

end

player1 = Player.new "Evan"
dealer = Player.new "The House", 10000
# p player1
# p dealer

###################################################################
# card and deck classes
###################################################################

class Card

  attr_accessor :face, :suit, :value

  def initialize face, suit, value
    @face = face
    @suit = suit
    @value = value
  end
  def generate_card (player)
    new_card = Card.new face, suit, value
    player.hand << new_card
    player.count = player.count + new_card.value
  end

end


class Deck

  attr_accessor :faces, :suits, :cards

  def initialize
    @faces = [*(2..10), "Jack", "Queen", "King", "Ace"]
    @suits = ["clubs", "spades", "hearts", "diamonds"]
    @cards = []

    @faces.each do |face|
      if face.class == Integer
        value = face
      elsif face == "Ace"
        value = 11
      else
        value = 10
      end
      @suits.each do |suit|
        @cards << Card.new(face, suit, value)
      end
    end
    @cards.shuffle!
  end

  def deal (player, num_of_cards)
    num_of_cards.times { @cards.shift.generate_card(player) }
  end
end

master_deck = Deck.new


# p player1.hand

###################################################################
# Game logic
###################################################################


puts "What is your name player? "
player1.name = gets.chomp
puts "Welcome to the Blackjack table #{player1.name}! You have $#{player1.bank} dollars in your pocket"

# def hit_after_deal
#   master_deck.deal(player1, 1)
#   puts "You drew a ( #{player1.hand[2].face} of #{player1.hand[2].suit} )"
# end


loop do
  puts "Deal (1), or Quit (2)"
  input = gets.chomp
  if input == '1'
    master_deck.deal(player1, 2)
    master_deck.deal(dealer, 2)

    puts "You currently are holding a ( #{player1.hand[0].face} of #{player1.hand[0].suit} ) and a ( #{player1.hand[1].face} of #{player1.hand[1].suit} ). Your count is #{player1.hand[0].value + player1.hand[1].value} "

    puts "The dealer is showing a ( #{dealer.hand[0].face} of #{dealer.hand[0].suit} )"

    loop do
      puts "Draw another (1) or Stay (2)"
      input2 = gets.chomp
      if input2 == '1'
        master_deck.deal(player1, 1)
        puts "You drew a ( #{player1.hand[2].face} of #{player1.hand[2].suit} )"
        break
      elsif input2 == '2'
        puts "You chose to stay"
        puts "The dealer reveals a ( #{dealer.hand[1].face} of #{dealer.hand[1].suit} ). His count is #{dealer.hand[0].value + dealer.hand[1].value}"
      end
    end


  elsif input == '2'
    puts "Sad to see you leave, we really wanted your money"
    break
  else
    puts "Sorry, we didn't understand your response, try that again..."
  end
end


































# end
