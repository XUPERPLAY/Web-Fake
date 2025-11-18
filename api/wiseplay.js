// api/wiseplay.js

module.exports = (req, res) => {
  // Obtenemos la URL de tu proyecto desplegado en Vercel
  const hostUrl = `https://${req.headers.host}`;
  
  // La URL del menú HTML (index.html)
  const menuUrl = `${hostUrl}/index.html`; 

  // Generamos el contenido M3U/W3U
  const m3uContent = `#EXTM3U
#EXTINF:-1, Menu Principal de Canales
#EXTHTML:${menuUrl}
`;

  // Establecemos los encabezados para que Wiseplay reconozca la lista
  res.writeHead(200, {
    'Content-Type': 'application/vnd.apple.mpegurl',
    'Content-Length': Buffer.byteLength(m3uContent, 'utf8')
  });

  // Enviamos el contenido M3U
  res.end(m3uContent);
};
