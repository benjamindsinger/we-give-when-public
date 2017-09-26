class LegalEntity < ActiveRecord::Base
  belongs_to :cause
  after_save :send_data_to_stripe

  def send_data_to_stripe
    cause.update_legal_entity_for_stripe
  end

end
