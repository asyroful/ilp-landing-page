// src/data/productsData.js
// Data produk untuk kategori dan sub-produk

export const productCategories = [
  {
    key: "pipefittings",
    name: "Pipe Fittings",
    products: [
      {
        id: "pr-1",
        name: "Bend All Flange 45°",
        description:
          "Berfungsi untuk mengubah arah aliran fluida atau membelokkan pipa dengan sudut 45° dengan menggunakan sistem flange pada kedua ujungnya",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
        ],
        images: [
          "/projects/Bend All Flange 45/compressed_PDMS2646.webp",
          "/projects/Bend All Flange 45/compressed_PDMS2648.webp",
          "/projects/Bend All Flange 45/compressed_PDMS2651.jpg",
        ],
      },
      {
        id: "pr-2",
        name: "Bend All Flange 90°",
        description:
          "Berfungsi untuk mengubah arah aliran fluida atau membelokkan pipa dengan sudut 90° dengan menggunakan sistem flange pada kedua ujungnya",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Bend All Flange 90/compressed_PDMS2537.webp",
          "/projects/Bend All Flange 90/compressed_PDMS2542.webp",
          "/projects/Bend All Flange 90/compressed_PDMS2544.webp",
          "/projects/Bend All Flange 90/compressed_PDMS2614.webp",
          "/projects/Bend All Flange 90/compressed_PDMS2616.webp",
          "/projects/Bend All Flange 90/compressed_PDMS2617.webp",
        ],
      },
      {
        id: "pr-3",
        name: "Blind Flange",
        description:
          "Berfungsi untuk menutup ujung jalur perpipaan dan menghentikan aliran fluida.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Blind Flange/compressed_PDMS2532.webp",
          "/projects/Blind Flange/compressed_PDMS2530.webp",
          "/projects/Blind Flange/compressed_PDMS2535.webp",
        ],
      },
      {
        id: "pr-4",
        name: "Clamp",
        description:
          "Clamp untuk pengikat pipa dan komponen lainnya, memberikan kekuatan dan stabilitas.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Clamp/compressed_PDMS2449 copy.webp",
          "/projects/Clamp/compressed_PDMS2450 copy.webp",
          "/projects/Clamp/compressed_PDMS2455.webp",
        ],
      },
      {
        id: "pr-5",
        name: "Clamp Saddle",
        description:
          "Berfungsi untuk menambahkan cabang pipa distribusi fluida tanpa perlu memotong atau mengganti pipa lama.",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
          { label: "Mur dan Baut", value: "Carbon Steel" },
          { label: "Washer", value: "Zinc Plated Steel" },
          { label: "Seal O-Ring", value: "NBR" },
        ],
        images: [
          "/projects/Clamp Saddle/compressed_PDMS2457.webp",
          "/projects/Clamp Saddle/compressed_PDMS2458.webp",
          "/projects/Clamp Saddle/compressed_PDMS2463.webp",
        ],
      },
      {
        id: "pr-11",
        name: "Flange Spigot",
        description: "Berfungsi untuk menyambungkan dua bagian sistem perpipaan yang memiliki metode sambungan berbeda, yaitu satu sisi flange dan satu sisi spigot",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Flange Spigot/compressed_PDMS2549.webp",
          "/projects/Flange Spigot/compressed_PDMS2551.webp",
          "/projects/Flange Spigot/compressed_PDMS2554.webp",
          "/projects/Flange Spigot/compressed_PDMS2618.webp",
          "/projects/Flange Spigot/compressed_PDMS2619.webp",
          "/projects/Flange Spigot/compressed_PDMS2627.webp",
        ],
      },
      {
        id: "pr-12",
        name: "G-Bolt Joint",
        description: "Berfungsi untuk menyambungkan dua pipa secara fleksibel tanpa memerlukan pengelasan, terutama untuk perbaikan kebocoran.",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
          { label: "Mur dan Baut", value: "Carbon Steel" },
          { label: "Washer", value: "Zinc Plated Steel" },
          { label: "Seal O-Ring", value: "NBR" },
        ],
        images: [
          "/projects/G-Bolt Joint/compressed_PDMS2559.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2560.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2562.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2569.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2572.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2575.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2605.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2606.webp",
          "/projects/G-Bolt Joint/compressed_PDMS2608.webp",
        ],
      },
      {
        id: "pr-27",
        name: "G-Bolt Repair",
        description: "Berfungsi untuk menyambungkan dua pipa yang disambung dengan system sambungan socket.",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
          { label: "Mur dan Baut", value: "Carbon Steel" },
          { label: "Washer", value: "Zinc Plated Steel" },
          { label: "Seal O-Ring", value: "NBR" },
        ],
        images: [
          "/projects/G-Bolt Repair/compressed_PDMS1234.webp",
          "/projects/G-Bolt Repair/compressed_PDMS1235.webp",
          "/projects/G-Bolt Repair/compressed_PDMS1236.webp",
        ],
      },
      {
        id: "pr-21",
        name: "Reducer All Flange",
        description: "Berfungsi untuk menghubungkan dua pipa yang memiliki ukuran diameter yang berbeda dengan menggunakan system sambungan flange di kedua ujungnya.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Reducer All Flange/compressed_PDMS2742.webp",
          "/projects/Reducer All Flange/compressed_PDMS2750.webp",
          "/projects/Reducer All Flange/compressed_PDMS2753 copy.webp",
        ],
      },
      {
        id: "pr-23",
        name: "Street Box",
        description: "Berfungsi untuk penutup/proteksi akses valve atau meter air di area permukaan jalan/area industry agar aman dan rapih.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Street Box/compressed_PDMS2653.webp",
          "/projects/Street Box/compressed_PDMS2657.webp",
          "/projects/Street Box/compressed_PDMS2655.webp",
        ],
      },
      {
        id: "pr-24",
        name: "Tee All Flange",
        description: "Berfungsi untuk membagi atau memecah aliran fluida dalam sistem perpipaan dengan system penyambungan flange pada ketiga ujungnya.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Tee All Flange/compressed_PDMS2710.webp",
          "/projects/Tee All Flange/compressed_PDMS2709.webp",
          "/projects/Tee All Flange/compressed_PDMS2712.webp",
          "/projects/Tee All Flange/compressed_PDMS2721.webp",
        ],
      },
    ],
  },
  {
    key: "drainage",
    name: "Drainage",
    products: [
      {
        id: "pr-7",
        name: "Deck Drain 1",
        description: "Berfungsi untuk menyaring dan mengalirkan air dari permukaan seperti jembatan, jalan tol, menuju saluran pembuangan air.",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
          { label: "Cover", value: "Grey Cast Iron FC250" },
          { label: "Baut dan Mur", value: "Carbon Steel" },
          { label: "Rantai", value: "Carbon Steel" },
        ],
        images: [
          "/projects/Deck Drain 1/compressed_PDMS2733.webp",
          "/projects/Deck Drain 1/compressed_PDMS2732.webp",
          "/projects/Deck Drain 1/compressed_PDMS2737.webp",
        ],
      },
      {
        id: "pr-8",
        name: "Deck Drain 2",
        description: "Berfungsi untuk menyaring dan mengalirkan air dari permukaan seperti jembatan, jalan tol, menuju saluran pembuangan air.",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
          { label: "Cover", value: "Grey Cast Iron FC250" },
          { label: "Baut dan Mur", value: "Carbon Steel" },
          { label: "Rantai", value: "Carbon Steel" },
        ],
        images: [
          "/projects/Deck Drain 2/compressed_PDMS2688.webp",
          "/projects/Deck Drain 2/compressed_PDMS2687.webp",
          "/projects/Deck Drain 2/compressed_PDMS2698.webp",
        ],
      },
      {
        id: "pr-9",
        name: "Deck Drain 3",
        description: "Berfungsi untuk menyaring dan mengalirkan air dari permukaan seperti jembatan, jalan tol, menuju saluran pembuangan air.",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
          { label: "Cover", value: "Grey Cast Iron FC250" },
          { label: "Baut dan Mur", value: "Carbon Steel" },
          { label: "Rantai", value: "Carbon Steel" },
        ],
        images: [
          "/projects/Deck Drain 3/compressed_PDMS2727.webp",
          "/projects/Deck Drain 3/compressed_PDMS2723.webp",
          "/projects/Deck Drain 3/compressed_PDMS2728.webp",
        ],
      },
      {
        id: "pr-13",
        name: "Grill",
        description: "Berfungsi untuk menyaring dan mengalirkan air menuju saluran drainase.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Grill/compressed_PDMS2706.webp",
          "/projects/Grill/compressed_PDMS2704.webp",
          "/projects/Grill/compressed_PDMS2705.webp",
        ],
      },
      {
        id: "pr-22",
        name: "Roof Drain",
        description: "Berfungsi untuk mencegah genangan air di atap dan mengalirkan air menuju saluran drainase.",
        material: [
          { label: "Body", value: "Grey Cast Iron FC250" },
          { label: "Cover", value: "Grey Cast Iron FC250" }
        ],
        images: [
          "/projects/Roof Drain/compressed_PDMS2633.webp",
          "/projects/Roof Drain/compressed_PDMS2636.webp",
          "/projects/Roof Drain/compressed_PDMS2635.webp",
        ],
      },
    ],
  },
  {
    key: "construction",
    name: "Construction",
    products: [
      {
        id: "pr-18",
        name: "Jacknut 1",
        description: "Berfungsi sebagai mur baut dalam jack base dan U-head yang berfungsi sebagai penopang scaffolding.",
        material: [{ label: "Body", value: "Ductile Iron" }],
        images: [
          "/projects/Jacknut 1/compressed_PDMS2481.webp",
          "/projects/Jacknut 1/compressed_PDMS2485.webp",
          "/projects/Jacknut 1/compressed_PDMS2482.webp",
        ],
      },
      {
        id: "pr-19",
        name: "Jacknut 2",
        description: "Berfungsi sebagai mur baut dalam jack base dan U-head yang berfungsi sebagai penopang scaffolding.",
        material: [{ label: "Body", value: "Ductile Iron" }],
        images: [
          "/projects/Jacknut 2/compressed_PDMS2490.webp",
          "/projects/Jacknut 2/compressed_PDMS2492.webp",
          "/projects/Jacknut 2/compressed_PDMS2493.webp",
        ],
      },

      {
        id: "pr-25",
        name: "Wingnut 1",
        description: "Berfungsi untuk mengencangkan dan menyambungkan beberapa komponen dalam system scaffolding.",
        material: [{ label: "Body", value: "Ductile Iron" }],
        images: [
          "/projects/Wingnut 1/compressed_PDMS2466.webp",
          "/projects/Wingnut 1/compressed_PDMS2467.webp",
          "/projects/Wingnut 1/compressed_PDMS2468.webp",
        ],
      },
      {
        id: "pr-26",
        name: "Wingnut 2",
        description: "Berfungsi untuk mengencangkan dan menyambungkan beberapa komponen dalam system scaffolding.",
        material: [{ label: "Body", value: "Ductile Iron" }],
        images: [
          "/projects/Wingnut 2/compressed_PDMS2476.webp",
          "/projects/Wingnut 2/compressed_PDMS2479.webp",
          "/projects/Wingnut 2/compressed_PDMS2477.webp",
        ],
      },
    ],
  },
  {
    key: "automotive",
    name: "Automotive",
    products: [
      {
        id: "pr-14",
        name: "Hanger Bracket",
        description:
          "Berfungsi untuk mendukung suspensi truk, menopang beban kendaraan, memastikan fungsi pegas daun dengan benar.",
        material: [{ label: "Body", value: "Ductile Iron FD450" }],
        images: [
          "/projects/Hanger Bracket/compressed_PDMS2582.webp",
          "/projects/Hanger Bracket/compressed_PDMS2583.webp",
          "/projects/Hanger Bracket/compressed_PDMS2586.webp",
        ],
      },
      {
        id: "pr-15",
        name: "Hanger Helper 1",
        description: "Berfungsi untuk menambah stabilitas dan meredam getaran suspensi truk.",
        material: [{ label: "Body", value: "Ductile Iron FCD450" }],
        images: [
          "/projects/Hanger Helper/compressed_PDMS2510.webp",
          "/projects/Hanger Helper/compressed_PDMS2511.webp",
          "/projects/Hanger Helper/compressed_PDMS2513.webp",
        ],
      },
      {
        id: "pr-16",
        name: "Hanger Helper 2",
        description: "Berfungsi untuk menambah stabilitas dan meredam getaran suspensi truk.",
        material: [{ label: "Body", value: "Ductile Iron FD450" }],
        images: [
          "/projects/Hanger Helper 1/compressed_PDMS2521.webp",
          "/projects/Hanger Helper 1/compressed_PDMS2518.webp",
          "/projects/Hanger Helper 1/compressed_PDMS2516.webp",
        ],
      },
      {
        id: "pr-17",
        name: "Hanger Helper 3",
        description: "Berfungsi untuk menambah stabilitas dan meredam getaran suspensi truk.",
        material: [{ label: "Body", value: "Ductile Iron FCD450" }],
        images: [
          "/projects/Hanger Helper 2/compressed_PDMS2525.webp",
          "/projects/Hanger Helper 2/compressed_PDMS2526.webp",
          "/projects/Hanger Helper 2/compressed_PDMS2529.webp",
        ],
      },
    ],
  },
  {
    key: "heavyequip",
    name: "Heavy Equipment",
    products: [
      {
        id: "pr-10",
        name: "Excavator Tooth",
        description:
          "Berfungsi untuk menggali, mengoyak dan mengangkat material.",
        material: [{ label: "Body", value: "Alloy Steel" }],
        images: [
          "/projects/Excavator Tooth/compressed_PDMS2766.webp",
          "/projects/Excavator Tooth/compressed_PDMS2768.webp",
          "/projects/Excavator Tooth/compressed_PDMS2761.webp",
        ],
      },
    ],
  },
  {
    key: "mining",
    name: "Mining",
    products: [],
  },
  {
    key: "other",
    name: "Other",
    products: [
      {
        id: "pr-21",
        name: "Pulley",
        description: "Berfungsi untuk mentransmisikan putaran dari satu poros ke poros lain, mengubah arah gaya dan mengatur kecepatan serta torsi.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Pulley/compressed_PDMS2638.webp",
          "/projects/Pulley/compressed_PDMS2639.webp",
          "/projects/Pulley/compressed_PDMS2640.webp",
        ],
      },
      {
        id: "pr-6",
        name: "Counter Weight Lift",
        description:
          "Berfungsi sebagai beban untuk mengimbangi berat kabin lift dan berat penumpang lift.",
        material: [{ label: "Body", value: "Grey Cast Iron FC250" }],
        images: [
          "/projects/Counter Weight Lift/compressed_PDMS2679.webp",
          "/projects/Counter Weight Lift/compressed_PDMS2680.webp",
          "/projects/Counter Weight Lift/compressed_PDMS2685.webp",
        ],
      },
    ],
  }
];
