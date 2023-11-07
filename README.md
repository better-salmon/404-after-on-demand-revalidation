## When using on-demand revalidation with `dynamicParams=false` and `generateStaticParams` in the route, the route starts to serve 404 page

### Steps to reproduce

1. Build and start the app with `npm run build && npm run start`.
2. Open http://localhost:3000/should-work in the browser.
3. Click either of the Revalidation buttons.

### Expected behavior

The page is revalidated, and the new data is shown.

### Actual behavior

404 page is shown after reloading.
