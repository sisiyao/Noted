class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user, :calculate_height

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def calculate_height (note, text_type)
    text_type == "body" ? text = note.body : text = note.title
    height = 0
    split_text = text.split("\n")
    split_text.each do |text|
      height += (text.length / 40.0).ceil if text.length > 0
      height += 1 if text.length == 0
    end
    height
  end
end
