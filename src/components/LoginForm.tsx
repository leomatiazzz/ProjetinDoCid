import Image from 'next/image'; // ⬅️ importe a imagem

// dentro do return, acima do <h2>
<Image
  src="/logo.png"
  alt="Logo"
  width={80}
  height={80}
  className="mx-auto mb-4"
/>
