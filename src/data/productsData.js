// src/data/productsData.js
// Data produk untuk kategori dan sub-produk

export const productCategories = [
  {
    key: 'pipefittings',
    name: 'Pipe Fittings',
    products: [
      {
        id: 'pr-1',
        name: 'Bend All Flange 45',
        description: 'Produk Bend All Flange 45, komponen pipa dengan sudut 45 derajat untuk aplikasi industri dan konstruksi.',
        images: [
          '/projects/Bend All Flange 45/compressed_PDMS2646.webp',
          '/projects/Bend All Flange 45/compressed_PDMS2648.webp',
          '/projects/Bend All Flange 45/compressed_PDMS2651.jpg',
        ],
      },
      {
        id: 'pr-2',
        name: 'Bend All Flange 90',
        description: 'Produk Bend All Flange 90, komponen pipa dengan sudut 90 derajat untuk kebutuhan sistem perpipaan.',
        images: [
          '/projects/Bend All Flange 90/compressed_PDMS2537.webp',
          '/projects/Bend All Flange 90/compressed_PDMS2542.webp',
          '/projects/Bend All Flange 90/compressed_PDMS2544.webp',
          '/projects/Bend All Flange 90/compressed_PDMS2614.webp',
          '/projects/Bend All Flange 90/compressed_PDMS2616.webp',
          '/projects/Bend All Flange 90/compressed_PDMS2617.webp',
        ],
      },
      {
        id: 'pr-3',
        name: 'Blind Flange',
        description: 'Blind Flange digunakan untuk menutup ujung pipa, cocok untuk berbagai aplikasi industri.',
        images: [
          '/projects/Blind Flange/compressed_PDMS2532.webp',
          '/projects/Blind Flange/compressed_PDMS2530.webp',
          '/projects/Blind Flange/compressed_PDMS2535.webp',
        ],
      },
      {
        id: 'pr-4',
        name: 'Clamp',
        description: 'Clamp untuk pengikat pipa dan komponen lainnya, memberikan kekuatan dan stabilitas.',
        images: [
          '/projects/Clamp/compressed_PDMS2449 copy.webp',
          '/projects/Clamp/compressed_PDMS2450 copy.webp',
          '/projects/Clamp/compressed_PDMS2455.webp',
        ],
      },
      {
        id: 'pr-5',
        name: 'Clamp Saddle',
        description: 'Clamp Saddle sebagai penyangga pipa pada instalasi industri.',
        images: [
          '/projects/Clamp Saddle/compressed_PDMS2457.webp',
          '/projects/Clamp Saddle/compressed_PDMS2458.webp',
          '/projects/Clamp Saddle/compressed_PDMS2463.webp',
        ],
      },
      {
        id: 'pr-6',
        name: 'Counter Weight Lift',
        description: 'Counter Weight Lift untuk sistem pengangkatan dan penyeimbang beban.',
        images: [
          '/projects/Counter Weight Lift/compressed_PDMS2679.webp',
          '/projects/Counter Weight Lift/compressed_PDMS2680.webp',
          '/projects/Counter Weight Lift/compressed_PDMS2685.webp',
        ],
      },
      {
        id: 'pr-11',
        name: 'Flange Spigot',
        description: 'Flange Spigot untuk sambungan pipa yang presisi.',
        images: [
          '/projects/Flange Spigot/compressed_PDMS2549.webp',
          '/projects/Flange Spigot/compressed_PDMS2551.webp',
          '/projects/Flange Spigot/compressed_PDMS2554.webp',
          '/projects/Flange Spigot/compressed_PDMS2618.webp',
          '/projects/Flange Spigot/compressed_PDMS2619.webp',
          '/projects/Flange Spigot/compressed_PDMS2627.webp',
        ],
      },
      {
        id: 'pr-12',
        name: 'G-Bolt Joint',
        description: 'G-Bolt Joint sebagai pengikat sambungan pipa.',
        images: [
          '/projects/G-Bolt Joint/compressed_PDMS2559.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2560.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2562.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2569.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2572.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2575.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2605.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2606.webp',
          '/projects/G-Bolt Joint/compressed_PDMS2608.webp',
        ],
      },
      {
        id: 'pr-27',
        name: 'G-Bolt Repair',
        description: 'G-Bolt Repair untuk perbaikan sambungan pipa.',
        images: [
          '/projects/G-Bolt Repair/compressed_PDMS1234.webp',
          '/projects/G-Bolt Repair/compressed_PDMS1235.webp',
          '/projects/G-Bolt Repair/compressed_PDMS1236.webp',
        ]
      },
      {
        id: 'pr-20',
        name: 'Pulley',
        description: 'Pulley untuk sistem transmisi daya.',
        images: [
          '/projects/Pulley/compressed_PDMS2638.webp',
          '/projects/Pulley/compressed_PDMS2639.webp',
          '/projects/Pulley/compressed_PDMS2640.webp',
        ],
      },
      {
        id: 'pr-21',
        name: 'Reducer All Flange',
        description: 'Reducer All Flange untuk transisi diameter pipa.',
        images: [
          '/projects/Reducer All Flange/compressed_PDMS2742.webp',
          '/projects/Reducer All Flange/compressed_PDMS2750.webp',
          '/projects/Reducer All Flange/compressed_PDMS2753 copy.webp',
        ],
      },
      {
        id: 'pr-23',
        name: 'Street Box',
        description: 'Street Box sebagai pelindung instalasi bawah tanah.',
        images: [
          '/projects/Street Box/compressed_PDMS2653.webp',
          '/projects/Street Box/compressed_PDMS2657.webp',
          '/projects/Street Box/compressed_PDMS2655.webp',
        ],
      },
      {
        id: 'pr-24',
        name: 'Tee All Flange',
        description: 'Tee All Flange untuk percabangan pipa.',
        images: [
          '/projects/Tee All Flange/compressed_PDMS2710.webp',
          '/projects/Tee All Flange/compressed_PDMS2709.webp',
          '/projects/Tee All Flange/compressed_PDMS2712.webp',
          '/projects/Tee All Flange/compressed_PDMS2721.webp',
        ],
      },
    ],
  },
  {
    key: 'drainage',
    name: 'Drainage',
    products: [
      {
        id: 'pr-7',
        name: 'Deck Drain 1',
        description: 'Deck Drain tipe 1 untuk sistem drainase lantai industri.',
        images: [
          '/projects/Deck Drain 1/compressed_PDMS2733.webp',
          '/projects/Deck Drain 1/compressed_PDMS2732.webp',
          '/projects/Deck Drain 1/compressed_PDMS2737.webp',
        ],
      },
      {
        id: 'pr-8',
        name: 'Deck Drain 2',
        description: 'Deck Drain tipe 2 untuk kebutuhan drainase lantai.',
        images: [
          '/projects/Deck Drain 2/compressed_PDMS2688.webp',
          '/projects/Deck Drain 2/compressed_PDMS2687.webp',
          '/projects/Deck Drain 2/compressed_PDMS2698.webp',
        ],
      },
      {
        id: 'pr-9',
        name: 'Deck Drain 3',
        description: 'Deck Drain tipe 3, solusi drainase lantai yang efisien.',
        images: [
          '/projects/Deck Drain 3/compressed_PDMS2727.webp',
          '/projects/Deck Drain 3/compressed_PDMS2723.webp',
          '/projects/Deck Drain 3/compressed_PDMS2728.webp',
        ],
      },
      {
        id: 'pr-13',
        name: 'Grill',
        description: 'Grill untuk ventilasi dan proteksi pada sistem industri.',
        images: [
          '/projects/Grill/compressed_PDMS2706.webp',
          '/projects/Grill/compressed_PDMS2704.webp',
          '/projects/Grill/compressed_PDMS2705.webp',
        ],
      },
      {
        id: 'pr-22',
        name: 'Roof Drain',
        description: 'Roof Drain untuk sistem drainase atap bangunan.',
        images: [
          '/projects/Roof Drain/compressed_PDMS2633.webp',
          '/projects/Roof Drain/compressed_PDMS2636.webp',
          '/projects/Roof Drain/compressed_PDMS2635.webp',
        ],
      },
    ]
  },
  {
    key: 'construction',
    name: 'Construction',
    products: [
      {
        id: 'pr-18',
        name: 'Jacknut 1',
        description: 'Jacknut tipe 1 sebagai pengikat komponen.',
        images: [
          '/projects/Jacknut 1/compressed_PDMS2481.webp',
          '/projects/Jacknut 1/compressed_PDMS2485.webp',
          '/projects/Jacknut 1/compressed_PDMS2482.webp',
        ],
      },
      {
        id: 'pr-19',
        name: 'Jacknut 2',
        description: 'Jacknut tipe 2 untuk aplikasi pengikatan.',
        images: [
          '/projects/Jacknut 2/compressed_PDMS2490.webp',
          '/projects/Jacknut 2/compressed_PDMS2492.webp',
          '/projects/Jacknut 2/compressed_PDMS2493.webp',
        ],
      },
      
      {
        id: 'pr-25',
        name: 'Wingnut 1',
        description: 'Wingnut tipe 1 untuk penguncian komponen.',
        images: [
          '/projects/Wingnut 1/compressed_PDMS2466.webp',
          '/projects/Wingnut 1/compressed_PDMS2467.webp',
          '/projects/Wingnut 1/compressed_PDMS2468.webp',
        ],
      },
      {
        id: 'pr-26',
        name: 'Wingnut 2',
        description: 'Wingnut tipe 2 untuk aplikasi penguncian.',
        images: [
          '/projects/Wingnut 2/compressed_PDMS2476.webp',
          '/projects/Wingnut 2/compressed_PDMS2479.webp',
          '/projects/Wingnut 2/compressed_PDMS2477.webp',
        ],
      },
    ]
  },
  {
    key: 'automotive',
    name: 'Automotive',
    products: [
      {
        id: 'pr-14',
        name: 'Hanger Bracket',
        description: 'Hanger Bracket sebagai penyangga pipa dan komponen lainnya.',
        images: [
          '/projects/Hanger Bracket/compressed_PDMS2582.webp',
          '/projects/Hanger Bracket/compressed_PDMS2583.webp',
          '/projects/Hanger Bracket/compressed_PDMS2586.webp',
        ],
      },
      {
        id: 'pr-15',
        name: 'Hanger Helper',
        description: 'Hanger Helper untuk membantu pemasangan pipa.',
        images: [
          '/projects/Hanger Helper/compressed_PDMS2510.webp',
          '/projects/Hanger Helper/compressed_PDMS2511.webp',
          '/projects/Hanger Helper/compressed_PDMS2513.webp',
        ],
      },
      {
        id: 'pr-16',
        name: 'Hanger Helper 1',
        description: 'Hanger Helper tipe 1 untuk aplikasi khusus.',
        images: [
          '/projects/Hanger Helper 1/compressed_PDMS2521.webp',
          '/projects/Hanger Helper 1/compressed_PDMS2518.webp',
          '/projects/Hanger Helper 1/compressed_PDMS2516.webp',
        ],
      },
      {
        id: 'pr-17',
        name: 'Hanger Helper 2',
        description: 'Hanger Helper tipe 2 untuk kebutuhan instalasi.',
        images: [
          '/projects/Hanger Helper 2/compressed_PDMS2525.webp',
          '/projects/Hanger Helper 2/compressed_PDMS2526.webp',
          '/projects/Hanger Helper 2/compressed_PDMS2529.webp',
        ],
      },
    ]
  },
  {
    key: 'heavyequip',
    name: 'Heavy Equipment',
    products: [
      {
        id: 'pr-10',
        name: 'Excavator Tooth',
        description: 'Excavator Tooth sebagai komponen alat berat untuk penggalian.',
        images: [
          '/projects/Excavator Tooth/compressed_PDMS2766.webp',
          '/projects/Excavator Tooth/compressed_PDMS2768.webp',
          '/projects/Excavator Tooth/compressed_PDMS2761.webp',
        ],
      },
    ]
  },
  {
    key: 'mining',
    name: 'Mining',
    products: []
  },

];
