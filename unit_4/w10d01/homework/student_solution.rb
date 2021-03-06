## Hello world
# puts "Hello World"

adjective = "Big Bad"
# puts "Hello #{adjective} World"

##############################################################################
# Nums Array
#########################################################################


nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]


# puts nums.uniq
# puts nums.push(5)
# puts nums.pop
# puts nums.shift
# puts nums.unshift
# puts nums.length

# puts nums.include? 8  #false

# p nums.find_all { |i| i > 10 }

# p nums.all? { |num| num > 10 }

# p nums.any? { |num| num != 0 && num % 8 == 0 }

# p nums.count { |num| num > 4 }

# nums.each_with_index { |num, index| puts num * index }

# p nums.find { |num| num % 35 == 0 && num != 0 }

# p nums.find_index { |num| num % 35 == 0 && num != 0 }

# p nums.first(3)

# p nums.last(5)

# p nums.group_by { |num| num != 0 && num % 3 == 0 }

# p nums.minmax

# p nums.reject { |num| num % 3 != 0 }

# p nums.select { |num| num != 0 && num % 5 == 0 }


#########################################################################
# Colors Array
#########################################################################


colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# p colors.sample

# p colors.reverse

# p colors.map { |elem| elem.capitalize }

#########################################################################
# Methods
#########################################################################

def find_area height, width
  height * width
end

# p find_area 5, 10

nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

def multiply_each_by_five arr
  arr.each { |el| p el * 5 }
end

# multiply_each_by_five nums


#########################################################################
# Hashes
#########################################################################


book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

def print_price hash
  p hash[:price]
end

# print_price book
# print_price lamp
# print_price table

def print_item_sums hash, hash2
  p hash[:price] + hash2[:price]
end

# print_item_sums book, lamp
# print_item_sums lamp, table
# print_item_sums table, book

#########################################################################
# Euler Problem 1
#########################################################################

# total = 0
#
# 1000.times do |i|
#   if i % 3 == 0 || i % 5 == 0
#     total += i
#   end
# end
#
# puts total

#########################################################################
# Primes
#########################################################################
# require 'prime'
#
# Prime.each(100) do |prime|
#   p prime
# end

def get_primes(num)
  if num % 2 == 0 && num != 2 || num == 1
    false
  elsif num % 3 == 0 && num != 3
    false
  elsif num % 5 == 0 && num != 5
    false
  elsif num % 7 == 0 && num != 7
    false
  elsif num % 11 == 0 && num != 11
    false
  elsif Math.sqrt(num) == Integer
    false
  else
    true
  end
end


# 100.times { |i| p get_primes(i) && i}




# end
