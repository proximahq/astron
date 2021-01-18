# Astron - Proxima scripts & tracking utilities

## Intro
Proxima is an Open Source analytics project with strong focus on privacy,

## Tracking scripts

We provide a tracking script that you can embed to your website as:

```
  <script type="module" async defer src="https://example.com/latest.modern.js" data-site="xxx-xxx-xxx"></script>  
  <script nomodule async defer src="https://example.com/latest.js" data-site="xxx-xxx-xxx"></script>
  <noscript>
    <img src="https://example.com/noscript.gif" alt="" />
  </noscript>
```

You can embed this snippet to the closing `</body>` tag of your website or application. Astron handles the rest for you.
It works along with SPAs, and literally any tech stack.

## Script options

- `data-site`: the Proxima short project code.
- `data-autotrack-off`: disables autotracking, usefull when you want to manually track views and events.

## Tracker functions
The Proxima tracker exposes some methods that you can use manually for granulated control:

`proxima.track(url, [referrer])`
Sends a pageview towards the collecting service.

`proxima.trackEvent(eventType, [value], [url])`
Tracks an event with a custom event type, Proxima has some predefined event types used for detailed analytics.
