class HoopersController < ApplicationController
  def index
    @hoopers = Hooper.all
  end

  def new
    @hooper = Hooper.new
  end

  def create
    @hooper = Hooper.new(hooper_params)
    @hooper.save

    redirect_to hooper_path(@hooper)
  end

  def show
    @hooper = Hooper.find(params[:id])
  end

  def edit
    @hooper = Hooper.find(params[:id])
  end

  def update
    @hooper = Hooper.find(params[:id])
    @hooper.update(hooper_params)

    redirect_to hooper_path(@hooper)
  end

  def destroy
  end

  private

  def hooper_params
    params.require(:hooper).permit(:name, :position, :team, :career_ppg, :reg_mvps, :finals_mvps, :finals_wins)
  end
end
