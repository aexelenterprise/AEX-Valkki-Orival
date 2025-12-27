export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Ignore real files (assets, scripts, images)
    if (/\.[a-zA-Z0-9]+$/.test(url.pathname)) {
      url.pathname = "/vovh" + url.pathname;
      return fetch(url.toString(), request);
    }

    // Map pretty URLs into /vovh
    if (url.pathname.endsWith("/")) {
      url.pathname = "/vovh" + url.pathname + "index.html";
    } else {
      url.pathname = "/vovh" + url.pathname + ".html";
    }

    return fetch(url.toString(), request);
  }
};
