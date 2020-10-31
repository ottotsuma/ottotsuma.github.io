require 'rspec'

class SingleVarQ
  def initialize(start)
    @q = start
  end

  def queue
    p @q
  end

  def enqueue(num_to_queue)
    #Checks to see is param is integer
    if num_to_queue.is_a? Integer
        #checks to see if param is < 10
      if num_to_queue < 10
          #checks to see if param is > 0
        if num_to_queue > 0
          # holds @q as a temp value
          temp1 = @q
          # reverses the order of temp1
          temp1 = temp1.to_s.reverse.to_i
          # makes temp1 into an array
          array = temp1.digits
          # pushes the new number into array
          array.push(num_to_queue)
          # makes @q the new number by joining the array
          @q = array.join.to_i
          # puts @q in the log so you can see the result
          puts @q
        else
          raise 'Invalid integer'
        end
      else
        raise 'Invalid integer'
      end
    else
      raise 'Invalid integer'
    end
  end

  def dequeue
    # holds @q as a temp value
    temp1 = @q
    # reverses the order of temp1
    temp1 = temp1.to_s.reverse.to_i
    # makes temp1 into an array
    array = temp1.digits
    # shifts the 1st number
    array.shift
    # makes @q the new number by joining the array
    @q = array.join.to_i
    # puts @q in the log so you can see the result
    puts @q
  end

  def circular_queue
    # bonus
  end
end

test = SingleVarQ.new(123)
puts test.enqueue(0)
puts test.dequeue
