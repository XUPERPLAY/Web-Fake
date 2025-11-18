// api/wiseplay.js
// Esta función SÓLO envía un encabezado de redirección.

module.exports = (req, res) => {
  // 1. URL de destino: el archivo M3U estático que acabamos de crear.
  // Es mejor usar el dominio completo y fijo para evitar errores de headers.
  const staticM3uUrl = 'https://web-fake.vercel.app/menu.m3u'; 

  // 2. Enviar el encabezado de Redirección 302
  // Esto le dice a Wiseplay: "No tengo el contenido, está en esta otra URL."
  res.writeHead(302, {
    'Location': staticM3uUrl
  });

  // 3. Termina la respuesta
  res.end();
};
