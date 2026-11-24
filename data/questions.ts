import { ExamQuestion } from '@/types/exam';

export const EXAM_DURATION_SECONDS = 60 * 60; // 60 menit

export const KISI_TOPICS = [
  { id: 1, name: 'Hakikat Sains', targetCount: '2 PG' },
  { id: 2, name: 'Metode Ilmiah & Keselamatan Kerja', targetCount: '2 PG' },
  { id: 3, name: 'Alat Ukur Besaran Pokok', targetCount: '3 PG' },
  { id: 4, name: 'Besaran, Satuan SI, & Konversi', targetCount: '3 PG' },
  { id: 5, name: 'Ketelitian Pengukuran', targetCount: '1 B/S' },
  { id: 6, name: 'Laporan Percobaan', targetCount: '1 B/S' },
  { id: 7, name: 'Sifat Fisika & Kimia Zat', targetCount: '3 PG' },
  { id: 8, name: 'Perubahan Fisika & Kimia', targetCount: '3 PG' },
  { id: 9, name: 'Perubahan Wujud Zat', targetCount: '1 B/S' },
  { id: 10, name: 'Suhu & Skala Termometer', targetCount: '3 PG' },
  { id: 11, name: 'Pengaruh Kalor terhadap Perubahan Suhu', targetCount: '2 PG' },
  { id: 12, name: 'Kalor Laten / Perubahan Wujud', targetCount: '2 PG' },
  { id: 13, name: 'Perpindahan Kalor', targetCount: '2 PG' },
  { id: 14, name: 'Pemuaian Zat', targetCount: '1 B/S' },
  { id: 15, name: 'Penerapan Kalor & Pemuaian', targetCount: '1 B/S' },
];

export const EXAM_QUESTIONS: ExamQuestion[] = [
  // 1. Hakikat Sains (2 soal PG)
  {
    id: 1,
    topicId: 1,
    topicName: 'Hakikat Sains',
    type: 'pg',
    question:
      'Bacalah teks berikut dengan saksama!\n\n"Rafi melakukan pengamatan pertumbuhan kecambah kacang hijau di dua tempat berbeda, yaitu tempat terang dan tempat gelap. Setiap hari ia mengukur tinggi batang menggunakan penggaris, mencatat warna daun, serta menuliskan semua data apa adanya meskipun hasilnya berbeda dengan dugaan awalnya."\n\nBerdasarkan kegiatan penyelidikan tersebut, sikap dan ciri sains (IPA) yang paling menonjol adalah ....',
    options: [
      { key: 'A', label: 'Empiris dan objektif, karena didasarkan pada data pengamatan nyata tanpa rekayasa' },
      { key: 'B', label: 'Subjektif dan imajinatif, karena mengikuti perasaan peneliti saat mengamati' },
      { key: 'C', label: 'Dogmatis dan mutlak, karena hasilnya tidak pernah berubah selamanya' },
      { key: 'D', label: 'Spekulatif dan tertutup, karena hanya mengandalkan perkiraan tanpa alat ukur' },
    ],
    correctAnswer: 'A',
    explanation:
      'Salah satu hakikat dan ciri utama sains (IPA) adalah bersifat empiris (berdasarkan pengalaman, pengamatan, dan percobaan nyata) serta objektif (jujur melaporkan hasil sesuai fakta di lapangan, tidak diubah-ubah sesuai keinginan atau dugaan pribadi peneliti).',
  },
  {
    id: 2,
    topicId: 1,
    topicName: 'Hakikat Sains',
    type: 'pg',
    question:
      'Dalam suatu penyelidikan ilmiah tentang titik didih air murni pada tekanan 1 atmosfer, seorang peneliti menyusun langkah percobaan secara terurut mulai dari merumuskan masalah hingga menarik kesimpulan. Peneliti lain di negara berbeda melakukan percobaan dengan prosedur yang sama dan memperoleh hasil titik didih air yang sama, yaitu 100°C.\n\nDeskripsi kegiatan tersebut menunjukkan bahwa pengetahuan sains memiliki ciri ....',
    options: [
      { key: 'A', label: 'Berlaku khusus hanya di laboratorium tempat penelitian pertama dilakukan' },
      { key: 'B', label: 'Sistematis dan dapat diuji ulang (verifikatif) dengan metode yang terstruktur' },
      { key: 'C', label: 'Terbatas pada opini pribadi ilmuwan yang menemukannya' },
      { key: 'D', label: 'Tidak memerlukan pengulangan karena cukup dipercaya satu kali saja' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ilmu sains bersifat sistematis (disusun menggunakan langkah metode ilmiah yang runtut dan logis) serta verifikatif/dapat diuji ulang, artinya jika peneliti lain mengulangi prosedur yang sama pada kondisi yang sama, hasil pengamatannya akan konsisten.',
  },

  // 2. Metode Ilmiah & Keselamatan Kerja (2 soal PG)
  {
    id: 3,
    topicId: 2,
    topicName: 'Metode Ilmiah & Keselamatan Kerja',
    type: 'pg',
    question:
      'Perhatikan narasi percobaan berikut!\n\n(1) Dinda melihat es batu yang diletakkan di mangkuk aluminium lebih cepat mencair dibandingkan di mangkuk plastik.\n(2) Dinda menduga bahwa jenis bahan wadah memengaruhi kecepatan mencairnya es.\n(3) Dinda meletakkan dua es batu berukuran sama di mangkuk aluminium dan plastik, lalu mencatat waktu mencairnya dengan stopwatch.\n(4) Dinda menyimpulkan bahwa wadah logam menghantarkan panas lebih cepat sehingga es lebih cepat mencair.\n\nUrutan langkah metode ilmiah yang ditunjukkan oleh nomor (1), (2), (3), dan (4) secara berturut-turut adalah ....',
    options: [
      { key: 'A', label: 'Hipotesis – Observasi – Kesimpulan – Eksperimen' },
      { key: 'B', label: 'Observasi – Eksperimen – Hipotesis – Kesimpulan' },
      { key: 'C', label: 'Observasi – Hipotesis – Eksperimen – Kesimpulan' },
      { key: 'D', label: 'Merumuskan masalah – Kesimpulan – Observasi – Hipotesis' },
    ],
    correctAnswer: 'C',
    explanation:
      'Langkah (1) merupakan pengamatan/observasi terhadap fenomena; langkah (2) merupakan perumusan hipotesis (dugaan sementara); langkah (3) merupakan eksperimen/percobaan untuk menguji dugaan; dan langkah (4) merupakan penarikan kesimpulan berdasarkan data percobaan.',
  },
  {
    id: 4,
    topicId: 2,
    topicName: 'Metode Ilmiah & Keselamatan Kerja',
    type: 'pg',
    question:
      'Saat melakukan praktikum pemanasan larutan di laboratorium IPA menggunakan tabung reaksi dan pembakar spiritus, tindakan keselamatan kerja yang paling tepat dilakukan oleh siswa adalah ....',
    options: [
      { key: 'A', label: 'Memegang tabung reaksi langsung dengan tangan kosong dan menutup mulut tabung dengan ibu jari' },
      { key: 'B', label: 'Menggunakan penjepit tabung kayu serta mengarahkan mulut tabung reaksi menjauhi wajah diri sendiri dan teman' },
      { key: 'C', label: 'Mengintip langsung ke dalam mulut tabung reaksi dari atas untuk melihat perubahan warna cairan' },
      { key: 'D', label: 'Mematikan nyala pembakar spiritus dengan cara meniupnya sekuat tenaga' },
    ],
    correctAnswer: 'B',
    explanation:
      'Saat memanaskan zat dalam tabung reaksi, tabung harus dipegang dengan penjepit (klem kayu) agar tangan tidak melepuh, dan mulut tabung harus diarahkan ke tempat aman (menjauhi diri sendiri maupun teman) untuk menghindari percikan cairan panas. Pembakar spiritus juga harus dimatikan menggunakan tutupnya, bukan ditiup.',
  },

  // 3. Alat Ukur Besaran Pokok (3 soal PG)
  {
    id: 5,
    topicId: 3,
    topicName: 'Alat Ukur Besaran Pokok',
    type: 'pg',
    question:
      'Seorang siswa mengukur diameter luar sebuah pipa kecil menggunakan jangka sorong. Perhatikan gambar hasil pengukuran berikut! Hasil pengukuran diameter pipa tersebut adalah ....',
    diagram: 'jangka_sorong',
    options: [
      { key: 'A', label: '2,30 cm' },
      { key: 'B', label: '2,36 cm' },
      { key: 'C', label: '2,46 cm' },
      { key: 'D', label: '2,96 cm' },
    ],
    correctAnswer: 'B',
    formula: 'Hasil = Skala Utama + (Skala Nonius × 0,01 cm)',
    explanation:
      '1. Baca Skala Utama (SU): Angka 0 pada skala nonius terletak tepat setelah garis 2,3 cm (antara 2,3 cm dan 2,4 cm), sehingga SU = 2,3 cm.\n2. Baca Skala Nonius (SN): Garis skala nonius yang berimpit lurus dengan garis skala utama adalah garis ke-6.\n3. Nilai SN = 6 × 0,01 cm = 0,06 cm.\n4. Total hasil pengukuran = 2,3 cm + 0,06 cm = 2,36 cm.',
  },
  {
    id: 6,
    topicId: 3,
    topicName: 'Alat Ukur Besaran Pokok',
    type: 'pg',
    question:
      'Perhatikan gambar hasil pengukuran ketebalan pelat logam menggunakan mikrometer sekrup berikut! Nilai ketebalan pelat logam yang terbaca pada alat tersebut adalah ....',
    diagram: 'mikrometer_sekrup',
    options: [
      { key: 'A', label: '4,32 mm' },
      { key: 'B', label: '4,52 mm' },
      { key: 'C', label: '4,82 mm' },
      { key: 'D', label: '5,32 mm' },
    ],
    correctAnswer: 'C',
    formula: 'Hasil = Skala Utama + (Skala Putar × 0,01 mm)',
    explanation:
      '1. Baca Skala Utama (SU): Garis skala 4 mm di atas dan garis setengah milimeter (4,5 mm) di bagian bawah terlihat jelas sebelum tepi selubung putar. Jadi SU = 4,5 mm.\n2. Baca Skala Putar (SP): Garis horizontal utama tepat berimpit dengan angka 32 (dua skala di atas 30).\n3. Nilai SP = 32 × 0,01 mm = 0,32 mm.\n4. Total hasil pengukuran = 4,5 mm + 0,32 mm = 4,82 mm.',
  },
  {
    id: 7,
    topicId: 3,
    topicName: 'Alat Ukur Besaran Pokok',
    type: 'pg',
    question:
      'Perhatikan tabel besaran pokok dan alat ukur di bawah ini! Pasangan besaran pokok, alat ukur, serta satuan SI yang paling tepat ditunjukkan oleh nomor ....',
    stimulusTable: {
      caption: 'Tabel Pasangan Besaran Pokok, Alat Ukur, dan Satuan SI',
      headers: ['No', 'Besaran Pokok', 'Alat Ukur', 'Satuan SI'],
      rows: [
        ['1', 'Massa', 'Neraca Ohaus', 'kilogram (kg)'],
        ['2', 'Waktu', 'Stopwatch', 'menit'],
        ['3', 'Suhu', 'Kalorimeter', 'kelvin (K)'],
        ['4', 'Kuat Arus Listrik', 'Voltmeter', 'ampere (A)'],
      ],
    },
    options: [
      { key: 'A', label: '1' },
      { key: 'B', label: '2' },
      { key: 'C', label: '3' },
      { key: 'D', label: '4' },
    ],
    correctAnswer: 'A',
    explanation:
      '• Nomor 1 BENAR: Massa diukur dengan neraca (seperti Neraca Ohaus) dan satuan SI-nya adalah kilogram (kg).\n• Nomor 2 salah karena satuan SI waktu adalah sekon (detik), bukan menit.\n• Nomor 3 salah karena alat ukur suhu adalah termometer (kalorimeter untuk mengukur kalor).\n• Nomor 4 salah karena alat ukur kuat arus listrik adalah amperemeter (voltmeter untuk tegangan listrik).',
  },

  // 4. Besaran, Satuan SI, & Konversi (3 soal PG)
  {
    id: 8,
    topicId: 4,
    topicName: 'Besaran, Satuan SI, & Konversi',
    type: 'pg',
    question:
      'Seorang siswa melakukan percobaan gerak benda dan mencatat data pengamatan seperti pada tabel berikut. Kelompok besaran yang seluruhnya termasuk besaran turunan adalah ....',
    stimulusTable: {
      caption: 'Tabel Data Pengamatan Percobaan Laboratorium',
      headers: ['Kode Data', 'Besaran yang Diamati', 'Hasil Pengukuran'],
      rows: [
        ['P', 'Massa balok kayu', '0,5 kg'],
        ['Q', 'Volume balok kayu', '0,0008 m³'],
        ['R', 'Waktu tempuh', '4 sekon'],
        ['S', 'Kecepatan gerak balok', '2,5 m/s'],
        ['T', 'Massa jenis balok', '625 kg/m³'],
      ],
    },
    options: [
      { key: 'A', label: 'P, Q, dan R' },
      { key: 'B', label: 'P, R, dan S' },
      { key: 'C', label: 'Q, S, dan T' },
      { key: 'D', label: 'R, S, dan T' },
    ],
    correctAnswer: 'C',
    explanation:
      'Besaran pokok pada tabel adalah massa (P) dan waktu (R). Sedangkan volume (Q = panjang × lebar × tinggi, satuan m³), kecepatan (S = jarak / waktu, satuan m/s), dan massa jenis (T = massa / volume, satuan kg/m³) merupakan besaran turunan karena satuannya diturunkan dari besaran-besaran pokok.',
  },
  {
    id: 9,
    topicId: 4,
    topicName: 'Besaran, Satuan SI, & Konversi',
    type: 'pg',
    question:
      'Sebuah tiang penyangga alat peraga memiliki tinggi bagian utama 185 cm dan dipasang di atas papan alas setebal 50 mm. Tinggi total tiang penyangga beserta papan alasnya jika dinyatakan dalam satuan SI panjang adalah ....',
    options: [
      { key: 'A', label: '0,235 meter' },
      { key: 'B', label: '1,90 meter' },
      { key: 'C', label: '2,35 meter' },
      { key: 'D', label: '19,0 meter' },
    ],
    correctAnswer: 'B',
    formula: '1 m = 100 cm = 1.000 mm',
    explanation:
      'Satuan SI untuk panjang adalah meter (m).\n• 185 cm = 185 ÷ 100 = 1,85 m\n• 50 mm = 50 ÷ 1.000 = 0,05 m\nTotal tinggi = 1,85 m + 0,05 m = 1,90 m.',
  },
  {
    id: 10,
    topicId: 4,
    topicName: 'Besaran, Satuan SI, & Konversi',
    type: 'pg',
    question:
      'Untuk membuat larutan praktikum, Ibu guru menyiapkan bahan-bahan dengan massa masing-masing 1,5 kg garam dapur, 450 gram gula pasir, dan 50.000 miligram serbuk kapur. Massa total seluruh bahan tersebut dalam satuan SI adalah ....',
    options: [
      { key: 'A', label: '1,955 kg' },
      { key: 'B', label: '1,995 kg' },
      { key: 'C', label: '2,000 kg' },
      { key: 'D', label: '2,450 kg' },
    ],
    correctAnswer: 'C',
    formula: '1 kg = 1.000 gram = 1.000.000 mg',
    explanation:
      'Satuan SI untuk massa adalah kilogram (kg).\n• Garam dapur = 1,5 kg\n• Gula pasir = 450 gram = 450 ÷ 1.000 = 0,45 kg\n• Serbuk kapur = 50.000 mg = 50.000 ÷ 1.000.000 = 0,05 kg\nMassa total = 1,5 + 0,45 + 0,05 = 2,000 kg.',
  },

  // 5. Ketelitian Pengukuran (1 soal Benar/Salah)
  {
    id: 11,
    topicId: 5,
    topicName: 'Ketelitian Pengukuran',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Mikrometer sekrup memiliki tingkat ketelitian lebih tinggi (0,01 mm) dibandingkan jangka sorong (0,1 mm), sehingga mikrometer sekrup lebih tepat digunakan untuk mengukur ketebalan selembar kertas atau diameter kawat tipis."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'BENAR',
    explanation:
      'Pernyataan ini BENAR. Skala terkecil (ketelitian) mikrometer sekrup adalah 0,01 mm (0,001 cm), sedangkan jangka sorong umumnya memiliki ketelitian 0,1 mm (0,01 cm) — sepuluh kali lebih besar. Karena itu mikrometer sekrup mampu mengukur benda sangat tipis seperti kawat halus dan pelat dengan lebih presisi.',
  },

  // 6. Laporan Percobaan (1 soal Benar/Salah)
  {
    id: 12,
    topicId: 6,
    topicName: 'Laporan Percobaan',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Dalam struktur laporan hasil percobaan IPA, bagian Hipotesis berfungsi untuk memaparkan ringkasan hasil akhir setelah seluruh data percobaan selesai diolah dan dianalisis."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'SALAH',
    explanation:
      'Pernyataan ini SALAH. Bagian Hipotesis berisi dugaan atau jawaban sementara peneliti sebelum percobaan dilakukan (berdasarkan teori atau pengamatan awal). Bagian yang berfungsi memaparkan hasil akhir setelah data diolah dan dianalisis adalah bagian Kesimpulan.',
  },

  // 7. Sifat Fisika & Kimia Zat (3 soal PG)
  {
    id: 13,
    topicId: 7,
    topicName: 'Sifat Fisika & Kimia Zat',
    type: 'pg',
    question:
      'Seorang siswa mengamati beberapa ciri pada sebatang logam tembaga sebagai berikut:\n(1) Berwarna cokelat kemerahan dan mengilap.\n(2) Mampu menghantarkan arus listrik dengan sangat baik.\n(3) Dapat bereaksi dengan udara lembap membentuk lapisan kerak kehijauan.\n(4) Memiliki titik leleh sebesar 1.085°C.\n\nBerdasarkan data pengamatan tersebut, yang termasuk sifat fisika logam tembaga ditunjukkan oleh nomor ....',
    options: [
      { key: 'A', label: '(1), (2), dan (3)' },
      { key: 'B', label: '(1), (2), dan (4)' },
      { key: 'C', label: '(1), (3), dan (4)' },
      { key: 'D', label: '(2), (3), dan (4)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sifat fisika adalah ciri zat yang dapat diamati atau diukur tanpa mengubah susunan kimia zat menjadi zat baru. Warna (1), daya hantar listrik (2), dan titik leleh (4) adalah sifat fisika. Sedangkan kemampuan bereaksi membentuk kerak kehijauan (3) melibatkan terbentuknya zat baru sehingga termasuk sifat kimia.',
  },
  {
    id: 14,
    topicId: 7,
    topicName: 'Sifat Fisika & Kimia Zat',
    type: 'pg',
    question:
      'Perhatikan tabel hasil pengujian terhadap empat jenis zat berikut! Zat yang menunjukkan data sifat kimia paling jelas dalam kolom keterangan uji adalah ....',
    stimulusTable: {
      caption: 'Tabel Hasil Uji Sifat Zat di Laboratorium',
      headers: ['Zat', 'Wujud (25°C)', 'Titik Didih', 'Keterangan Hasil Uji'],
      rows: [
        ['Zat K', 'Cair bening', '100°C', 'Tidak berbau dan tidak berwarna'],
        ['Zat L', 'Padat abu-abu', '1.538°C', 'Mudah berkarat bila terkena air dan oksigen'],
        ['Zat M', 'Padat putih', '801°C', 'Mudah larut saat diaduk dalam air'],
        ['Zat N', 'Cair keperakan', '357°C', 'Memuai teratur saat dipanaskan'],
      ],
    },
    options: [
      { key: 'A', label: 'Zat K' },
      { key: 'B', label: 'Zat L' },
      { key: 'C', label: 'Zat M' },
      { key: 'D', label: 'Zat N' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sifat kimia berhubungan dengan kecenderungan suatu zat untuk bereaksi dan membentuk zat baru (seperti mudah terbakar, mudah berkarat/korosi, mudah membusuk, atau bereaksi dengan asam). Kemampuan Zat L untuk berkarat saat bertemu air dan oksigen merupakan sifat kimia, sedangkan warna, kelarutan dalam air, dan pemuaian adalah sifat fisika.',
  },
  {
    id: 15,
    topicId: 7,
    topicName: 'Sifat Fisika & Kimia Zat',
    type: 'pg',
    question:
      'Perhatikan dua peristiwa sehari-hari berikut:\n• Peristiwa X: Pagar besi di luar rumah dibiarkan terkena hujan dan panas sehingga muncul karat cokelat di permukaannya.\n• Peristiwa Y: Garam dapur dilarutkan ke dalam segelas air hangat hingga tidak terlihat lagi butirannya.\n\nPerbedaan sifat zat yang ditunjukkan oleh peristiwa X dan Y adalah ....',
    options: [
      { key: 'A', label: 'Peristiwa X menunjukkan sifat fisika (kekerasan), peristiwa Y menunjukkan sifat kimia (kelarutan)' },
      { key: 'B', label: 'Peristiwa X menunjukkan sifat kimia (mudah berkarat), peristiwa Y menunjukkan sifat fisika (kelarutan)' },
      { key: 'C', label: 'Peristiwa X dan Y keduanya hanya menunjukkan sifat fisika karena bentuknya tetap' },
      { key: 'D', label: 'Peristiwa X dan Y keduanya menunjukkan sifat kimia karena terbentuk zat baru' },
    ],
    correctAnswer: 'B',
    explanation:
      'Perkaratan besi (Peristiwa X) menunjukkan sifat kimia karena besi bereaksi dengan oksigen dan air membentuk zat baru yaitu karat besi (Fe₂O₃·xH₂O). Pelarutan garam dalam air (Peristiwa Y) menunjukkan sifat fisika (kelarutan) karena partikel garam hanya menyebar dan tidak berubah menjadi zat baru (dapat diperoleh kembali dengan penguapan).',
  },

  // 8. Perubahan Fisika & Kimia (3 soal PG)
  {
    id: 16,
    topicId: 8,
    topicName: 'Perubahan Fisika & Kimia',
    type: 'pg',
    question:
      'Berikut ini yang seluruhnya merupakan contoh peristiwa perubahan fisika adalah ....',
    options: [
      { key: 'A', label: 'Kapur barus menyublim, beras digiling menjadi tepung, dan air membeku menjadi es' },
      { key: 'B', label: 'Kertas dibakar menjadi abu, lilin meleleh, dan susu basi' },
      { key: 'C', label: 'Besi berkarat, kayu dipotong menjadi kursi, dan gula larut dalam air' },
      { key: 'D', label: 'Singkong difermentasi menjadi tape, air mendidih, dan apel membusuk' },
    ],
    correctAnswer: 'A',
    explanation:
      'Perubahan fisika adalah perubahan zat yang tidak menghasilkan zat jenis baru (hanya berubah bentuk, ukuran, atau wujud). Menyublimnya kapur barus, penggilingan beras menjadi tepung (komposisi kimia tetap pati beras), dan pembekuan air menjadi es semuanya tidak menghasilkan zat baru. Pembakaran, susu basi, perkaratan, fermentasi, dan pembusukan adalah perubahan kimia.',
  },
  {
    id: 17,
    topicId: 8,
    topicName: 'Perubahan Fisika & Kimia',
    type: 'pg',
    question:
      'Dalam kehidupan sehari-hari, proses berikut yang merupakan contoh perubahan kimia karena menghasilkan zat baru dengan sifat berbeda dari zat asalnya adalah ....',
    options: [
      { key: 'A', label: 'Penguapan bensin saat tutup botolnya dibiarkan terbuka' },
      { key: 'B', label: 'Pemasangan kabel listrik hingga memuai di siang hari' },
      { key: 'C', label: 'Pembuatan tape singkong melalui proses fermentasi menggunakan ragi' },
      { key: 'D', label: 'Pembuatan es lilin dari sirup yang dimasukkan ke dalam freezer' },
    ],
    correctAnswer: 'C',
    explanation:
      'Fermentasi singkong menjadi tape melibatkan aktivitas mikroorganisme (ragi) yang mengubah zat pati/karbohidrat dalam singkong menjadi gula, alkohol, dan senyawa aroma baru. Karena terbentuk zat baru dengan rasa, bau, dan tekstur berbeda yang tidak dapat dikembalikan ke singkong semula, ini adalah perubahan kimia.',
  },
  {
    id: 18,
    topicId: 8,
    topicName: 'Perubahan Fisika & Kimia',
    type: 'pg',
    question:
      'Siswa melakukan empat percobaan pencampuran zat di laboratorium dan mencatat hasilnya pada tabel berikut. Pasangan percobaan yang membuktikan terjadinya perubahan kimia adalah ....',
    stimulusTable: {
      caption: 'Tabel Hasil Pengamatan Percobaan Pencampuran Zat',
      headers: ['Percobaan', 'Bahan yang Dicampur', 'Pengamatan Selama Pencampuran'],
      rows: [
        ['1', 'Gula pasir + Air bening', 'Gula larut, rasa manis, tidak ada endapan atau gas'],
        ['2', 'Cuka + Soda kue', 'Muncul banyak gelembung gas dan gelas terasa dingin'],
        ['3', 'Es batu + Air panas', 'Es mencair menjadi air bersuhu hangat'],
        ['4', 'Larutan timbal nitrat + Kalium iodida', 'Larutan bening langsung berubah menjadi endapan kuning cerah'],
      ],
    },
    options: [
      { key: 'A', label: 'Percobaan 1 dan 2' },
      { key: 'B', label: 'Percobaan 1 dan 3' },
      { key: 'C', label: 'Percobaan 2 dan 4' },
      { key: 'D', label: 'Percobaan 3 dan 4' },
    ],
    correctAnswer: 'C',
    explanation:
      'Empat ciri utama terjadinya perubahan kimia adalah terbentuknya gas, terbentuknya endapan, perubahan warna, dan perubahan suhu. Percobaan 2 (cuka + soda kue) menghasilkan gelembung gas CO₂ dan perubahan suhu (terasa dingin), sedangkan Percobaan 4 menghasilkan perubahan warna dan endapan kuning baru. Percobaan 1 dan 3 hanya pelarutan dan peleburan (perubahan fisika).',
  },

  // 9. Perubahan Wujud Zat (1 soal Benar/Salah)
  {
    id: 19,
    topicId: 9,
    topicName: 'Perubahan Wujud Zat',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Peristiwa mengembun dan membeku terjadi karena zat melepaskan energi kalor ke lingkungan, sedangkan peristiwa menyublim (padat menjadi gas) terjadi karena zat menyerap energi kalor."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'BENAR',
    explanation:
      'Pernyataan ini BENAR. Perubahan wujud yang melepas kalor meliputi membeku (cair → padat), mengembun (gas → cair), dan mengkristal/deposisi (gas → padat). Sebaliknya, perubahan wujud yang menyerap/memerlukan kalor meliputi mencair (padat → cair), menguap (cair → gas), dan menyublim (padat → gas).',
  },

  // 10. Suhu & Skala Termometer (3 soal PG)
  {
    id: 20,
    topicId: 10,
    topicName: 'Suhu & Skala Termometer',
    type: 'pg',
    question:
      'Perhatikan gambar skala termometer Celcius di bawah ini! Suhu air yang ditunjukkan oleh tinggi kolom cairan merah pada termometer tersebut adalah ....',
    diagram: 'termometer',
    options: [
      { key: 'A', label: '34°C' },
      { key: 'B', label: '36°C' },
      { key: 'C', label: '38°C' },
      { key: 'D', label: '42°C' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pada tampilan yang diperbesar, jarak antara 30°C dan 40°C terbagi menjadi 5 bagian skala kecil, sehingga setiap 1 garis skala kecil bernilai 10°C ÷ 5 = 2°C. Permukaan cairan merah tepat berada pada garis keempat di atas angka 30°C (atau satu garis di bawah 40°C), yaitu 30 + (4 × 2) = 38°C.',
  },
  {
    id: 21,
    topicId: 10,
    topicName: 'Suhu & Skala Termometer',
    type: 'pg',
    question:
      'Suhu air hangat di dalam gelas kimia saat diukur menggunakan termometer Celcius menunjukkan angka 45°C. Jika suhu air tersebut diukur menggunakan termometer berskala Fahrenheit, maka angka yang ditunjukkan adalah ....',
    options: [
      { key: 'A', label: '77°F' },
      { key: 'B', label: '81°F' },
      { key: 'C', label: '108°F' },
      { key: 'D', label: '113°F' },
    ],
    correctAnswer: 'D',
    formula: 'T(°F) = (9/5 × T(°C)) + 32',
    explanation:
      'Gunakan rumus konversi Celcius ke Fahrenheit:\nT(°F) = (9/5 × 45) + 32\nT(°F) = (9 × 9) + 32\nT(°F) = 81 + 32 = 113°F.',
  },
  {
    id: 22,
    topicId: 10,
    topicName: 'Suhu & Skala Termometer',
    type: 'pg',
    question:
      'Suhu ruang laboratorium IPA tercatat sebesar 27°C. Apabila suhu ruangan tersebut dinyatakan dalam satuan Sistem Internasional (SI), nilainya setara dengan ....',
    options: [
      { key: 'A', label: '246 K' },
      { key: 'B', label: '300 K' },
      { key: 'C', label: '310 K' },
      { key: 'D', label: '327 K' },
    ],
    correctAnswer: 'B',
    formula: 'T(K) = T(°C) + 273',
    explanation:
      'Satuan SI untuk besaran pokok suhu adalah Kelvin (K).\nT(K) = 27°C + 273 = 300 K.',
  },

  // 11. Pengaruh Kalor terhadap Perubahan Suhu (2 soal PG)
  {
    id: 23,
    topicId: 11,
    topicName: 'Pengaruh Kalor terhadap Perubahan Suhu',
    type: 'pg',
    question:
      'Empat jenis zat cair berbeda dengan suhu awal yang sama masing-masing menerima energi kalor sebesar 8.400 Joule seperti pada tabel berikut. Zat yang mengalami kenaikan suhu (ΔT) paling besar adalah ....',
    stimulusTable: {
      caption: 'Tabel Massa dan Kalor Jenis Zat Cair yang Dipanaskan (Q = 8.400 J)',
      headers: ['Nama Zat', 'Massa (kg)', 'Kalor Jenis (J/kg°C)'],
      rows: [
        ['Zat P', '1 kg', '4.200 J/kg°C'],
        ['Zat Q', '2 kg', '2.100 J/kg°C'],
        ['Zat R', '1 kg', '840 J/kg°C'],
        ['Zat S', '2 kg', '4.200 J/kg°C'],
      ],
    },
    options: [
      { key: 'A', label: 'Zat P' },
      { key: 'B', label: 'Zat Q' },
      { key: 'C', label: 'Zat R' },
      { key: 'D', label: 'Zat S' },
    ],
    correctAnswer: 'C',
    formula: 'ΔT = Q / (m · c)',
    explanation:
      'Dari rumus Q = m · c · ΔT, diperoleh ΔT = Q / (m · c). Untuk kalor Q yang sama (8.400 J), kenaikan suhu berbanding terbalik dengan hasil kali massa dan kalor jenis (m · c):\n• Zat P: ΔT = 8.400 / (1 × 4.200) = 2°C\n• Zat Q: ΔT = 8.400 / (2 × 2.100) = 2°C\n• Zat R: ΔT = 8.400 / (1 × 840) = 10°C (paling besar)\n• Zat S: ΔT = 8.400 / (2 × 4.200) = 1°C',
  },
  {
    id: 24,
    topicId: 11,
    topicName: 'Pengaruh Kalor terhadap Perubahan Suhu',
    type: 'pg',
    question:
      'Sebanyak 2 kg air dipanaskan dari suhu awal 25°C hingga mencapai suhu 75°C. Jika kalor jenis air adalah 4.200 J/kg°C, maka jumlah energi kalor yang dibutuhkan adalah ....',
    options: [
      { key: 'A', label: '210.000 Joule' },
      { key: 'B', label: '336.000 Joule' },
      { key: 'C', label: '420.000 Joule' },
      { key: 'D', label: '630.000 Joule' },
    ],
    correctAnswer: 'C',
    formula: 'Q = m · c · ΔT',
    explanation:
      'Diketahui:\n• m = 2 kg\n• c = 4.200 J/kg°C\n• ΔT = 75°C − 25°C = 50°C\n\nPerhitungan:\nQ = m · c · ΔT\nQ = 2 × 4.200 × 50\nQ = 420.000 Joule.',
  },

  // 12. Kalor Laten / Perubahan Wujud (2 soal PG)
  {
    id: 25,
    topicId: 12,
    topicName: 'Kalor Laten / Perubahan Wujud',
    type: 'pg',
    question:
      'Perhatikan grafik pemanasan es bersuhu -10°C hingga berubah menjadi uap air bersuhu 120°C berikut! Bagian grafik yang menunjukkan berlakunya kalor laten (kalor digunakan untuk mengubah wujud zat tanpa menaikkan suhu) adalah segmen ....',
    diagram: 'grafik_kalor',
    options: [
      { key: 'A', label: 'A–B dan C–D' },
      { key: 'B', label: 'B–C dan D–E' },
      { key: 'C', label: 'C–D dan E–F' },
      { key: 'D', label: 'A–B dan E–F' },
    ],
    correctAnswer: 'B',
    formula: 'Kalor Laten: Q = m · L atau Q = m · U (Suhu konstan / garis mendatar)',
    explanation:
      'Pada grafik suhu terhadap kalor/waktu, kalor laten ditunjukkan oleh garis mendatar karena seluruh kalor yang diserap digunakan untuk memutuskan ikatan antarpartikel (mengubah wujud), bukan menaikkan suhu:\n• Segmen B–C (mendatar pada 0°C): proses es melebur menjadi air (kalor laten lebur).\n• Segmen D–E (mendatar pada 100°C): proses air menguap menjadi uap air (kalor laten uap).',
  },
  {
    id: 26,
    topicId: 12,
    topicName: 'Kalor Laten / Perubahan Wujud',
    type: 'pg',
    question:
      'Sebongkah es bermassa 0,5 kg pada suhu 0°C dipanaskan hingga seluruhnya melebur menjadi air bersuhu 0°C. Apabila kalor lebur es adalah 336.000 J/kg, maka kalor yang diperlukan untuk proses peleburan tersebut adalah ....',
    options: [
      { key: 'A', label: '168.000 Joule' },
      { key: 'B', label: '336.000 Joule' },
      { key: 'C', label: '672.000 Joule' },
      { key: 'D', label: '1.680.000 Joule' },
    ],
    correctAnswer: 'A',
    formula: 'Q = m · L',
    explanation:
      'Karena es berubah wujud pada suhu tetap 0°C, digunakan rumus kalor laten lebur:\nQ = m · L\nQ = 0,5 kg × 336.000 J/kg = 168.000 Joule.',
  },

  // 13. Perpindahan Kalor (2 soal PG)
  {
    id: 27,
    topicId: 13,
    topicName: 'Perpindahan Kalor',
    type: 'pg',
    question:
      'Perhatikan dua kejadian berikut dalam kehidupan sehari-hari:\n(1) Ujung sendok logam terasa panas ketika ujung lainnya digunakan untuk mengaduk teh panas.\n(2) Terjadinya angin laut pada siang hari yang bertiup dari laut menuju daratan.\n\nJenis perpindahan kalor yang terjadi pada kejadian (1) dan (2) secara berurutan adalah ....',
    options: [
      { key: 'A', label: 'Konduksi dan radiasi' },
      { key: 'B', label: 'Konveksi dan konduksi' },
      { key: 'C', label: 'Konduksi dan konveksi' },
      { key: 'D', label: 'Radiasi dan konveksi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kejadian (1) adalah konduksi karena kalor merambat melalui zat padat (logam sendok) tanpa disertai perpindahan partikel-partikel logamnya. Kejadian (2) adalah konveksi karena terjadi perpindahan kalor yang disertai aliran massa fluida (udara hangat di daratan naik dan digantikan udara sejuk dari laut).',
  },
  {
    id: 28,
    topicId: 13,
    topicName: 'Perpindahan Kalor',
    type: 'pg',
    question:
      'Panas dari matahari dapat sampai ke permukaan bumi meskipun melewati ruang hampa udara di luar angkasa. Peristiwa serupa yang menggunakan cara perpindahan kalor yang sama adalah ....',
    options: [
      { key: 'A', label: 'Memasak air di dalam panci hingga air bagian atas dan bawah bersirkulasi panas' },
      { key: 'B', label: 'Menyetrika pakaian menggunakan alas logam panas pada setrika' },
      { key: 'C', label: 'Tubuh terasa hangat saat duduk di depan api unggun pada malam hari' },
      { key: 'D', label: 'Asap pembakaran sampah bergerak naik ke udara' },
    ],
    correctAnswer: 'C',
    explanation:
      'Panas matahari mencapai bumi melalui perpindahan kalor secara radiasi (pancaran gelombang elektromagnetik tanpa memerlukan zat perantara/medium). Tubuh terasa hangat di dekat api unggun juga terjadi karena radiasi pancaran panas dari api ke tubuh kita. Sementara memasak air dan naiknya asap adalah konveksi, dan menyetrika adalah konduksi.',
  },

  // 14. Pemuaian Zat (1 soal Benar/Salah)
  {
    id: 29,
    topicId: 14,
    topicName: 'Pemuaian Zat',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Apabila dipanaskan dengan kenaikan suhu yang sama, umumnya zat gas mengalami pemuaian volume yang paling besar dibandingkan zat cair dan zat padat."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'BENAR',
    explanation:
      'Pernyataan ini BENAR. Jarak antarpartikel pada zat gas sangat renggang dan gaya tarik-menarik antarpartikelnya sangat lemah dibandingkan zat cair maupun zat padat. Akibatnya, saat menerima kalor pada kenaikan suhu yang sama, partikel gas bergerak lebih bebas sehingga pemuaian volumenya paling besar.',
  },

  // 15. Penerapan Kalor & Pemuaian (1 soal Benar/Salah)
  {
    id: 30,
    topicId: 15,
    topicName: 'Penerapan Kalor & Pemuaian',
    type: 'bs',
    question:
      'Tentukan apakah pernyataan berikut Benar atau Salah:\n\n"Kabel jaringan listrik di tepi jalan sengaja dipasang agak kendor pada siang hari yang terik agar kabel tidak putus saat mengalami pemuaian pada malam hari yang dingin."',
    options: [
      { key: 'BENAR', label: 'Benar' },
      { key: 'SALAH', label: 'Salah' },
    ],
    correctAnswer: 'SALAH',
    explanation:
      'Pernyataan ini SALAH. Kabel listrik dipasang agak kendor agar pada malam hari yang bersuhu dingin kabel tidak putus saat mengalami PENYUSUTAN (bukan pemuaian). Pada suhu dingin kabel menyusut/memendek sehingga menjadi tegang, sedangkan pada siang hari yang terik kabel justru memuai/memanjang.',
  },
];
