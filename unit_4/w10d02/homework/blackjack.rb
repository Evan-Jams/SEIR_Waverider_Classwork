
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
p dealer

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

  def deal player, num_of_cards
    num_of_cards.times { @cards.shift.generate_card(player) }
  end
end

master_deck = Deck.new

master_deck.deal(player1, 2)
p player1.hand




































# end
