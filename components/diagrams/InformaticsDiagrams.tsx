'use client';

import React from 'react';

/**
 * 1. Simbol Dasar Flowchart (1: Terminator, 2: Input/Output, 3: Proses, 4: Decision)
 */
export function FlowchartSymbolsSvg({ showHighlight = false }: { showHighlight?: boolean }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
      <svg
        viewBox="0 0 560 155"
        className="w-full max-w-[560px] mx-auto h-auto select-none"
        role="img"
        aria-label="Ilustrasi empat simbol standar Flowchart bernomor 1 sampai 4"
      >
        {/* Symbol 1: Terminator (Oval/Capsule) */}
        <g>
          <text
            x="70"
            y="24"
            textAnchor="middle"
            className="fill-slate-900 text-[12px] font-bold"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Simbol 1
          </text>
          <rect
            x="20"
            y="42"
            width="100"
            height="46"
            rx="23"
            fill="#F8FAFC"
            stroke="#475569"
            strokeWidth="2"
          />
          <text
            x="70"
            y="112"
            textAnchor="middle"
            className="fill-slate-600 text-[11px] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {showHighlight ? 'Terminator' : 'Bentuk Oval'}
          </text>
        </g>

        {/* Symbol 2: Input / Output (Parallelogram) */}
        <g>
          <text
            x="205"
            y="24"
            textAnchor="middle"
            className="fill-slate-900 text-[12px] font-bold"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Simbol 2
          </text>
          <polygon
            points="162,42 260,42 246,88 148,88"
            fill={showHighlight ? '#E0F2FE' : '#F8FAFC'}
            stroke={showHighlight ? '#0284C7' : '#475569'}
            strokeWidth="2"
          />
          <text
            x="205"
            y="112"
            textAnchor="middle"
            className="fill-slate-600 text-[11px] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {showHighlight ? 'Input / Output' : 'Jajar Genjang'}
          </text>
        </g>

        {/* Symbol 3: Proses (Rectangle) */}
        <g>
          <text
            x="345"
            y="24"
            textAnchor="middle"
            className="fill-slate-900 text-[12px] font-bold"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Simbol 3
          </text>
          <rect
            x="295"
            y="42"
            width="100"
            height="46"
            rx="3"
            fill="#F8FAFC"
            stroke="#475569"
            strokeWidth="2"
          />
          <text
            x="345"
            y="112"
            textAnchor="middle"
            className="fill-slate-600 text-[11px] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {showHighlight ? 'Proses' : 'Persegi Panjang'}
          </text>
        </g>

        {/* Symbol 4: Decision (Diamond) */}
        <g>
          <text
            x="485"
            y="24"
            textAnchor="middle"
            className="fill-slate-900 text-[12px] font-bold"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Simbol 4
          </text>
          <polygon
            points="485,33 535,65 485,97 435,65"
            fill={showHighlight ? '#DCFCE7' : '#F8FAFC'}
            stroke={showHighlight ? '#059669' : '#475569'}
            strokeWidth="2"
          />
          <text
            x="485"
            y="116"
            textAnchor="middle"
            className="fill-slate-600 text-[11px] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {showHighlight ? 'Decision (Keputusan)' : 'Belah Ketupat'}
          </text>
        </g>

        <text
          x="280"
          y="142"
          textAnchor="middle"
          className="fill-slate-400 text-[10px]"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Simbol Standar Diagram Alir (Flowchart)
        </text>
      </svg>
    </div>
  );
}

/**
 * 2. Flowchart Luas Bangun Datar (Segitiga)
 */
export function FlowchartLuasSvg({ showHighlight = false }: { showHighlight?: boolean }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
      <svg
        viewBox="0 0 360 330"
        className="w-full max-w-[360px] mx-auto h-auto select-none"
        role="img"
        aria-label="Diagram alir perhitungan luas segitiga"
      >
        <defs>
          <marker
            id="arrowLuas"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
          </marker>
        </defs>

        {/* 1. Mulai */}
        <rect
          x="120"
          y="14"
          width="120"
          height="36"
          rx="18"
          fill="#F8FAFC"
          stroke="#475569"
          strokeWidth="1.8"
        />
        <text
          x="180"
          y="36"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Mulai
        </text>
        <line
          x1="180"
          y1="50"
          x2="180"
          y2="72"
          stroke="#475569"
          strokeWidth="1.8"
          markerEnd="url(#arrowLuas)"
        />

        {/* 2. Input alas, tinggi */}
        <polygon
          points="98,74 276,74 262,114 84,114"
          fill="#F8FAFC"
          stroke="#475569"
          strokeWidth="1.8"
        />
        <text
          x="180"
          y="98"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-medium"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Input alas, tinggi
        </text>
        <line
          x1="180"
          y1="114"
          x2="180"
          y2="138"
          stroke="#475569"
          strokeWidth="1.8"
          markerEnd="url(#arrowLuas)"
        />

        {/* 3. Proses Luas = (alas * tinggi) / 2 */}
        <rect
          x="65"
          y="140"
          width="230"
          height="44"
          rx="4"
          fill={showHighlight ? '#E0F2FE' : '#F8FAFC'}
          stroke={showHighlight ? '#0284C7' : '#475569'}
          strokeWidth="1.8"
        />
        <text
          x="180"
          y="166"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Luas = (alas * tinggi) / 2
        </text>
        <line
          x1="180"
          y1="184"
          x2="180"
          y2="208"
          stroke="#475569"
          strokeWidth="1.8"
          markerEnd="url(#arrowLuas)"
        />

        {/* 4. Output Tampilkan Luas */}
        <polygon
          points="98,210 276,210 262,250 84,250"
          fill={showHighlight ? '#DCFCE7' : '#F8FAFC'}
          stroke={showHighlight ? '#059669' : '#475569'}
          strokeWidth="1.8"
        />
        <text
          x="180"
          y="234"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-medium"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Tampilkan Luas
        </text>
        <line
          x1="180"
          y1="250"
          x2="180"
          y2="274"
          stroke="#475569"
          strokeWidth="1.8"
          markerEnd="url(#arrowLuas)"
        />

        {/* 5. Selesai */}
        <rect
          x="120"
          y="276"
          width="120"
          height="36"
          rx="18"
          fill="#F8FAFC"
          stroke="#475569"
          strokeWidth="1.8"
        />
        <text
          x="180"
          y="298"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Selesai
        </text>
      </svg>
    </div>
  );
}

/**
 * 3. Flowchart Mencari Nilai Terbesar dari 3 Bilangan (a, b, c)
 * Highlight path for a=15, b=27, c=19:
 * a > b ? (Tidak) -> b > c ? (Ya) -> Cetak b -> Selesai
 */
export function FlowchartMax3Svg({ showHighlight = false }: { showHighlight?: boolean }) {
  const pathStroke = showHighlight ? '#059669' : '#475569';
  const defaultStroke = '#64748B';

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
      <svg
        viewBox="0 0 580 410"
        className="w-full max-w-[580px] mx-auto h-auto select-none"
        role="img"
        aria-label="Diagram alir mencari nilai terbesar dari tiga bilangan a, b, dan c"
      >
        <defs>
          <marker
            id="arrowDark"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#475569" />
          </marker>
          <marker
            id="arrowGreen"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#059669" />
          </marker>
        </defs>

        {/* Mulai */}
        <rect
          x="230"
          y="12"
          width="120"
          height="34"
          rx="17"
          fill={showHighlight ? '#ECFDF5' : '#F8FAFC'}
          stroke={pathStroke}
          strokeWidth="1.8"
        />
        <text
          x="290"
          y="33"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Mulai
        </text>
        <line
          x1="290"
          y1="46"
          x2="290"
          y2="68"
          stroke={pathStroke}
          strokeWidth="1.8"
          markerEnd={showHighlight ? 'url(#arrowGreen)' : 'url(#arrowDark)'}
        />

        {/* Input a, b, c */}
        <polygon
          points="220,70 374,70 360,106 206,106"
          fill={showHighlight ? '#ECFDF5' : '#F8FAFC'}
          stroke={pathStroke}
          strokeWidth="1.8"
        />
        <text
          x="290"
          y="92"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-medium"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Input a, b, c
        </text>
        <line
          x1="290"
          y1="106"
          x2="290"
          y2="128"
          stroke={pathStroke}
          strokeWidth="1.8"
          markerEnd={showHighlight ? 'url(#arrowGreen)' : 'url(#arrowDark)'}
        />

        {/* Decision 1: a > b ? */}
        <polygon
          points="290,130 356,162 290,194 224,162"
          fill={showHighlight ? '#ECFDF5' : '#F8FAFC'}
          stroke={pathStroke}
          strokeWidth="1.8"
        />
        <text
          x="290"
          y="166"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          a &gt; b ?
        </text>

        {/* Left Branch: Ya -> a > c ? */}
        <polyline
          points="224,162 135,162 135,204"
          fill="none"
          stroke={defaultStroke}
          strokeWidth="1.7"
          markerEnd="url(#arrowDark)"
        />
        <text
          x="178"
          y="154"
          textAnchor="middle"
          className="fill-slate-700 text-[11px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Ya
        </text>

        {/* Right Branch: Tidak -> b > c ? (Highlighted path) */}
        <polyline
          points="356,162 445,162 445,204"
          fill="none"
          stroke={pathStroke}
          strokeWidth={showHighlight ? '2.4' : '1.7'}
          markerEnd={showHighlight ? 'url(#arrowGreen)' : 'url(#arrowDark)'}
        />
        <text
          x="402"
          y="154"
          textAnchor="middle"
          className={showHighlight ? 'fill-[#059669] text-[11px] font-bold' : 'fill-slate-700 text-[11px] font-semibold'}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Tidak
        </text>

        {/* Decision 2 Left: a > c ? */}
        <polygon
          points="135,206 198,236 135,266 72,236"
          fill="#F8FAFC"
          stroke={defaultStroke}
          strokeWidth="1.7"
        />
        <text
          x="135"
          y="240"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          a &gt; c ?
        </text>

        {/* Decision 2 Right: b > c ? */}
        <polygon
          points="445,206 508,236 445,266 382,236"
          fill={showHighlight ? '#ECFDF5' : '#F8FAFC'}
          stroke={pathStroke}
          strokeWidth={showHighlight ? '2' : '1.7'}
        />
        <text
          x="445"
          y="240"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          b &gt; c ?
        </text>

        {/* Output 1: Cetak a (Ya from a>c) */}
        <polyline
          points="72,236 52,236 52,292"
          fill="none"
          stroke={defaultStroke}
          strokeWidth="1.6"
          markerEnd="url(#arrowDark)"
        />
        <text
          x="60"
          y="228"
          textAnchor="middle"
          className="fill-slate-700 text-[10px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Ya
        </text>
        <polygon
          points="18,294 98,294 86,328 6,328"
          fill="#F8FAFC"
          stroke={defaultStroke}
          strokeWidth="1.6"
        />
        <text
          x="52"
          y="315"
          textAnchor="middle"
          className="fill-slate-900 text-[11px] font-medium"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Cetak a
        </text>

        {/* Output 2: Cetak c (Tidak from a>c) */}
        <polyline
          points="198,236 218,236 218,292"
          fill="none"
          stroke={defaultStroke}
          strokeWidth="1.6"
          markerEnd="url(#arrowDark)"
        />
        <text
          x="212"
          y="228"
          textAnchor="middle"
          className="fill-slate-700 text-[10px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Tidak
        </text>
        <polygon
          points="184,294 264,294 252,328 172,328"
          fill="#F8FAFC"
          stroke={defaultStroke}
          strokeWidth="1.6"
        />
        <text
          x="218"
          y="315"
          textAnchor="middle"
          className="fill-slate-900 text-[11px] font-medium"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Cetak c
        </text>

        {/* Output 3: Cetak b (Ya from b>c - HIGHLIGHTED) */}
        <polyline
          points="382,236 362,236 362,292"
          fill="none"
          stroke={pathStroke}
          strokeWidth={showHighlight ? '2.4' : '1.6'}
          markerEnd={showHighlight ? 'url(#arrowGreen)' : 'url(#arrowDark)'}
        />
        <text
          x="370"
          y="228"
          textAnchor="middle"
          className={showHighlight ? 'fill-[#059669] text-[10px] font-bold' : 'fill-slate-700 text-[10px] font-semibold'}
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Ya
        </text>
        <polygon
          points="328,294 408,294 396,328 316,328"
          fill={showHighlight ? '#DCFCE7' : '#F8FAFC'}
          stroke={pathStroke}
          strokeWidth={showHighlight ? '2.2' : '1.6'}
        />
        <text
          x="362"
          y="315"
          textAnchor="middle"
          className="fill-slate-900 text-[11px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Cetak b
        </text>

        {/* Output 4: Cetak c (Tidak from b>c) */}
        <polyline
          points="508,236 528,236 528,292"
          fill="none"
          stroke={defaultStroke}
          strokeWidth="1.6"
          markerEnd="url(#arrowDark)"
        />
        <text
          x="522"
          y="228"
          textAnchor="middle"
          className="fill-slate-700 text-[10px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Tidak
        </text>
        <polygon
          points="494,294 574,294 562,328 482,328"
          fill="#F8FAFC"
          stroke={defaultStroke}
          strokeWidth="1.6"
        />
        <text
          x="528"
          y="315"
          textAnchor="middle"
          className="fill-slate-900 text-[11px] font-medium"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Cetak c
        </text>

        {/* Merge lines to Selesai */}
        <polyline
          points="52,328 52,350 290,350"
          fill="none"
          stroke={defaultStroke}
          strokeWidth="1.5"
        />
        <polyline
          points="218,328 218,350"
          fill="none"
          stroke={defaultStroke}
          strokeWidth="1.5"
        />
        <polyline
          points="362,328 362,350 290,350"
          fill="none"
          stroke={pathStroke}
          strokeWidth={showHighlight ? '2.2' : '1.5'}
        />
        <polyline
          points="528,328 528,350 290,350"
          fill="none"
          stroke={defaultStroke}
          strokeWidth="1.5"
        />
        <line
          x1="290"
          y1="350"
          x2="290"
          y2="366"
          stroke={pathStroke}
          strokeWidth={showHighlight ? '2.2' : '1.6'}
          markerEnd={showHighlight ? 'url(#arrowGreen)' : 'url(#arrowDark)'}
        />

        {/* Selesai */}
        <rect
          x="230"
          y="368"
          width="120"
          height="32"
          rx="16"
          fill={showHighlight ? '#ECFDF5' : '#F8FAFC'}
          stroke={pathStroke}
          strokeWidth="1.8"
        />
        <text
          x="290"
          y="388"
          textAnchor="middle"
          className="fill-slate-900 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Selesai
        </text>
      </svg>
    </div>
  );
}
