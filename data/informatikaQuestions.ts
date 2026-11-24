import { ExamQuestion, TopicMeta } from '@/types/exam';

export const INFORMATIKA_TOPICS: TopicMeta[] = [
  { id: 1, name: 'Bab 1: Berpikir Komputasional', targetCount: '8 PG · 1 B/S' },
  { id: 2, name: 'Bab 2: Algoritma & Pemrograman Dasar', targetCount: '8 PG · 2 B/S' },
  { id: 3, name: 'Bab 3: Pengolahan Data & Microsoft Excel', targetCount: '9 PG · 2 B/S' },
];

export const INFORMATIKA_QUESTIONS: ExamQuestion[] = [
  // =========================================================================
  // BAB 1: BERPIKIR KOMPUTASIONAL (8 PG & 1 Benar/Salah) -> Soal 1–9
  // =========================================================================
  {
    id: 1,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Pengertian yang paling tepat mengenai Berpikir Komputasional (Computational Thinking) dalam mata pelajaran Informatika adalah ....',
    options: [
      { key: 'A', label: 'Cara berpikir agar manusia mampu meniru kecepatan hitung komputer secara hafalan' },
      { key: 'B', label: 'Pendekatan pemecahan masalah secara logis, terstruktur, dan sistematis sehingga solusinya dapat dijalankan oleh manusia maupun komputer' },
      { key: 'C', label: 'Kemampuan merakit perangkat keras komputer dan memperbaiki jaringan internet' },
      { key: 'D', label: 'Keterampilan mengetik kode bahasa pemrograman tingkat lanjut tanpa perlu memahami masalahnya' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berpikir komputasional adalah metode berpikir untuk menyelesaikan persoalan yang kompleks dengan cara memecahnya menjadi bagian logis, menemukan pola, menyaring informasi penting, dan merancang langkah sistematis sehingga dapat dipahami serta dijalankan oleh manusia maupun mesin komputer.',
  },
  {
    id: 2,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Berikut ini yang merupakan manfaat utama menerapkan pola berpikir komputasional dalam kehidupan sehari-hari adalah ....',
    options: [
      { key: 'A', label: 'Membuat setiap pekerjaan harus selalu dikerjakan menggunakan aplikasi spreadsheet' },
      { key: 'B', label: 'Membantu menyelesaikan masalah besar dan rumit menjadi lebih efektif, efisien, serta terhindar dari langkah yang berulang-ulang tanpa arah' },
      { key: 'C', label: 'Menghilangkan kebutuhan bekerja sama dalam kelompok saat mengerjakan proyek' },
      { key: 'D', label: 'Memastikan komputer tidak pernah mengalami kerusakan perangkat keras' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berpikir komputasional melatih kita menghadapi masalah besar agar terasa lebih ringan, terstruktur, efisien dalam waktu maupun sumber daya, serta menghasilkan solusi yang konsisten.',
  },
  {
    id: 3,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Ketua panitia acara Pentas Seni SMP Nusantara membagi persiapan acara besar tersebut menjadi beberapa tugas kecil yang dikerjakan tim berbeda, yaitu tim konsumsi, tim perlengkapan panggung, tim acara, dan tim dokumentasi.\n\nKomponen berpikir komputasional yang diterapkan pada kasus tersebut adalah ....',
    options: [
      { key: 'A', label: 'Dekomposisi' },
      { key: 'B', label: 'Abstraksi' },
      { key: 'C', label: 'Pengenalan Pola' },
      { key: 'D', label: 'Perancangan Algoritma' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dekomposisi adalah proses memecah persoalan atau proyek besar yang kompleks menjadi bagian-bagian (sub-masalah) yang lebih kecil, sederhana, dan mudah dikelola atau diselesaikan satu per satu.',
  },
  {
    id: 4,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Dina memperhatikan bahwa setiap hari Senin dan Jumat pukul 06.45 WIB, jalan di depan gerbang sekolah selalu padat karena bertepatan dengan jam masuk kantor di sekitar sekolah. Dari pengamatan tersebut, Dina memutuskan berangkat 15 menit lebih awal khusus di hari Senin dan Jumat.\n\nTindakan Dina mengamati kesamaan kejadian berulang tersebut merupakan penerapan dari ....',
    options: [
      { key: 'A', label: 'Dekomposisi' },
      { key: 'B', label: 'Pengenalan Pola' },
      { key: 'C', label: 'Abstraksi' },
      { key: 'D', label: 'Debugging' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pengenalan Pola (Pattern Recognition) adalah kemampuan mengenali kemiripan, keteraturan, atau kecenderungan yang berulang pada data maupun peristiwa sehingga kita bisa memprediksi kondisi dan menerapkan solusi yang tepat.',
  },
  {
    id: 5,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Saat membuat peta jalur evakuasi bencana di lingkungan sekolah, seorang siswa hanya menggambar denah ruangan, tangga darurat, pintu keluar, dan arah panah menuju titik kumpul. Ia sengaja tidak menggambar warna cat dinding, jenis pot bunga, maupun model meja di kelas.\n\nProses menyaring bagian penting dan mengabaikan detail yang tidak relevan tersebut disebut ....',
    options: [
      { key: 'A', label: 'Dekomposisi' },
      { key: 'B', label: 'Pengenalan Pola' },
      { key: 'C', label: 'Abstraksi' },
      { key: 'D', label: 'Kompilasi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Abstraksi adalah proses memfokuskan perhatian pada informasi yang penting dan relevan dengan tujuan penyelesaian masalah, sambil mengabaikan detail-detail kecil yang tidak diperlukan.',
  },
  {
    id: 6,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Raka menuliskan panduan langkah demi langkah cara meminjam buku di perpustakaan digital sekolah secara urut: (1) Login akun siswa, (2) Cari judul buku, (3) Klik tombol Pinjam, (4) Unduh bukti peminjaman.\n\nKegiatan menyusun urutan langkah penyelesaian masalah yang jelas tersebut termasuk pilar ....',
    options: [
      { key: 'A', label: 'Abstraksi' },
      { key: 'B', label: 'Dekomposisi' },
      { key: 'C', label: 'Pengenalan Pola' },
      { key: 'D', label: 'Perancangan Algoritma' },
    ],
    correctAnswer: 'D',
    explanation:
      'Perancangan Algoritma (Algorithmic Thinking) adalah menyusun rangkaian instruksi atau langkah-langkah logis yang terurut, jelas, dan pasti untuk menyelesaikan suatu masalah dari awal hingga akhir.',
  },
  {
    id: 7,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Perhatikan tabel contoh kegiatan dan komponen berpikir komputasional berikut! Pasangan yang paling tepat ditunjukkan oleh nomor ....',
    stimulusTable: {
      caption: 'Tabel Studi Kasus Pilar Berpikir Komputasional',
      headers: ['No', 'Contoh Kegiatan', 'Pilar Berpikir Komputasional'],
      rows: [
        ['1', 'Memecah masalah sepeda rusak menjadi cek ban, rantai, dan rem', 'Abstraksi'],
        ['2', 'Mencari kesamaan bentuk soal deret angka agar cepat dihitung', 'Pengenalan Pola'],
        ['3', 'Menuliskan langkah urut membuat nasi goreng dari awal sampai matang', 'Dekomposisi'],
        ['4', 'Membuang data tidak penting saat merangkum materi pelajaran', 'Perancangan Algoritma'],
      ],
    },
    options: [
      { key: 'A', label: '1' },
      { key: 'B', label: '2' },
      { key: 'C', label: '3' },
      { key: 'D', label: '4' },
    ],
    correctAnswer: 'B',
    explanation:
      '• Nomor 2 BENAR: Mencari kesamaan bentuk atau keteraturan pada soal deret angka adalah Pengenalan Pola.\n• Nomor 1 seharusnya Dekomposisi.\n• Nomor 3 seharusnya Perancangan Algoritma.\n• Nomor 4 seharusnya Abstraksi.',
  },
  {
    id: 8,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'pg',
    question:
      'Dalam siklus berpikir komputasional saat menghadapi masalah yang kompleks, urutan langkah kerja yang paling logis dan runtut adalah ....',
    options: [
      { key: 'A', label: 'Menulis algoritma langsung → menguji → melakukan abstraksi → memecah masalah' },
      { key: 'B', label: 'Memahami dan memecah masalah (dekomposisi) → mengenali pola → menyaring hal penting (abstraksi) → menyusun algoritma dan evaluasi' },
      { key: 'C', label: 'Mengabaikan semua detail → menebak hasil → membuat tabel → menyelesaikan masalah' },
      { key: 'D', label: 'Menginstal aplikasi → mencari pola → menghapus data → menjalankan program' },
    ],
    correctAnswer: 'B',
    explanation:
      'Siklus berpikir komputasional dimulai dengan memahami persoalan dan memecahnya (Dekomposisi), mencari keteraturan/kesamaan (Pengenalan Pola), menyaring hal inti (Abstraksi), lalu merumuskan langkah solusi (Algoritma) disertai evaluasi/pengujian.',
  },
  {
    id: 9,
    topicId: 1,
    topicName: 'Bab 1: Berpikir Komputasional',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Berpikir komputasional hanya berguna bagi programmer saat menulis kode di depan komputer, sehingga tidak dapat diterapkan untuk memecahkan masalah sehari-hari tanpa perangkat komputer."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'SALAH',
    explanation:
      'Pernyataan ini SALAH. Berpikir komputasional adalah keterampilan cara berpikir (problem solving) yang dapat diterapkan di berbagai bidang kehidupan sehari-hari—seperti merencanakan perjalanan, mengatur jadwal belajar, atau menyusun kepanitiaan—bahkan tanpa menggunakan komputer (unplugged).',
  },

  // =========================================================================
  // BAB 2: ALGORITMA & PEMROGRAMAN DASAR (8 PG & 2 Benar/Salah) -> Soal 10–19
  // =========================================================================
  {
    id: 10,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Perhatikan langkah-langkah acak algoritma membuat teh manis hangat berikut:\n(1) Aduk hingga gula larut merata.\n(2) Tuangkan air panas ke dalam gelas.\n(3) Siapkan gelas, sendok, teh celup, dan gula.\n(4) Celupkan kantong teh hingga air berwarna cokelat dan tambahkan gula.\n\nUrutan langkah algoritma yang benar dan logis adalah ....',
    options: [
      { key: 'A', label: '(3) – (1) – (2) – (4)' },
      { key: 'B', label: '(3) – (2) – (4) – (1)' },
      { key: 'C', label: '(2) – (3) – (4) – (1)' },
      { key: 'D', label: '(3) – (4) – (2) – (1)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Algoritma harus disusun secara logis dan berurutan agar dapat dieksekusi dengan benar: siapkan alat dan bahan (3), tuang air panas (2), celupkan teh dan tambah gula (4), lalu aduk hingga larut (1).',
  },
  {
    id: 11,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Perhatikan gambar empat simbol standar Flowchart di bawah ini! Nama simbol beserta fungsi yang benar untuk simbol nomor 2 dan nomor 4 secara berturut-turut adalah ....',
    diagram: 'flowchart_symbols',
    options: [
      { key: 'A', label: 'Terminator (Mulai/Selesai) dan Proses (Perhitungan)' },
      { key: 'B', label: 'Input/Output (Memasukkan atau menampilkan data) dan Decision (Pengambilan keputusan kondisi Ya/Tidak)' },
      { key: 'C', label: 'Proses (Mengolah data) dan Input/Output (Menampilkan hasil)' },
      { key: 'D', label: 'Decision (Percabangan) dan Terminator (Mengakhiri program)' },
    ],
    correctAnswer: 'B',
    explanation:
      '• Simbol 1 (Oval/Kapsul) = Terminator (titik Mulai atau Selesai).\n• Simbol 2 (Jajar Genjang) = Input/Output (memasukkan data masukan atau menampilkan hasil keluaran).\n• Simbol 3 (Persegi Panjang) = Proses (kegiatan pengolahan data atau perhitungan rumus).\n• Simbol 4 (Belah Ketupat) = Decision/Keputusan (menguji kondisi percabangan Ya/Tidak).',
  },
  {
    id: 12,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Dalam penyusunan diagram alir (Flowchart), fungsi utama dari simbol Garis Alir (Flowline/Panah) adalah ....',
    options: [
      { key: 'A', label: 'Menunjukkan arah urutan aliran proses dari satu simbol ke simbol berikutnya' },
      { key: 'B', label: 'Menghitung nilai rata-rata dari beberapa variabel masukan' },
      { key: 'C', label: 'Menandai bahwa program mengalami kesalahan penulisan kode' },
      { key: 'D', label: 'Menyimpan file program ke dalam penyimpanan permanen' },
    ],
    correctAnswer: 'A',
    explanation:
      'Garis Alir (Flowline) berbentuk garis berpanah berfungsi menghubungkan antar-simbol flowchart sekaligus menunjukkan arah urutan eksekusi langkah dari awal sampai akhir.',
  },
  {
    id: 13,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Perhatikan diagram alir (Flowchart) perhitungan luas bangun datar segitiga di bawah ini! Jika pengguna memasukkan nilai alas = 12 cm dan tinggi = 8 cm, maka nilai keluaran (Output) yang ditampilkan oleh algoritma adalah ....',
    diagram: 'flowchart_luas',
    options: [
      { key: 'A', label: '20 cm²' },
      { key: 'B', label: '48 cm²' },
      { key: 'C', label: '96 cm²' },
      { key: 'D', label: '192 cm²' },
    ],
    correctAnswer: 'B',
    formula: 'Luas = (alas × tinggi) / 2',
    explanation:
      'Mengikuti alur flowchart dari atas ke bawah:\n1. Input: alas = 12, tinggi = 8.\n2. Proses: Luas = (12 × 8) / 2 = 96 / 2 = 48.\n3. Output: Menampilkan nilai Luas = 48 cm².',
  },
  {
    id: 14,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Perhatikan Flowchart untuk menentukan bilangan terbesar dari tiga buah bilangan (a, b, dan c) berikut ini!\n\nJika dimasukkan nilai a = 15, b = 27, dan c = 19, alur cabang yang dilalui dan hasil akhir (Output) yang dicetak adalah ....',
    diagram: 'flowchart_max3',
    options: [
      { key: 'A', label: 'Cabang Ya pada (a > b?), lalu cabang Ya pada (a > c?), mencetak 15' },
      { key: 'B', label: 'Cabang Tidak pada (a > b?), lalu cabang Ya pada (b > c?), mencetak 27' },
      { key: 'C', label: 'Cabang Tidak pada (a > b?), lalu cabang Tidak pada (b > c?), mencetak 19' },
      { key: 'D', label: 'Cabang Ya pada (a > b?), lalu cabang Tidak pada (a > c?), mencetak 19' },
    ],
    correctAnswer: 'B',
    explanation:
      'Penelusuran langkah Flowchart untuk a = 15, b = 27, c = 19:\n1. Uji kondisi pertama: Apakah a > b (15 > 27)? Jawabannya TIDAK, sehingga alur bergerak ke cabang kanan menuju uji (b > c?).\n2. Uji kondisi kedua: Apakah b > c (27 > 19)? Jawabannya YA, sehingga alur menuju blok output "Cetak b".\n3. Hasil yang dicetak adalah nilai b, yaitu 27.',
  },
  {
    id: 15,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Perhatikan potongan Pseudocode berikut:\n\nMULAI\n  INPUT nilai\n  JIKA nilai >= 75 MAKA\n    status ← "Tuntas"\n  SELAIN ITU\n    status ← "Perlu Remidi"\n  AKHIR JIKA\n  TAMPILKAN status\nSELESAI\n\nJika nilai yang dimasukkan adalah 74, maka keluaran program tersebut adalah ....',
    options: [
      { key: 'A', label: 'Tuntas' },
      { key: 'B', label: 'Perlu Remidi' },
      { key: 'C', label: '74' },
      { key: 'D', label: 'Error karena nilai kurang dari 75' },
    ],
    correctAnswer: 'B',
    explanation:
      'Saat nilai = 74, syarat kondisi "nilai >= 75" (74 >= 75) bernilai salah. Oleh karena itu program menjalankan blok SELAIN ITU (ELSE) dan menetapkan status menjadi "Perlu Remidi".',
  },
  {
    id: 16,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Dalam lingkungan pemrograman visual berbasis blok seperti Scratch, komponen karakter atau objek yang dapat digerakkan serta diberi perintah blok kode disebut ....',
    options: [
      { key: 'A', label: 'Stage' },
      { key: 'B', label: 'Sprite' },
      { key: 'C', label: 'Backdrop' },
      { key: 'D', label: 'Compiler' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada Scratch, Sprite adalah objek/karakter yang diprogram menggunakan susunan blok kode (seperti Motion, Looks, Events, Control). Stage adalah area panggung tempat sprite tampil, sedangkan Backdrop adalah gambar latar belakang panggung.',
  },
  {
    id: 17,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'pg',
    question:
      'Seorang siswa membuat program kalkulator sederhana, namun hasil penjumlahannya selalu keliru. Ia kemudian memeriksa baris kode satu per satu untuk menemukan letak kesalahan logika dan memperbaikinya hingga berjalan benar.\n\nIstilah pemrograman untuk kegiatan mencari serta memperbaiki kesalahan pada program tersebut adalah ....',
    options: [
      { key: 'A', label: 'Runtime' },
      { key: 'B', label: 'Debugging' },
      { key: 'C', label: 'Inputting' },
      { key: 'D', label: 'Formatting' },
    ],
    correctAnswer: 'B',
    explanation:
      '• Debugging adalah proses melacak, menganalisis, dan memperbaiki kesalahan (bug) di dalam kode program.\n• Bahasa Pemrograman adalah bahasa instruksi formal (seperti Python, C++, Scratch).\n• Program adalah kumpulan instruksi yang tersusun lengkap.\n• Runtime adalah waktu atau kondisi ketika program sedang dijalankan.',
  },
  {
    id: 18,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Dalam diagram alir (Flowchart), simbol Keputusan/Decision yang berbentuk belah ketupat selalu memiliki dua atau lebih jalur keluar (misalnya jalur Ya dan Tidak) berdasarkan hasil pengujian syarat kondisi."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'BENAR',
    explanation:
      'Pernyataan ini BENAR. Simbol Decision (belah ketupat) digunakan untuk percabangan logika yang mengevaluasi suatu pernyataan kondisi, sehingga memerlukan minimal dua cabang alur keluar (umumnya Ya/Benar dan Tidak/Salah).',
  },
  {
    id: 19,
    topicId: 2,
    topicName: 'Bab 2: Algoritma & Pemrograman Dasar',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Istilah Runtime merujuk pada proses mencari kesalahan penulisan kode sebelum program dibuat, sedangkan Program adalah perangkat keras tempat menyimpan data."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'SALAH',
    explanation:
      'Pernyataan ini SALAH. Runtime adalah fase atau kondisi ketika sebuah program sedang dieksekusi/dijalankan oleh komputer, sedangkan Program adalah kumpulan instruksi perangkat lunak (software) yang ditulis menggunakan bahasa pemrograman, bukan perangkat keras.',
  },

  // =========================================================================
  // BAB 3: PENGOLAHAN DATA & MICROSOFT EXCEL (9 PG & 2 Benar/Salah) -> Soal 20–30
  // =========================================================================
  {
    id: 20,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Perhatikan daftar catatan berikut:\n(1) Suhu udara pagi ini 26°C dan tinggi badan Budi 158 cm.\n(2) Warna seragam olahraga biru tua dan tekstur kainnya halus.\n(3) Rata-rata nilai ulangan Informatika Kelas 7B naik 12% dibanding bulan lalu.\n\nBerdasarkan jenisnya, catatan nomor (1), (2), dan (3) secara berturut-turut merupakan contoh ....',
    options: [
      { key: 'A', label: 'Data kualitatif, data kuantitatif, dan rumus' },
      { key: 'B', label: 'Data kuantitatif, data kualitatif, dan informasi' },
      { key: 'C', label: 'Informasi, data kuantitatif, dan data kualitatif' },
      { key: 'D', label: 'Data kualitatif, informasi, dan data kuantitatif' },
    ],
    correctAnswer: 'B',
    explanation:
      '• Catatan (1) berupa angka hasil pengukuran yang dapat dihitung -> Data Kuantitatif.\n• Catatan (2) berupa deskripsi sifat/kata yang tidak berbentuk angka -> Data Kualitatif.\n• Catatan (3) merupakan hasil pengolahan dan perbandingan data sehingga bermakna bagi pengambil keputusan -> Informasi.',
  },
  {
    id: 21,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Pada lembar kerja Microsoft Excel, sel C2 berisi rumus =A2+B2 (menggunakan referensi relatif). Apabila sel C2 tersebut disalin (Copy–Paste) ke sel C3 tepat di bawahnya, maka rumus yang otomatis tertulis di sel C3 adalah ....',
    options: [
      { key: 'A', label: '=A2+B2' },
      { key: 'B', label: '=A3+B3' },
      { key: 'C', label: '=B2+C2' },
      { key: 'D', label: '=$A$2+$B$2' },
    ],
    correctAnswer: 'B',
    explanation:
      'Referensi relatif (tanpa tanda $) menyesuaikan alamat sel secara otomatis mengikuti perpindahan baris atau kolom ketika disalin. Karena berpindah 1 baris ke bawah (dari baris 2 ke baris 3), referensi A2+B2 berubah menjadi A3+B3. Sedangkan penulisan seperti A1:C3 disebut Range (kumpulan beberapa sel).',
  },
  {
    id: 22,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Jika pada sebuah sel Microsoft Excel diketikkan rumus =10+2*3^2 lalu ditekan Enter, maka hasil perhitungan yang akan muncul adalah ....',
    options: [
      { key: 'A', label: '28' },
      { key: 'B', label: '46' },
      { key: 'C', label: '108' },
      { key: 'D', label: '1.296' },
    ],
    correctAnswer: 'A',
    formula: 'Prioritas Operator: ^ (pangkat) → * dan / → + dan -',
    explanation:
      'Sesuai aturan prioritas operator aritmatik di Excel:\n1. Pemangkatan (^) dikerjakan lebih dulu: 3^2 = 9.\n2. Perkalian (*) dikerjakan berikutnya: 2 * 9 = 18.\n3. Penjumlahan (+) dikerjakan terakhir: 10 + 18 = 28.',
  },
  {
    id: 23,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Ketika sedang mengolah tabel di Microsoft Excel, siswa tidak sengaja menghapus isi seluruh kolom penting. Kombinasi tombol pintas (Shortcut) keyboard yang paling cepat digunakan untuk membatalkan tindakan terakhir (Undo) dan menyalin data (Copy) secara berurutan adalah ....',
    options: [
      { key: 'A', label: 'Ctrl + X dan Ctrl + V' },
      { key: 'B', label: 'Ctrl + Z dan Ctrl + C' },
      { key: 'C', label: 'Ctrl + S dan Ctrl + P' },
      { key: 'D', label: 'Ctrl + Y dan Ctrl + A' },
    ],
    correctAnswer: 'B',
    explanation:
      'Shortcut dasar di Microsoft Excel:\n• Ctrl + Z = Undo (membatalkan tindakan terakhir)\n• Ctrl + C = Copy (menyalin data)\n• Ctrl + V = Paste (menempelkan data)\n• Ctrl + X = Cut (memotong data)\n• Ctrl + S = Save (menyimpan file).',
  },
  {
    id: 24,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Seorang bendahara kelas ingin membuat laporan kas di Excel sehingga simbol mata uang "Rp" rata sejajar rapi di tepi paling kiri kolom sedangkan angka nominalnya rata di kanan kolom. Jenis Format Cell yang paling tepat dipilih adalah ....',
    options: [
      { key: 'A', label: 'Currency' },
      { key: 'B', label: 'Accounting' },
      { key: 'C', label: 'Percentage' },
      { key: 'D', label: 'Scientific' },
    ],
    correctAnswer: 'B',
    explanation:
      'Perbedaan utama Currency dan Accounting adalah perataan simbol mata uangnya:\n• Accounting meletakkan simbol mata uang (Rp) sejajar di tepi paling kiri sel dan nominalnya di kanan.\n• Currency meletakkan simbol mata uang menempel tepat di sebelah kiri angka.\nSementara Date untuk tanggal, Percentage untuk persen (%), Scientific untuk notasi ilmiah, Text untuk teks murni, dan Custom untuk format khusus buatan sendiri.',
  },
  {
    id: 25,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Perhatikan tabel spreadsheet daftar nilai ulangan siswa berikut ini! Rumus yang paling tepat ditulis di sel B7 untuk menghitung jumlah total nilai Matematika dan di sel C7 untuk menghitung rata-rata nilai IPA seluruh siswa secara berurutan adalah ....',
    excelTable: {
      caption: 'Daftar Nilai Ulangan Harian Kelas 7A',
      columns: ['A', 'B', 'C'],
      rows: [
        { rowNumber: 1, cells: ['Nama Siswa', 'Matematika', 'IPA'] },
        { rowNumber: 2, cells: ['Andi', 80, 85] },
        { rowNumber: 3, cells: ['Bima', 90, 80] },
        { rowNumber: 4, cells: ['Citra', 70, 95] },
        { rowNumber: 5, cells: ['Dewi', 85, 90] },
        { rowNumber: 6, cells: ['Eko', 75, 80] },
      ],
    },
    options: [
      { key: 'A', label: '=SUM(B2:B6) dan =AVERAGE(C2:C6)' },
      { key: 'B', label: '=COUNT(B2:B6) dan =SUM(C2:C6)' },
      { key: 'C', label: '=AVERAGE(B2:B6) dan =MAX(C2:C6)' },
      { key: 'D', label: '=SUM(B1:B6) dan =MIN(C2:C6)' },
    ],
    correctAnswer: 'A',
    formula: 'SUM(range) = Menjumlahkan | AVERAGE(range) = Rata-rata',
    explanation:
      'Data nilai berada pada baris 2 sampai baris 6 (kolom B untuk Matematika dan kolom C untuk IPA). Baris 1 adalah judul kolom sehingga tidak ikut dihitung:\n• Jumlah total nilai Matematika: =SUM(B2:B6) → 80+90+70+85+75 = 400.\n• Rata-rata nilai IPA: =AVERAGE(C2:C6) → (85+80+95+90+80)/5 = 86.',
  },
  {
    id: 26,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Perhatikan tabel spreadsheet nilai praktikum di bawah ini! Jika seorang guru ingin mencari selisih antara nilai Informatika tertinggi dan terendah dengan mengetikkan rumus =MAX(B2:B6)-MIN(B2:B6), maka hasil yang ditampilkan Excel adalah ....',
    excelTable: {
      caption: 'Rekap Nilai Praktikum Informatika',
      formulaBar: '=MAX(B2:B6)-MIN(B2:B6)',
      columns: ['A', 'B'],
      rows: [
        { rowNumber: 1, cells: ['Nama', 'Nilai Informatika'] },
        { rowNumber: 2, cells: ['Fajar', 78] },
        { rowNumber: 3, cells: ['Gita', 94] },
        { rowNumber: 4, cells: ['Hana', 82] },
        { rowNumber: 5, cells: ['Indra', 66] },
        { rowNumber: 6, cells: ['Joko', 88] },
      ],
    },
    options: [
      { key: 'A', label: '16' },
      { key: 'B', label: '22' },
      { key: 'C', label: '28' },
      { key: 'D', label: '94' },
    ],
    correctAnswer: 'C',
    formula: 'Selisih = MAX(B2:B6) − MIN(B2:B6)',
    explanation:
      '• Fungsi MAX(B2:B6) mencari nilai terbesar pada rentang B2 sampai B6, yaitu 94 (Gita).\n• Fungsi MIN(B2:B6) mencari nilai terkecil pada rentang B2 sampai B6, yaitu 66 (Indra).\n• Selisih = 94 − 66 = 28.',
  },
  {
    id: 27,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Perhatikan tabel spreadsheet data stok barang berikut (perhatikan ada sel berisi angka, teks, dan sel kosong)! Hasil dari rumus =COUNT(B2:B6) dan =COUNTA(B2:B6) secara berturut-turut adalah ....',
    excelTable: {
      caption: 'Catatan Pemeriksaan Stok Alat Lab Komputer',
      columns: ['A', 'B'],
      rows: [
        { rowNumber: 1, cells: ['Nama Perangkat', 'Jumlah Tersedia'] },
        { rowNumber: 2, cells: ['Mouse', 24] },
        { rowNumber: 3, cells: ['Keyboard', 'Rusak'] },
        { rowNumber: 4, cells: ['Monitor', 18] },
        { rowNumber: 5, cells: ['Headset', null] },
        { rowNumber: 6, cells: ['Webcam', 10] },
      ],
    },
    options: [
      { key: 'A', label: '3 dan 4' },
      { key: 'B', label: '4 dan 5' },
      { key: 'C', label: '3 dan 5' },
      { key: 'D', label: '4 dan 4' },
    ],
    correctAnswer: 'A',
    formula: 'COUNT = Hitung sel angka | COUNTA = Hitung semua sel tidak kosong',
    explanation:
      'Pada rentang B2:B6 terdapat 5 sel:\n• B2 = 24 (angka), B3 = "Rusak" (teks), B4 = 18 (angka), B5 = kosong, B6 = 10 (angka).\n• =COUNT(B2:B6) hanya menghitung sel yang berisi angka (B2, B4, B6) → hasilnya 3.\n• =COUNTA(B2:B6) menghitung semua sel yang tidak kosong, baik angka maupun teks (B2, B3, B4, B6) → hasilnya 4.',
  },
  {
    id: 28,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'pg',
    question:
      'Perhatikan tabel spreadsheet nilai ujian dan penjualan koperasi berikut! Jika ingin menghitung banyaknya siswa yang nilainya lebih dari atau sama dengan 80 (kriteria ">=80") dan menjumlahkan total nilai khusus untuk siswa yang nilainya ">=80", maka hasil dari rumus =COUNTIF(B2:B6, ">=80") dan =SUMIF(B2:B6, ">=80") secara berurutan adalah ....',
    excelTable: {
      caption: 'Evaluasi Ketuntasan Nilai (KKTP = 80)',
      columns: ['A', 'B'],
      rows: [
        { rowNumber: 1, cells: ['Nama Siswa', 'Nilai Akhir'] },
        { rowNumber: 2, cells: ['Laras', 85] },
        { rowNumber: 3, cells: ['Miko', 75] },
        { rowNumber: 4, cells: ['Nadia', 90] },
        { rowNumber: 5, cells: ['Oki', 80] },
        { rowNumber: 6, cells: ['Putri', 70] },
      ],
    },
    options: [
      { key: 'A', label: '2 dan 175' },
      { key: 'B', label: '3 dan 255' },
      { key: 'C', label: '3 dan 400' },
      { key: 'D', label: '2 dan 255' },
    ],
    correctAnswer: 'B',
    formula: 'COUNTIF(range, kriteria) | SUMIF(range, kriteria)',
    explanation:
      'Nilai yang memenuhi syarat >= 80 adalah Laras (85), Nadia (90), dan Oki (80).\n• =COUNTIF(B2:B6, ">=80") menghitung banyaknya data yang memenuhi syarat → ada 3 siswa.\n• =SUMIF(B2:B6, ">=80") menjumlahkan nilai yang memenuhi syarat → 85 + 90 + 80 = 255.',
  },
  {
    id: 29,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Fungsi =COUNT(A1:A5) di Microsoft Excel akan menghitung jumlah semua sel yang tidak kosong pada rentang A1 sampai A5, termasuk sel yang berisi huruf atau teks."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'SALAH',
    explanation:
      'Pernyataan ini SALAH. Fungsi COUNT hanya menghitung banyaknya sel yang berisi data ANGKA. Untuk menghitung seluruh sel yang tidak kosong (baik berupa angka, teks, maupun simbol), fungsi yang digunakan adalah COUNTA.',
  },
  {
    id: 30,
    topicId: 3,
    topicName: 'Bab 3: Pengolahan Data & Microsoft Excel',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Ketika mengetikkan nomor telepon atau kode NIS yang diawali angka nol (misalnya 08123456) di Microsoft Excel agar angka nol di bagian depan tidak hilang secara otomatis, kita dapat mengatur Format Cell sel tersebut menjadi Text."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'BENAR',
    explanation:
      'Pernyataan ini BENAR. Secara bawaan (General/Number), Excel menganggap 08123456 sebagai bilangan bulat sehingga angka nol di depan dihapus menjadi 8123456. Dengan mengubah Format Cell menjadi Text (atau memberi tanda petik tunggal di depan angka), Excel memperlakukannya sebagai teks dan mempertahankan angka nol di depan.',
  },
];
