/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "1b9d94b64aae8132acf8dfad62e35b69"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f45c1f5f.css",
    "revision": "e48ecd2fd326c33bb4a7f0bfe8b3e2c4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.72a3c29a.js",
    "revision": "0d368b7d3251d92579f9f6a2271b09be"
  },
  {
    "url": "assets/js/10.1eb4bd32.js",
    "revision": "6f71b89832e19a0b648018bc2464ab2f"
  },
  {
    "url": "assets/js/13.7fa8c35d.js",
    "revision": "1e148eb3fcde0d48161a314c7c1452b9"
  },
  {
    "url": "assets/js/14.482e35a0.js",
    "revision": "f9d56c86561d2e8fdf88352d2a7f3820"
  },
  {
    "url": "assets/js/15.2b524aee.js",
    "revision": "4f50f323c76bed4f79dfe64fcf2c8a12"
  },
  {
    "url": "assets/js/16.ffcea07f.js",
    "revision": "00d57736e7d628048f87405e4d8b4acb"
  },
  {
    "url": "assets/js/17.33e59074.js",
    "revision": "e9083a83e4174ca4ad37c821b20a80f0"
  },
  {
    "url": "assets/js/18.ae42d7b1.js",
    "revision": "85b0a3f5fb556bd48a61716f70e8d7f8"
  },
  {
    "url": "assets/js/19.4be8a5b5.js",
    "revision": "7a469c51ddbba09fc968f32845001c67"
  },
  {
    "url": "assets/js/2.90442e62.js",
    "revision": "ecc38aa103999fddbd6ebd2817fb0fad"
  },
  {
    "url": "assets/js/20.90331c42.js",
    "revision": "ce9372ca436931fb87ce5995d963ee6c"
  },
  {
    "url": "assets/js/21.13d1edbf.js",
    "revision": "f300679cc31158b5c477fde857de625e"
  },
  {
    "url": "assets/js/22.46dd4ed9.js",
    "revision": "d6219d7b3301c9df060c8ab41d9bed0e"
  },
  {
    "url": "assets/js/23.acc57584.js",
    "revision": "9adbcd5aa72f38ebd081d8cf996a1026"
  },
  {
    "url": "assets/js/24.7452c26a.js",
    "revision": "682159da9f8a91d0c39ca457130f0352"
  },
  {
    "url": "assets/js/25.47dbc9cd.js",
    "revision": "928df16678f128dcac1959fd35f95f8a"
  },
  {
    "url": "assets/js/26.8d0c0409.js",
    "revision": "8aba158efd992fae43d8941e482a7c7b"
  },
  {
    "url": "assets/js/27.d0ab41d4.js",
    "revision": "124058be2f850b23f1a85805105199d7"
  },
  {
    "url": "assets/js/28.14bf4c45.js",
    "revision": "c477959701e33f1d612a0b70c73390be"
  },
  {
    "url": "assets/js/29.e1f4b59e.js",
    "revision": "0aa892da3efc88fd7ef3dd8ff4f9f28f"
  },
  {
    "url": "assets/js/3.b26e186f.js",
    "revision": "73a49ac9dedd9e2ac7fa767177778094"
  },
  {
    "url": "assets/js/30.4498d386.js",
    "revision": "4d88b459f3fdcc3dcc08021d9a54322f"
  },
  {
    "url": "assets/js/31.c95ff595.js",
    "revision": "acef5e2737846c1bbcb2493bfaa60321"
  },
  {
    "url": "assets/js/32.cf4888fd.js",
    "revision": "6b4b0a2350bf0bd29cccf78fd70a0c17"
  },
  {
    "url": "assets/js/33.e786ee07.js",
    "revision": "3838bb09418c5ae12f34ad7ebdbcd428"
  },
  {
    "url": "assets/js/34.296bdb30.js",
    "revision": "50b2abc1a6e5ff81d442dbf590b75fd0"
  },
  {
    "url": "assets/js/35.ff2081d1.js",
    "revision": "fd1255986179141fc6cbd112593cd1dd"
  },
  {
    "url": "assets/js/36.8bda4b59.js",
    "revision": "2d443c738ffc0682686be9564511e770"
  },
  {
    "url": "assets/js/37.ac93da46.js",
    "revision": "00bca6f3500dd7ee4df92603a9063cf4"
  },
  {
    "url": "assets/js/38.e10da0ec.js",
    "revision": "ecf5f32680b43cd52a6d4b3c080cd249"
  },
  {
    "url": "assets/js/39.06f0631d.js",
    "revision": "51e5b77c0549db31be5ac53d07a2991c"
  },
  {
    "url": "assets/js/4.326bdc2c.js",
    "revision": "6e6b516856a4fc4519bab98b40b6b887"
  },
  {
    "url": "assets/js/41.c8373cb3.js",
    "revision": "e6b8762a479b414a19fb700261ac7ddc"
  },
  {
    "url": "assets/js/5.8a959ef4.js",
    "revision": "e8f5ae212ea06423cff67a7295655674"
  },
  {
    "url": "assets/js/6.a8552c6f.js",
    "revision": "1122bf03b4c3af8127472ac34403204f"
  },
  {
    "url": "assets/js/7.51faa1d7.js",
    "revision": "7ca74a854ee88f54067b61872fc984e3"
  },
  {
    "url": "assets/js/8.8ec552ec.js",
    "revision": "cc27719725a2b9c1c0ba0a1100a56e1d"
  },
  {
    "url": "assets/js/9.e91c43ed.js",
    "revision": "781f11a8e1de42c858e1806db31cb0fd"
  },
  {
    "url": "assets/js/app.8396eebf.js",
    "revision": "3bf14a94d807a21f087394234cc8ed98"
  },
  {
    "url": "assets/js/vendors~docsearch.491cc543.js",
    "revision": "1e191a90655d0d6b862e60709158e047"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1b1f8ded2fe90d9aaa15a0f557e43422"
  },
  {
    "url": "design/index.html",
    "revision": "0f2d16642e4820fcb2e8a817ea17fc28"
  },
  {
    "url": "index.html",
    "revision": "e2eec49fda5e807749d67676060d30c2"
  },
  {
    "url": "intro/index.html",
    "revision": "5651be2a3fb053612f033db47d6af259"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "bba290e8664305565878aae2317f5761"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "b4e015449c810236b47e13bf5fbb8d47"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "6f1274f2f7e974b352e0c5f9d2a824e7"
  },
  {
    "url": "software/index.html",
    "revision": "e0041a4efa5098593787adab485e8d6a"
  },
  {
    "url": "test/index.html",
    "revision": "811bf1f7ccdcdeb064794d0afc6c9acc"
  },
  {
    "url": "use cases/index.html",
    "revision": "3ef51014fee2da8623964bc487c35a1d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
