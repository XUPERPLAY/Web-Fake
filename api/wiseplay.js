// Asegúrate de que esta parte de tu api/wiseplay.js sea EXACTA:
  res.writeHead(200, {
    // ESTE Content-Type es el más compatible para listas M3U/M3U8
    'Content-Type': 'application/x-mpegURL', 
    'Content-Length': Buffer.byteLength(m3uContent, 'utf8'),
    // Esto es opcional, pero ayuda:
    'Content-Disposition': 'inline; filename="playlist.m3u"' 
  });
