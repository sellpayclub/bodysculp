const fs = require('fs');

const inleadLogo = 'https://media.inlead.cloud/uploads/23849/2025-10-24/md-X6n0B-logo-sculpiflex.webp';
const heyflowLogo = 'https://assets.prd.heyflow.com/flows/SlfhJ5253BEALI1nMsRP/www/assets/c3ff5cf9-4a39-4403-ae94-82ddd0ac00bc/mobile.webp';

const inleadKit = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-G19gW-kit-sculpiflex-revelado.webp';
const supabaseKit = 'https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/produto.png';

const inleadDepo1 = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-P00vB-depoimento-lilian.webp';
const inleadDepo2 = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-pWjXQ-depoimento-carolina.webp';
const inleadDepo3 = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-wOQjT-depoimento-camila.webp';

const inleadPasso = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-sL77T-passo-a-passo.webp';
const inleadScanner = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-Tf6h0-gordura-teimosa.webp';

let content = fs.readFileSync('src/components/sculpiflex/VSL.tsx', 'utf8');

// I'll just write the arrays directly instead of complex regexes
const clientPhotosOriginal = `  const clientPhotos = [
    "https://sculpiflex.com/wp-content/uploads/2025/03/008.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/002-1.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/009.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/004-1-441x441.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2023/09/9.BA-Cellulite-1024x1024.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/12/hf_20260227_152448_c747b04f-9f8e-4b7f-a142-1873a2e90603-e1772905899621-768x769.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/09/BEFORE-AFTER-03-1-768x786.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2023/09/9.BA-Cellulite-Sculpiflex.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/09/Before-and-after-loose-skin-5-768x768.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/09/review-2.jpg.webp"
  ];`;
  
const productPhotosOriginal = `  const productPhotos = [
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/creme%202.png",
    "https://sculpiflex.com/wp-content/uploads/2025/03/64646ju.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/5967558927388363376-1yt.webp"
  ];`;

content = content.replace(/const clientPhotos \=[^\]]+\];/s, clientPhotosOriginal);
content = content.replace(/const productPhotos \=[^\]]+\];/s, productPhotosOriginal);

content = content.replace(new RegExp(inleadLogo, 'g'), heyflowLogo);
content = content.replace(new RegExp(inleadKit, 'g'), supabaseKit);
content = content.replace(new RegExp(inleadDepo1, 'g'), 'https://sculpiflex.com/wp-content/uploads/2025/09/belly-fat-before.jpg');
content = content.replace(new RegExp(inleadDepo2, 'g'), 'https://sculpiflex.com/wp-content/uploads/2025/09/belly-after.jpg');
content = content.replace(new RegExp(inleadPasso, 'g'), 'https://sculpiflex.com/wp-content/uploads/2023/09/sculpiflex-reviews-compilation.jpg.webp');
content = content.replace(new RegExp(inleadDepo3, 'g'), 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/393cbe45-5966-48e3-b95c-3ece868ae338/original.jpeg'); // Fallback to one of the original heyflow images for the Before/after map
content = content.replace(new RegExp(inleadScanner, 'g'), 'https://sculpiflex.com/wp-content/uploads/2025/03/Sculpiflex-Device-PNG-300x300.webp'); // generic fallback

// specific replacements based on the original values from grep:
// In the map inside <div className="space-y-8">:
content = content.replace(/'https:\/\/assets\.prd\.heyflow\.com\/users\/bZMWsWATM8a5TORnrvJX8kWlvUJ2\/393cbe45-5966-48e3-b95c-3ece868ae338\/original\.jpeg'/g, "'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/393cbe45-5966-48e3-b95c-3ece868ae338/original.jpeg'");
// Actually, it's easier to just recreate the original block for "Resultados esperados"
const resultadosOriginal = `             {[
               { title: 'Celulites', imgAntes: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/393cbe45-5966-48e3-b95c-3ece868ae338/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/af7b91fd-1143-4682-a9c2-ae7e6764b562/original.jpeg' },
               { title: 'Bumbum', imgAntes: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/a8259ff3-ff0a-4e20-a794-62991e1d2c36/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/8c45d0f4-57a6-4605-a146-c0649c688d3c/original.jpeg' },
               { title: 'Corpo Completo', imgAntes: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/d98c2cfc-f34d-4aff-a642-7e38908b0021/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/7b2dbac7-fca5-4046-b90b-491055ba612a/original.jpeg' },
               ...(isFlaccid ? [
                 { title: 'Barriga Flácida', imgAntes: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/87740ec6-00a6-489b-8af1-ff2eba98720c/mobile.avif', imgDepois: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/d26094c3-7b13-456f-9c2f-1f62764ad757/mobile.webp' },
                 { title: 'Pele Mais Firme', imgAntes: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/d26094c3-7b13-456f-9c2f-1f62764ad757/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/fe3049c6-4adf-4b85-a244-fe5ee8b59fbb/mobile.webp' }
               ] : [])
             ].map`;

content = content.replace(/\{\[\s+\{\s*title:\s*'Celulites'[^\}]+\},\s+\{\s*title:\s*'Bumbum'[^\}]+\},\s+\{\s*title:\s*'Corpo Completo'[^\}]+\},\s+\.\.\.\(isFlaccid\s*\?\s*\[\s+\{\s*title:\s*'Barriga Flácida'[^\}]+\},\s+\{\s*title:\s*'Pele Mais Firme'[^\}]+\}\s+\]\s*:\s*\[\]\)\s+\]\.map/s, resultadosOriginal);

fs.writeFileSync('src/components/sculpiflex/VSL.tsx', content);
