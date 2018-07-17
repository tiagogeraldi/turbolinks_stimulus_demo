class PostsController < ApplicationController
  def index
  end

  def new
    render action: :new, layout: false
  end
end
