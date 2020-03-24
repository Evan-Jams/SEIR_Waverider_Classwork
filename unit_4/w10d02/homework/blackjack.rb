
###################################################################
# Classes
###################################################################

class Player

  attr_reader :name, :bank, :hand

  def initialize name, bank = 100
    @name = name
    @bank = bank
    @hand = []
  end

end

player1 = Player.new "Evan"

p player1

class The_House

  attr_reader :name, :bank, :hand

  def initialize name, bank = 10000
    @name = name
    @bank = bank
    @hand = []
  end

end

dealer = The_House.new "Dirty Dan"

p dealer

###################################################################
# Game set-up
###################################################################

# Cards deck
cards = []







































# end
