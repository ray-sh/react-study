defmodule PhxReactWeb.Router do
  use PhxReactWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhxReactWeb do
    pipe_through :browser

    get "/", PageController, :admin
  end

  # Other scopes may use custom stacks.
  # scope "/api", PhxReactWeb do
  #   pipe_through :api
  # end
end
