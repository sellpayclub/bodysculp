const fs = require('fs');

const inleadLogo = 'https://media.inlead.cloud/uploads/23849/2025-10-24/md-X6n0B-logo-sculpiflex.webp';
const inleadKit = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-G19gW-kit-sculpiflex-revelado.webp';
const inleadDepo1 = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-P00vB-depoimento-lilian.webp';
const inleadDepo2 = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-pWjXQ-depoimento-carolina.webp';
const inleadDepo3 = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-wOQjT-depoimento-camila.webp';
const inleadPasso = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-sL77T-passo-a-passo.webp';
const inleadScanner = 'https://media.inlead.cloud/uploads/23849/2025-10-24/lg-Tf6h0-gordura-teimosa.webp';

let content = fs.readFileSync('src/components/sculpiflex/VSL.tsx', 'utf8');

// Replace Logos
content = content.replace(/https:\/\/assets\.prd\.heyflow\.com\/flows\/SlfhJ5253BEALI1nMsRP\/www\/assets\/c3ff5cf9-4a39-4403-ae94-82ddd0ac00bc\/mobile\.webp/g, inleadLogo);

// Replace Kit / Products
content = content.replace(/https:\/\/xyzgvsuttwrvbyyxdppq\.supabase\.co\/storage\/v1\/object\/public\/imagens\/produto\.png/g, inleadKit);
content = content.replace(/https:\/\/sculpiflex\.com\/wp-content\/uploads\/2023\/09\/sculpiflex-reviews-compilation\.jpg\.webp/g, inleadPasso);
content = content.replace(/https:\/\/xyzgvsuttwrvbyyxdppq\.supabase\.co\/storage\/v1\/object\/public\/imagens\/creme%202\.png/g, inleadKit);

// Replace Depoimentos and specific ones
content = content.replace(/https:\/\/sculpiflex\.com\/wp-content\/uploads\/2025\/09\/belly-fat-before\.jpg/g, inleadDepo1);
content = content.replace(/https:\/\/sculpiflex\.com\/wp-content\/uploads\/2025\/09\/belly-after\.jpg/g, inleadDepo2);
content = content.replace(/https:\/\/sculpiflex\.com\/wp-content\/uploads\/2025\/03\/Sculpiflex-Device-PNG-300x300\.webp/g, inleadLogo);
content = content.replace(/https:\/\/sculpiflex\.com\/wp-content\/uploads\/2025\/03\/Senza-titolo-1\.png\.webp/g, inleadScanner);
content = content.replace(/https:\/\/sculpiflex\.com\/wp-content\/uploads\/2025\/03\/creams-and-oils-alternative\.png\.webp/g, inleadScanner);
content = content.replace(/https:\/\/sculpiflex\.com\/wp-content\/uploads\/2025\/03\/derms-sculpiflex\.jpg\.webp/g, inleadScanner);

// Replace the result grid images
content = content.replace(/https:\/\/assets\.prd\.heyflow\.com\/users\/bZMWsWATM8a5TORnrvJX8kWlvUJ2\/[a-zA-Z0-9-]+\/original\.jpeg/g, inleadDepo3);
content = content.replace(/https:\/\/assets\.prd\.heyflow\.com\/flows\/HdD9HJWAhxnD3fynDZsH\/www\/assets\/[a-zA-Z0-9-]+\/(mobile|original)\.(avif|webp|jpeg)/g, inleadDepo1);

// Replace client photos array
const clientPhotosReplacement = `  const clientPhotos = [\n    "${inleadDepo1}",\n    "${inleadDepo2}",\n    "${inleadDepo3}",\n    "${inleadDepo1}",\n    "${inleadDepo2}"\n  ];`;
content = content.replace(/const clientPhotos \=[^\]]+\];/s, clientPhotosReplacement);

// Replace product photos array
const productPhotosReplacement = `  const productPhotos = [\n    "${inleadKit}",\n    "${inleadKit}",\n    "${inleadKit}"\n  ];`;
content = content.replace(/const productPhotos \=[^\]]+\];/s, productPhotosReplacement);

// Just to be sure no heyflow/supabase/sculpiflex links are left behind
content = content.replace(/https:\/\/assets\.prd\.heyflow\.com\/users\/bZMWsWATM8a5TORnrvJX8kWlvUJ2\/[a-zA-Z0-9-]+\/original\.png/g, inleadDepo1);

fs.writeFileSync('src/components/sculpiflex/VSL.tsx', content);
console.log('Patched VSL.tsx');
