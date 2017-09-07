require "administrate/field/base"

class PostgresArrayField < Administrate::Field::Base
  def to_s
    data.join(" // ")
  end
end
