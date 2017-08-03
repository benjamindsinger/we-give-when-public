class CausesController < ApplicationController

  def acceptance
    @cause = Cause.find_by_id(params[:id])
  end

end
