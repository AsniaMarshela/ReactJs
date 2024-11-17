export const getAllProducts = () => {
  return [
    {
      id: 'Book1',
      slug: 'solar plexus',
      name: "The Secret Of Solar Plexus",
      category: 'Best Seller',
      price: 35_100,
      stock: 2,
      imageUrl: '/assets/images/solar plexus.jpg',
      description: `MANUSIA MEMILIKI EMPAT OTAK, dan bukan hanya satu otak seperti yang diyakini secara umum. Empat otak manusia yang masing-masing memiliki karakteristik ciri khas tersendiri, tugas dan fungsinya itu adalah: (1) Serebrum; (2) Serebellum; (3) Medula Oblongata; dan (4) Solar Plexus, atau Otak Perut.
Adapun susunan dan tugas serta fungsi masing-masing otak Manusia ini adalah:
Serebrum, biasa disebut juga otak besar. Serebrum adalah bagian yang lebih tinggi dan depan dari “otak” yang terletak di tengkorak. Ini terdiri dari dua bagian simetris, yang dihubungkan oleh pita lebar zat putih. Setiap bagian memiliki pusat berupa zat putih yang dikelilingi oleh batas abu-abu, mengikuti lilitan yang membentuk bentuk luarnya. Tugas dan fungsi Serebrum adalah: (1) bagian anterior hemisfer serebral adalah pusat utama gerakan-gerakan tubuh yang terjadi secara sukarela atau disengaja, dan perwujudan lahiriah yang aktif dari Kecerdasan: (2) konvolusi individu merupakan pusat-pusat yang terpisah dan berbeda-beda; dan dalam kelompok konvolusi tertentu dilokalisasi pusat berbagai gerakan fisik, yaitu gerakan kelopak mata, wajah, mulut, lidah, telinga, leher, tangan, kaki, dan lain-lain.
Serebellum, atau otak kecil. Serebellum adalah bagian belakang dan bawah dari "otak" yang terletak di tempurung kepala; ia terletak di bawah, dan sekitar sepertujuh ukuran, lobus posterior Serebrum. Serebellum terdiri dari materi putih di bagian dalam, dan materi abu-abu di permukaan. Ini dibagi menjadi dua belahan, di permukaan atas terpisahkan oleh proses anatomi, dan di permukaan bawah terpisahkan oleh celah dalam yang sesuai dalam bentuk Medulla Oblongata, Pusat putih otak kecil mengambil bentuk pohon mini, dengan batang, cabang, ranting, dan daun-ini dikenal sebagai "arbor vitae". Tugas dan fungsi Serebellum adalah: (1) berkaitan dengan kekuatan gerak dalam berbagai cara dan bentuk, dalam berbagai derajat; dan (2) bagi beberapa pakar, serebellum melakukan tugas-tugas penting tertentu sehubungan dengan tahapan fisik dari fungsi dan organisme seksual.
Medula Oblongata. Medulla Oblongata adalah ujung atas dan besar dari sumsum tulang belakang-strukturnya mirip batang panjang yang membentuk bagian bawah batang otak yang paling bawah yang terhubung langsung dengan sumsum tulang belakang. Ia menyerupai sumsum tulang belakang dalam struktur materi abu-abu dan putih; tetapi ia memiliki susunan untaian tali yang khas dan berbeda sebelum ia terhubung dengan otak. Di substansi Medulla Oblongata terletak pusat ganglion besar yang mengontrol pernapasan, tindakan`,
      isbn: "9786027760622",
      publisher : "Shira Media",
      author: "DK",
      pages: '73 Pages',
      language: "Indonesia",
      weight: '0.08 Kg'
    },
    {
      id: 'Book2',
      slug: 'Ayah ini arahnya kemana ya',
      name: "Ayah, Ini Arahnya ke Mana, ya?",
      category: 'Best Seller',
      price: 79_000,
      stock: 80,
      imageUrl: '/assets/images/Ayah ini arahnya kemana ya.jpg',
      description: `Ayah, ternyata benar ya. Setelah dewasa kita semua harus punya banyak uang. Harus bekerja lebih keras lagi, harus bertarung dengan isi kepala sendiri. Harus menyampingkan banyak keinginan untuk sekadar tetap bertahan hidup sampai bertemu pagi lagi.
Ayah, setelah dewasa aku bertemu banyak orang yang menyakitkan dalam hidup dan kali ini aku gak punya banyak keberanian untuk melawannya. Ayah, kadang aku kalah, kadang aku kuat, kadang semuanya terjadi begitu saja dengan penuh pura-pura yang aku coba kesampingkan rasa sakitnya. 
Ayah, hari ini aku kesepian dan gak tahu harus lari kemana lagi. Ayah, ini arahnya ke mana, ya? Anak kecil ini kehilangan jalan pulangnya.`,
      isbn : "9786022083795",
      publisher : "Gradien Mediatama",
      author: "Khoirul Trian",
      pages: '164 Pages',
      language: "Indonesia",
      weight: '0.16 Kg'
    },
    {
      id: 'Book3',
      slug: 'The Empathy Effect',
      name: "The Empathy Effect",
      category: 'Popular',
      price: 95_200,
      stock: 20,
      imageUrl: '/assets/images/The Empathy Effect.jpg',
      description: `The Empathy Effect adalah panduan yang mendalam dan memikat bagi siapa pun yang ingin membawa lebih banyak dampak positif bagi sekitar. Melalui buku ini, Dr. Helen Riess membuktikan bahwa empati bukan hanya sekadar sifat bawaan, melainkan keterampilan yang dapat dipelajari dan ditingkatkan.
Buku ini tidak hanya menginspirasi Anda untuk lebih memahami dan menghargai perasaan orang lain, tetapi juga mendorong kita untuk bertindak lebih baik, lebih peduli, dan lebih memahami segala sesuatu dalam kehidupan sehari-hari kita.`,
      genre: "9786230419577",
      publisher : "Bhuana Ilmu Populer",
      author: "Daniel J. Siegel",
      pages: '340 Pages',
      language: "Indonesia",
      weight: '0.4 Kg'
    },
    {
      id: 'Book4',
      slug: 'lonelines',
      name: "Loneliness Is My Best Friend",
      category: 'Popular',
      price: 89_100,
      stock: 35,
      imageUrl: '/assets/images/lonelines.jpg',
      description: `Dan di sinilah kamu, menyentuh buku ini, sendiri saja, trying to feel something, trying to find a friend, dan kamu sudah ada di langkah yang tepat karena dengan buku ini akan membantumu berdamai dengan rasa sepi.
Isi buku:
Jujur, aku merasa nggak punya teman.
Aku cuma butuh teman cerita, satu aja.
Sekarang, aku seseorang tanpa circle.
Aku selalu jadi opsi kedua di hidup orang.
Latihan berteman dengan diri sendiri.
Jadi dewasa itu sepi, ya.
Keluargaku nggak sehangat keluarga lain.
Kayaknya, nggak ada yang sayang sama aku.
Aku nggak pernah punya kisah cinta.
Cara paling ampuh berdamai dengan kesepian`,
      isbn : "9786239700225",
      publisher : "Kawah Media",
      author: "Alvi Syahrin",
      pages: '306 Pages',
      language: "Indonesia",
      weight: '0.225 Kg'
    },
    {
      id: 'Book5',
      slug: 'A guide book',
      name: "A Guide Book To Slow Down Your Life",
      category: 'Best Seller',
      price: 71_100,
      stock: 45,
      imageUrl: '/assets/images/A guide book.jpg',
      description: `Sering kali dalam kehidupan, hidup sudah dilewati dengan melakukan banyak hal namun tetap terasa hampa dan merasa sudah waktunya merubah dan mengatur ulang jalan hidup.
Slow living akhir-akhir ini menjadi tren baru di kalangan orang-orang dan konsep hidup seperti itu tampaknya didambakan oleh banyak orang yang menginginkan kehidupan sederhana saja. Slow living dapat dilakukan dengan apa saja, mulai dari decluttering seperti yang dilakukan oleh Marie Kondo atau perencanaan hidup tanpa rasa khawatir berlebih. Dalam buku ini, konsepnya akan dibahas lebih luas dan bagaimana kita bisa mendapatkan kebahagiaan dengan menerapkan konsep slow living.`,
      isbn : "9786235307176",
      publisher : "Penerbit briliant",
      author: "Astrid Savitri",
      pages: '208 Pages',
      language: "Indonesia",
      weight: '0.2 Kg'
    },
    {
      id: 'Book6',
      slug: 'the power of thinking',
      name: "The Power Of Thinking Out Of The Box",
      category: 'Popular',
      price: 108_000,
      stock: 55,
      imageUrl: '/assets/images/the power of thinking.jpg',
      description: `Berpikir kreatif bukan hanya tentang menghasilkan sesuatu yang baru saja, tetapi hal ini juga harus dapat mengembangkan solusi. Berpikir secara kreatif atau think out of the box akan menjadi suatu kekuatan baru dalam dirimu sehingga kamu bisa lebih mengembangkan potensi dan akal budi di kepalamu. Maka, kamu pun akan menuai berbagai manfaat berharga dengan menerapkan berpikir kreatif ini melalui risalah sederhana ini.
Ya, buku ini menyajikan bahwa memahami pola pikir out of the box memang tak semudah membalikkan koin. Itu tak masalah! Sebab, hal yang lebih penting dari definisi tadi, tentu saja adalah manfaat
berpikir out of the box, bukan? Sebelum melangkah ke gerbang selanjutnya untuk mengasah pemikiran kreatif, mari coba kita gali tentang apa manfaat berpikir out of the box dan bagaimana melakukannya. Selain itu, kamu juga akan mempelajari bagaimana menghasilkan ide dan memaksimalkan daya cipta yang kamu miliki. Jadi, kita bisa mencapai kesepakatan penuh mengenai mengapa kita harus berpikir out of the box.
Memangnya mengapa harus berpikir out of the box? Pertanyaan cerdas. Jika kamu juga penasaran, "apa sih manfaatnya berpikir berbeda?" - berarti kamu sudah siap untuk jadi orang kreatif dengan segala keunggulannya. Yang jelas, ada banyak manfaat yang bisa kamu dapat dengan berpikir berbeda. Akan tetapi, sebelum kita menggali lebih dalam tentang manfaatnya, rasanya kurang sip kalau kita belum memahami definisi dari berpikir kreatif itu. Yap! Anggap saja kita tengah dalam perjalanan menggali ilmu yang sifatnya akademis. Jadi, landasan teori dan pendapat para ahli, tentu jadi hal yang mutlak diperlukan.
Buku ini menyajikan bahwa memahami pola pikir out of the box memang tak semudah membalikkan koin. Tak masalah! Sebab, hal yang lebih penting dari definisi tadi, tentu adalah manfaat berpikir out of the box, bukan? Sebelum melangkah ke gerbang selanjutnya untuk mengasah pemikiran kreatif, mari coba kita gali tentang apa manfaat berpikir out of the box. Jadi, kita bisa mencapai kesepakatan penuh mengenai mengapa kita harus berpikir out of the box.`,
      isbn : "9786234003086",
      publisher : "Psikologi Corner ",
      author: "Hasna Wijayati",
      pages: '216 Pages',
      language: "Indonesia",
      weight: '0.175 Kg'
    },
    {
      id: 'Book7',
      slug: 'how10',
      name: "How To Build Successful Habits : 10 Cara Paling Serius",
      category: 'Best Seller',
      price: 44_550,
      stock: 28,
      imageUrl: '/assets/images/how10.jpg',
      description: `Buku ini mengajak kita untuk merefleksikan diri dan berpikir ulang tentang kebiasaan yang efektif untuk kehidupan sehari-hari, dengan melakukan 10 kebiasaan berikut sebagai dasar pengembangan diri, membentuk kepribadian, dan menjalin hubungan baik antar individu, kelompok, atau organisasi. Buku ini juga mendukung peran aktif untuk memiliki suatu rencana jangka panjang dan jangka pendek, menemukan diri sendiri bersama passion yang mengantarkan kepada titik terang, dan melibatkan serta menempatkan nilai-nilai pribadi sehingga seseorang dapat fokus pada kebiasan-kebiasaan efektif yang dilakukan sehari-hari.
Mengetahui kebiasaan ini merupakan dasar untuk menetapkan tujuan pribadi. Hal ini adalah soft skill yang dimiliki seseorang untuk diaplikasikan dalam dunia kerja atau kehidupan sehari-hari.`,
      isbn : "9786234003079",
      publisher : " ",
      author: "Dzul Fahmi",
      pages: '240 Pages',
      language: "Indonesia",
      weight: '0.195 Kg'
    },
    {
      id: 'Book8',
      slug: 'Great',
      name: "How to be Great: Alasan Kenapa Sejumlah Orang Mencetak Keberhasilan dan yang Lain Gagal?",
      category: 'Popular',
      price: 62_550,
      stock: 60,
      imageUrl: '/assets/images/Great.jpg',
      description: `Setiap orang mempunyai potensi dalam dirinya. Potensi dalam dirinya harus dikembangkan dan jangan sampai terbuang agar dapat berguna dan membantu diri masing-masing. Dengan mengetahui potensi apa yang kita miliki maka kita dapat memaksimalkan potensi tersebut dan mungkin kesuksesan akan juga datang.
Tapi memangnya bagaimana cara memaksimalkan potensi? Melalui buku ini, akan dijelaskan bagaimana cara agar kita dapat menemukan potensi yang dimiliki dan memaksimalkan potensi yang dimiliki agar kita dapat menemukan kesuksesan. Kalau kalian merasa ada potensi bakat yang dimiliki, bisa banget coba baca buku ini buat tahu gimana cara memenuhinya!`,
      isbn : "9786234003222",
      publisher : " ",
      author: "Akmal Musyadat Cholil",
      pages: '234 Pages',
      language: "Indonesia",
      weight: '0.19 Kg'
    },

  ]
}