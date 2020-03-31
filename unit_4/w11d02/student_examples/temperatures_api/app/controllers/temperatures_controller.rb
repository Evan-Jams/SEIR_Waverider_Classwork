class TemperaturesController < ApplicationController

  # GET /temperatures
  def index
    @temperatures = Temperature.all

    render json: @temperatures
  end

  # GET /temperatures/1
  def show
    render json: @temperature
  end

  # POST /temperatures
  def create
    @temperature = Temperature.new(temperature_params)
    @temperature.location_id = params[:location_id]
    
    if @temperature.save
      render json: @temperature, status: :created
    else
      render json: @temperature.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /temperatures/1
  def update
    if @temperature.update(temperature_params)
      render json: @temperature
    else
      render json: @temperature.errors, status: :unprocessable_entity
    end
  end

  # DELETE /temperatures/1
  def destroy
    @temperature.destroy
  end

  private
    # Only allow a trusted parameter "white list" through.
    def temperature_params
      params.require(:temperature).permit(:average_high_f, :average_low_f, :month)
    end
end
