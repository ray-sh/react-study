defmodule PhxReactWeb.PageView do
  use PhxReactWeb, :view
  def render("admin.html", _assigns) do
    Path.join(:code.priv_dir(:phx_react), "static/build/index.html")
    |> File.read!()
    |> raw()
  end
end
