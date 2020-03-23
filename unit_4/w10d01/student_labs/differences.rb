# name = gets.chomp
# puts name

# str = "a man, a plan, a canal, frenemies!"
# puts str.reverse

# def swap_em (a, b)
#     a, b = b, a
#     puts "a is now #{a}, and b is now #{b}"
# end
#
# swap_em("evan", "james")

# array = [1, 2, 3, 20, 2]
#
# def multiply(arr)
#     return 0 if arr.empty?
#     arr.inject(:*)
# end

# puts multiply(array)


# def fizzbuzz?(number)
#   return 'Fizzbuzz' if number % 15 == 0
#   return 'Buzz' if number % 5 == 0
#   return 'Fizz' if number % 3 == 0
#   number
# end

# (1..100).each { |i| p fizzbuzz?(i) }



def fib(n)
  return 1 if n <= 2
  fib_index = 3
  a, b = 1, 1

  while fib_index <= n
    c = a + b
    a = b
    b = c
    fib_index += 1
  end
  c
end

# print "Give me an index and I will return the fibonacci number: "
# index = gets.chomp
# p fib(index.to_i)


array = [0, 1, 2, 3, 4, 5, 3, 2, 5, 3, 3, 5, 6, 6, 3, 5]
# p array.include? (7)

# def palindrome(string)
#   string.upcase!
#   if string == string.reverse
#     p true
#   else
#     p false
#   end
# end
#
# palindrome("racecar")

def dupes(arr)
  if arr.uniq == arr
    p "array doesnt have dupes"
  else
    p "array has dupes!!"
  end
end

dupes(array)




# end
