const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const raw = fs.readFileSync('tmp/graduates-details.json','utf8').replace(/^\uFEFF/, '');
const details = JSON.parse(raw);
const outDir = path.join(process.cwd(),'public','graduates-avif');
fs.mkdirSync(outDir,{recursive:true});
const base='https://maktab01-dev-files.s3.eu-north-1.amazonaws.com';
(async()=>{
 const files = new Set();
 for(const g of details){ if(g.photo) files.add(g.photo); for(const b of g.blocks||[]){ if(b.type==='image_group'){ for(const img of b.images||[]) files.add(img); } } }
 for(const file of files){ const out=path.join(outDir,file.replace(/\.[^.]+$/,'.avif')); if(fs.existsSync(out)) { console.log('skip '+file); continue; } const res = await fetch(`${base}/${file}`); if(!res.ok) throw new Error(`Failed ${file} ${res.status}`); const buf = Buffer.from(await res.arrayBuffer()); await sharp(buf).rotate().avif({quality:68,effort:7}).toFile(out); console.log('done '+file); }
 console.log('count', files.size);
})().catch(err=>{console.error(err); process.exit(1);});
