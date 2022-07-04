class ApisController < ApplicationController
  def message
    greetings = Greeting.all
    index = Random.rand(0..4)
    @greeting = greetings[index]
    respond_to do |format|
      format.html { render 'show' }
      format.json { render json: greeting }
    end
  end
end
