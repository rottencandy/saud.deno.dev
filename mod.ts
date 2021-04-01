import { serve, htmlResponse, jsonResponse } from './serve';

const homePage = () => htmlResponse(`<html>
  <meta charset=utf-8/>
  <title>UwU</title>
<style>
body {
  background: #eee;
}
main {
  font: 500 5rem Trebuchet, sans-serif;
  margin: auto;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
  <body>
    <main>UwU</main>
  </body>
</html>`);

serve({
  '/': homePage,
  '/json': () => jsonResponse({messsage: 'Hello deno'}),
}, '/');
