'use client';

import React from 'react';
import { DiagramType } from '@/types/exam';
import {
  FlowchartLuasSvg,
  FlowchartMax3Svg,
  FlowchartSymbolsSvg,
} from '@/components/diagrams/InformaticsDiagrams';

interface DiagramProps {
  type: DiagramType;
  showHighlight?: boolean;
}

/**
 * 1. Jangka Sorong (Vernier Caliper) — Target reading: 2,36 cm
 * Geometry:
 * - 1 mm on main scale = 12 SVG units (1 cm = 120 units).
 * - Origin x=60 corresponds to 0.0 cm.
 * - Reading 2,36 cm = 23.6 mm -> vernier 0 mark at x = 60 + 23.6 * 12 = 343.2.
 * - Vernier scale: 10 divisions = 9 mm = 108 units (each vernier div = 0.9 mm = 10.8 units).
 * - Alignment check at vernier index k = 6:
 *   x = 343.2 + 6 * 10.8 = 343.2 + 64.8 = 408.0
 *   Main scale 29 mm (2,9 cm) mark is at x = 60 + 29 * 12 = 60 + 348 = 408.0!
 * Exact mathematical alignment at 2,36 cm!
 */
export function VernierCaliperSvg({ showHighlight = false }: { showHighlight?: boolean }) {
  const startX = 60;
  const mmPx = 12; // 1 mm = 12 px, 1 cm = 120 px
  const vernierZeroX = startX + 23.6 * mmPx; // 343.2
  const vernierStep = 0.9 * mmPx; // 10.8
  const alignedMainX = startX + 29 * mmPx; // 408.0

  // Main scale range: 0 mm to 38 mm (0 to 3.8 cm)
  const mainTicks = Array.from({ length: 39 }, (_, i) => i);
  const vernierTicks = Array.from({ length: 11 }, (_, i) => i);

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
      <svg
        viewBox="0 0 560 210"
        className="w-full max-w-[560px] mx-auto h-auto select-none"
        role="img"
        aria-label="Ilustrasi pengukuran Jangka Sorong menunjukkan skala utama dan skala nonius"
      >
        <defs>
          <linearGradient id="steelBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="vernierSlider" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#DCE6F2" />
          </linearGradient>
        </defs>

        {/* Title / Label inside instrument frame */}
        <text
          x="18"
          y="22"
          className="fill-slate-500 text-[11px] font-medium"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Skala Utama (cm)
        </text>

        {/* Main Scale Bar */}
        <rect
          x="18"
          y="34"
          width="520"
          height="62"
          rx="4"
          fill="url(#steelBody)"
          stroke="#64748B"
          strokeWidth="1.5"
        />

        {/* Main Scale Ticks (bottom edge of main bar at y=96) */}
        {mainTicks.map((mm) => {
          const x = startX + mm * mmPx;
          const isCm = mm % 10 === 0;
          const isHalfCm = mm % 5 === 0 && !isCm;
          const tickH = isCm ? 24 : isHalfCm ? 17 : 11;
          return (
            <g key={`m-${mm}`}>
              <line
                x1={x}
                y1={96}
                x2={x}
                y2={96 - tickH}
                stroke="#0F172A"
                strokeWidth={isCm ? 1.6 : 1}
              />
              {isCm && (
                <text
                  x={x}
                  y={64}
                  textAnchor="middle"
                  className="fill-slate-900 text-[14px] font-semibold"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {mm / 10}
                </text>
              )}
            </g>
          );
        })}

        {/* Highlight line on Skala Utama 2.3 cm if in review mode */}
        {showHighlight && (
          <g>
            <line
              x1={startX + 23 * mmPx}
              y1={34}
              x2={startX + 23 * mmPx}
              y2={96}
              stroke="#0284C7"
              strokeWidth="2"
              strokeDasharray="3 2"
            />
            <rect
              x={startX + 23 * mmPx - 26}
              y={10}
              width="52"
              height="20"
              rx="4"
              fill="#0284C7"
            />
            <text
              x={startX + 23 * mmPx}
              y={24}
              textAnchor="middle"
              className="fill-white text-[11px] font-semibold"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              2,3 cm
            </text>
          </g>
        )}

        {/* Vernier Slider Bar */}
        <rect
          x={vernierZeroX - 24}
          y="96"
          width="175"
          height="64"
          rx="4"
          fill="url(#vernierSlider)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Vernier Ticks (top edge of slider at y=96) */}
        {vernierTicks.map((v) => {
          const x = vernierZeroX + v * vernierStep;
          const isMajor = v === 0 || v === 5 || v === 10;
          const tickH = isMajor ? 22 : 14;
          const isAligned = showHighlight && v === 6;
          return (
            <g key={`v-${v}`}>
              <line
                x1={x}
                y1={96}
                x2={x}
                y2={96 + tickH}
                stroke={isAligned ? '#059669' : '#0F172A'}
                strokeWidth={isAligned ? 2.2 : isMajor ? 1.5 : 1}
              />
              {(v === 0 || v === 5 || v === 10) && (
                <text
                  x={x}
                  y={134}
                  textAnchor="middle"
                  className="fill-slate-900 text-[13px] font-semibold"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {v}
                </text>
              )}
            </g>
          );
        })}

        {/* Label Skala Nonius */}
        <text
          x={vernierZeroX + 54}
          y={152}
          textAnchor="middle"
          className="fill-slate-600 text-[11px] font-medium"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Skala Nonius (0,01 cm)
        </text>

        {/* Highlight exact alignment on 6th vernier mark in review mode */}
        {showHighlight && (
          <g>
            <line
              x1={alignedMainX}
              y1={70}
              x2={alignedMainX}
              y2={172}
              stroke="#059669"
              strokeWidth="2"
              strokeDasharray="3 2"
            />
            <rect
              x={alignedMainX - 42}
              y={174}
              width="84"
              height="22"
              rx="4"
              fill="#059669"
            />
            <text
              x={alignedMainX}
              y={189}
              textAnchor="middle"
              className="fill-white text-[11px] font-semibold"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Berimpit: 6
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}

/**
 * 2. Mikrometer Sekrup — Target reading: 4,82 mm
 * Skala Utama: 0, 1, 2, 3, 4 mm visible on top; 0.5, 1.5, 2.5, 3.5, 4.5 mm visible below datum line!
 * Thimble edge is just past 4.5 mm (at ~4.82 mm).
 * Skala Putar (Thimble): 25 to 40 visible, with tick 32 aligned EXACTLY with datum line (y=110)!
 */
export function MicrometerSvg({ showHighlight = false }: { showHighlight?: boolean }) {
  const originX = 56;
  const mmPx = 38; // 1 mm = 38 px
  const datumY = 110;
  // Thimble edge at 4.82 mm
  const thimbleX = originX + 4.82 * mmPx; // 56 + 183.16 = 239.16

  // Thimble vertical tick spacing: 1 unit = 6.5 px, centered so tick 32 is at datumY (110)
  const tickSpacing = 6.5;
  const alignedValue = 32;
  const thimbleMin = 22;
  const thimbleMax = 42;

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
      <svg
        viewBox="0 0 520 220"
        className="w-full max-w-[520px] mx-auto h-auto select-none"
        role="img"
        aria-label="Ilustrasi pengukuran Mikrometer Sekrup menunjukkan skala utama dan skala putar"
      >
        <defs>
          <linearGradient id="sleeveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="40%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="thimbleGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="45%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* Left spindle rod */}
        <rect
          x="16"
          y="92"
          width="32"
          height="36"
          fill="#CBD5E1"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Sleeve (Skala Utama) */}
        <rect
          x="48"
          y="64"
          width={thimbleX - 48}
          height="92"
          fill="url(#sleeveGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Datum Horizontal Reference Line */}
        <line
          x1="48"
          y1={datumY}
          x2={thimbleX}
          y2={datumY}
          stroke="#0F172A"
          strokeWidth="1.8"
        />

        {/* Main scale 1 mm ticks (above datum line) */}
        {[0, 1, 2, 3, 4].map((mm) => {
          const x = originX + mm * mmPx;
          return (
            <g key={`top-${mm}`}>
              <line
                x1={x}
                y1={datumY}
                x2={x}
                y2={datumY - 22}
                stroke="#0F172A"
                strokeWidth="1.5"
              />
              <text
                x={x}
                y={datumY - 28}
                textAnchor="middle"
                className="fill-slate-900 text-[13px] font-semibold"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {mm}
              </text>
            </g>
          );
        })}

        {/* Main scale 0.5 mm ticks (below datum line) */}
        {[0.5, 1.5, 2.5, 3.5, 4.5].map((mm) => {
          const x = originX + mm * mmPx;
          const isFourHalf = mm === 4.5;
          return (
            <g key={`bot-${mm}`}>
              <line
                x1={x}
                y1={datumY}
                x2={x}
                y2={datumY + 18}
                stroke={showHighlight && isFourHalf ? '#0284C7' : '#0F172A'}
                strokeWidth={showHighlight && isFourHalf ? 2.4 : 1.4}
              />
              {showHighlight && isFourHalf && (
                <text
                  x={x}
                  y={datumY + 33}
                  textAnchor="middle"
                  className="fill-[#0284C7] text-[11px] font-semibold"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  4,5
                </text>
              )}
            </g>
          );
        })}

        {/* Thimble Beveled Edge + Drum (Skala Putar) */}
        <polygon
          points={`${thimbleX},64 ${thimbleX + 34},38 ${thimbleX + 34},182 ${thimbleX},156`}
          fill="url(#thimbleGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />
        <rect
          x={thimbleX + 34}
          y="38"
          width="145"
          height="144"
          fill="url(#thimbleGrad)"
          stroke="#475569"
          strokeWidth="1.5"
        />

        {/* Knurled grip on right end of thimble */}
        <rect
          x={thimbleX + 125}
          y="42"
          width="50"
          height="136"
          fill="#CBD5E1"
          stroke="#64748B"
          strokeWidth="1"
        />
        {Array.from({ length: 14 }, (_, idx) => (
          <line
            key={`grip-${idx}`}
            x1={thimbleX + 125}
            y1={46 + idx * 9.5}
            x2={thimbleX + 175}
            y2={46 + idx * 9.5}
            stroke="#94A3B8"
            strokeWidth="1"
          />
        ))}

        {/* Thimble Scale Ticks (higher numbers at top, decreasing downward like standard micrometer) */}
        {Array.from(
          { length: thimbleMax - thimbleMin + 1 },
          (_, i) => thimbleMin + i
        ).map((val) => {
          // Standard micrometer: turning up/down — higher numbers above datum line
          const y = datumY - (val - alignedValue) * tickSpacing;
          if (y < 44 || y > 176) return null;
          const isMultiple5 = val % 5 === 0;
          const isAligned = val === alignedValue;
          const tickLen = isMultiple5 ? 24 : 14;
          // Project along bevel from thimbleX
          return (
            <g key={`th-${val}`}>
              <line
                x1={thimbleX + 2}
                y1={y}
                x2={thimbleX + 2 + tickLen}
                y2={y}
                stroke={showHighlight && isAligned ? '#059669' : '#0F172A'}
                strokeWidth={showHighlight && isAligned ? 2.4 : isMultiple5 ? 1.5 : 1}
              />
              {isMultiple5 && (
                <text
                  x={thimbleX + 36}
                  y={y + 4}
                  className="fill-slate-900 text-[12px] font-semibold"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {val}
                </text>
              )}
            </g>
          );
        })}

        {/* Datum extension indicator in highlight mode */}
        {showHighlight && (
          <g>
            <line
              x1={thimbleX - 6}
              y1={datumY}
              x2={thimbleX + 82}
              y2={datumY}
              stroke="#059669"
              strokeWidth="1.6"
              strokeDasharray="3 2"
            />
            <rect
              x={thimbleX + 64}
              y={datumY - 11}
              width="52"
              height="22"
              rx="4"
              fill="#059669"
            />
            <text
              x={thimbleX + 90}
              y={datumY + 4}
              textAnchor="middle"
              className="fill-white text-[11px] font-semibold"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              0,32
            </text>
          </g>
        )}

        {/* Captions */}
        <text
          x="130"
          y="26"
          textAnchor="middle"
          className="fill-slate-600 text-[11px] font-medium"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Skala Utama (mm)
        </text>
        <text
          x={thimbleX + 74}
          y="26"
          textAnchor="middle"
          className="fill-slate-600 text-[11px] font-medium"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Skala Putar (0,01 mm)
        </text>
      </svg>
    </div>
  );
}

/**
 * 3. Termometer Celcius — Target reading: 38°C
 * Range: -10°C to 110°C on main thermometer, plus magnified view of 20°C–50°C showing 2°C minor ticks!
 */
export function ThermometerSvg({ showHighlight = false }: { showHighlight?: boolean }) {
  // Zoomed scale: 20°C to 50°C -> y from 235 (20°C) up to 45 (50°C)
  // 30°C span = 190 px -> 1°C = 190/30 = 6.3333 px
  const minZoom = 20;
  const maxZoom = 50;
  const zoomBottomY = 235;
  const zoomTopY = 45;
  const pxPerDeg = (zoomBottomY - zoomTopY) / (maxZoom - minZoom);
  const reading = 38;
  const meniscusY = zoomBottomY - (reading - minZoom) * pxPerDeg; // 235 - 18*6.3333 = 121

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
      <svg
        viewBox="0 0 460 280"
        className="w-full max-w-[460px] mx-auto h-auto select-none"
        role="img"
        aria-label="Ilustrasi termometer skala Celcius dengan pembesaran skala"
      >
        {/* Left: Full Thermometer Body */}
        <g>
          <text
            x="92"
            y="22"
            textAnchor="middle"
            className="fill-slate-600 text-[11px] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Termometer (°C)
          </text>
          {/* Outer Glass Tube */}
          <rect
            x="76"
            y="34"
            width="32"
            height="194"
            rx="16"
            fill="#F8FAFC"
            stroke="#475569"
            strokeWidth="1.8"
          />
          {/* Bulb */}
          <circle
            cx="92"
            cy="242"
            r="20"
            fill="#DC2626"
            stroke="#475569"
            strokeWidth="1.8"
          />
          {/* Capillary channel */}
          <rect x="87" y="46" width="10" height="186" rx="5" fill="#E2E8F0" />
          {/* Red mercury/alcohol column up to 38°C (out of -10..110) */}
          {/* Map -10..110 to y=214..52 (span 120° = 162px -> 1.35px/deg) */}
          <rect
            x="87"
            y={214 - (38 - -10) * 1.35}
            width="10"
            height={232 - (214 - (38 - -10) * 1.35)}
            fill="#DC2626"
          />

          {/* Main thermometer rough ticks */}
          {[0, 20, 40, 60, 80, 100].map((t) => {
            const y = 214 - (t - -10) * 1.35;
            return (
              <g key={`full-${t}`}>
                <line x1="108" y1={y} x2="116" y2={y} stroke="#475569" strokeWidth="1.2" />
                <text
                  x="120"
                  y={y + 4}
                  className="fill-slate-700 text-[10px] font-medium"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {t}
                </text>
              </g>
            );
          })}

          {/* Zoom bracket around 20–50°C */}
          <rect
            x="70"
            y={214 - (50 - -10) * 1.35}
            width="44"
            height={(50 - 20) * 1.35}
            fill="none"
            stroke="#0284C7"
            strokeWidth="1.5"
            strokeDasharray="3 2"
            rx="3"
          />
          <line
            x1="114"
            y1={214 - (50 - -10) * 1.35}
            x2="210"
            y2="34"
            stroke="#94A3B8"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
          <line
            x1="114"
            y1={214 - (20 - -10) * 1.35}
            x2="210"
            y2="250"
            stroke="#94A3B8"
            strokeWidth="1"
            strokeDasharray="4 3"
          />
        </g>

        {/* Right: Magnified Scale Box (20°C to 50°C) */}
        <g>
          <text
            x="315"
            y="22"
            textAnchor="middle"
            className="fill-slate-600 text-[11px] font-medium"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Tampilan Diperbesar (°C)
          </text>
          <rect
            x="210"
            y="34"
            width="210"
            height="216"
            rx="8"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="1.5"
          />

          {/* Zoomed Glass Channel */}
          <rect
            x="252"
            y="42"
            width="24"
            height="200"
            rx="4"
            fill="#E2E8F0"
            stroke="#64748B"
            strokeWidth="1.2"
          />
          {/* Zoomed Red Liquid stopping precisely at 38°C (y = 121) */}
          <rect
            x="254"
            y={meniscusY}
            width="20"
            height={242 - meniscusY}
            fill="#DC2626"
          />

          {/* Scale ticks every 2°C from 20 to 50 */}
          {Array.from({ length: 16 }, (_, idx) => 20 + idx * 2).map((deg) => {
            const y = zoomBottomY - (deg - minZoom) * pxPerDeg;
            const isTen = deg % 10 === 0;
            const isReading = deg === reading;
            return (
              <g key={`zoom-${deg}`}>
                <line
                  x1="276"
                  y1={y}
                  x2={isTen ? 302 : 292}
                  y2={y}
                  stroke={showHighlight && isReading ? '#059669' : '#0F172A'}
                  strokeWidth={showHighlight && isReading ? 2.4 : isTen ? 1.8 : 1.1}
                />
                {isTen && (
                  <text
                    x="310"
                    y={y + 4}
                    className="fill-slate-900 text-[14px] font-semibold"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {deg}°C
                  </text>
                )}
              </g>
            );
          })}

          {/* Subtle horizontal hairline at meniscus */}
          <line
            x1="242"
            y1={meniscusY}
            x2="296"
            y2={meniscusY}
            stroke={showHighlight ? '#059669' : '#DC2626'}
            strokeWidth="1.2"
            strokeDasharray="3 2"
          />

          {showHighlight && (
            <g>
              <rect
                x="348"
                y={meniscusY - 12}
                width="58"
                height="24"
                rx="4"
                fill="#059669"
              />
              <text
                x="377"
                y={meniscusY + 4}
                textAnchor="middle"
                className="fill-white text-[12px] font-semibold"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                38°C
              </text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}

/**
 * 4. Grafik Pemanasan Es Menjadi Uap (Suhu vs Kalor/Waktu)
 * A (-10°C) -> B (0°C) -> C (0°C) -> D (100°C) -> E (100°C) -> F (120°C)
 */
export function HeatingCurveSvg({ showHighlight = false }: { showHighlight?: boolean }) {
  // Points:
  // A: (75, 210)  -> -10°C
  // B: (115, 185) -> 0°C
  // C: (195, 185) -> 0°C (melebur - kalor laten lebur)
  // D: (305, 75)  -> 100°C
  // E: (425, 75)  -> 100°C (menguap - kalor laten uap)
  // F: (475, 45)  -> 120°C
  const pts = {
    A: { x: 75, y: 210 },
    B: { x: 115, y: 185 },
    C: { x: 195, y: 185 },
    D: { x: 305, y: 75 },
    E: { x: 425, y: 75 },
    F: { x: 475, y: 45 },
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white p-4">
      <svg
        viewBox="0 0 530 260"
        className="w-full max-w-[530px] mx-auto h-auto select-none"
        role="img"
        aria-label="Grafik perubahan suhu terhadap kalor pada pemanasan es menjadi uap air"
      >
        {/* Subtle horizontal reference gridlines */}
        <line
          x1="75"
          y1="75"
          x2="490"
          y2="75"
          stroke="#CBD5E1"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <line
          x1="75"
          y1="185"
          x2="490"
          y2="185"
          stroke="#CBD5E1"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Axes */}
        <line x1="75" y1="22" x2="75" y2="230" stroke="#0F172A" strokeWidth="1.8" />
        <line x1="75" y1="230" x2="500" y2="230" stroke="#0F172A" strokeWidth="1.8" />

        {/* Axis Arrowheads */}
        <polygon points="75,18 71,26 79,26" fill="#0F172A" />
        <polygon points="505,230 497,226 497,234" fill="#0F172A" />

        {/* Y-Axis Labels */}
        <text
          x="38"
          y="20"
          className="fill-slate-700 text-[11px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Suhu (°C)
        </text>
        <text
          x="67"
          y="79"
          textAnchor="end"
          className="fill-slate-800 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          100
        </text>
        <text
          x="67"
          y="189"
          textAnchor="end"
          className="fill-slate-800 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          0
        </text>
        <text
          x="67"
          y="214"
          textAnchor="end"
          className="fill-slate-800 text-[12px] font-semibold"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          -10
        </text>

        {/* X-Axis Label */}
        <text
          x="498"
          y="249"
          textAnchor="end"
          className="fill-slate-700 text-[11px] font-semibold"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Waktu / Kalor yang Diserap (Q)
        </text>

        {/* Highlight latent heat segments B-C and D-E in review mode */}
        {showHighlight && (
          <g>
            <rect
              x={pts.B.x}
              y={pts.B.y - 10}
              width={pts.C.x - pts.B.x}
              height={20}
              rx="4"
              fill="#059669"
              fillOpacity="0.16"
            />
            <rect
              x={pts.D.x}
              y={pts.D.y - 10}
              width={pts.E.x - pts.D.x}
              height={20}
              rx="4"
              fill="#059669"
              fillOpacity="0.16"
            />
            <text
              x={(pts.B.x + pts.C.x) / 2}
              y={pts.B.y + 22}
              textAnchor="middle"
              className="fill-[#059669] text-[10px] font-semibold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Melebur (Kalor Laten)
            </text>
            <text
              x={(pts.D.x + pts.E.x) / 2}
              y={pts.D.y - 14}
              textAnchor="middle"
              className="fill-[#059669] text-[10px] font-semibold"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Menguap (Kalor Laten)
            </text>
          </g>
        )}

        {/* Main Heating Curve Polyline */}
        <polyline
          fill="none"
          stroke="#0284C7"
          strokeWidth="3"
          strokeLinejoin="round"
          strokeLinecap="round"
          points={`${pts.A.x},${pts.A.y} ${pts.B.x},${pts.B.y} ${pts.C.x},${pts.C.y} ${pts.D.x},${pts.D.y} ${pts.E.x},${pts.E.y} ${pts.F.x},${pts.F.y}`}
        />

        {/* Vertex Points & Labels */}
        {Object.entries(pts).map(([label, coord]) => {
          const labelOffset =
            label === 'A'
              ? { dx: 10, dy: 14 }
              : label === 'B'
              ? { dx: -8, dy: -10 }
              : label === 'C'
              ? { dx: 8, dy: 16 }
              : label === 'D'
              ? { dx: -8, dy: -10 }
              : label === 'E'
              ? { dx: 8, dy: 16 }
              : { dx: -6, dy: -10 };

          return (
            <g key={label}>
              <circle
                cx={coord.x}
                cy={coord.y}
                r="4.5"
                fill="#FFFFFF"
                stroke="#0284C7"
                strokeWidth="2.2"
              />
              <text
                x={coord.x + labelOffset.dx}
                y={coord.y + labelOffset.dy}
                textAnchor="middle"
                className="fill-slate-900 text-[12px] font-bold"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function ScientificDiagram({ type, showHighlight = false }: DiagramProps) {
  switch (type) {
    case 'jangka_sorong':
      return <VernierCaliperSvg showHighlight={showHighlight} />;
    case 'mikrometer_sekrup':
      return <MicrometerSvg showHighlight={showHighlight} />;
    case 'termometer':
      return <ThermometerSvg showHighlight={showHighlight} />;
    case 'grafik_kalor':
      return <HeatingCurveSvg showHighlight={showHighlight} />;
    case 'flowchart_symbols':
      return <FlowchartSymbolsSvg showHighlight={showHighlight} />;
    case 'flowchart_luas':
      return <FlowchartLuasSvg showHighlight={showHighlight} />;
    case 'flowchart_max3':
      return <FlowchartMax3Svg showHighlight={showHighlight} />;
    default:
      return null;
  }
}
