import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            'Kunci API Gemini belum dikonfigurasi pada server. Fitur Tutor AI belum dapat digunakan saat ini.',
        },
        { status: 500 }
      );
    }

    const body = await req.json();
    const {
      subject,
      question,
      topic,
      studentAnswer,
      correctAnswer,
      explanation,
      mode,
      customPrompt,
    } = body as {
      subject?: string;
      question: string;
      topic: string;
      studentAnswer: string;
      correctAnswer: string;
      explanation: string;
      mode: 'explain_simpler' | 'similar_example' | 'custom';
      customPrompt?: string;
    };

    const subjectLabel = subject || 'IPA Kelas 7 SMP';

    if (!question || !correctAnswer) {
      return NextResponse.json(
        { error: 'Data soal tidak lengkap untuk dianalisis oleh Tutor AI.' },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    let taskInstruction = '';
    if (mode === 'explain_simpler') {
      taskInstruction =
        'Jelaskan ulang konsep dan langkah penyelesaian soal ini dengan bahasa yang sangat sederhana, mudah dipahami oleh siswa SMP Kelas 7, gunakan analogi sehari-hari jika membantu, dan tuliskan langkah per langkah secara singkat.';
    } else if (mode === 'similar_example') {
      taskInstruction =
        'Buatkan 1 contoh soal latihan baru yang serupa konsepnya (dengan angka atau konteks berbeda) untuk siswa SMP Kelas 7, lengkap dengan 4 pilihan jawaban (atau Benar/Salah jika soalnya Benar/Salah) serta kunci jawaban dan langkah pembahasannya.';
    } else {
      taskInstruction = `Jawab pertanyaan lanjutan dari siswa berikut secara jelas, ramah, dan mendidik: "${customPrompt || 'Tolong jelaskan bagian yang paling penting dari soal ini.'}"`;
    }

    const prompt = `Konteks Soal ${subjectLabel} (Kurikulum Merdeka):
Topik / Bab: ${topic}
Soal: ${question}
Jawaban Siswa: ${studentAnswer || 'Belum dijawab'}
Kunci Jawaban Benar: ${correctAnswer}
Pembahasan Ringkas: ${explanation}

Tugas Tutor:
${taskInstruction}`;

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: prompt,
      config: {
        systemInstruction:
          `Kamu adalah guru ${subjectLabel} yang sabar, ramah, dan jelas dalam menjelaskan konsep materi Kurikulum Merdeka untuk siswa SMP kelas 7. Gunakan bahasa Indonesia yang baik, ringkas, terstruktur dengan poin atau langkah bernomor bila perlu, dan tidak bertele-tele (maksimal sekitar 220 kata).`,
      },
    });

    const text = response.text;
    if (!text) {
      return NextResponse.json(
        { error: 'Tutor AI tidak mengembalikan jawaban. Silakan coba lagi.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error('Error calling Gemini Tutor API:', err);
    return NextResponse.json(
      {
        error:
          'Terjadi gangguan saat menghubungi Tutor AI. Pastikan koneksi internet stabil dan coba beberapa saat lagi.',
      },
      { status: 500 }
    );
  }
}
