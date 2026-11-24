import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">
      <div className="max-w-md w-full bg-white rounded-xl border border-slate-200 p-8 text-center space-y-4">
        <div className="text-sm font-mono font-semibold text-[#0284C7]">404</div>
        <h1 className="text-xl font-bold text-slate-900">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-sm text-slate-600">
          Halaman yang kamu cari tidak tersedia. Kembali ke portal utama untuk memulai simulasi ujian.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0369A1] text-white text-sm font-semibold transition-colors"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
