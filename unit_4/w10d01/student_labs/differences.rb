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

array = [1, 2, 3, 20, 2]

def multiply(arr)
    return 0 if arr.empty?
    arr.inject(:*)
end

# puts multiply(array)


def fizz_buzz(*nums)
    nums.each { |num|
    if num % 3 == 0
        puts "fizz"
    elsif num % 5 == 0
        puts "buzz"
    elsif num % 3 && num % 5 == 0
        puts "fizzbuzz"
    else
        puts num
    end
    }
end

puts fizz_buzz(1, 2, 3, 4, 5, 6, 7, 8)
