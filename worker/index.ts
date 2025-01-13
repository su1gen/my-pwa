// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// declare let self: ServiceWorkerGlobalScope


self.addEventListener('fetch', event => {

  alert("fetch")

  // const url = new URL(event.request.clone().url);
  // If this is an incoming POST request for the
  // registered "action" URL, respond to it.
  if (event.request.method === 'POST' /*&& url.pathname === '/qtransfer-p/send.php'*/) {
    alert("post")
    // event.respondWith(Response.redirect('/qtransfer-p/send.php'));
    // event.waitUntil((async () => {
    //   alert("1");
    //   const data = await event.request.clone().formData();
    //   alert("2");
    //   alert(data);
    //   const client = await self.clients.get(event.resultingClientId || event.clientId);
    //   alert("3");
    //   const file = data.get("fileToUpload");
    //   alert("file", file);
    //   client.postMessage({ file, action: 'load-file' });
    // })());
    // alert("ok");
    return 0;
  }
});