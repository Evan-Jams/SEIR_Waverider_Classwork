class GiftsController < ApplicationController

  def index
    render json: {status: 200, gifts: Gift.all}
  end

  def show
    found_gift = Gift.find(params[:id])
    render json: { status: 200, gift: found_gift}
  end

  def create
    gift = Gift.new(gift_params)
    if gift.save
      render json: {status: 201, gift: gift}
    else
      render json: {status: 422, gift: gift}
    end
  end

  def update
    found_gift = Gift.find(params[:id])
    found_gift.update(gift_params)
    render json: {message: "You updated this gift", gift: found_gift}
  end

  def destroy
    found_gift = Gift.destroy(params[:id])
    render json: {status: 204, message: "This is the gift you deleted", gift: found_gift}
  end

  def gift_params
    params.required(:gift).permit(
      :name,
      :value,
      :receiver,
      :occasion
    )
  end


end
