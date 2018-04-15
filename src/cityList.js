const cityList = [
{
    "id": 1614875,
    "name": "Ban Nong Yao",
    "country": "TH",
    "coord": {
      "lon": 100.466667,
      "lat": 14.88333
    }
  },
  {
    "id": 8056564,
    "name": "Al Amān",
    "country": "AE",
    "coord": {
      "lon": 54.423531,
      "lat": 24.432261
    }
  },
  {
    "id": 6800035,
    "name": "Panpo’bon-dong",
    "country": "KR",
    "coord": {
      "lon": 126.987297,
      "lat": 37.506329
    }
  },
  {
    "id": 7294501,
    "name": "Colwall",
    "country": "GB",
    "coord": {
      "lon": -2.37469,
      "lat": 52.076328
    }
  },
  {
    "id": 2652518,
    "name": "Colwall",
    "country": "GB",
    "coord": {
      "lon": -2.38182,
      "lat": 52.078709
    }
  },
  {
    "id": 7001297,
    "name": "Gangxia",
    "country": "CN",
    "coord": {
      "lon": 114.061363,
      "lat": 22.540331
    }
  },
  {
    "id": 1899371,
    "name": "Qingyu",
    "country": "CN",
    "coord": {
      "lon": 107.178787,
      "lat": 32.21571
    }
  },
  {
    "id": 1254447,
    "name": "Timurnī",
    "country": "IN",
    "coord": {
      "lon": 77.216667,
      "lat": 22.366671
    }
  },
  {
    "id": 6539673,
    "name": "Livo",
    "country": "IT",
    "coord": {
      "lon": 9.30414,
      "lat": 46.168491
    }
  },
  {
    "id": 3372490,
    "name": "Valverde",
    "country": "PT",
    "coord": {
      "lon": -25.133329,
      "lat": 36.950001
    }
  },
  {
    "id": 7532936,
    "name": "Wisznia Mała",
    "country": "PL",
    "coord": {
      "lon": 17.030199,
      "lat": 51.225399
    }
  },
  {
    "id": 7874460,
    "name": "Krzyżanowice",
    "country": "PL",
    "coord": {
      "lon": 17.050739,
      "lat": 51.175251
    }
  },
  {
    "id": 587977,
    "name": "Väänikvere",
    "country": "EE",
    "coord": {
      "lon": 26.398331,
      "lat": 58.513611
    }
  },
  {
    "id": 3507304,
    "name": "El Hoyito",
    "country": "DO",
    "coord": {
      "lon": -69.966011,
      "lat": 19.416969
    }
  },
  {
    "id": 2814226,
    "name": "Wanne-Eickel",
    "country": "DE",
    "coord": {
      "lon": 7.16667,
      "lat": 51.533329
    }
  },
  {
    "id": 2932026,
    "name": "Eickelerbruch",
    "country": "DE",
    "coord": {
      "lon": 7.16667,
      "lat": 51.51667
    }
  },
  {
    "id": 3197263,
    "name": "Krivaja",
    "country": "HR",
    "coord": {
      "lon": 16.799999,
      "lat": 45.716671
    }
  },
  {
    "id": 2641631,
    "name": "New Hunstanton",
    "country": "GB",
    "coord": {
      "lon": 0.49211,
      "lat": 52.936531
    }
  },
  {
    "id": 2768815,
    "name": "Pimpfing",
    "country": "AT",
    "coord": {
      "lon": 13.55352,
      "lat": 48.34267
    }
  },
  {
    "id": 705797,
    "name": "Kirovskoye",
    "country": "UA",
    "coord": {
      "lon": 38.363239,
      "lat": 48.148251
    }
  },
  {
    "id": 6749251,
    "name": "Dongbuzi",
    "country": "TW",
    "coord": {
      "lon": 121.306458,
      "lat": 25.00996
    }
  },
  {
    "id": 1673200,
    "name": "Guomin",
    "country": "TW",
    "coord": {
      "lon": 121.616669,
      "lat": 24
    }
  },
  {
    "id": 1672222,
    "name": "Huiyaozi",
    "country": "TW",
    "coord": {
      "lon": 121.12825,
      "lat": 22.76885
    }
  },
  {
    "id": 693577,
    "name": "Svyatohirs’k",
    "country": "UA",
    "coord": {
      "lon": 37.567081,
      "lat": 49.0382
    }
  },
  {
    "id": 705798,
    "name": "Kirovs’ke",
    "country": "UA",
    "coord": {
      "lon": 33.077702,
      "lat": 45.54504
    }
  },
  {
    "id": 7280714,
    "name": "Colonia Roma",
    "country": "MX",
    "coord": {
      "lon": -99.163048,
      "lat": 19.41819
    }
  },
  {
    "id": 1006919,
    "name": "Ebenhaezer",
    "country": "ZA",
    "coord": {
      "lon": 28.283331,
      "lat": -28.383329
    }
  },
  {
    "id": 2755862,
    "name": "Fort",
    "country": "NL",
    "coord": {
      "lon": 6.38611,
      "lat": 52.651669
    }
  },
  {
    "id": 3463909,
    "name": "Estaca",
    "country": "BR",
    "coord": {
      "lon": -54.533329,
      "lat": -20.299999
    }
  },
  {
    "id": 2950908,
    "name": "Benzhausen",
    "country": "DE",
    "coord": {
      "lon": 7.81667,
      "lat": 48.049999
    }
  },
  {
    "id": 2757698,
    "name": "Dedemsvaart",
    "country": "NL",
    "coord": {
      "lon": 6.45833,
      "lat": 52.599998
    }
  },
  {
    "id": 5972930,
    "name": "Hazlet",
    "country": "CA",
    "coord": {
      "lon": -108.60141,
      "lat": 50.400082
    }
  },
  {
    "id": 2900248,
    "name": "Holsterhausen",
    "country": "DE",
    "coord": {
      "lon": 7.18333,
      "lat": 51.533329
    }
  },
  {
    "id": 2932029,
    "name": "Eickel",
    "country": "DE",
    "coord": {
      "lon": 7.18333,
      "lat": 51.51667
    }
  },
  {
    "id": 2784102,
    "name": "Wanne",
    "country": "BE",
    "coord": {
      "lon": 5.92083,
      "lat": 50.355
    }
  },
  {
    "id": 2643273,
    "name": "Lytham",
    "country": "GB",
    "coord": {
      "lon": -2.96293,
      "lat": 53.73695
    }
  },
  {
    "id": 5908999,
    "name": "Bristol",
    "country": "CA",
    "coord": {
      "lon": -76.466103,
      "lat": 45.533409
    }
  },
  {
    "id": 1880242,
    "name": "Somapah Serangoon",
    "country": "SG",
    "coord": {
      "lon": 103.883331,
      "lat": 1.36667
    }
  },
  {
    "id": 7910261,
    "name": "Woodthorpe",
    "country": "GB",
    "coord": {
      "lon": -1.12867,
      "lat": 52.988991
    }
  },
  {
    "id": 6449590,
    "name": "Autreville-sur-la-Renne",
    "country": "FR",
    "coord": {
      "lon": 4.97917,
      "lat": 48.117222
    }
  },
  {
    "id": 2978219,
    "name": "Saint-Martin-sur-la-Renne",
    "country": "FR",
    "coord": {
      "lon": 4.95387,
      "lat": 48.145119
    }
  },
  {
    "id": 1507220,
    "name": "Dovol’noye",
    "country": "RU",
    "coord": {
      "lon": 79.667267,
      "lat": 54.496498
    }
  },
  {
    "id": 1438738,
    "name": "Ḩamāmak",
    "country": "AF",
    "coord": {
      "lon": 61.87384,
      "lat": 31.705509
    }
  },
  {
    "id": 7622194,
    "name": "Perkampungan Kertih Lima",
    "country": "MY",
    "coord": {
      "lon": 103.321899,
      "lat": 4.5777
    }
  },
  {
    "id": 6539511,
    "name": "Pieve Tesino",
    "country": "IT",
    "coord": {
      "lon": 11.61029,
      "lat": 46.068211
    }
  },
  {
    "id": 3174159,
    "name": "Malga Quarazza",
    "country": "IT",
    "coord": {
      "lon": 11.6,
      "lat": 46.116669
    }
  },
  {
    "id": 593315,
    "name": "Velžys",
    "country": "LT",
    "coord": {
      "lon": 24.433331,
      "lat": 55.700001
    }
  },
  {
    "id": 3239104,
    "name": "Občina Naklo",
    "country": "SI",
    "coord": {
      "lon": 14.28667,
      "lat": 46.29361
    }
  },
  {
    "id": 3190253,
    "name": "Spodnja Besnica",
    "country": "SI",
    "coord": {
      "lon": 14.31667,
      "lat": 46.26667
    }
  },
  {
    "id": 3502497,
    "name": "La Guamita",
    "country": "DO",
    "coord": {
      "lon": -70.684601,
      "lat": 18.92034
    }
  },
  {
    "id": 2692644,
    "name": "Marieberg",
    "country": "SE",
    "coord": {
      "lon": 18.01667,
      "lat": 59.333328
    }
  },
  {
    "id": 2187821,
    "name": "Manakau",
    "country": "NZ",
    "coord": {
      "lon": 175.216675,
      "lat": -40.716671
    }
  },
  {
    "id": 7910024,
    "name": "Binalong Bay",
    "country": "AU",
    "coord": {
      "lon": 148.311646,
      "lat": -41.251141
    }
  },
  {
    "id": 4011482,
    "name": "Ejido Pantanito",
    "country": "MX",
    "coord": {
      "lon": -111.050003,
      "lat": 30.6
    }
  },
  {
    "id": 3946931,
    "name": "Aznapuquio",
    "country": "PE",
    "coord": {
      "lon": -77.066673,
      "lat": -11.98333
    }
  },
  {
    "id": 3934385,
    "name": "Naranjal",
    "country": "PE",
    "coord": {
      "lon": -77.062218,
      "lat": -11.97278
    }
  },
  {
    "id": 6538777,
    "name": "Casalbore",
    "country": "IT",
    "coord": {
      "lon": 15.00674,
      "lat": 41.233921
    }
  },
  {
    "id": 8131502,
    "name": "Satara Division",
    "country": "IN",
    "coord": {
      "lon": 73.859283,
      "lat": 18.51787
    }
  },
  {
    "id": 8222846,
    "name": "Solnechnaya",
    "country": "RU",
    "coord": {
      "lon": 131.732803,
      "lat": 49.237499
    }
  },
  {
    "id": 3467431,
    "name": "Cantareira",
    "country": "BR",
    "coord": {
      "lon": -46.633331,
      "lat": -23.466669
    }
  },
  {
    "id": 3456225,
    "name": "Freguesia do O",
    "country": "BR",
    "coord": {
      "lon": -46.699829,
      "lat": -23.49877
    }
  },
  {
    "id": 2659921,
    "name": "Les Pâquis",
    "country": "CH",
    "coord": {
      "lon": 6.14676,
      "lat": 46.210491
    }
  },
  {
    "id": 590457,
    "name": "Määltse",
    "country": "EE",
    "coord": {
      "lon": 22.76,
      "lat": 58.852779
    }
  },
  {
    "id": 589004,
    "name": "Ristivälja",
    "country": "EE",
    "coord": {
      "lon": 22.771391,
      "lat": 58.850559
    }
  },
  {
    "id": 3678413,
    "name": "La Merced",
    "country": "CO",
    "coord": {
      "lon": -74.069221,
      "lat": 4.6213
    }
  },
  {
    "id": 6996360,
    "name": "Biria Mādhogarh",
    "country": "IN",
    "coord": {
      "lon": 79.191002,
      "lat": 26.260201
    }
  },
  {
    "id": 1676959,
    "name": "Erqiao",
    "country": "TW",
    "coord": {
      "lon": 120.366669,
      "lat": 22.549999
    }
  },
  {
    "id": 7300019,
    "name": "Looe",
    "country": "GB",
    "coord": {
      "lon": -4.46111,
      "lat": 50.352951
    }
  },
  {
    "id": 3490446,
    "name": "Four Paths",
    "country": "JM",
    "coord": {
      "lon": -77.291687,
      "lat": 17.96953
    }
  },
  {
    "id": 2822234,
    "name": "Tiergarten",
    "country": "DE",
    "coord": {
      "lon": 13.36667,
      "lat": 52.51667
    }
  },
  {
    "id": 6268219,
    "name": "Kobrino",
    "country": "RU",
    "coord": {
      "lon": 30.11417,
      "lat": 59.424721
    }
  },
  {
    "id": 3088150,
    "name": "Prądnik Czerwony",
    "country": "PL",
    "coord": {
      "lon": 19.97604,
      "lat": 50.092468
    }
  },
  {
    "id": 3085041,
    "name": "Śródmieście",
    "country": "PL",
    "coord": {
      "lon": 19.939581,
      "lat": 50.061779
    }
  },
  {
    "id": 7625467,
    "name": "Tūsāsān",
    "country": "IR",
    "coord": {
      "lon": 50.661572,
      "lat": 36.919189
    }
  },
  {
    "id": 3231216,
    "name": "Kerbonne",
    "country": "FR",
    "coord": {
      "lon": -4.5012,
      "lat": 48.383282
    }
  },
  {
    "id": 3231196,
    "name": "Kéroriou",
    "country": "FR",
    "coord": {
      "lon": -4.48333,
      "lat": 48.383331
    }
  },
  {
    "id": 2755996,
    "name": "Etten-Leur",
    "country": "NL",
    "coord": {
      "lon": 4.63726,
      "lat": 51.57056
    }
  },
  {
    "id": 8223990,
    "name": "Kolonaki",
    "country": "GR",
    "coord": {
      "lon": 23.74103,
      "lat": 37.978661
    }
  },
  {
    "id": 6542798,
    "name": "Cavaso del Tomba",
    "country": "IT",
    "coord": {
      "lon": 11.8984,
      "lat": 45.860699
    }
  },
  {
    "id": 6540389,
    "name": "Asolo",
    "country": "IT",
    "coord": {
      "lon": 11.9117,
      "lat": 45.792301
    }
  },
  {
    "id": 6536482,
    "name": "Castelseprio",
    "country": "IT",
    "coord": {
      "lon": 8.86264,
      "lat": 45.715969
    }
  },
  {
    "id": 6542068,
    "name": "Oppido Lucano",
    "country": "IT",
    "coord": {
      "lon": 15.98667,
      "lat": 40.761822
    }
  },
  {
    "id": 6537618,
    "name": "Filiano",
    "country": "IT",
    "coord": {
      "lon": 15.70616,
      "lat": 40.810719
    }
  },
  {
    "id": 3176508,
    "name": "Frusci",
    "country": "IT",
    "coord": {
      "lon": 15.73333,
      "lat": 40.783329
    }
  },
  {
    "id": 663094,
    "name": "Vatra Veche",
    "country": "RO",
    "coord": {
      "lon": 27.966669,
      "lat": 45.26667
    }
  },
  {
    "id": 1665988,
    "name": "Zhigaozhuang",
    "country": "TW",
    "coord": {
      "lon": 120.61602,
      "lat": 24.154539
    }
  },
  {
    "id": 71532,
    "name": "Muḩāfaz̧at Raymah",
    "country": "YE",
    "coord": {
      "lon": 43.666672,
      "lat": 14.63333
    }
  },
  {
    "id": 6940638,
    "name": "As Salafiyah",
    "country": "YE",
    "coord": {
      "lon": 43.821602,
      "lat": 14.6866
    }
  },
  {
    "id": 79657,
    "name": "Al Ḩabīt",
    "country": "YE",
    "coord": {
      "lon": 43.799999,
      "lat": 14.75
    }
  },
  {
    "id": 2864071,
    "name": "Neustadt",
    "country": "DE",
    "coord": {
      "lon": 12.56667,
      "lat": 52.400002
    }
  },
  {
    "id": 1704628,
    "name": "Mabiga",
    "country": "PH",
    "coord": {
      "lon": 120.585098,
      "lat": 15.1917
    }
  },
  {
    "id": 3076348,
    "name": "Dubí",
    "country": "CZ",
    "coord": {
      "lon": 15.41857,
      "lat": 49.533878
    }
  },
  {
    "id": 6811761,
    "name": "Wŏnsŏngil-tong",
    "country": "KR",
    "coord": {
      "lon": 127.161346,
      "lat": 36.809792
    }
  },
  {
    "id": 696416,
    "name": "Potok",
    "country": "UA",
    "coord": {
      "lon": 25.03334,
      "lat": 49.512241
    }
  },
  {
    "id": 6845986,
    "name": "Mironovka",
    "country": "RU",
    "coord": {
      "lon": 44.214001,
      "lat": 54.499802
    }
  },
  {
    "id": 670942,
    "name": "Petroman",
    "country": "RO",
    "coord": {
      "lon": 21.116671,
      "lat": 45.533329
    }
  },
  {
    "id": 2620274,
    "name": "Hjallese",
    "country": "DK",
    "coord": {
      "lon": 10.38499,
      "lat": 55.348289
    }
  },
  {
    "id": 2624596,
    "name": "Årslev",
    "country": "DK",
    "coord": {
      "lon": 9.3485,
      "lat": 55.026772
    }
  },
  {
    "id": 2615199,
    "name": "Pederstrup",
    "country": "DK",
    "coord": {
      "lon": 10.48753,
      "lat": 55.285309
    }
  },
  {
    "id": 2617486,
    "name": "Lombjerg",
    "country": "DK",
    "coord": {
      "lon": 10.48705,
      "lat": 55.229301
    }
  },
  {
    "id": 2622198,
    "name": "Findinge",
    "country": "DK",
    "coord": {
      "lon": 10.4216,
      "lat": 55.21748
    }
  },
  {
    "id": 2618070,
    "name": "Kværndrup",
    "country": "DK",
    "coord": {
      "lon": 10.52549,
      "lat": 55.177521
    }
  },
  {
    "id": 2612594,
    "name": "Stenstrup",
    "country": "DK",
    "coord": {
      "lon": 10.50474,
      "lat": 55.133518
    }
  },
  {
    "id": 2623621,
    "name": "Borup",
    "country": "DK",
    "coord": {
      "lon": 9.50689,
      "lat": 56.922081
    }
  },
  {
    "id": 2750888,
    "name": "Middeldijk",
    "country": "NL",
    "coord": {
      "lon": 4.51667,
      "lat": 51.849998
    }
  },
  {
    "id": 2610888,
    "name": "Understed",
    "country": "DK",
    "coord": {
      "lon": 10.51667,
      "lat": 57.383331
    }
  },
  {
    "id": 2613685,
    "name": "Skodsborg",
    "country": "DK",
    "coord": {
      "lon": 12.57324,
      "lat": 55.822498
    }
  },
  {
    "id": 2613357,
    "name": "Smidstrup",
    "country": "DK",
    "coord": {
      "lon": 12.55787,
      "lat": 55.865688
    }
  },
  {
    "id": 6460975,
    "name": "Rastnik",
    "country": "BG",
    "coord": {
      "lon": 25.283331,
      "lat": 41.400002
    }
  },
  {
    "id": 727762,
    "name": "Rastnik",
    "country": "BG",
    "coord": {
      "lon": 25.283331,
      "lat": 41.400002
    }
  },
  {
    "id": 596826,
    "name": "Murava",
    "country": "LT",
    "coord": {
      "lon": 23.966669,
      "lat": 54.916672
    }
  }
]

export default cityList;
