defmodule PlugReact.Router do
  use Plug.Router
  use Plug.Builder

  plug Plug.Static,
    at: "/",
    from: :plug_react

  plug :match
  plug :dispatch

  get "/" do
    conn = put_resp_content_type(conn, "text/html")
    send_file(conn, 200, "web/index.html")
  end

  get "/hello" do
    send_resp(conn, 200, "world")
  end

  match _ do
    send_resp(conn, 404, "not found")
  end
end
