defmodule PhxReactWeb.PageController do
  use PhxReactWeb, :controller
  plug :put_layout, false when action in [:admin]
  def index(conn, _params) do
    render(conn, "index.html")
  end

  def admin(conn,_params) do
    render(conn, "admin.html")
  end
end
