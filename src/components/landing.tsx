import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BadgeCheck,
  Car,
  CheckCircle2,
  Clock3,
  Home,
  LifeBuoy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Percent,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  UserRound,
} from "lucide-react";
import aboutImage from "@/assets/about-team.jpg";
import heroImage from "@/assets/hero-consult.jpg";
import coupleImage from "@/assets/advisor-couple.jpg";
import signingImage from "@/assets/signing.jpg";

const WHATSAPP_NUMBER = "60123410525";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const NAV_LINKS = [
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#kenapa-kami", label: "Kenapa Kami" },
  { href: "#penyelesaian", label: "Penyelesaian" },
  { href: "#kelayakan", label: "Kelayakan" },
  { href: "#jadual", label: "Jadual Bayaran" },
  { href: "#soalan", label: "Soalan Lazim" },
];

function scrollToId(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-baseline gap-1.5">
          <span className="font-display text-lg font-semibold tracking-tight text-primary">
            DRAGON ACCESS
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Sdn. Bhd.
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToId(link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => scrollToId("#mohon")}
            className="hidden bg-primary px-4 text-primary-foreground hover:bg-primary/90 sm:inline-flex"
          >
            Mohon Sekarang
          </Button>
          <Button
            asChild
            className="bg-leaf px-3 text-primary-foreground hover:bg-leaf/90 sm:hidden"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-deep text-deep-foreground">
      <div className="texture-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-leaf/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-leaf/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-leaf/40 bg-leaf/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-leaf">
            <ShieldCheck className="h-4 w-4" />
            Pinjaman Berlesen • Johor Bahru
          </div>

          <h1 className="mt-6 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            Lebih 25 Tahun Berpengalaman di Johor Bahru, Menyediakan Pinjaman
            Berlesen Yang Dipercayai
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/80 sm:text-lg">
            Dengan pengalaman lebih 25 tahun di Johor Bahru, DRAGON ACCESS SDN.
            BHD. membantu anda mendapatkan penyelesaian pinjaman berlesen yang
            sesuai dengan keperluan dan kemampuan anda.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => scrollToId("#mohon")}
              className="h-12 bg-leaf px-7 text-base font-semibold text-primary-foreground hover:bg-leaf/90"
            >
              Mohon Sekarang
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 border-deep-foreground/30 bg-transparent px-6 text-base text-deep-foreground hover:bg-deep-foreground/10 hover:text-deep-foreground"
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Kami
              </a>
            </Button>
          </div>
        </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-deep-foreground/15 shadow-2xl">
              <img
                src={heroImage}
                alt="Perunding Dragon Access berbincang dengan pelanggan di pejabat Johor Bahru"
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-deep-foreground/15 pt-8 sm:grid-cols-3">
          {[
            { value: "25+", label: "Tahun Pengalaman" },
            { value: "1.5%", label: "Kadar Sebulan*" },
            { value: "6–60", label: "Bulan Tempoh Bayaran" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-semibold text-leaf sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-deep-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="tentang" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div
            className="absolute -left-4 -top-4 h-full w-full rounded-2xl border-2 border-sage"
            aria-hidden="true"
          />
          <img
            src={aboutImage}
            alt="Penasihat DRAGON ACCESS membantu pelanggan di pejabat kami"
            className="relative w-full rounded-2xl object-cover shadow-lg"
            width={1280}
            height={853}
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Tentang Kami
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Pengalaman Yang Membina Kepercayaan
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Selama lebih 25 tahun, DRAGON ACCESS SDN. BHD. telah berpangkalan
              di Johor Bahru dan membantu pelanggan mendapatkan penyelesaian
              pinjaman berlesen yang bersesuaian dengan keperluan mereka.
            </p>
            <p>
              Dengan pengalaman yang kukuh dan pemahaman terhadap keperluan
              pelanggan tempatan, kami mengutamakan proses yang jelas, mudah
              dan profesional dari awal hingga selesai.
            </p>
            <p>
              Kepercayaan pelanggan adalah asas kepada perkhidmatan kami. Selama
              bertahun-tahun, kami terus komited untuk memberikan pengalaman
              yang profesional, telus dan boleh dipercayai kepada pelanggan di
              Johor Bahru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- USPs ---------------- */

const USPS = [
  {
    icon: Percent,
    title: "Kadar Kompetitif",
    text: "Dapatkan pilihan pinjaman dengan kadar yang kompetitif dan bersesuaian dengan keperluan anda.",
  },
  {
    icon: Clock3,
    title: "Proses Pantas",
    text: "Nikmati proses yang mudah dan pantas, dengan proses seawal 20 minit* tertakluk kepada kelayakan dan dokumen yang diperlukan.",
  },
  {
    icon: SlidersHorizontal,
    title: "Pelan Custom",
    text: "Kami menyediakan pelan yang boleh disesuaikan berdasarkan keperluan dan kemampuan kewangan anda.",
  },
  {
    icon: UserRound,
    title: "Mudah & Profesional",
    text: "Dapatkan penerangan yang jelas dan bantuan daripada pasukan kami sepanjang proses permohonan.",
  },
];

function Usp() {
  return (
    <section
      id="kenapa-kami"
      className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Kelebihan Kami
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Kenapa Pilih DRAGON ACCESS?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {USPS.map((usp) => (
            <div
              key={usp.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <usp.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {usp.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {usp.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Loan solutions ---------------- */

const SOLUTIONS = [
  {
    icon: LifeBuoy,
    title: "Kecemasan",
    text: "Dana tambahan apabila berlaku keperluan tidak dijangka.",
  },
  {
    icon: Home,
    title: "Keperluan Rumah",
    text: "Untuk pembaikan atau keperluan penting di rumah.",
  },
  {
    icon: Car,
    title: "Kenderaan",
    text: "Bantu memenuhi perbelanjaan berkaitan kenderaan.",
  },
  {
    icon: UserRound,
    title: "Keperluan Peribadi",
    text: "Untuk pelbagai keperluan peribadi yang sah.",
  },
  {
    icon: Sparkles,
    title: "Pelan Custom",
    text: "Dapatkan pelan yang disesuaikan dengan keperluan dan kemampuan kewangan anda.",
    highlight: true,
  },
];

function LoanSolutions() {
  return (
    <section id="penyelesaian" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Penyelesaian Pinjaman
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Penyelesaian Kewangan Untuk Pelbagai Keperluan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Setiap orang mempunyai keperluan kewangan yang berbeza. Sama ada
            untuk menguruskan komitmen, menghadapi perbelanjaan tidak dijangka
            atau memenuhi keperluan peribadi, kami membantu anda mendapatkan
            pelan pinjaman yang bersesuaian.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <img
            src={coupleImage}
            alt="Pasangan berbincang mengenai pelan pinjaman di pejabat Dragon Access"
            className="h-56 w-full object-cover sm:h-72"
            loading="lazy"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((item) => (
            <div
              key={item.title}
              className={
                item.highlight
                  ? "rounded-2xl bg-deep p-7 text-deep-foreground shadow-md"
                  : "rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
              }
            >
              <div
                className={
                  item.highlight
                    ? "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/20 text-leaf"
                    : "inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                }
              >
                <item.icon className="h-6 w-6" />
              </div>
              <h3
                className={
                  item.highlight
                    ? "mt-5 font-display text-lg font-semibold text-deep-foreground"
                    : "mt-5 font-display text-lg font-semibold text-foreground"
                }
              >
                {item.title}
              </h3>
              <p
                className={
                  item.highlight
                    ? "mt-2 text-sm leading-relaxed text-deep-foreground/75"
                    : "mt-2 text-sm leading-relaxed text-muted-foreground"
                }
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Eligibility & process ---------------- */

const ELIGIBILITY = [
  "Warganegara Malaysia",
  "Berumur 18 Tahun Ke Atas",
  "Mempunyai sumber pendapatan tetap",
  "Menerima gaji melalui akaun bank, bukan secara tunai",
];

const STEPS = [
  {
    num: "01",
    title: "Hantar Pertanyaan",
    text: "Isi borang atau hubungi kami melalui WhatsApp.",
  },
  {
    num: "02",
    title: "Semak Kelayakan",
    text: "Kami akan menyemak maklumat dan kelayakan anda.",
  },
  {
    num: "03",
    title: "Bincangkan Pelan",
    text: "Pilih pelan yang sesuai dengan keperluan anda.",
  },
  {
    num: "04",
    title: "Teruskan Permohonan",
    text: "Lengkapkan dokumen dan teruskan proses permohonan.",
  },
];

function Eligibility() {
  return (
    <section
      id="kelayakan"
      className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Kelayakan & Proses
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Mudah Untuk Bermula
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border">
          <img
            src={signingImage}
            alt="Pelanggan menandatangani dokumen pinjaman bersama perunding Dragon Access"
            className="h-56 w-full object-cover sm:h-72"
            loading="lazy"
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Adakah Anda Layak?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Semak kelayakan asas anda sebelum membuat permohonan.
            </p>
            <ul className="mt-6 space-y-4">
              {ELIGIBILITY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              Bagaimana Prosesnya?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Empat langkah mudah dari pertanyaan hingga permohonan.
            </p>
            <ol className="mt-6 space-y-0">
              {STEPS.map((step, i) => (
                <li key={step.num} className="relative flex gap-5 pb-8 last:pb-0">
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute left-[23px] top-12 h-full w-px bg-border"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">
                    {step.num}
                  </span>
                  <div className="pt-1.5">
                    <h4 className="font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Payment schedule ---------------- */

const RATE_MONTHLY = 0.015;
const TERMS = [6, 12, 24, 36, 60];

function PaymentSchedule() {
  const fmt = (n: number) =>
    n.toLocaleString("ms-MY", { maximumFractionDigits: 2, minimumFractionDigits: 2 });

  const monthlyFor = (amount: number, term: number) =>
    (amount + amount * RATE_MONTHLY * term) / term;

  return (
    <section id="jadual" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Jadual Pembayaran
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Jadual Pembayaran Pinjaman
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-2xl bg-deep p-7 text-deep-foreground">
            <h3 className="font-display text-xl font-semibold">Kadar & Tempoh</h3>
            <dl className="mt-6 space-y-5">
              {[
                { term: "Kadar Faedah", value: "1.5% sebulan" },
                { term: "Maximum APR", value: "18%" },
                {
                  term: "Tempoh Bayaran",
                  value: "6 hingga 60 bulan",
                },
              ].map((row) => (
                <div
                  key={row.term}
                  className="flex items-center justify-between gap-4 border-b border-deep-foreground/15 pb-4 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-deep-foreground/70">{row.term}</dt>
                  <dd className="font-display text-lg font-semibold text-leaf">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs leading-relaxed text-deep-foreground/60">
              Nota: Kadar faedah, tempoh pembiayaan dan jumlah kelulusan
              tertakluk kepada penilaian kredit, polisi syarikat pembiayaan
              berlesen dan kelayakan pemohon. Jadual ini adalah untuk tujuan
              maklumat sahaja dan bukan merupakan tawaran muktamad.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Jadual Bayaran Bulanan
              </h3>
              <span className="text-xs text-muted-foreground">
                Contoh pengiraan sahaja
              </span>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[560px] overflow-hidden rounded-xl border border-border text-left">
                <thead>
                  <tr className="bg-secondary/70">
                    <th className="px-3 py-3 text-xs font-medium text-muted-foreground sm:px-4">
                      Jumlah Pinjaman
                    </th>
                    {TERMS.map((t) => (
                      <th
                        key={t}
                        className="px-3 py-3 text-right text-xs font-medium text-muted-foreground sm:px-4"
                      >
                        {t} Bulan
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AMOUNT_OPTIONS.map((opt, i) => {
                    const value = Number(opt.value);
                    return (
                      <tr
                        key={opt.value}
                        className={
                          i > 0
                            ? "border-t border-border transition-colors hover:bg-secondary/50"
                            : "transition-colors hover:bg-secondary/50"
                        }
                      >
                        <td className="px-3 py-3 font-display text-sm font-semibold text-foreground sm:px-4">
                          {opt.label}
                        </td>
                        {TERMS.map((t) => (
                          <td
                            key={t}
                            className="whitespace-nowrap px-3 py-3 text-right text-sm text-muted-foreground tabular-nums sm:px-4"
                          >
                            RM {fmt(monthlyFor(value, t))}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Setiap angka menunjukkan bayaran bulanan berdasarkan kadar faedah
              rata 1.5% sebulan untuk jumlah pinjaman dan tempoh berkenaan.
              Pengiraan sebenar tertakluk kepada penilaian kredit dan kelulusan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "Adakah DRAGON ACCESS merupakan syarikat pinjaman berlesen?",
    a: "Ya. DRAGON ACCESS SDN. BHD. menyediakan perkhidmatan pinjaman berlesen dan beroperasi di Johor Bahru.",
  },
  {
    q: "Berapa jumlah pinjaman yang boleh saya mohon?",
    a: "Jumlah pinjaman yang boleh dipohon bergantung kepada kelayakan, pendapatan, penilaian kredit dan polisi pembiayaan yang berkenaan.",
  },
  {
    q: "Apakah syarat asas untuk memohon?",
    a: "Pemohon perlu memenuhi syarat kelayakan yang ditetapkan, termasuk mempunyai sumber pendapatan dan menerima gaji melalui akaun bank, bukan secara tunai.",
  },
  {
    q: "Apakah dokumen yang diperlukan?",
    a: "Dokumen yang diperlukan bergantung kepada keadaan dan kelayakan pemohon. Pasukan kami akan memaklumkan dokumen yang diperlukan semasa proses semakan.",
  },
  {
    q: "Adakah saya perlu datang ke pejabat?",
    a: "Keperluan untuk hadir ke pejabat bergantung kepada proses permohonan dan dokumen yang diperlukan. Hubungi kami terlebih dahulu untuk mengetahui langkah seterusnya.",
  },
  {
    q: "Bagaimana saya boleh membuat pertanyaan?",
    a: "Anda boleh mengisi borang di laman ini atau menghubungi kami melalui WhatsApp untuk mendapatkan maklumat lanjut dan semakan awal.",
  },
];

function Faq() {
  return (
    <section id="soalan" className="scroll-mt-20 bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Soalan Lazim
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ada Soalan? Kami Ada Jawapan.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-5 shadow-sm last:border-b"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline sm:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Application form ---------------- */

const AMOUNT_OPTIONS = [
  { value: "5000", label: "RM 5,000" },
  { value: "10000", label: "RM 10,000" },
  { value: "20000", label: "RM 20,000" },
  { value: "30000", label: "RM 30,000" },
  { value: "50000", label: "RM 50,000" },
  { value: "100000", label: "RM 100,000" },
];

function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    job: "",
    area: "",
    salary: "",
    amount: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Hai DRAGON ACCESS, saya ingin membuat semakan kelayakan.",
      "",
      `Nama Penuh: ${form.name}`,
      `Nombor Telefon: ${form.phone}`,
      `Pekerjaan: ${form.job}`,
      `Kawasan Kediaman: ${form.area}`,
      `Gaji: ${form.salary}`,
      `Jumlah Pinjaman: RM ${form.amount}`,
    ].join("\n");
    window.open(`${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const fieldClass = "h-11 rounded-lg border-input bg-background";

  return (
    <section id="mohon" className="scroll-mt-20 bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-leaf">
            Borang Permohonan
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Semak Kelayakan Anda Sekarang
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Isi borang ringkas di bawah dan pasukan kami akan menghubungi anda
            untuk membincangkan keperluan serta pilihan pinjaman yang
            bersesuaian.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                icon: MapPin,
                label: "Alamat",
                value:
                  "149-01, Jln Nusa Bestari Dua 2/2, Taman Nusa Bestari, 79150 Iskandar Puteri, Johor",
              },
              {
                icon: Phone,
                label: "Telefon",
                value: "+60 12-341 0525",
                href: "tel:+60123410525",
              },
              {
                icon: Mail,
                label: "Emel",
                value: "zhenlon933@gmail.com",
                href: "mailto:zhenlon933@gmail.com",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-foreground">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Nama Penuh
              </Label>
              <Input
                id="name"
                required
                value={form.name}
                onChange={(e) => set("name")(e.target.value)}
                placeholder="Nama sepenuh seperti dalam MyKad"
                className={`mt-1.5 ${fieldClass}`}
              />
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium">
                Nombor Telefon
              </Label>
              <Input
                id="phone"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone")(e.target.value)}
                placeholder="Contoh: 012-345 6789"
                className={`mt-1.5 ${fieldClass}`}
              />
            </div>

            <div>
              <Label htmlFor="job" className="text-sm font-medium">
                Pekerjaan
              </Label>
              <Input
                id="job"
                required
                value={form.job}
                onChange={(e) => set("job")(e.target.value)}
                placeholder="Contoh: Juruteknik"
                className={`mt-1.5 ${fieldClass}`}
              />
            </div>

            <div>
              <Label htmlFor="area" className="text-sm font-medium">
                Kawasan Kediaman
              </Label>
              <Input
                id="area"
                required
                value={form.area}
                onChange={(e) => set("area")(e.target.value)}
                placeholder="Contoh: Johor Bahru"
                className={`mt-1.5 ${fieldClass}`}
              />
            </div>

            <div>
              <Label htmlFor="salary" className="text-sm font-medium">
                Gaji
              </Label>
              <Input
                id="salary"
                required
                value={form.salary}
                onChange={(e) => set("salary")(e.target.value)}
                placeholder="Contoh: RM 3,500 / bulan"
                className={`mt-1.5 ${fieldClass}`}
              />
            </div>

            <div className="sm:col-span-2">
              <Label className="text-sm font-medium">Jumlah Pinjaman</Label>
              <Select required value={form.amount} onValueChange={set("amount")}>
                <SelectTrigger className={`mt-1.5 ${fieldClass}`}>
                  <SelectValue placeholder="Pilih jumlah pinjaman" />
                </SelectTrigger>
                <SelectContent>
                  {AMOUNT_OPTIONS.map((opt) => (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="mt-7 h-12 w-full bg-leaf text-base font-semibold text-primary-foreground hover:bg-leaf/90"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Hantar Pertanyaan Melalui WhatsApp
          </Button>

          <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
            Maklumat yang diberikan akan digunakan untuk tujuan semakan dan
            diuruskan mengikut dasar privasi kami.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer id="hubungi" className="bg-deep text-deep-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="font-display text-xl font-semibold tracking-tight">
              DRAGON ACCESS SDN. BHD.
            </div>
            <div className="mt-1 text-xs text-deep-foreground/60">
              200101005344 (541100-M)
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-deep-foreground/70">
              Lebih 25 tahun berpengalaman di Johor Bahru, menyediakan
              penyelesaian pinjaman berlesen yang dipercayai.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf">
              Hubungi Kami
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-deep-foreground/75">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  149-01, Jln Nusa Bestari Dua 2/2, Taman Nusa Bestari, 79150
                  Iskandar Puteri, Johor
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+60123410525" className="hover:text-leaf">
                  +60 12-341 0525
                </a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="mailto:zhenlon933@gmail.com" className="hover:text-leaf">
                  zhenlon933@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-leaf">
              Navigasi
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-deep-foreground/75">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToId(link.href)}
                    className="hover:text-leaf"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-deep-foreground/15 pt-6 text-xs text-deep-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} DRAGON ACCESS SDN. BHD. Hak cipta
            terpelihara.
          </span>
          <span className="flex flex-wrap items-center gap-1.5">
            <BadgeCheck className="h-3.5 w-3.5 shrink-0" />
            <span>Syarikat pembiayaan berlesen</span>
            <span className="text-deep-foreground/70">
              No. Lesen: WL3135/01/01-12/250828
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Usp />
        <LoanSolutions />
        <Eligibility />
        <PaymentSchedule />
        <Faq />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}
