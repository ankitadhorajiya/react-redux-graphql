class Api::V1::StoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    store = Store.create(store_params)
    render json: store.to_json
  end

  private

  def store_params
    params.require(:store).permit(:owner_name, :store_name, :address1, :address2, :city, :state, :pincode)
  end
end