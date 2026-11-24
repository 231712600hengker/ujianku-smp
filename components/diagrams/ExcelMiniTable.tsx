'use client';

import React from 'react';
import { ExcelTableSpec } from '@/types/exam';

interface ExcelMiniTableProps {
  spec: ExcelTableSpec;
}

export default function ExcelMiniTable({ spec }: ExcelMiniTableProps) {
  return (
    <div className="rounded-lg border border-slate-300 bg-white overflow-hidden shadow-xs">
      {/* Spreadsheet Title / Formula Bar */}
      {(spec.caption || spec.formulaBar) && (
        <div className="bg-[#F8FAFC] border-b border-slate-200 px-3.5 py-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {spec.caption && (
            <span className="text-xs font-semibold text-slate-700">
              {spec.caption}
            </span>
          )}
          {spec.formulaBar && (
            <div className="inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-2.5 py-1 text-xs font-mono text-slate-800">
              <span className="font-bold italic text-[#059669]">fx</span>
              <span className="text-slate-300" aria-hidden="true">
                |
              </span>
              <span>{spec.formulaBar}</span>
            </div>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          {/* Column Letters Header (A, B, C...) */}
          <thead>
            <tr className="bg-slate-100 border-b border-slate-300">
              <th className="w-11 px-2 py-1.5 border-r border-slate-300 bg-slate-200/70 text-[11px] font-mono font-semibold text-slate-500 text-center select-none">
                #
              </th>
              {spec.columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-1.5 border-r last:border-r-0 border-slate-300 text-xs font-mono font-bold text-slate-700 text-center select-none"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Sheet Rows */}
          <tbody className="divide-y divide-slate-200">
            {spec.rows.map((row) => {
              const isHeaderRow = row.rowNumber === 1;
              return (
                <tr
                  key={row.rowNumber}
                  className={isHeaderRow ? 'bg-emerald-50/50' : 'bg-white'}
                >
                  {/* Row Number Gutter */}
                  <td className="px-2 py-2 border-r border-slate-300 bg-slate-100 text-xs font-mono font-semibold text-slate-600 text-center select-none tabular-nums">
                    {row.rowNumber}
                  </td>

                  {/* Cells */}
                  {row.cells.map((cell, cIdx) => {
                    const isNumber = typeof cell === 'number';
                    const isEmpty = cell === null || cell === '';
                    return (
                      <td
                        key={cIdx}
                        className={`px-4 py-2 border-r last:border-r-0 border-slate-200 text-xs sm:text-sm ${
                          isHeaderRow
                            ? 'font-semibold text-slate-900 text-left'
                            : isNumber
                            ? 'font-mono text-slate-900 text-right tabular-nums'
                            : 'text-slate-700 text-left'
                        } ${isEmpty ? 'bg-slate-50/70' : ''}`}
                      >
                        {isEmpty ? (
                          <span className="text-[11px] italic text-slate-400 select-none">
                            (kosong)
                          </span>
                        ) : (
                          cell
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
