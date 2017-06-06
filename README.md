# PlugReact

This is a small example project to show how a React application could be served via Elixir Plug. The idea is that this could then be incorporated into an Elixir umbrella project to more easily keep all project code in the same repo.

## Why Plug and not Phoenix?

Well you can fairly easily do either. I originally did this as a Phoenix app and swapped out Brunch for Webpack. However, Plug has a few advantages:

1. It's more lightweight. Plug is bare bones although you can add more features as and when you need them. For example, this application uses `Plug.Static` to render static assets.
2. One of the great things about Phoenix is that you don't have to use it until you have to use it. It should, if you keep your code decoupled, be relatively simple to upgrade to a Phoenix application if you find yourself missing some features.

## How to set up inside of an umbrella app

```
cd apps
mix new --sup <app_name>
```

Now follow the commits in here to add what's needed :)
