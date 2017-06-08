class CausesController < ApplicationController

  def sign_up
    @cause = Cause.find_by_id(params[:id])
  end

end
