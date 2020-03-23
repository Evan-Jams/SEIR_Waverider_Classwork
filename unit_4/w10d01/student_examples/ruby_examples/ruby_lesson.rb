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

# javascript
# const each = (array, callback)=>{
# 	for(let i = 0; i < array.length; i++){
# 		callback(array[i]);
# 	}
# }
#
# each([1,2,3,4], (currentNum)=>{
# 	console.log(currentNum);
# });

# def each (arr, &blk)
#   for elem in arr
#     blk.call(elem)
#   end
# end
#
# each 0...5 do |currentNum|
#   puts currentNum
# end

# log = Proc.new do |el|
#   puts el
# end

# or

# log = Proc.new { |el| puts el }
# log.call(5)


# foo = Proc.new do
#   puts "hi"
# end
#
# def bar(callback)
#   callback.call()
# end

# bar(foo)

# # Select - Returns an array containing all elements of an array for which the given block returns a true value.
# p [1,2,3,4,5].select { |i| i > 3 } #returns [4,5]
#

# # Detect - Returns the first element of an array for which the block is true.
# p [1,2,3,4,5].detect { |i| i > 3 } #returns [4]
#

# # Reject - Returns an array for all elements of an array for which the given block returns false.
# p [1,2,3,4,5].reject { |i| i > 3 } #returns [1,2,3]

# # GREP
# #Returns an array of every element in the array for which Pattern === element
# p [1,3,5,10,15].grep (1..5) #returns [1,3,5]
# p [0.3, "three", :three, "thirty-three"].grep /three/ #returns ["three", :three, "thirty-three"]
#
# #You can also add a block to pass each matching element through
 # p [1,3,5,10,15].grep (1..5) {|i| i * 3} #returns [3,9,15]
#




## Sample method

array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 'hi']
array2 = []

# if no params, returns object. if has params, returns array

# p array.sample
# p array.sample(4)
# p array.sample(random: Random.new(1))
# p array.sample(6, random: Random.new(1))

# p array2.sample
# p array2.sample(1)
# p array
# p array2





# end
