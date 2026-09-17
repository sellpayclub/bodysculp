const fs = require('fs');

const inleadLogo = 'https://media.inlead.cloud/uploads/23849/2025-10-24/md-X6n0B-logo-sculpiflex.webp';
const inleadKit = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-G19gW-kit-sculpiflex-revelado.webp';
const inleadAlto = 'https://media.inlead.cloud/uploads/23849/2025-10-24/md-POnfX-estomago-alto.webp';
const inleadPochete = 'https://media.inlead.cloud/uploads/23849/2025-10-24/md-L7nSg-barriga-pochete.webp';
const inleadAvental = 'https://media.inlead.cloud/uploads/23849/2025-10-24/md-s5YyO-barriga-avental.webp';
const inleadInchada = 'https://media.inlead.cloud/uploads/23849/2025-10-24/md-WlTst-barriga-inchada.webp';
const inleadDepoLilian = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-P00vB-depoimento-lilian.webp';
const inleadDepoCarolina = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-pWjXQ-depoimento-carolina.webp';
const inleadDepoCamila = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-wOQjT-depoimento-camila.webp';
const inleadScanner = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-Tf6h0-gordura-teimosa.webp';
const inleadPasso = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-sL77T-passo-a-passo.webp';

let html = fs.readFileSync('sculpiflex.html', 'utf8');

html = html.replace(new RegExp(inleadLogo, 'g'), 'https://assets.prd.heyflow.com/flows/SlfhJ5253BEALI1nMsRP/www/assets/c3ff5cf9-4a39-4403-ae94-82ddd0ac00bc/mobile.webp');
html = html.replace(new RegExp(inleadKit, 'g'), 'https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/produto.png');
html = html.replace(new RegExp(inleadAlto, 'g'), 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/fc4add58-4e96-45f0-85b3-470027d68d25/large-icon.webp');
html = html.replace(new RegExp(inleadPochete, 'g'), 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/41c3f3d0-4129-41b7-8e46-03e65430b4d8/large-icon.webp');
html = html.replace(new RegExp(inleadAvental, 'g'), 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/fb19a16d-f2de-4902-bb91-4401f456cf0f/large-icon.webp');
html = html.replace(new RegExp(inleadInchada, 'g'), 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/6d2fcb95-7a32-45ac-b7e7-06c124975bac/large-icon.webp');
html = html.replace(new RegExp(inleadDepoLilian, 'g'), 'https://sculpiflex.com/wp-content/uploads/2025/09/review-2.jpg.webp');
html = html.replace(new RegExp(inleadDepoCarolina, 'g'), 'https://sculpiflex.com/wp-content/uploads/2025/09/BEFORE-AFTER-03-1-768x786.jpg.webp');
html = html.replace(new RegExp(inleadDepoCamila, 'g'), 'https://sculpiflex.com/wp-content/uploads/2025/09/bfa03.jpg.webp');
html = html.replace(new RegExp(inleadScanner, 'g'), 'https://sculpiflex.com/wp-content/uploads/2023/09/9.BA-Cellulite-Sculpiflex.jpg.webp');
html = html.replace(new RegExp(inleadPasso, 'g'), 'https://sculpiflex.com/wp-content/uploads/2023/09/sculpiflex-reviews-compilation.jpg.webp');

fs.writeFileSync('sculpiflex.html', html);
