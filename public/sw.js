if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts("fallback-6C2vPjgkPhalamk47wxni.js","worker-6C2vPjgkPhalamk47wxni.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6C2vPjgkPhalamk47wxni/_buildManifest.js",revision:"4078c1b1a007b56ed79ae83540a463bc"},{url:"/_next/static/6C2vPjgkPhalamk47wxni/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/6C2vPjgkPhalamk47wxni/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0a6e12db-6a1f61dc4bc4a00f.js",revision:"6a1f61dc4bc4a00f"},{url:"/_next/static/chunks/2289-06e85f80cc21446d.js",revision:"06e85f80cc21446d"},{url:"/_next/static/chunks/2810-77f6bc54fcfc9a89.js",revision:"77f6bc54fcfc9a89"},{url:"/_next/static/chunks/2852872c-c160c04b6282d719.js",revision:"c160c04b6282d719"},{url:"/_next/static/chunks/3039-c563f968d1494c85.js",revision:"c563f968d1494c85"},{url:"/_next/static/chunks/3236-e81252634632c988.js",revision:"e81252634632c988"},{url:"/_next/static/chunks/3569-7282e47fa48b1e61.js",revision:"7282e47fa48b1e61"},{url:"/_next/static/chunks/4004-b85b5644137b00ff.js",revision:"b85b5644137b00ff"},{url:"/_next/static/chunks/4784-f7d241b9275b0a57.js",revision:"f7d241b9275b0a57"},{url:"/_next/static/chunks/5258-6a1cbf2a8b2c5fb5.js",revision:"6a1cbf2a8b2c5fb5"},{url:"/_next/static/chunks/5855-69339afee23ebb50.js",revision:"69339afee23ebb50"},{url:"/_next/static/chunks/5917-ebf7ac20eccabdb0.js",revision:"ebf7ac20eccabdb0"},{url:"/_next/static/chunks/6066-2aeef90a71aea90b.js",revision:"2aeef90a71aea90b"},{url:"/_next/static/chunks/6502-92df24e9f848fd49.js",revision:"92df24e9f848fd49"},{url:"/_next/static/chunks/6705-546b2231ec2f419c.js",revision:"546b2231ec2f419c"},{url:"/_next/static/chunks/7061-0e030d7409372fb8.js",revision:"0e030d7409372fb8"},{url:"/_next/static/chunks/7536-9108168c43861060.js",revision:"9108168c43861060"},{url:"/_next/static/chunks/7579-f430110666d403a5.js",revision:"f430110666d403a5"},{url:"/_next/static/chunks/75fc9c18-e29ddfe970cebafc.js",revision:"e29ddfe970cebafc"},{url:"/_next/static/chunks/8572-ad33933dc9879e08.js",revision:"ad33933dc9879e08"},{url:"/_next/static/chunks/8611-fe2d8a2f16b56a2f.js",revision:"fe2d8a2f16b56a2f"},{url:"/_next/static/chunks/8686-e1c7380376ee59f7.js",revision:"e1c7380376ee59f7"},{url:"/_next/static/chunks/9250-3f65e1a5005dad7d.js",revision:"3f65e1a5005dad7d"},{url:"/_next/static/chunks/9814-bf0644a7b604cca7.js",revision:"bf0644a7b604cca7"},{url:"/_next/static/chunks/framework-79bce4a3a540b080.js",revision:"79bce4a3a540b080"},{url:"/_next/static/chunks/main-d7727c751188154e.js",revision:"d7727c751188154e"},{url:"/_next/static/chunks/pages/404-437ece50338d8980.js",revision:"437ece50338d8980"},{url:"/_next/static/chunks/pages/_app-5b8735f410985477.js",revision:"5b8735f410985477"},{url:"/_next/static/chunks/pages/_error-015ba19d23e318d4.js",revision:"015ba19d23e318d4"},{url:"/_next/static/chunks/pages/_offline-2f1c4116b81240aa.js",revision:"2f1c4116b81240aa"},{url:"/_next/static/chunks/pages/about-5903c05d45c4ab26.js",revision:"5903c05d45c4ab26"},{url:"/_next/static/chunks/pages/app-816f5adee6581798.js",revision:"816f5adee6581798"},{url:"/_next/static/chunks/pages/app/dashboard-32a070319442856f.js",revision:"32a070319442856f"},{url:"/_next/static/chunks/pages/app/info-fce341d453fcf492.js",revision:"fce341d453fcf492"},{url:"/_next/static/chunks/pages/app/login-8e27a801eb2bef78.js",revision:"8e27a801eb2bef78"},{url:"/_next/static/chunks/pages/app/notifications-abf628b80be28961.js",revision:"abf628b80be28961"},{url:"/_next/static/chunks/pages/app/schedule-f71323188a3ba316.js",revision:"f71323188a3ba316"},{url:"/_next/static/chunks/pages/app/schedule/%5Bid%5D-e582954fe005f7e2.js",revision:"e582954fe005f7e2"},{url:"/_next/static/chunks/pages/app/settings-78c3895b31c5362d.js",revision:"78c3895b31c5362d"},{url:"/_next/static/chunks/pages/app/settings/email-cdcddb3e81f03552.js",revision:"cdcddb3e81f03552"},{url:"/_next/static/chunks/pages/app/settings/username-0cd34e14f664139e.js",revision:"0cd34e14f664139e"},{url:"/_next/static/chunks/pages/app/settings/wallets-b20255d3d7197a13.js",revision:"b20255d3d7197a13"},{url:"/_next/static/chunks/pages/app/side-events-cb2a6561a74a1ed2.js",revision:"cb2a6561a74a1ed2"},{url:"/_next/static/chunks/pages/app/speakers-84d208e70b383328.js",revision:"84d208e70b383328"},{url:"/_next/static/chunks/pages/app/speakers/%5Bid%5D-28b1715a333a970d.js",revision:"28b1715a333a970d"},{url:"/_next/static/chunks/pages/app/venue-7bb26ab438884a3d.js",revision:"7bb26ab438884a3d"},{url:"/_next/static/chunks/pages/app/venue/%5Bid%5D-b9a521f7e073f807.js",revision:"b9a521f7e073f807"},{url:"/_next/static/chunks/pages/applications-b0d3aa42c005975f.js",revision:"b0d3aa42c005975f"},{url:"/_next/static/chunks/pages/blogs-e86b78a778691499.js",revision:"e86b78a778691499"},{url:"/_next/static/chunks/pages/bogota-2c133e3ae5b3ee40.js",revision:"2c133e3ae5b3ee40"},{url:"/_next/static/chunks/pages/continuous-devcon-aff65786724b0b02.js",revision:"aff65786724b0b02"},{url:"/_next/static/chunks/pages/devcon-week-ca67dd0625ef1149.js",revision:"ca67dd0625ef1149"},{url:"/_next/static/chunks/pages/dips-e5aa9e09a744691a.js",revision:"e5aa9e09a744691a"},{url:"/_next/static/chunks/pages/dips/%5Bslug%5D-b98e1ec8e42866c5.js",revision:"b98e1ec8e42866c5"},{url:"/_next/static/chunks/pages/faq-c52e31b8ef85a441.js",revision:"c52e31b8ef85a441"},{url:"/_next/static/chunks/pages/index-628980d3d41c3dc4.js",revision:"628980d3d41c3dc4"},{url:"/_next/static/chunks/pages/news-1570ca6a8ef2b605.js",revision:"1570ca6a8ef2b605"},{url:"/_next/static/chunks/pages/news/%5Bpage%5D-0259e0200d97cc27.js",revision:"0259e0200d97cc27"},{url:"/_next/static/chunks/pages/past-events-1b8edb3093145942.js",revision:"1b8edb3093145942"},{url:"/_next/static/chunks/pages/program-b0a9735132f7554b.js",revision:"b0a9735132f7554b"},{url:"/_next/static/chunks/pages/raffle-auction-e9dedf7a8b6d84df.js",revision:"e9dedf7a8b6d84df"},{url:"/_next/static/chunks/pages/tickets-6f212ea5f9a5ead9.js",revision:"6f212ea5f9a5ead9"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-72bf90b8ba9dcec7.js",revision:"72bf90b8ba9dcec7"},{url:"/_next/static/css/0100725a0dd7de7f.css",revision:"0100725a0dd7de7f"},{url:"/_next/static/css/0a5f1a61679a5fdf.css",revision:"0a5f1a61679a5fdf"},{url:"/_next/static/css/0c6b6926891e1116.css",revision:"0c6b6926891e1116"},{url:"/_next/static/css/105c78deeded8376.css",revision:"105c78deeded8376"},{url:"/_next/static/css/1322ed696f776185.css",revision:"1322ed696f776185"},{url:"/_next/static/css/1e24d266cd913115.css",revision:"1e24d266cd913115"},{url:"/_next/static/css/22d43055daf847a3.css",revision:"22d43055daf847a3"},{url:"/_next/static/css/2929539e16ada923.css",revision:"2929539e16ada923"},{url:"/_next/static/css/2b8449986fe2b582.css",revision:"2b8449986fe2b582"},{url:"/_next/static/css/2e307fd918ebb930.css",revision:"2e307fd918ebb930"},{url:"/_next/static/css/2e3e80838d134da1.css",revision:"2e3e80838d134da1"},{url:"/_next/static/css/2e4736a92f9aec70.css",revision:"2e4736a92f9aec70"},{url:"/_next/static/css/3c8e727a54ff7732.css",revision:"3c8e727a54ff7732"},{url:"/_next/static/css/4d62065a2288f09d.css",revision:"4d62065a2288f09d"},{url:"/_next/static/css/56655600b100b066.css",revision:"56655600b100b066"},{url:"/_next/static/css/5713ff12900b6248.css",revision:"5713ff12900b6248"},{url:"/_next/static/css/625156a912adaa71.css",revision:"625156a912adaa71"},{url:"/_next/static/css/6800be75dd677909.css",revision:"6800be75dd677909"},{url:"/_next/static/css/69631ba83c669c1f.css",revision:"69631ba83c669c1f"},{url:"/_next/static/css/85c21bfd6e424664.css",revision:"85c21bfd6e424664"},{url:"/_next/static/css/87e91982db8c715f.css",revision:"87e91982db8c715f"},{url:"/_next/static/css/88fdf118219566e7.css",revision:"88fdf118219566e7"},{url:"/_next/static/css/8adf0a7ad07e716d.css",revision:"8adf0a7ad07e716d"},{url:"/_next/static/css/95d61cdc994d15e2.css",revision:"95d61cdc994d15e2"},{url:"/_next/static/css/9b67cfd91ee2dcdb.css",revision:"9b67cfd91ee2dcdb"},{url:"/_next/static/css/c203e8391e8d74ad.css",revision:"c203e8391e8d74ad"},{url:"/_next/static/css/d416f086432cbcaa.css",revision:"d416f086432cbcaa"},{url:"/_next/static/css/db76f4e76e78469f.css",revision:"db76f4e76e78469f"},{url:"/_next/static/css/e547808f4832790b.css",revision:"e547808f4832790b"},{url:"/_next/static/css/f49f3d83d3aabb6d.css",revision:"f49f3d83d3aabb6d"},{url:"/_next/static/css/f70e0a3bf61eb964.css",revision:"f70e0a3bf61eb964"},{url:"/_next/static/css/f930adf061f272ee.css",revision:"f930adf061f272ee"},{url:"/_next/static/css/fb4e4a707f9d7b38.css",revision:"fb4e4a707f9d7b38"},{url:"/_next/static/media/404.30085058.png",revision:"821b2a2683871a6c9ca2104ae3a80979"},{url:"/_next/static/media/Berlin.443ac142.png",revision:"70e4b420640edb305a90027b96109d8a"},{url:"/_next/static/media/Bogota0.16ef5341.jpg",revision:"6a9942d8b370e62dd1240717cc8347be"},{url:"/_next/static/media/Bogota2.2c6d068c.jpg",revision:"876a7cbf6cd8ef2c0d80ebedc6f89e8b"},{url:"/_next/static/media/Bogota5.23b14a64.jpg",revision:"50bed67829e0a6b3358d21ddf3925489"},{url:"/_next/static/media/Bogota8.726d3272.jpg",revision:"2d5c568497bb672c54ded672dcce4dbd"},{url:"/_next/static/media/Cancun.fad2bdd7.png",revision:"0fdb5ce186df8cea2a4f3a4cd94e5ece"},{url:"/_next/static/media/London.8e97168c.png",revision:"e5ff3e11306bb66ee41cae96b5ead6a6"},{url:"/_next/static/media/Osaka.95031578.png",revision:"7c774cae7611beae26ea88a9ef44b862"},{url:"/_next/static/media/Prague.52675ccb.png",revision:"1b32e6662d2b1a1feb1e842e7b32d3a8"},{url:"/_next/static/media/Shanghai.b9a244f7.png",revision:"115f7f3eed782f78ea1077bb746360d6"},{url:"/_next/static/media/about-1.ac86f326.jpg",revision:"b25d562cf609821156df70bdedd4a46c"},{url:"/_next/static/media/about-2.98cb4634.jpg",revision:"cd0956c27843e4fcbcde5b4099e0f886"},{url:"/_next/static/media/about-3.4bf67bff.jpg",revision:"ec365565f228b29014a5f6ee11ba90d1"},{url:"/_next/static/media/about-4.684f1869.jpg",revision:"e12a32654631805e315034ae6469ac79"},{url:"/_next/static/media/about-stroked.f8e35cdb.svg",revision:"f8e35cdb"},{url:"/_next/static/media/about-triangles.c2eecf59.png",revision:"aac9c6e19e9db1d5be3120e200a95c41"},{url:"/_next/static/media/account_circle.70c51532.png",revision:"a61c68b1aa2e35dfe301ac431ffc1655"},{url:"/_next/static/media/agora_02.90f86c1e.jpeg",revision:"572c1f81cd3ee4467c70418518fc629f"},{url:"/_next/static/media/agora_04.0b5590ca.jpg",revision:"3fd20e55bea7447174a5a3686a8947a9"},{url:"/_next/static/media/agora_05.9a71897c.jpg",revision:"dbffa9b1bbd5b353d5e4b4ade9a20d42"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/background-circles.41d2468d.png",revision:"7afa7518bade5dee34dfbcb315a37568"},{url:"/_next/static/media/background-triangles.bad79de6.png",revision:"681bcbf89b428bfea2bc991d60c353a8"},{url:"/_next/static/media/blog-stroked.e631edec.svg",revision:"e631edec"},{url:"/_next/static/media/blog.8a4ed454.svg",revision:"8a4ed454"},{url:"/_next/static/media/bogota-city.117a8a31.png",revision:"29dd6d53f3820c4a72c7850547dca257"},{url:"/_next/static/media/bogota-stroked.188a1233.svg",revision:"188a1233"},{url:"/_next/static/media/clouds.e99bf504.png",revision:"e99bf504"},{url:"/_next/static/media/devcon-6-logo.578993a7.png",revision:"4f47f2c9b5e98e09f432178061a4eb5e"},{url:"/_next/static/media/event-locations.0f24c5a9.png",revision:"44a6f7060668f89e7e365b55287f4353"},{url:"/_next/static/media/footer-road.4f17f914.png",revision:"ea3984b1f128f986b390dd6bc4110fa5"},{url:"/_next/static/media/get-involved-stroked.b5877c36.svg",revision:"b5877c36"},{url:"/_next/static/media/google-drive.0bed25f3.png",revision:"0f2c0c10f5a378e5defb0e9bf95f130d"},{url:"/_next/static/media/hacker-basement-tag.c360e4cc.png",revision:"2d3bcb69c1392765209702faf53f6b4b"},{url:"/_next/static/media/hacker-basement.2094b16a.png",revision:"984f6debcf1be31189a1dfb7d70ddced"},{url:"/_next/static/media/hub_01.ceb668f7.jpg",revision:"d455e648caa81c16ae574f7f55321c93"},{url:"/_next/static/media/hub_02.55d298c4.jpg",revision:"48797d054750c4c20741fcae0e96b0f6"},{url:"/_next/static/media/hub_03.558f0086.jpg",revision:"b168fd00fc27a30901ed373fadcf14d2"},{url:"/_next/static/media/info.daf6d220.svg",revision:"daf6d220"},{url:"/_next/static/media/mall-floor-plan.a1ba7c13.png",revision:"30c20c6544df29ba7586fc75dc9789db"},{url:"/_next/static/media/mountains.6ee0469c.png",revision:"6ee0469c"},{url:"/_next/static/media/neo-matrix.b5fe57bb.png",revision:"4f22998913fb512ba631a83951771bf9"},{url:"/_next/static/media/no-results.83f16c1e.png",revision:"14893a46966a65878071b800be4d1871"},{url:"/_next/static/media/program-stroked.5fb98ba7.svg",revision:"5fb98ba7"},{url:"/_next/static/media/pwa-icon.3eeca038.png",revision:"5335c14bc20c29fffd22b9440a5d30d5"},{url:"/_next/static/media/side-events-hero.c315d9f0.png",revision:"b7b71dfc62c223aea752802a3d055175"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/media/speaker-process.892e1975.png",revision:"d5eea865202ac975bf0d4ce3042dbcea"},{url:"/_next/static/media/tickets-stroked.9f748354.svg",revision:"9f748354"},{url:"/_next/static/media/tickets.52bcfe94.svg",revision:"52bcfe94"},{url:"/_next/static/media/track-icon.706c6533.png",revision:"ff0a32e272d1178c4b7da8244dba43f9"},{url:"/_offline",revision:"6C2vPjgkPhalamk47wxni"},{url:"/admin/config.yml",revision:"699dca38982e763e5693870430dfd8e2"},{url:"/admin/index.html",revision:"7a9f5babbaba49f11b0d8a4a254fe0c1"},{url:"/assets/android-chrome-192x192.png",revision:"bce32628308c730846bce6ab7912cfbd"},{url:"/assets/android-chrome-512x512.png",revision:"bba23050e926229c9a84d48c151f3b8a"},{url:"/assets/apple-touch-icon.png",revision:"29a0998ef6b59f4da2f9b5e3e6dc85f8"},{url:"/assets/browserconfig.xml",revision:"d2df81ad65b5328b978ef56fc53d5f09"},{url:"/assets/favicon-16x16.png",revision:"878635f345f668982a6e32a479d09b04"},{url:"/assets/favicon-32x32.png",revision:"5cbb5cf6f6b7049de4f8be8464981ac3"},{url:"/assets/favicon.ico",revision:"b39c00413e875e22ac10408b894f6330"},{url:"/assets/images/archive-social.png",revision:"eaa240caa98e120c79ffc18eccccd426"},{url:"/assets/images/devcon-logo.png",revision:"5574f9368b11dc4920f6fdd4e6e8b40c"},{url:"/assets/images/menu/about.svg",revision:"8e871227e330e7550c48c18c03accc8d"},{url:"/assets/images/menu/archive-1.svg",revision:"faee9ace726e73eb946f4fd8f35ef2b9"},{url:"/assets/images/menu/archive-2.svg",revision:"d151971d8ba13672395ab79f64220341"},{url:"/assets/images/menu/blog.svg",revision:"1cfe71e433ffc4c3c8bc203645356958"},{url:"/assets/images/menu/bogota.svg",revision:"3c247daae928029e8e8a0133e57d64f9"},{url:"/assets/images/menu/forum.svg",revision:"466e7f36cd7c80118971b9b599d5fd38"},{url:"/assets/images/menu/get-involved.svg",revision:"ed82548287a083d800d6d03f92061c82"},{url:"/assets/images/menu/program.svg",revision:"6e25dbf780fb6e716c0a19a6c0ab96bf"},{url:"/assets/images/menu/tickets.svg",revision:"8cdd1f59bd706a5dfbffc2596996a6ff"},{url:"/assets/images/og-graph.png",revision:"cf29f8f7a6a3cfe6ab8d4e2541935a24"},{url:"/assets/images/og-image-devcon.jpg",revision:"d80ae13fcc35a10525a493ecb8785039"},{url:"/assets/images/rtd-social.png",revision:"3c6cf17a80bf6a2efe380bf6c200776a"},{url:"/assets/images/seo.jpg",revision:"577577bee4adf1f3e74d171ec40acf5d"},{url:"/assets/images/twitter-banner.jpeg",revision:"f28f6361eb91ff8eced3c6c67a78476d"},{url:"/assets/mstile-150x150.png",revision:"5a397dd11060f07c87ea1f2dd1aa5060"},{url:"/assets/safari-pinned-tab.svg",revision:"3af3c4a80c8f9f27896dd9c071bc348c"},{url:"/assets/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"/assets/uploads/profiles/austin-griffith.jpg",revision:"d087310957e40de82dea337776be7cc4"},{url:"/assets/uploads/profiles/gavin-wood.jpg",revision:"589c318d47dee2d2bba8a784003bab0f"},{url:"/assets/uploads/profiles/vitalik-buterin.jpg",revision:"0f5e0fa730b859f370c873b9db5062f8"},{url:"/assets/uploads/videos/aya-miyaguchi.png",revision:"2fafe93d96ab3096d64ddaa1f55e3b7b"},{url:"/assets/uploads/videos/brewster-kahle.png",revision:"e7def0292d2b491c9bfb77790c651555"},{url:"/assets/uploads/videos/joseph-lubin.png",revision:"a69761516937ff03528033907b130e14"},{url:"/assets/uploads/videos/stewart-brand.png",revision:"d19ae80464e5ec4f9ad8527c99248403"},{url:"/favicon.ico",revision:"221eedcff139aeb744d7ab3d442cd6f0"},{url:"/manifest.json",revision:"3add8268b26f296df029e743d87f15d6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
