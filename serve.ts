export function serve(routes: object, defaultRoute = '/') {
  addEventListener('fetch', (event: FetchEvent) => {
    const { route } = new URL(event.request);
    const page = routes[route];

    if (typeof page === 'function') {
      event.respondWith(page());
    } else {
      event.respondWith(Response.redirect(`https://saud.deno.dev${defaultRoute}`, 302));
    }
  });
};

export function htmlResponse(content: string) {
  return new Response(content, {
    headers: {
    // The "text/html" part implies to the client that the content is HTML
    // and the "charset=UTF-8" part implies to the client that the content
    // is encoded using UTF-8.
    "content-type": "text/html; charset=UTF-8",
    },
  });
}

export function jsonResponse(body: object) {
  // Use stringify function to convert javascript object to JSON string.
  const json = JSON.stringify(body);

  return new Response(json, {
    headers: {
    "content-type": "application/json; charset=UTF-8",
    },
  });
}
