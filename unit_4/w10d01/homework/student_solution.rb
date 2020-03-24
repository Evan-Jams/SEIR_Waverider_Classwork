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


# end
