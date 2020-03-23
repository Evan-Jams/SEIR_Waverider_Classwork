=begin
Numbers(floats and integers)
=end

# puts 1.class
# puts 1.0.class
# puts 1.0/2

# Strings
# puts 'foo'.length
# puts "foo".include?("o")

# str = "foo"
# str.upcase!
# puts str
#
# puts "I am a ruby #{str}!"


# Symbols
# puts (:foo.class)

# Booleans and nil
# puts 1 == 1
# puts true.class


# Arrays
=begin
arr = [:Gustave, :Sandrine, :Delfine, :Maurice]
puts arr.length
puts arr.last
puts arr[0]
puts arr[2]
puts arr[100]
puts arr.include?:Sandrine
arr.push(:Clementine)
puts arr
puts arr[-1]
puts arr[-2]
new_arr = [1, 2, 3] + [4, 5]
puts new_arr
=end

# Ranges
# new_arr = (1..10).to_a
# print new_arr


# Hashes

# ben = {
#     "name" => "Ben",
#     "age" => 25
# }
#
# puts ben['name']
# puts ben['age']
# ben['age'] = 26
# puts ben['age']
# age = ben['age']
# puts "ben is #{age} old"

# alfonso = {
#     :name => 'Alfonso',
#     :age => 24
# }
#
# puts alfonso[:name]
#
# # shorthand ( name: ) instead of ( :name => )
# evan = {
#     name: 'Evan',
#     age: 41
# }
#
# puts evan[:name]


# 3.times { |i| puts i }

# arr = [10, 20, 30]
# arr.each { |num| puts num ** 10 }
#
# puts arr.map { |num| num / 10 }


# arr_map = arr.map do |num|
#     "#{num / 10} is great!"
# end
#
# puts arr_map
#
# def add(a, b)
#     puts a + b
# end
#
# add(1, 2)

# def add(*nums)
#     return 0 if nums.empty?
#     nums.reduce { |sum, n| sum + n }
# end
#
# puts add 3, 5, 9, 26

# def say_hi(name = 'World')
#     puts "Hello, #{name}!"
# end
#
# say_hi

# def number_message(num)
#   if num < 10
#     puts 'what a small number'
#   elsif num > 10
#     puts 'That is a big number!'
#   else
#     puts 'That number is just right!'
#   end
# end

# number_message 3

# age = 136

# puts "you are old!" if age >= 100
# puts "you are old!" unless age < 100

# num = 24
# num.even? ? "#{num} is even!" :"#{num} is odd!"


# a = 10
#
# while a.positive?
#     puts a
#     a -= 1
# end










# end
