
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  modal.classList.remove("show");
});

const loginScreen = document.getElementById("loginScreen");
const appContent = document.getElementById("appContent");
const emailInput = document.getElementById("emailInput");
const greetName = document.getElementById("greetName");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");
const guestBtn = document.getElementById("guestBtn");
const navButtons = document.querySelectorAll(".nav-btn");

loginBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();
  if (!email) return alert("Masukkan email terlebih dahulu!");
  localStorage.setItem("userEmail", email);
  startApp(email);
});

guestBtn.addEventListener("click", () => {
  startApp("Tamu");
});

function startApp(email) {
  loginScreen.style.display = "none";
  appContent.style.display = "block";
  greetName.textContent = email === "Tamu" ? "Tamu" : email.split("@")[0];
  userName.textContent = greetName.textContent;
  userEmail.textContent = email;
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("userEmail");
  appContent.style.display = "none";
  loginScreen.style.display = "flex";
});

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    showView(btn.dataset.view);
  });
});

function showView(view) {
  document.getElementById("homeView").style.display = "none";
  document.getElementById("tipsView").style.display = "none";
  document.getElementById("quizView").style.display = "none";
  document.getElementById("konsulView").style.display = "none";

  document.getElementById(view + "View").style.display = "block";

  const konsulInput = document.getElementById("konsulInput");
  const konsulResult = document.getElementById("konsulResult");
  if (konsulInput) konsulInput.value = "";
  if (konsulResult) konsulResult.innerHTML = "";

  if (view === "quiz") tampilkanQuiz();
}

const tips = [
  { judul: "Atur Jadwal Belajarmu dengan Rapi", isi: "Gunakan planner atau aplikasi kalender agar tidak keteteran." },
  { judul: "Gunakan Metode Pomodoro", isi: "Belajar 25 menit fokus, istirahat 5 menit, ulangi beberapa kali." },
  { judul: "Belajar dari Video Interaktif", isi: "Gunakan YouTube Edu atau Khan Academy agar lebih mudah paham." },
  { judul: "Catat Poin Penting, Bukan Semua Hal", isi: "Tulis hal-hal utama agar mudah diingat kembali." },
  { judul: "Coba Belajar di Pagi Hari", isi: "Otak segar di pagi hari membantu penyerapan informasi lebih baik." },
  { judul: "Buat Suasana Belajar yang Nyaman", isi: "Pastikan meja belajar rapi, cukup terang, dan bebas gangguan." },
  { judul: "Gunakan Warna untuk Menandai Catatan", isi: "Stabilo warna membantu otak mengingat hal penting dengan cepat." },
  { judul: "Ulangi Materi dengan Cara Mengajar", isi: "Coba jelaskan kembali pelajaran seolah kamu sedang mengajarkannya." },
  { judul: "Belajar Secara Konsisten", isi: "Sedikit-sedikit tapi rutin jauh lebih efektif daripada mendadak banyak." },
  { judul: "Istirahat dan Tidur yang Cukup", isi: "Otak butuh istirahat agar informasi yang dipelajari bisa tersimpan dengan baik." },
  { judul: "Kurangi Gangguan Saat Belajar", isi: "Silent notifikasi HP dan jauhkan hal-hal yang bikin tidak fokus." },
  { judul: "Gunakan Mind Mapping", isi: "Buat peta konsep untuk memahami hubungan antar materi." },
  { judul: "Review Materi Sebelum Tidur", isi: "Mengulang sedikit sebelum tidur membantu otak menyimpan informasi." },
  { judul: "Belajar dengan Teman", isi: "Diskusi bareng teman bisa membantu memahami materi lebih cepat." }
];


const tipsPreview = document.getElementById("tipsPreview");
const allTipsList = document.getElementById("allTipsList");

tips.forEach((t) => {
  const c = document.createElement("div");
  c.className = "card";
  c.innerHTML = `<h3>${t.judul}</h3><p>${t.isi}</p>`;
  tipsPreview.appendChild(c);

  const c2 = c.cloneNode(true);
  allTipsList.appendChild(c2);
});

const berandaTips = [
  { judul: "Atur Jadwal Belajarmu dengan Rapi", isi: "Gunakan planner atau aplikasi kalender agar lebih teratur." },
  { judul: "Fokus di Sesi Belajar", isi: "Matikan ponsel dan gangguan untuk fokus maksimal." },
  { judul: "Istirahat yang Cukup", isi: "Jangan lupa istirahat tiap 25-30 menit agar otak tetap segar." },
  { judul: "Motivasi Diri", isi: "Tetapkan tujuan kecil setiap hari agar tetap semangat." },
];

tipsPreview.innerHTML = ''; 
berandaTips.forEach((t) => {
  const c = document.createElement("div");
  c.className = "card";
  c.innerHTML = `<h3>${t.judul}</h3><p>${t.isi}</p>`;
  tipsPreview.appendChild(c);
});

const quiz = [
  { tanya: 'Berapa lama waktu ideal satu sesi belajar efektif menurut metode Pomodoro?', opsi: ['10 menit', '25 menit', '45 menit', '1 jam'], benar: 1 },
  { tanya: 'Apa manfaat utama dari membuat jadwal belajar?', opsi: ['Membuat stres', 'Meningkatkan konsistensi', 'Menambah waktu tidur', 'Mengurangi motivasi'], benar: 1 },
  { tanya: 'Kapan waktu terbaik untuk belajar bagi kebanyakan orang?', opsi: ['Saat ngantuk', 'Pagi hari setelah istirahat cukup', 'Tengah malam', 'Sambil bermain HP'], benar: 1 },
  { tanya: 'Apa tujuan dari mencatat poin penting saat belajar?', opsi: ['Menulis semua isi buku', 'Memudahkan mengingat hal utama', 'Mengisi waktu luang', 'Agar terlihat sibuk'], benar: 1 },
  { tanya: 'Mengapa penting beristirahat saat belajar?', opsi: ['Agar bisa rebahan terus', 'Memberi waktu otak untuk memproses informasi', 'Karena malas', 'Supaya bisa menunda belajar'], benar: 1 },
  { tanya: 'Belajar aktif berarti...', opsi: ['Hanya membaca buku', 'Mendengarkan tanpa mencatat', 'Mengulang dan menjelaskan materi dengan kata sendiri', 'Tidur di kelas'], benar: 2 },
  { tanya: 'Apa manfaat tidur cukup untuk belajar?', opsi: ['Meningkatkan fokus & daya ingat', 'Membuat bosan', 'Tidak ada pengaruh', 'Mengurangi motivasi'], benar: 0 },
  { tanya: 'Platform apa yang bisa digunakan untuk belajar interaktif?', opsi: ['YouTube Edu', 'Game online', 'TikTok random', 'Netflix'], benar: 0 },
  { tanya: 'Bagaimana cara menjaga fokus belajar?', opsi: ['Belajar sambil buka media sosial', 'Matikan gangguan & tentukan target waktu', 'Belajar di tempat ramai', 'Gonta-ganti topik terus'], benar: 1 },
  { tanya: 'Mengapa penting melakukan evaluasi diri setelah belajar?', opsi: ['Untuk tahu apa yang belum dipahami', 'Agar bisa tidur lebih cepat', 'Supaya terlihat rajin', 'Biar guru senang'], benar: 0 },
  { tanya: 'Berapa kali sebaiknya sesi Pomodoro dilakukan sebelum istirahat panjang?', opsi: ['1 kali', '2 kali', '4 kali', '6 kali'], benar: 2 },
  { tanya: 'Apa manfaat belajar kelompok?', opsi: ['Bisa saling mengajari dan berdiskusi', 'Lebih ribut', 'Tidak perlu belajar sendiri', 'Biar bisa main bareng'], benar: 0 },
  { tanya: 'Metode belajar visual cocok untuk siapa?', opsi: ['Yang suka mendengarkan', 'Yang mudah memahami lewat gambar atau video', 'Yang suka menulis', 'Yang suka berbicara'], benar: 1 },
  { tanya: 'Kenapa penting menentukan target belajar?', opsi: ['Supaya tahu arah dan tujuan belajar', 'Agar bisa menunda tugas', 'Untuk membuat stres', 'Biar terlihat sibuk'], benar: 0 },
  { tanya: 'Apa yang sebaiknya dilakukan sebelum ujian?', opsi: ['Belajar mendadak semalaman', 'Mengulang poin penting dan istirahat cukup', 'Tidak belajar sama sekali', 'Main game terus'], benar: 1 },
];

function tampilkanQuiz() {
  const quizArea = document.getElementById('quizArea');
  quizArea.innerHTML = ''; 

  let skor = 0;
  let indeks = 0;

  function tampilSoal() {
    quizArea.innerHTML = ''; 

    if (indeks >= quiz.length) {
      const hasil = document.createElement('div');
      hasil.className = 'quiz-result';

      let pesan = '';
      if (skor > 10) {
        pesan = '🌟 Hebat! Kamu benar-benar paham cara belajar efektif!';
      } else if (skor >= 5) {
        pesan = '💪 Bagus! Tapi masih bisa lebih baik, semangat lagi!';
      } else {
        pesan = '⚠️ Perlu meningkatkan fokus belajar. Jangan menyerah!';
      }

      hasil.innerHTML = `
        <h3>🎉 Quiz Selesai!</h3>
        <p>Kamu menjawab <b>${skor}</b> dari <b>${quiz.length}</b> soal dengan benar.</p>
        <p>${pesan}</p>
        <button class="btn" id="ulangQuiz">Ulangi Quiz</button>
      `;
      quizArea.appendChild(hasil);

      document.getElementById('ulangQuiz').addEventListener('click', () => {
        skor = 0;
        indeks = 0;
        tampilSoal();
      });
      return;
    }

    const soal = quiz[indeks];
    const box = document.createElement('div');
    box.className = 'quiz-box';
    box.innerHTML = `
      <h3>Soal ${indeks + 1} dari ${quiz.length}</h3>
      <p>${soal.tanya}</p>
      <form id="formSoal">
        ${soal.opsi
          .map(
            (opsi, i) => `
          <label class="opsi-item">
            <input type="radio" name="jawaban" value="${i}" />
            <span>${opsi}</span>
          </label>
        `
          )
          .join('')}
        <button type="submit" class="btn" style="margin-top:10px;">Selanjutnya</button>
      </form>
    `;
    quizArea.appendChild(box);

    const form = document.getElementById('formSoal');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const jawaban = form.jawaban.value;
      if (jawaban === '') return alert('Pilih salah satu jawaban dulu ya!');
      if (parseInt(jawaban) === soal.benar) skor++;
      indeks++;
      tampilSoal();
    });
  }

  tampilSoal();
}

document.getElementById("konsulBtn").addEventListener("click", () => {
  const input = document.getElementById("konsulInput").value.trim().toLowerCase();
  const output = document.getElementById("konsulResult");

  if (!input) {
    output.innerHTML = "<p class='muted'>Tuliskan dulu masalahmu.</p>";
    return;
  }

  const saranList = [
    { keywords: ["susah fokus", "tidak fokus", "gampang terdistraksi"], saran: "🧠 Coba belajar di tempat tenang, matikan HP, dan gunakan timer Pomodoro." },
    { keywords: ["malas", "tidak semangat", "menunda"], saran: "💪 Bagi tugas menjadi kecil, beri reward setelah selesai, dan buat jadwal rutin." },
    { keywords: ["tidak ngerti", "bingung", "pusing"], saran: "📚 Ulangi materi secara bertahap, buat catatan poin penting, dan tanyakan teman/guru jika perlu." },
    { keywords: ["lelah", "capek", "ngantuk"], saran: "😴 Istirahat yang cukup, tidur cukup, dan jangan belajar terlalu larut malam." },
    { keywords: ["cemas", "stress", "panik"], saran: "🧘 Coba tarik napas dalam-dalam, istirahat sebentar, dan buat target belajar realistis." },
  ];

  let found = false;
  for (const item of saranList) {
    if (item.keywords.some(k => input.includes(k))) {
      output.innerHTML = `<p>${item.saran}</p>`;
      found = true;
      break;
    }
  }

  if (!found) {
    output.innerHTML = "<p>🤔 <b>Saran umum:</b> Coba istirahat cukup, buat jadwal belajar, gunakan metode Pomodoro, dan fokus secara bertahap. Tetap semangat!</p>";
  }
});

