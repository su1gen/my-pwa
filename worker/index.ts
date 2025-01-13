// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// declare let self: ServiceWorkerGlobalScope


self.addEventListener('fetch', event => {

  if (event.request.clone().method === 'POST') {
    const url = new URL(event.request.clone().url);
    console.log('URL');
    console.log(url);
    if (event.request.clone().url.endsWith('/api/share-target') || url.pathname == '/api/share-target') {
      event.respondWith(Response.redirect('./'));

      event.waitUntil(async function () {
        const data = await event.request.formData();
        console.log(data);
        const client = await self.clients.get(event.resultingClientId);
        console.log(client);
        const file = data.get('file');
        client.postMessage({ file });
      }());
    } else {
      // do other non related stuff
    }
  }
});

navigator.serviceWorker.addEventListener('message', event => {

  const file = event.data.file;
  const img  = new Image();
  const url = URL.createObjectURL(file);
  img.src = url;
  document.body.append(img);
  document.body.append(url);
  document.body.append('<h1>test</h1>');
});