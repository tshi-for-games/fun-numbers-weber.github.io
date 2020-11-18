'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "53d9769458f508f5cbf8c2145581fbbe",
"assets/assets/fonts/DG-Jory-Reg.ttf": "48ba04f5e773678542eeba162bf2243b",
"assets/assets/icon/icon.png": "ae134c0b8d7e9c4318c4f1bcaa0cb2e3",
"assets/assets/icon/splash.png": "52ccb6efa8cdf43b05915efa420abbfc",
"assets/assets/images/backgrounds/bg3.jpeg": "2ffcb2d8999ecca53181b05538892daa",
"assets/assets/images/letters%2520and%2520numbers%2520icon/arabic%2520numbers.PNG": "db3460fb15b8422b4b14b0e0bf32ae6d",
"assets/assets/images/letters%2520and%2520numbers%2520icon/arabicNumber%2520sheet.png": "82cbc18de5f467e3ce3a6e0279e92902",
"assets/assets/images/letters%2520and%2520numbers%2520icon/english%2520numbers.PNG": "b12d315a187db3eac36696bd2a37e38a",
"assets/assets/images/letters%2520and%2520numbers%2520icon/englishNumber%2520sheet.png": "3a7128e51eb00c909ff96ef7ad749796",
"assets/assets/images/logo/draw.png": "f4460ca87560299e586cc01795e6a029",
"assets/assets/images/logo/email.png": "284967c9ef1f579c3c66275cb4dd0e50",
"assets/assets/images/logo/empty.png": "179624ca13b07073114a645409b1a6d7",
"assets/assets/images/logo/eraser.png": "8b4a06a17cea18482d65cc6e26952043",
"assets/assets/images/logo/instagram.png": "a0f76fb4fd23cd3897a7157cdece15b6",
"assets/assets/images/logo/loud-speaker.png": "31877a3c3d39ac8a78a8c08a875f9eb5",
"assets/assets/images/logo/play%2520gif.png": "973d697a2e7cfe59987d0e2243fef726",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/1.png": "c8261a14245deb7d1a64e3ebb4edc81c",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/10.png": "6896e7e9ae7d5a985dd9a22ed6067e1e",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/11.png": "8f9d173e44f98801ae689945b7cea726",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/12.png": "56fb85f5bf6096e228efeb8098cbfa8b",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/13.png": "09169c71bb268e06561ed7a1efb53f90",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/14.png": "01e68a7d17217a87f9d16cac69ce948f",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/15.png": "6a0fa5011020b84fc86ece7c009cf29f",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/16.png": "f68961e21e5933a880471419c203a6ea",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/17.png": "68ce048b47ffd8021d1b30326fc75c16",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/18.png": "560b95bcbd6fe03f9606d1679343ce2f",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/19.png": "91fcc53b50651daa1e36acf749562bfe",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/2.png": "3e202a0938a0a75ef071554ea32e714b",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/20.png": "14a2cdc258bdef94dc27e046bf953e88",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/21.png": "3b9ffe04e669d2a509272e2320bebeaa",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/22.png": "4c9af7af5cf9000d884f7ba3de0576c0",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/23.png": "fe1c4688405194dc636300c95bb781ed",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/24.png": "051de22de671e420e0fa2f3d5afab791",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/25.png": "2890af731d2cc2c75499ef5c0e5ab072",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/26.png": "1633f490167fddd55873ce128d67a59a",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/27.png": "72e94efde835bc1a09386cd2dba9d7e6",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/28.png": "d5c7322fc53148fd2fd2288f6e81a621",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/29.png": "35cd408af456bd7f24c0107a55c83de4",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/3.png": "26386ad6433d5bb032c3e43f21a53332",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/30.png": "cd79ea6d73dfa5c6daeab3e21440d43d",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/31.png": "2c53ccb0a1cc750845e939dc2e062620",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/32.png": "a54a542f4eb179e5c6d3e01ce8f26f67",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/33.png": "9685a9e801347c20aaa7ee5b03adfd96",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/34.png": "1340398d8e95e563698e0165a9e0e048",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/35.png": "2a7e872f471523a58083916c1e6c58a9",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/36.png": "911bf1b58ac981ee706fe084bdd360e5",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/37.png": "3f5f4a093ba36ae60821026cea1f2f48",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/4.png": "f5ddcc275e0751754cb27a18e2423f79",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/5.png": "2d506e8ff5b899b88452c595ceceb7fd",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/6.png": "74ab0c278cd8232a692ac01f644f884e",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/7.png": "368c9734a331341d31a375c0b3ebc7c8",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/8.png": "7eb31641af1f29dc4bd812f919d2bb96",
"assets/assets/images/numbers/arabic%2520numbers/drawing%2520images/9.png": "647b8940cf0b5ab3262541090c31f9de",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/1.gif": "88e86d2c6d388aefa56e57bd84075292",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/10.gif": "166d78b05126dc24288d9efba352ee4a",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/11.gif": "0529545208edaf38d6ba68064a34b8db",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/12.gif": "656e5fd551b69904c9d8d734cc8c8726",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/13.gif": "30e488f3e0cdd82ecf71b001b6ddc709",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/14.gif": "00fcea45e938f17573d7f48955b6cf41",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/15.gif": "38ac1208f486de851a22a39e01349248",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/16.gif": "3c7d1edba58799fc90e8f09b26aa58ba",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/17.gif": "77b5d7c42bf6a8c66d75fbcf787f707f",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/18.gif": "5ee04495b0c3cedc945e590aeadb6e67",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/19.gif": "3b500a188127d9a7250c138b5c3921b2",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/2.gif": "bc6ce08cfb0507bf422bb2f5110c38b0",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/20.gif": "f8f62ac7d0cb0e0bb439cb6b7732bea7",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/21.gif": "9995ba2d885a5691fdba32fc799751c1",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/22.gif": "7d5138563dc8000d26bfa3736d6f2aa5",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/23.gif": "e45381ea00d4af320bfe4b96bfc86145",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/24.gif": "7c92758da134dbf8c5423660f3a14866",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/25.gif": "d1294e2078b8d5ab670a26cca86e2ac9",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/26.gif": "3b0204230234b493cc3c33b5766f4d2b",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/27.gif": "a7a14dc292d049f77bc35255f2c02ee4",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/28.gif": "74774e3bd5fd2016c35ee264f78f8fdc",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/29.gif": "cce62238e0897fe4d5d2f54e680f7108",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/3.gif": "1e7af3c0c7e6b0565aa6b800f0462a13",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/30.gif": "4b0a4cdcdac97cde60ee5c9932d221eb",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/31.gif": "b71f684085675ff2e773ffb65bc58c2a",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/32.gif": "5af70067cba9b99bffe690d1b90bac67",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/33.gif": "d56ef5f493a2a2ac191ca2c0144e1dd0",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/34.gif": "3330a796c84b8019bfd431b4cc7699f5",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/35.gif": "4463fbed9f5c75563c55485a8fcc3dc5",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/36.gif": "8f69374e14e6af7c5fb1f4b3f8550402",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/37.gif": "0cce9fe9f737278ae5597e97f459e370",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/4.gif": "c6bda3d0becf1ee966a08eb4fadf9ffb",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/5.gif": "d37c142a4e6961815a22f6f2b2c313be",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/6.gif": "c71de3eb0f513d9887107837454c78f3",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/7.gif": "971e67a25a4453d7e6114469f8a427b5",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/8.gif": "b5db5f7a15d51030f242c2dc15dc072d",
"assets/assets/images/numbers/arabic%2520numbers/dynamic%2520images/9.gif": "95732f8ae80a6848b5c1b7d74160a454",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/1.png": "67e05887ac97a50644606e4434eaa782",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/10.png": "b89b0196607e65c3413bc444ea793a92",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/11.png": "95760b966a188ea3cecb606c0fc6541c",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/12.png": "1d2684c9a22f679ac9457fb428f844b2",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/13.png": "3e3f8f6e12878c85d0f9a152910097ec",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/14.png": "cd31c82fd1e3d9eb27868b1ff25cb721",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/15.png": "021b21940e1565608ac1dbc56d8c5cb7",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/16.png": "75b0ba7edc4722c2c3462ddca4fd68e1",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/17.png": "e16bfa15f518e3d2adcbaf362442d521",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/18.png": "fd15cc9c0face6e745f56b5fde051b91",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/19.png": "d49cb4eb0346ceea6318cb628cab1c73",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/2.png": "118ca16b866ffa6623305f581085c5cd",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/20.png": "28683f5b28beed93b7c9151bd050ede1",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/21.png": "285a09b2644f6214fc4db4906476eeca",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/22.png": "dc5b8084e04ef5225963ff943a97a132",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/23.png": "6c493fe783f47be74a5e831a43a7bd4e",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/24.png": "8ae1edce525a4bb37a094055c13369eb",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/25.png": "a2d19a099eb1b95dcb353d8ba2ca9371",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/26.png": "fbfe006e8ee8b28b38865ce42b55598c",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/27.png": "3579132a37746826e8e16905065492cc",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/28.png": "3d897bee26afdf98f7fab2787e60057b",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/29.png": "8443e8942deeee715ef28ebfbfbc1e8d",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/3.png": "388a2040323ae5ce293ed05608f8061c",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/30.png": "51408c0ed44525a4819c9eec93eb0743",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/31.png": "dad85990c32c63e63b8260bf66ab9964",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/32.png": "839ec7fbec5102241dd05e6b45a42249",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/33.png": "1e2295e5a1e285ea96e3c85b4410624b",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/34.png": "96354588a9ebbf35b8f0094a69420b9c",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/35.png": "d670f7bd8e3f14119bfea6b5f127e6a3",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/36.png": "7ba23fdfea6051d5299a8e19a217708a",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/37.png": "ec5b995bf699ec6e841c9aff4fee3f77",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/4.png": "f609513f827f3a0dd7eb6556749b2f29",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/5.png": "123c74d532a498430570b1ac32ca1146",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/6.png": "03b189933560982d2f41ee3caf76c38a",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/7.png": "cc986e85199addfa01ffa2bb698532bd",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/8.png": "8b2509b3472e1257913d503a2597bc55",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/hover%2520images/9.png": "6f4494ef3fef97af680f044acbdad2c0",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/1.png": "5fe58a70cbf054e97b1d42b934278e98",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/10.png": "c8ec6e77aa2277b2c3a1d466d070beae",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/11.png": "22211697bec9e2c6e30aaecbb9ffb99a",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/12.png": "9272c153e39a9d4892f4315159234974",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/13.png": "10edb8efbf6d6608271379c3dd0bfefe",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/14.png": "9509b858cecba436e8fe707023f8cfba",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/15.png": "6f6995823f935684e5ec0cfd369f49fe",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/16.png": "c88587f791fb5dee5b0660495db565b8",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/17.png": "24125da5dc58fb10fa776c7ea2cb683d",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/18.png": "60d38729f69d839278a27abb91a3ef37",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/19.png": "c29942770c10f8a7bb4a8973db5c0757",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/2.png": "eaea4d28cb546ea5eb6efa8b35ff53a4",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/20.png": "107d212e6f2b7003cfc22b7327f53e01",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/21.png": "06fb035c63a8b0511e2e1b0dc639cd44",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/22.png": "5a1fc96155c5d13f9f7db9d4cccdbca4",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/23.png": "28120f2ce9ed537ee5d8e94f6f1eb5e6",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/24.png": "3130bf8b4347f70a387b26b59488a961",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/25.png": "2638060e976f2f8b1069dfb7160f1a9c",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/26.png": "50491eb3a8c83f4aee3fea2ad1f9c09a",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/27.png": "f19f474b6ac5bca6a21eca1d3276d4b8",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/28.png": "e1492d9a679c8bd6c8cd2430099fe207",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/29.png": "b3d18ec14ce79745fd98bcdbe389be54",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/3.png": "a70be9db09a009ecf92c7eefacf5b5bc",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/30.png": "6a7747768a8f2e6d1bc1a9396425c14b",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/31.png": "1acdc63e4bb38326cbe9ac1b6d485a50",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/32.png": "404680d2eb3bf6bf9eeaa6ca9a387406",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/33.png": "07713232394c748af9e9a2a3a3f2eadf",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/34.png": "a49d8299f2600f14e2b8310a726270d1",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/35.png": "f96c130d65aaee620ff08b63f72ae39f",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/36.png": "412fbab16a91caeae79e750df3021c89",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/37.png": "df9ccd75d193cfb3b7653dfc38a9cb85",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/4.png": "cb60c1ae005198238689b1b10dd850dd",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/5.png": "8318753f1032f6a19f623876a5189384",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/6.png": "96ff455d6c966717b5a4b84aef1c46ec",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/7.png": "d6542e260c7d024aae9923221aa69143",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/8.png": "641790cddcc19df779a35e90b19c577b",
"assets/assets/images/numbers/arabic%2520numbers/static%2520images/png%2520images/9.png": "60b2b6262609378887bcc5083b805f99",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/1.png": "07dd5f9d4b0b2e0076e0751d36634523",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/10.png": "ad41c641f345838842ed904688850ed6",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/11.png": "77670e2ad8ab6552aca4324a699fd17b",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/12.png": "a1f3f60589fd496d16e7e6249836a2b6",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/13.png": "d55f257abf09f866dcf09166c8a9ad7a",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/14.png": "e6ec71e111befea660c8f4f76c195e96",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/15.png": "88f7b88b19afc22978541cb150999330",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/16.png": "f707bab9e5ff45c72b8e5a462c9b7505",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/17.png": "04705c49d01865d9824c9653a7bdfda8",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/18.png": "73c8e20a2d7350122b2ca26051ec2fb9",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/19.png": "fedcb4b5191d190fe8c60f9c0d14c9f4",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/2.png": "7e8e7662b3b5c8938899ed12867f2ad5",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/20.png": "8475a2e7dbbabd731b3dc49e9e07a23c",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/21.png": "1b85f3814b1d4ef14746f8ee73d4e3eb",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/22.png": "791040c468efe7e5aed360b0384f55bf",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/23.png": "882d0378ddb77aad172214587e45c11a",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/24.png": "3bb52ad8c8a117f9654a9a0e11c557b5",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/25.png": "de1b162ef77ff365613dacf1d14046da",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/26.png": "595c25fc7c1fabc12fe535fc30d180ef",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/27.png": "5354653a2236d46810e29ecf798a852e",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/28.png": "ceecb281d4ba4cb27d1259e465928fbf",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/29.png": "b0aed35bef334a99f8449540480f1b7c",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/3.png": "4d479e5bdad7e3eed0e849a4f1f62496",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/30.png": "5f52257c044c3c141c5c45e80fc75e77",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/31.png": "7913f56482f055f2110524dc40df282f",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/32.png": "60c082cdf44953561e54c1cad4baab35",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/33.png": "2da19806cd9e2bac2f0fc4b64b99eea9",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/34.png": "700f9a3bcdfdae3a87546387b0603402",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/35.png": "fe50facc1119eaed941cef8a833f0408",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/36.png": "87f453e43fb9adf686d38300e918d98b",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/37.png": "72e8b1cdf8dd451cf497a4385fe199ad",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/4.png": "6c06be09bbe6ce96d1481eff22db134e",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/5.png": "ac1a8c791f2f0ec3559736245d343802",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/6.png": "b5886bd73530e021190b335999bf1c81",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/7.png": "2c28f7d21dc9da087824bc2ccfb2dab3",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/8.png": "03dbf012c981d93d5663c3ca882c33bd",
"assets/assets/images/numbers/english%2520numbers/drawing%2520images/9.png": "621d9292facde13e28234d82b3b39cc0",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/1.gif": "9fd9e75b3d2e159a3462fb34e526842c",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/10.gif": "342f5cb8da961cb45dce1a30d0fa1018",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/11.gif": "52e90ff177eea2c2b39af431f217dc73",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/12.gif": "c7d178a17b5b853088345e77d35afe82",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/13.gif": "532f5682cf6def40f1b42a76813a5bba",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/14.gif": "9c62b13fd0b77adc58d7bba8274687a2",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/15.gif": "2a872175bc9fb0fab32642cb906c05fd",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/16.gif": "0fc2b7612163f0b2ce3060c7fca4df24",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/17.gif": "f05c6e7fffdeffd81d49fd133ef8513b",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/18.gif": "ecd6b4a3b9b3663dcac53ecf5b1ce107",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/19.gif": "9f175587e40384a019fa41b77bfee064",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/2.gif": "0dd2f29cc248ffdcbd14666793be8cf3",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/20.gif": "64e0d739c0b42ced8f515705a5ceebbd",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/21.gif": "e6fca50de0f4601f8864d0b9a333315e",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/22.gif": "076f990aecb60cfa2a8f1b99498eb0f6",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/23.gif": "3f9c3b2f5d0618eb35c0d823e8e3c237",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/24.gif": "cb28c406d09f4bf2cb0491fa38435ac7",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/25.gif": "889d2c3377931a32ba49ebe6841f3368",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/26.gif": "2d2a01257c00e482d1ef44b6eae9a6f4",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/27.gif": "c40b27351a49e669e7b31b985a76c73f",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/28.gif": "628f97f45e4b7b7ef451556f2ac54e94",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/29.gif": "fc9f039f83b72823b6e35d1ac1d48668",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/3.gif": "a7b4d02585eec9600d084012403e7309",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/30.gif": "6cd2eff49880d99ad052a46a9354a22b",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/31.gif": "2fd8db36b9fea252b512c9e97bd8b855",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/32.gif": "1fe8c05b60b775d770d906257c417bc9",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/33.gif": "1c8efd4989fe9bbd7e1aa3fc9e3c2df0",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/34.gif": "1252adf5bcb98ae0b2e826ce4f001b2c",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/35.gif": "8bb7b19f6085e719ac048988425004bd",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/36.gif": "6326434ad3dff970abde66a06f9d6351",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/37.gif": "285ca87e88859729b2880f2bc0b28c2f",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/4.gif": "eb843b367695a0e830f23522ec7beb0b",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/5.gif": "6a112be84636a7ec42faa7246dfad184",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/6.gif": "332135e7f2331d77f04739e8c6e922bc",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/7.gif": "3b6aa3a53a48a283f53ae475a5209ff5",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/8.gif": "8c0ba93516d84fbeb38b929f04651808",
"assets/assets/images/numbers/english%2520numbers/dynamic%2520images/9.gif": "3b1ab95c7635beb8d98ed1963075b6e4",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/1.png": "8456d3bf1215fb1cda4d7c683db45473",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/10.png": "bd791f069c0320dbf3613f36c02c3f10",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/11.png": "24c76c45baac3874b139fe8759dcf678",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/12.png": "5e3b1b070fd76c2007c0b61a36fd8599",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/13.png": "1cb6ee5435658c216fd1136254132951",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/14.png": "c25d52aae1f3ec82e05c0c90ff121196",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/15.png": "81db25b84042103a52f97359ab815001",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/16.png": "66905d88c603e31c3efd75fcef541905",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/17.png": "edecf62e8e59d2c95c3aefaa75bc0e1b",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/18.png": "98067901d36aa1646965e7edeb8bd3e1",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/19.png": "3eed6d8494e8e22a4e637f0520a23e8e",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/2.png": "2dab148f062fb81504670f35d00bf358",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/20.png": "815c866b57172a07b630c7cfe497807a",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/21.png": "712b341ae925f55b165c5e6866f50259",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/22.png": "2b7c06ab4d5d9276da217f3962d3d426",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/23.png": "3648bd3e4cf0439d55eba40ce8a75bd5",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/24.png": "9e5d30ac0a43cb67613ad59a135b1ac6",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/25.png": "ab345e08540099822e0c11e84e73dde0",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/26.png": "6db112bac1651d1f856dd8766605c960",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/27.png": "7b1123cea6327c22ab54e88c4cb21034",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/28.png": "3f47c4a88fc1501339ac3d0f72aef411",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/29.png": "31c6af0913b15daa330a6ecb29302403",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/3.png": "55a8ec14c0b7786d56455fa27a63ea89",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/30.png": "4f3d396bcaec91b9aa0de9b6ba822b31",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/31.png": "973f70d062613f458ed4f0758d62506b",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/32.png": "a6fd0971cfbc8f3e2616634e227e4335",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/33.png": "b45ae5b5e376b31d850704d8a8fc5623",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/34.png": "ad79069b8854952a039d4822c2c4fab2",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/35.png": "0456339524e78bf5ec751e47cfa510eb",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/36.png": "5a3dbc09f9dc6761eaeefee037082dda",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/37.png": "0c5b84988528c425cc0ed43fa8da6d81",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/4.png": "5900bc9847b55d21a80e51343393e060",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/5.png": "0355decbe1b0d52be9a9a087b2de20be",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/6.png": "766c62b5e3191cd9fed6612d79d03f4d",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/7.png": "a4c1d602fb4c86297424505cb45cffe2",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/8.png": "d73cb7370edafde262b9e898494e25a4",
"assets/assets/images/numbers/english%2520numbers/static%2520images/hover%2520images/9.png": "c1058b86cfc40b12375f9ceb9129690f",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/1.png": "0f08c6e7e408a8c6b1d436268cc56434",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/10.png": "482d74ee79620f56998ac7ab589f70fd",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/11.png": "6c169e02c27752e396061c59e3563d10",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/12.png": "f59a231aca64a4a1f94b29bbd1c941aa",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/13.png": "9e52fc6b976b14e3ad284bdb543adea8",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/14.png": "e00e88db0541bda248bc6dd8dbb56837",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/15.png": "0ce9be02598c13363abb9b49aeffffc2",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/16.png": "70a817d567ff3449f004e539c8fa41c3",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/17.png": "e36e8fb618beef3e3332cc69738048ea",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/18.png": "b572e054414a30ae945bcfb6eb3b4fd7",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/19.png": "349ffb17434c2c3290eeae3ce7eae0a3",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/2.png": "1da68f8274fc52dc0619da4539da03d9",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/20.png": "6c38c385dbd8b1e7a1355539bb985737",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/21.png": "2d2e048c291155f774dcfd8b1d7eb200",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/22.png": "8fd4c3fee5d5851a5d716713c9e63ec2",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/23.png": "799039df1a7ff737ddb29a8859bd62c9",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/24.png": "e2f0375cb67f4d9c7da692f45126a1ee",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/25.png": "5774958eeb27b141c0fd90b94e5f1d5f",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/26.png": "161b0c45aecc6dfec6bb2d6bdeb078da",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/27.png": "eba0b84b3cccd9049a6511c9e77ac774",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/28.png": "f941203d659a974c2778a5482d591bea",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/29.png": "9fb8d7dfaf48a7aca1bcd64256197d01",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/3.png": "b96fefc8d9a61e77409d6608377f4c53",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/30.png": "598244a2754d70b55db14bbbbbbf93fd",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/31.png": "c14d106a9c692289b853937701876e03",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/32.png": "1855f71e819380aa87f9d28e3e898d35",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/33.png": "a837ba5f8d7cd01b4127b70331edce8e",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/34.png": "b75312a7cb7263cb7c1bcac5a19829b6",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/35.png": "e32cec09e2e100bd7422bb746fc48ba6",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/36.png": "518df994f11b351373f64df7935ef34c",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/37.png": "7123f1d47b37ff4919f59f2ecfc1e3b7",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/4.png": "7f27addf077df0a43d37e0e2b2f7616b",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/5.png": "65b77756cb7675637e252ec90aa17f82",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/6.png": "f33e48f94fc1bf4363e5e31805eca3d2",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/7.png": "14637340a3d562bb07f62ab538eb91ad",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/8.png": "9fa732057812605c328d154d16943169",
"assets/assets/images/numbers/english%2520numbers/static%2520images/png%2520images/9.png": "7ae660f2887b1c80aa52f834c5d902e0",
"assets/assets/sounds/arabic%2520numbers/1.mp3": "479eba70c2e9a61cae9bb970b13cca5f",
"assets/assets/sounds/arabic%2520numbers/10.mp3": "23af14989dc3b3be15cd567363a54f64",
"assets/assets/sounds/arabic%2520numbers/11.mp3": "d63952fadbc3503e41e630a0fd4576fd",
"assets/assets/sounds/arabic%2520numbers/12.mp3": "64e2a113f6daef508654364efe42d10a",
"assets/assets/sounds/arabic%2520numbers/13.mp3": "65bf1c03416a11ada61a3b0948b0ee7d",
"assets/assets/sounds/arabic%2520numbers/14.mp3": "f68894f1a60d955505ebbd6b6694a3c9",
"assets/assets/sounds/arabic%2520numbers/15.mp3": "aca61f117dff00de9ef6f227db1b15f4",
"assets/assets/sounds/arabic%2520numbers/16.mp3": "004c1db3446d61f7a15db67378fe8d46",
"assets/assets/sounds/arabic%2520numbers/17.mp3": "cc739385caaf4cdd2b94022f50d2b882",
"assets/assets/sounds/arabic%2520numbers/18.mp3": "787b7440b0617730fa68d3c72db8530a",
"assets/assets/sounds/arabic%2520numbers/19.mp3": "d434c29fcd46780b4b39d8caf6980864",
"assets/assets/sounds/arabic%2520numbers/2.mp3": "358c995457d389869f9e2c55214d85a3",
"assets/assets/sounds/arabic%2520numbers/20.mp3": "1f08b05dba1b907019b0a606415f4a77",
"assets/assets/sounds/arabic%2520numbers/21.mp3": "ecaa286cd2a60b65131f51d779fdf44c",
"assets/assets/sounds/arabic%2520numbers/22.mp3": "e0c3a36ec90e354b7157ca1c549716da",
"assets/assets/sounds/arabic%2520numbers/23.mp3": "3f21b0f1c7c6eac944ac176a8704c890",
"assets/assets/sounds/arabic%2520numbers/24.mp3": "2b835be6a431cfe622dac1da831f5ee3",
"assets/assets/sounds/arabic%2520numbers/25.mp3": "fbe7231a35cafe293065e120e9c70f33",
"assets/assets/sounds/arabic%2520numbers/26.mp3": "052ddbd6e42d16eac61b137af251d6fe",
"assets/assets/sounds/arabic%2520numbers/27.mp3": "7560dfa1547d2c4c705f4c31da8dc1ad",
"assets/assets/sounds/arabic%2520numbers/28.mp3": "c046967841b31f26db5b5db0f2ce5876",
"assets/assets/sounds/arabic%2520numbers/29.mp3": "29bdfe64bb91a0968e54f588456449fc",
"assets/assets/sounds/arabic%2520numbers/3.mp3": "7a6fd63c76e3890a9a5ec5492d86a582",
"assets/assets/sounds/arabic%2520numbers/30.mp3": "2fa20b0f62a5b95eebb5c750cb78921f",
"assets/assets/sounds/arabic%2520numbers/31.mp3": "2e3a21649baefce0a490f0c656af9568",
"assets/assets/sounds/arabic%2520numbers/32.mp3": "290337d073bc3184a0275fe316161baa",
"assets/assets/sounds/arabic%2520numbers/33.mp3": "d565c8771990b44b7e5e6ddbf9b24329",
"assets/assets/sounds/arabic%2520numbers/34.mp3": "a59c0233e3c54b733423a5f304c8aa88",
"assets/assets/sounds/arabic%2520numbers/35.mp3": "0ac82b377747350ff32914b4faeb4cb7",
"assets/assets/sounds/arabic%2520numbers/36.mp3": "56e28ab4d6a302f5d744c278999892aa",
"assets/assets/sounds/arabic%2520numbers/37.mp3": "bd6cda3a6b262325b747a253bd01a244",
"assets/assets/sounds/arabic%2520numbers/4.mp3": "6fc04a6227657cec42f8a061b5f562d2",
"assets/assets/sounds/arabic%2520numbers/5.mp3": "9425fa80be2465f8cec048b1cb8ef92c",
"assets/assets/sounds/arabic%2520numbers/6.mp3": "90e8f7c668fa3b168ca1994f2bb5e2ae",
"assets/assets/sounds/arabic%2520numbers/7.mp3": "aeba8f1013379d02d16dad92ad4b67b2",
"assets/assets/sounds/arabic%2520numbers/8.mp3": "a60a61f3d3041a78e573ef27249eb600",
"assets/assets/sounds/arabic%2520numbers/9.mp3": "e065cd6502c4454ffc2537842cb0ff38",
"assets/assets/sounds/effects/click.mp3": "189f953961022e2597cc75c44462a3ad",
"assets/assets/sounds/effects/select%2520color.mp3": "e31dd686d081cec72397502c81d4df57",
"assets/assets/sounds/effects/select.mp3": "60be302375311902cf3617e125a961da",
"assets/assets/sounds/effects/wipe.mp3": "3ec5cfb5e74c4e7ed0e8c812137a7bfe",
"assets/assets/sounds/english%2520numbers/1.mp3": "3129d34746b3db5b808759e46484f16b",
"assets/assets/sounds/english%2520numbers/10.mp3": "55046da58ed816e8a085941e9910b0b2",
"assets/assets/sounds/english%2520numbers/11.mp3": "2afe7c51ed54a2673abdf4dfe4887767",
"assets/assets/sounds/english%2520numbers/12.mp3": "3054853ad74491cc35e9ce658f5bdff4",
"assets/assets/sounds/english%2520numbers/13.mp3": "63b1462ab2c0c5cf42285b33a814c95e",
"assets/assets/sounds/english%2520numbers/14.mp3": "0cc6b6d0ae6912f8ab8ba3694112dde2",
"assets/assets/sounds/english%2520numbers/15.mp3": "0e0ff1fe77e73501a57631cc5a1a2bce",
"assets/assets/sounds/english%2520numbers/16.mp3": "5abbe2793e382946a763b5d7696721e0",
"assets/assets/sounds/english%2520numbers/17.mp3": "1b86cd58826e7c57b291539024781218",
"assets/assets/sounds/english%2520numbers/18.mp3": "76c20614945b2b2014fad0b7d85c3586",
"assets/assets/sounds/english%2520numbers/19.mp3": "1fbea244a4f05d16ec3e57b54aa5b829",
"assets/assets/sounds/english%2520numbers/2.mp3": "e57426d101056ea8fcbfa27b30a06d48",
"assets/assets/sounds/english%2520numbers/20.mp3": "60e80f1cb21a632384e59637b5f58ffd",
"assets/assets/sounds/english%2520numbers/21.mp3": "b78d6765ccbfa952f4f5cb9ddd5628eb",
"assets/assets/sounds/english%2520numbers/22.mp3": "e677297fb8a7994ac317b9f74ba79421",
"assets/assets/sounds/english%2520numbers/23.mp3": "5b822a9da0e30873a07208b163a390c8",
"assets/assets/sounds/english%2520numbers/24.mp3": "df4582eb716752eaffe1fea129af17c1",
"assets/assets/sounds/english%2520numbers/25.mp3": "3f48656df2c1c04fffb35b2145dccc5b",
"assets/assets/sounds/english%2520numbers/26.mp3": "6ee3f4b1e3b6c1f6beaab32b5711cb71",
"assets/assets/sounds/english%2520numbers/27.mp3": "958cc8979394b6eb3908946f7b4e60f0",
"assets/assets/sounds/english%2520numbers/28.mp3": "cd2ee524e1bd8b64381949827a68b94d",
"assets/assets/sounds/english%2520numbers/29.mp3": "dc57cde234f0daac3f510cc3037907aa",
"assets/assets/sounds/english%2520numbers/3.mp3": "6c0c9fa1e0deae42eeaff2fc6fb5ecb3",
"assets/assets/sounds/english%2520numbers/30.mp3": "8d7d9fc6e6d08c10f51b67b33409ce8c",
"assets/assets/sounds/english%2520numbers/31.mp3": "832bf0f146dc69af765a78a5881d2407",
"assets/assets/sounds/english%2520numbers/32.mp3": "6d17ffc5e6130d3792e256c220214ab0",
"assets/assets/sounds/english%2520numbers/33.mp3": "2df94fdbfe3dc11b1002d139bbec0413",
"assets/assets/sounds/english%2520numbers/34.mp3": "88783828d9bcff2bb409928b76af964a",
"assets/assets/sounds/english%2520numbers/35.mp3": "5c80c5711f749f5f8e21e088f88a54da",
"assets/assets/sounds/english%2520numbers/36.mp3": "8604f77a0bf528dbeb82c53405e7abd8",
"assets/assets/sounds/english%2520numbers/37.mp3": "c08c88a308d577f3c991749030c86ec1",
"assets/assets/sounds/english%2520numbers/4.mp3": "a9c560119a4dc54cf9fc4695d331197a",
"assets/assets/sounds/english%2520numbers/5.mp3": "70db9ac4cf4dc1a2c1765070bfa91ff8",
"assets/assets/sounds/english%2520numbers/6.mp3": "5e3f801b5d5a6b2838992fe6ea328e2d",
"assets/assets/sounds/english%2520numbers/7.mp3": "b58545867f653f49dedfac9ed1f0f1fa",
"assets/assets/sounds/english%2520numbers/8.mp3": "28fa4bf2e99ab4497a95e2e5127e55f3",
"assets/assets/sounds/english%2520numbers/9.mp3": "c354ee8bb73d2cdd8ef69f2d8d5cf07a",
"assets/FontManifest.json": "f0d577a0a01e2f3b6025d8452bf3b809",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e2e6b66eb6b7e7a5bb58e23df3a492d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "3ce3c1117b3c6430ff06aeed3e425fd5",
"icons/Icon-192.png": "3ce3c1117b3c6430ff06aeed3e425fd5",
"icons/Icon-512.png": "3ce3c1117b3c6430ff06aeed3e425fd5",
"index.html": "f443777471b9ee6334ef39e035562806",
"/": "f443777471b9ee6334ef39e035562806",
"javascripts/drawcanvas.js": "c3c03adc7432e6ef4a461efc4b46effb",
"javascripts/effects/click.mp3": "189f953961022e2597cc75c44462a3ad",
"javascripts/effects/select%20color.mp3": "e31dd686d081cec72397502c81d4df57",
"javascripts/effects/select.mp3": "60be302375311902cf3617e125a961da",
"javascripts/effects/wipe.mp3": "3ec5cfb5e74c4e7ed0e8c812137a7bfe",
"javascripts/general-commands.js": "d364492caff863af1cbcc4fc8abb417e",
"main.dart.js": "6111ef933b2b872ec86d8252fca64f62",
"manifest.json": "3ce6560d0910e42705a06f8623cd5522",
"version.json": "b68b2f0124745ebbd8d0b1328fb2719e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
