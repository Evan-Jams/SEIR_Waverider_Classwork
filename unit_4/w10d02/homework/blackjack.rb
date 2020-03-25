
###################################################################
# Classes
###################################################################

class Player

  attr_accessor :name, :bank, :hand, :count

  def initialize name, bank, count = 0
    @name = name
    @bank = bank
    @hand = []
    @count = count
  end

  def defeats opponent
    puts "#{self.name} wins this round!"
    self.bank += 10
    puts "#{self.name.capitalize} is now at $#{self.bank}"
    opponent.bank -= 10
    puts "#{opponent.name.capitalize} is now at $#{opponent.bank}"
    self.hand.clear
    self.count = 0
    opponent.hand.clear
    opponent.count = 0
  end

end

player1 = Player.new "Evan", 100
dealer = Player.new "The House", 10000

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

###################################################################
# Game logic
###################################################################

puts "What is your name player? "
player1.name = gets.chomp
puts "Welcome to the Blackjack table #{player1.name}! You have $#{player1.bank} dollars in your pocket"

loop do
  puts "Deal (1), or Quit (2)"
  input = gets.chomp
  if input == '1'
    master_deck.deal(player1, 2)
    master_deck.deal(dealer, 2)

    puts "You currently are holding a ( #{player1.hand[0].face} of #{player1.hand[0].suit} ) and a ( #{player1.hand[1].face} of #{player1.hand[1].suit} ). Your count is #{player1.count} "

    puts "The dealer is showing a ( #{dealer.hand[0].face} of #{dealer.hand[0].suit}, the dealer's count is #{dealer.count})"

    loop do
      puts "Draw another (1) or Stay (2)"
      input2 = gets.chomp

      if input2 == '1'
        master_deck.deal(player1, 1)
        puts "You drew a ( #{player1.hand.last.face} of #{player1.hand.last.suit} )"
        puts "Your count is now #{player1.count}"

        if player1.count == 21
          puts "YOU'VE GOT BLACKJACK!"
          break
        elsif player1.count > 21
          puts "You busted! Sorry, we'll gladly take your $10 dollars"
          dealer.defeats player1
          break
        end

      elsif input2 == '2'
        puts "You chose to stay"
        puts "The dealer reveals a ( #{dealer.hand[1].face} of #{dealer.hand[1].suit} ). His count is #{dealer.count}"

        loop do
          if dealer.count == 21
            puts "Dealer Got Blackjack!"
            dealer.defeats player1
            break

          elsif dealer.count < 17
            master_deck.deal(dealer, 1)
            puts "The dealer reveals a ( #{dealer.hand.last.face} of #{dealer.hand.last.suit} ). His count is #{dealer.count}"

          elsif dealer.count >= 17 && dealer.count < 21
            puts "The dealer's count is #{dealer.count}"

            if dealer.count > player1.count
              puts "You have lost this hand and $10 dollars! Sorry, not sorry"
              dealer.defeats player1
              break

            elsif dealer.count < player1.count
              player1.defeats dealer
              break

            elsif dealer.count > 21
              puts "Dealer has busted! You win this round"
              player1.defeats dealer
              break

            else
              puts "You tied, no money lost or gained"
              break
            end
          end
        end
        break
      end
    end


  elsif input == '2'
    puts "Sad to see you leave, we really wanted your money"
    break
  else
    puts "Sorry, we didn't understand your response, try that again..."
  end
  break
end



# end
