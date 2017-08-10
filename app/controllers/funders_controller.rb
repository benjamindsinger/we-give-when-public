class FundersController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def create
    funder = Funder.new(funder_data)

    if funder.save
      render json: :ok
    else
      render json: :fail
    end
  end

  private

  def stripe_customer
    customer = Stripe::Customer.create(source: stripe_token_id)

    first_name = funder_details_to_underscore[:first_name]
    last_name = funder_details_to_underscore[:last_name]
    customer.metadata['first_name'] = first_name
    customer.metadata['last_name'] = last_name
    customer.save

    return customer
  end

  def funder_data
    funder_details_to_underscore.merge(stripe_attributes)
                                .merge(crowd_fund_memberships_attributes)
  end

  def stripe_attributes
    { stripe_customer_id: stripe_customer.id }
  end

  def crowd_fund_memberships_attributes
    {
      crowd_fund_memberships_attributes: [
        crowd_fund_membership_details.transform_keys { |key| key.underscore }
                                     .merge({ status: 'active' })
      ]
    }
  end

  def funder_details_to_underscore
    @details ||= funder_details.transform_keys { |key| key.underscore }
  end

  def crowd_fund_membership_details
    params.require(:crowdFundMembershipDetails).permit(
      :amountPerTimeInCents,
      :monthlyMaximumInCents,
      :coverFees,
      :crowdFundId
    )
  end

  def funder_details
    params.require(:funderDetails).permit(
      :firstName,
      :lastName,
      :occupation,
      :employer,
      :email,
      :phone,
      :address,
      :city,
      :usState,
      :zip
    )
  end

  def stripe_token_id
    params.require(:stripeToken).require(:id)
  end

end
