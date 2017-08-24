module Mocks

  class FakeStripeChargeApiNoErrors
    def create(arg1, arg2); true end
  end

  class FakeStripeChargeApiTwoErrors
    def initialize
      @charges = 0
    end

    def create(arg1, arg2)
      @charges += 1

      if @charges < 3
        raise 'Bad card! Bad!'
      else
        true
      end
    end
  end

  class FakeStripeToken
    def id; end
  end

  class FakeLog
    def write(str); end
  end

end
