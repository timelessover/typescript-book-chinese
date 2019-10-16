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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b4659e95a8a9a233ad34aedc7e7f61ab"
  },
  {
    "url": "assets/css/0.styles.f45e872f.css",
    "revision": "0d08ddf63bb9f21642c12addc4f4c5ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e70ba1dc.js",
    "revision": "207c3a241899762e2a66d00b708f2fed"
  },
  {
    "url": "assets/js/11.c2e4f28e.js",
    "revision": "8efba3d81ce0279fa24d402b34472939"
  },
  {
    "url": "assets/js/12.e89a0b82.js",
    "revision": "5eba24db123a04ebee477e8b6369a8f9"
  },
  {
    "url": "assets/js/13.9f481ce6.js",
    "revision": "670699d9e24dd5c8a74bc9da51dd0bda"
  },
  {
    "url": "assets/js/14.6e63bf68.js",
    "revision": "30a820dd3aec6499c58f810a68cbec71"
  },
  {
    "url": "assets/js/15.a45e61d8.js",
    "revision": "4335d9d9939f6a081aee2df548755054"
  },
  {
    "url": "assets/js/16.8c2140cd.js",
    "revision": "be9ce048e70ec81397267fadd9dfee4d"
  },
  {
    "url": "assets/js/17.939ebf01.js",
    "revision": "731ab24b1641f24979e41171b99dcccb"
  },
  {
    "url": "assets/js/18.fb850ea8.js",
    "revision": "377556b6dba11e966793e5e1146a1512"
  },
  {
    "url": "assets/js/19.501fb616.js",
    "revision": "ceb234a1c264acc1464b39d815241f66"
  },
  {
    "url": "assets/js/2.2a274f30.js",
    "revision": "8c020448baae9acd1c366afd506966dd"
  },
  {
    "url": "assets/js/20.9ea70d38.js",
    "revision": "3a8f73bc19c7c7e155d523330889832f"
  },
  {
    "url": "assets/js/21.d86ec74b.js",
    "revision": "bc2c0a48c132b995c8c650e807ec273a"
  },
  {
    "url": "assets/js/22.3bc3e10b.js",
    "revision": "e56354d0da87cfac7bd552997ecfbd8d"
  },
  {
    "url": "assets/js/23.c605d868.js",
    "revision": "91b3a5186e1ea5e19f9f80fc160bee46"
  },
  {
    "url": "assets/js/24.f1a12f89.js",
    "revision": "2067211208e404fc2d780b7ec589b468"
  },
  {
    "url": "assets/js/25.b31c138b.js",
    "revision": "263d8ccecf8eb9d62a0c7cfc01a8ebae"
  },
  {
    "url": "assets/js/26.be1b030d.js",
    "revision": "7353d2131e7eddc5905790644a914711"
  },
  {
    "url": "assets/js/27.c7c492d9.js",
    "revision": "d592939107d74c82e5803d4991d0131c"
  },
  {
    "url": "assets/js/28.06d51ace.js",
    "revision": "75a84fa6d30db8bafd4a21d7d1e48094"
  },
  {
    "url": "assets/js/29.b93e6276.js",
    "revision": "7fe416721ee78fd32aea40d503f2e0a6"
  },
  {
    "url": "assets/js/3.0b6855f4.js",
    "revision": "6005a10f1a81d256ac1c96f8866a0a5a"
  },
  {
    "url": "assets/js/30.0a2b88b3.js",
    "revision": "d33d747abe2f955fd46343650b92bd3d"
  },
  {
    "url": "assets/js/31.230d8296.js",
    "revision": "bc86f857737bff66db2c56a00447100f"
  },
  {
    "url": "assets/js/32.c7d67a02.js",
    "revision": "86eef9d94673f46f281ea7cfb4baa328"
  },
  {
    "url": "assets/js/33.4b172be8.js",
    "revision": "69e5ece6fb9ec8e196ea9ff43462b286"
  },
  {
    "url": "assets/js/34.99938cd5.js",
    "revision": "4fb9ae13e3f5ad0fcfeed168bc1fcc2b"
  },
  {
    "url": "assets/js/35.81a46588.js",
    "revision": "b85a93d6cafe99d3698f7063acbfd792"
  },
  {
    "url": "assets/js/36.77d04d29.js",
    "revision": "519042dc954e58b1c6c4004de3272885"
  },
  {
    "url": "assets/js/37.370c1761.js",
    "revision": "9e95890f6e9158b43f3513b3257e7caf"
  },
  {
    "url": "assets/js/38.be20fc76.js",
    "revision": "c05fe5f3cda2a51d3912a5450f4d9133"
  },
  {
    "url": "assets/js/39.35497279.js",
    "revision": "02c2de3e9ffadf8c771a634d9bfec1ba"
  },
  {
    "url": "assets/js/4.f7fc35f8.js",
    "revision": "3e147c93f683a033d6006e7e59949cdd"
  },
  {
    "url": "assets/js/40.d2f869d0.js",
    "revision": "0dcb3a11892e99f35725406c0088a98d"
  },
  {
    "url": "assets/js/41.361f7873.js",
    "revision": "9a7ce1e9710fe4b4150bbb3e1b26237c"
  },
  {
    "url": "assets/js/42.01930212.js",
    "revision": "7b86b7e039b88fc1d926b332d82a3acd"
  },
  {
    "url": "assets/js/43.a09a85d8.js",
    "revision": "6a2d4800b7e063fb9722da2072f1a2d7"
  },
  {
    "url": "assets/js/44.9809df88.js",
    "revision": "006cab6b59a5447d71094da7ca57f42e"
  },
  {
    "url": "assets/js/45.8667874b.js",
    "revision": "269d33d1fd6b437f5bc080ea299d3fbd"
  },
  {
    "url": "assets/js/46.37de452b.js",
    "revision": "169c30cba77bf53730d52c251af9b29b"
  },
  {
    "url": "assets/js/47.e46306e5.js",
    "revision": "52c96b386177ac2b87c5ae1b1c926ed5"
  },
  {
    "url": "assets/js/48.0db5ef80.js",
    "revision": "e71cefaf28bd5bcb55359912fde4d288"
  },
  {
    "url": "assets/js/49.ecf0ecf1.js",
    "revision": "cb8f8037b1ddd2e3e2250e0502ff29b8"
  },
  {
    "url": "assets/js/5.81bc92c4.js",
    "revision": "a81b964f4278dae1aaf06c13a7c57641"
  },
  {
    "url": "assets/js/50.1aec93bf.js",
    "revision": "69cf9db949b24da5bdb354704547d9b6"
  },
  {
    "url": "assets/js/51.a9f0f3fc.js",
    "revision": "76f8f968ed473ed5658367bd83320e84"
  },
  {
    "url": "assets/js/52.608d11fb.js",
    "revision": "5ad6f78124acb8b2533b60ff26784eef"
  },
  {
    "url": "assets/js/53.647a2b37.js",
    "revision": "7715abc936ec90b6949c03612a2f8087"
  },
  {
    "url": "assets/js/54.17a4f09b.js",
    "revision": "4508a8aad3cd91d608003c69d82d3ce6"
  },
  {
    "url": "assets/js/55.92bf5ebe.js",
    "revision": "820a991e66862c1050f0b6dbfc401f33"
  },
  {
    "url": "assets/js/56.e2fd0397.js",
    "revision": "77d1274a31255e75e2cf1ea3c79e5a3f"
  },
  {
    "url": "assets/js/57.2b951bec.js",
    "revision": "29fc0623a7b9517dc179ac413f366af4"
  },
  {
    "url": "assets/js/58.e5806772.js",
    "revision": "e6180818bb2e808dac6c3268bb19ba9e"
  },
  {
    "url": "assets/js/59.463c2b02.js",
    "revision": "112edb1d27d760d6c30e8d0c4c9d8f31"
  },
  {
    "url": "assets/js/6.cffe5692.js",
    "revision": "32c4228908feb9cd1d62a0cd1c4db5ca"
  },
  {
    "url": "assets/js/60.12c2ac59.js",
    "revision": "8bbfec84e1abd4adc5e50fb7e327cabe"
  },
  {
    "url": "assets/js/61.fb85443a.js",
    "revision": "90490bd9ded377d3b763a86fa334ce0b"
  },
  {
    "url": "assets/js/62.fe7e6577.js",
    "revision": "a87932d5bcd5676b6ba3ed0cc985be3b"
  },
  {
    "url": "assets/js/63.37c65c4f.js",
    "revision": "89b37b38b7120026ff56993b233c50e3"
  },
  {
    "url": "assets/js/64.0405925e.js",
    "revision": "48548f968f3ac8788c0b0c8ba4b014fb"
  },
  {
    "url": "assets/js/65.71f84be1.js",
    "revision": "b792dd5c29f799e2b71fe0fe718c59e9"
  },
  {
    "url": "assets/js/66.9270da9d.js",
    "revision": "e6ad95cd97759f035e401c4de4c55994"
  },
  {
    "url": "assets/js/67.9aa2ec44.js",
    "revision": "88b106d49f1cb29fd61c1697838d4a43"
  },
  {
    "url": "assets/js/68.a257398d.js",
    "revision": "f4e8ab513bc430d1034b59b0f1edbdbd"
  },
  {
    "url": "assets/js/69.9cd0672d.js",
    "revision": "df0938ff44c3ff38a838e7378a47e25e"
  },
  {
    "url": "assets/js/7.1afc74c0.js",
    "revision": "af5d05340bfdbb4fdb8ab4927ce7d911"
  },
  {
    "url": "assets/js/70.745f51d3.js",
    "revision": "85c92e3bde55f13cb17ca2aa1e7cb991"
  },
  {
    "url": "assets/js/71.89790b5b.js",
    "revision": "c431cac7346cf6246a1d52d110237086"
  },
  {
    "url": "assets/js/72.c466a61f.js",
    "revision": "fac1d5c8028525dc3abe6efa98f04c03"
  },
  {
    "url": "assets/js/73.974581c0.js",
    "revision": "89c2fa9dc762b48efbbe035ff72337f5"
  },
  {
    "url": "assets/js/74.b0528208.js",
    "revision": "2e35558646840ccb736efc09e2906d03"
  },
  {
    "url": "assets/js/75.a69eeb03.js",
    "revision": "f4ba87421936d5795be9e29308b80aef"
  },
  {
    "url": "assets/js/76.980d0632.js",
    "revision": "c4339d75bb1aae129ca5891ce9572a3c"
  },
  {
    "url": "assets/js/77.a55c3705.js",
    "revision": "98ebf16b6e67f7a9ede0de6b576f5ab4"
  },
  {
    "url": "assets/js/78.ef6e24db.js",
    "revision": "c85e40e020bb3e9b1b36861e5322777a"
  },
  {
    "url": "assets/js/79.b18971f8.js",
    "revision": "e37d0e9b59e19b6e5d84dd259d7f3d86"
  },
  {
    "url": "assets/js/8.575e8a50.js",
    "revision": "5bf670c4f865cf400368f4b1ab52a5d7"
  },
  {
    "url": "assets/js/80.7af13268.js",
    "revision": "39265a27438209bae36f1a84c189b3d8"
  },
  {
    "url": "assets/js/81.a492cbbd.js",
    "revision": "728bf105d9416c5a84c42dbebab62fb0"
  },
  {
    "url": "assets/js/82.8a8a55ed.js",
    "revision": "d8ebc697ced276cbe6c60c29db7b4cdd"
  },
  {
    "url": "assets/js/83.a43ef75b.js",
    "revision": "88ccafaf5d9bef45260b9ab7026aed55"
  },
  {
    "url": "assets/js/84.d09b5fc3.js",
    "revision": "a9facccf5b95f88caff2411f4242dce0"
  },
  {
    "url": "assets/js/85.cf6c4326.js",
    "revision": "64c86fec67e2eb9bdd073b2d02de2e57"
  },
  {
    "url": "assets/js/86.f0f0611a.js",
    "revision": "ae945932f23c1bacf377478563db9089"
  },
  {
    "url": "assets/js/87.adee741f.js",
    "revision": "393f6e405769b16e66db2edd1635ca41"
  },
  {
    "url": "assets/js/9.f326f90c.js",
    "revision": "a2aae02cb232f162943a7524e03bbe05"
  },
  {
    "url": "assets/js/app.c398f8dc.js",
    "revision": "8ae859508427d1704386af97735dbe80"
  },
  {
    "url": "compiler/ast.html",
    "revision": "2a9724e89c860317647cf19f18528744"
  },
  {
    "url": "compiler/binder.html",
    "revision": "f635a847ba321f3979020f645034a71c"
  },
  {
    "url": "compiler/checker.html",
    "revision": "1404c5079105de12fe55678f167b2fc6"
  },
  {
    "url": "compiler/emitter.html",
    "revision": "296768ca7c1606eac3cc37d47f5d83d0"
  },
  {
    "url": "compiler/overview.html",
    "revision": "15e69ab7d48ecdb3f8d0460bb0090a41"
  },
  {
    "url": "compiler/parser.html",
    "revision": "7f82715e161900581d71fa3fc7d1ebf7"
  },
  {
    "url": "compiler/program.html",
    "revision": "3fd30ba7791d83defcb9f72320aaf501"
  },
  {
    "url": "compiler/scanner.html",
    "revision": "b9b62011ad7abdfd65e205da1b4fbe36"
  },
  {
    "url": "contact.png",
    "revision": "de36f2215c396bf6f74409c047520234"
  },
  {
    "url": "error/common.html",
    "revision": "65beebf5a0fa820068dc45218da491f9"
  },
  {
    "url": "error/interpreting.html",
    "revision": "2f859c7743e32a277eff475db6586b03"
  },
  {
    "url": "faqs/class.html",
    "revision": "4395781b1e36178e644476c7fab9b84a"
  },
  {
    "url": "faqs/commandline-behavior.html",
    "revision": "256378bc31d59119f824903d840a0f9c"
  },
  {
    "url": "faqs/comments.html",
    "revision": "3c751971b92248722778298900799550"
  },
  {
    "url": "faqs/common-bug-not-bugs.html",
    "revision": "aedbb662dd5d75fe051ce9c27e024762"
  },
  {
    "url": "faqs/common-feature-request.html",
    "revision": "72423ac5c4622422af585a15a1b97eca"
  },
  {
    "url": "faqs/decorators.html",
    "revision": "4c427c7afe0d80e11741fb0420310d2f"
  },
  {
    "url": "faqs/enums.html",
    "revision": "fe48bd115f40ca79eb5786bbebc97040"
  },
  {
    "url": "faqs/function.html",
    "revision": "5f283ecca40114afe8f9485cf929819f"
  },
  {
    "url": "faqs/generics.html",
    "revision": "aa6f91f5ff7a8d71018918a4d6a3bf88"
  },
  {
    "url": "faqs/glossary-and-terms.html",
    "revision": "8132561f1071e667fb31d803fc7397ef"
  },
  {
    "url": "faqs/jsx-and-react.html",
    "revision": "e7f98e63a1b236c13e2c8ed4145db3ca"
  },
  {
    "url": "faqs/modules.html",
    "revision": "d72db3b670917a21341f6bd990388fa4"
  },
  {
    "url": "faqs/thing-that-dont-work.html",
    "revision": "db578d68d22456a7aa0b9eb9e17850d4"
  },
  {
    "url": "faqs/tsconfig-behavior.html",
    "revision": "90c7aefb24fdd88fef88ea79d6ff3b02"
  },
  {
    "url": "faqs/type-guards.html",
    "revision": "9f8a50c0c17a85a56ad89d63c7f9b950"
  },
  {
    "url": "faqs/type-system-behavior.html",
    "revision": "471d4c0aa2d9dff143644b28f232fccb"
  },
  {
    "url": "ide.png",
    "revision": "0552400adbb2b3fcbed10a98a02e2516"
  },
  {
    "url": "index.html",
    "revision": "943bb1029b927f9511638c8805af23bb"
  },
  {
    "url": "jsx/nonReactJSX.html",
    "revision": "7a54ae29aa758a1b267e821e42f75d5d"
  },
  {
    "url": "jsx/reactJSX.html",
    "revision": "c89a494f325c0deca16489d40b88fcd7"
  },
  {
    "url": "jsx/support.html",
    "revision": "5e915357caff3da601ba03769b139e88"
  },
  {
    "url": "logo.png",
    "revision": "166813938a8a65cf3197fa7da1d131f4"
  },
  {
    "url": "project/compilationContext.html",
    "revision": "1f8bffac4cedbd784f449c467c0f24d1"
  },
  {
    "url": "project/declarationspaces.html",
    "revision": "5f0851927662c2544e259722bb836612"
  },
  {
    "url": "project/dynamicImportExpressions.html",
    "revision": "043bde97456697d4af5e4bf025f45b92"
  },
  {
    "url": "project/modules.html",
    "revision": "78355892938e68b1e8a221722bcd1640"
  },
  {
    "url": "project/namespaces.html",
    "revision": "3ba1290940195db3d3ffc8cd7b212afb"
  },
  {
    "url": "tips/avoidExportDefault.html",
    "revision": "420bad008da898b4ea95c47b3f277116"
  },
  {
    "url": "tips/barrel.html",
    "revision": "b5b85d855bcc00d23ca7754ecf1c3562"
  },
  {
    "url": "tips/bind.html",
    "revision": "fc0f570ce58627b3c25497af1365abc6"
  },
  {
    "url": "tips/buildToggles.html",
    "revision": "cd2cc2aa50a21cf8627bfd9e0cb61210"
  },
  {
    "url": "tips/classAreUseful.html",
    "revision": "3417b49d632c56aacc3b2a545efa05de"
  },
  {
    "url": "tips/covarianceAndContravariance.html",
    "revision": "ba779c8234395598b8aad39b91358b67"
  },
  {
    "url": "tips/createArrays.html",
    "revision": "f7bfbd4bd206a97d5276a49e39b7b4e5"
  },
  {
    "url": "tips/curry.html",
    "revision": "71f197991cca47fb56f8ea6f1d8882ba"
  },
  {
    "url": "tips/functionParameters.html",
    "revision": "2be40f7ff02ab946c719bc7cc08612df"
  },
  {
    "url": "tips/infer.html",
    "revision": "11a7c627473dbd0a5dadf68dcf0d5afd"
  },
  {
    "url": "tips/lazyObjectLiteralInitialization.html",
    "revision": "d179b4b5757ce1781985a1acc30f83d6"
  },
  {
    "url": "tips/limitPropertySetters.html",
    "revision": "78e8e1ef7055a648477dd353cc50cf20"
  },
  {
    "url": "tips/metadata.html",
    "revision": "d517063c342c1e237b3478242c78c9bb"
  },
  {
    "url": "tips/nominalTyping.html",
    "revision": "0eab8accbe2b940d77cb455ac5a9498a"
  },
  {
    "url": "tips/outFileCaution.html",
    "revision": "174276a115ec7d09853772c51e843cb4"
  },
  {
    "url": "tips/singletonPatern.html",
    "revision": "05b9bfc8fd7b4dc139e94c553a9f1610"
  },
  {
    "url": "tips/statefulFunctions.html",
    "revision": "21ffb0b67f51d619b0d5bfdfd5696d28"
  },
  {
    "url": "tips/staticConstructors.html",
    "revision": "f6384d10f3fb55fea1444396c0f5cee9"
  },
  {
    "url": "tips/stringBasedEmuns.html",
    "revision": "4d7b023167b8e396521ce36f503b5c57"
  },
  {
    "url": "tips/truthy.html",
    "revision": "2c13b01275c178971499cc0734906c6f"
  },
  {
    "url": "tips/typeInstantiation.html",
    "revision": "2a60f22f91711ae1ece9d0e638854316"
  },
  {
    "url": "tips/typesafeEventEmitter.html",
    "revision": "56df3675bc66b3928cf98e8424d51615"
  },
  {
    "url": "typescript-downloads.jpg",
    "revision": "c820bb267e14bd6881db03696f3ae603"
  },
  {
    "url": "typings/ambient.html",
    "revision": "7a3c37b23a8bb7f807f7206686b69ea3"
  },
  {
    "url": "typings/callable.html",
    "revision": "98258df7246982b9fa41d9583bbb0873"
  },
  {
    "url": "typings/discrominatedUnion.html",
    "revision": "f363860168035e228c37712a4fb8b004"
  },
  {
    "url": "typings/enums.html",
    "revision": "2c6f1be4b911e1aaeca17507a209bb63"
  },
  {
    "url": "typings/exceptionsHanding.html",
    "revision": "4004cfb799002ce5135a84aa6c2d0e20"
  },
  {
    "url": "typings/freshness.html",
    "revision": "7b823b4fe4fed09c56700ad4570c632f"
  },
  {
    "url": "typings/functions.html",
    "revision": "1b3cef4f43ea42945c69f723cc13e80d"
  },
  {
    "url": "typings/generices.html",
    "revision": "c2724d6a1b9ea7c591ab40daf9a892ef"
  },
  {
    "url": "typings/indexSignatures.html",
    "revision": "dd4d09fdc95a11ef44e5ebf5d8aedb78"
  },
  {
    "url": "typings/interfaces.html",
    "revision": "6e0c4fb9b3137762f2ceffd3b74688fc"
  },
  {
    "url": "typings/lib.html",
    "revision": "41a5703a5493dc6c2151e282c7cffc3e"
  },
  {
    "url": "typings/literals.html",
    "revision": "22acb723cc93181bec1a8763355e7add"
  },
  {
    "url": "typings/migrating.html",
    "revision": "e8b1f286755cac164c23da403d841685"
  },
  {
    "url": "typings/mixins.html",
    "revision": "42615f0fa88f4c9674b36f4ebda7ea58"
  },
  {
    "url": "typings/movingTypes.html",
    "revision": "2e6937573f1bf75b2e8170172f7cdb60"
  },
  {
    "url": "typings/neverType.html",
    "revision": "5acce9edd8d4c5d4910142e0d0af8c34"
  },
  {
    "url": "typings/overview.html",
    "revision": "78297d116e4706a43e3988bb7074eebb"
  },
  {
    "url": "typings/readonly.html",
    "revision": "2f9f9bf7b5475ac38a8aa93894c17428"
  },
  {
    "url": "typings/thisType.html",
    "revision": "03d05aaff8e310cabe43c43e256e880c"
  },
  {
    "url": "typings/typeAssertion.html",
    "revision": "419d07e95d1115f81ac0625a3fd9695f"
  },
  {
    "url": "typings/typeCompatibility.html",
    "revision": "276e155377ab0c388ee2f21d32e6c2c2"
  },
  {
    "url": "typings/typeGuard.html",
    "revision": "ef97dd35664850c49d1ea397ac88abb1"
  },
  {
    "url": "typings/typeInference.html",
    "revision": "fc643fda0b8194c918b3410902d178aa"
  },
  {
    "url": "typings/types.html",
    "revision": "fb0b2ee1ee3a3def175a46cfd4126f79"
  },
  {
    "url": "wechat.jpg",
    "revision": "36c771d59ed899617f1e6c49f9ee812f"
  },
  {
    "url": "zhifubao.jpg",
    "revision": "2a94b23f0d0d6d55befc332742849b67"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
