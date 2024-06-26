import { useEffect } from "react";
import { IconContext } from "react-icons";
import { FiExternalLink } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export default function Modal({ destroy }) {
  useEffect(() => {
    return () => {
      destroy();
    };
  }, [destroy]);

  return (
    <div>
      <div
        id="top-left-modal"
        data-modal-placement="top-left"
        tabIndex={-1}
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full"
      >
        <div className="relative w-full  h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-[#f1eeee]   shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center p-5 rounded-t border-b">
              <h3 className="text-xl font-bold text-black ">
                Business Plan Competition
              </h3>
              <button
                type="button"
                onClick={destroy}
                className="text-black bg-transparent hover:bg-gray-200 hover:text-black rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                data-modal-toggle="top-left-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="px-6 py-3">
              <p className="font-medium text-[#2428a5] pb-3">
                <a
                  href="https://bit.ly/GuidebookPekanIT2022"
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Link Guidebook Perlombaan{" "}
                  <IconContext.Provider
                    value={{
                      color: "#2428a5",
                      size: "22px",
                      className: "inline-block",
                    }}
                  >
                    <FiExternalLink />
                  </IconContext.Provider>
                </a>
              </p>
              <p className="font-bold">Deskripsi Lomba </p>
              <p className="text-base text-justify leading-relaxed text-black">
                Kompetisi Cyber Security bertujuan untuk menguji kemampuan
                peserta dalam menghadapi kasus keamanan informasi dan jaringan
                yang telah disiapkan. Daya analisis dan kreativitas peserta
                ditantang untuk mencari kelemahan pada suatu system yang telah
                dirancang untuk memiliki celah atau informasi tertentu yang
                memungkinkan terjadinya peretasan pada system tersebut.
              </p>

              <p className="text-base text-justify mt-3 leading-relaxed text-black">
                <span className="font-bold">Ketentuan Peserta</span>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>1. &nbsp;</div>Peserta perlombaan Business Plan Pekan IT
                  2022 dapat terdiri dari 1-3 orang.
                </div>
                <div className="mt-1 ml-[2vh] justify-start grid grid-flow-col">
                  <div>2. &nbsp;</div>
                  <div>
                    Peserta yang mengikuti perlombaan Business Plan Pekan IT
                    2022 merupakan kalangan Mahasiswa/Umum.
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>a. &nbsp;</div>Bagi peserta yang merupakan mahasiswa
                      aktif (D3/D4/S1) dapat melampirkan softcopy kartu
                      mahasiswa atau surat keterangan aktif mahasiswa.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>b. &nbsp;</div>Bagi kalangan masyarakat umum dapat
                      melampirkan softcopy Kartu Tanda Penduduk (KTP).
                    </div>
                  </div>
                </div>

                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>3. &nbsp;</div>Peserta lomba telah terdaftar sebagai
                  peserta lomba Business Plan Pekan IT 2022.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>4. &nbsp;</div>Peserta lomba telah melunasi biaya
                  pendaftaran Rp. 30.000,- sesuai dengan prosedur pada Mekanisme
                  Pendaftaran.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>5. &nbsp;</div>Peserta lomba diwajibkan untuk mengikuti
                  akun sosial media Pekan IT (@pekanit_unsika) dan akun sosial
                  media Himtika (@himtika_unsika).
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>6. &nbsp;</div>Peserta lomba diwajibkan untuk mengikuti
                  technical meeting yang diadakan oleh panitia Pekan IT.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>7. &nbsp;</div>Ketentuan Peserta dapat berubah
                  sewaktu-waktu tanpa pemberitahuan kepada peserta oleh Panitia
                  Pekan IT.
                </div>
                <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                  <div>8. &nbsp;</div>Peserta yang melanggar atau tidak memenuhi
                  ketentuan dapat didiskualifikasi oleh pihak terkait.
                </div>
              </p>

              <p className="font-bold mt-4">Mekanisme Perlombaan </p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold"></span>
                <div className="mt-1 justify-start grid grid-flow-col">
                  <div className="font-bold">1. &nbsp;</div>
                  <div>
                    <span className="font-bold">Subtema</span>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Teknologi
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Sosial Ekonomi
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Industri Kreatif
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Pendidikan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Lingkungan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Kesehatan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>F & B
                    </div>
                  </div>
                </div>

                <div className="mt-1  justify-start grid grid-flow-col">
                  <div className="font-bold">2. &nbsp;</div>
                  <div>
                    <span className="font-bold">Ketentuan Perlombaan</span>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>a) &nbsp;</div>Babak Penyisihan
                    </div>
                    <div className="sm:ml-[0.5vh] md:ml-[0.5vh] lg:ml-[0.5vh]  xl:ml-[2vh]">
                      <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                        <div>&bull; &nbsp;</div>Peserta memilih tema yang
                        disediakan pada bagian subtema diatas.
                      </div>
                      <div className="mt-1 ml-[2vh] grid  justify-start grid-flow-col">
                        <div>&bull; &nbsp;</div>Peserta menyiapkan proposal ide
                        bisnis untuk dikumpulkan sebagai bahan seleksi menuju
                        tahap Final
                      </div>
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>b) &nbsp;</div>Babak Final
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                      Pada tahap babak final, peserta diambil 5 terbaik dari
                      proposal bisnis nya untuk mempresentasikan ide bisnis nya
                      di hadapan para juri.
                    </div>
                  </div>
                </div>

                <div className="mt-1  justify-start grid grid-flow-col">
                  <div className="font-bold">3. &nbsp;</div>
                  <div>
                    <span className="font-bold">Format Proposal</span>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Diketik dengan font style Times
                      New Roman, ukuran 12
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Format kertas ukuran A4
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Proposal maksimal 30 halaman
                      dihuitung mulai Pendahuluan sampai dengan Lampiran.
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Desain proposal bebas (sesuai
                      kreativitas masing-masing tim, namun konten atau isi dari
                      proposal wajib ditulis sesuai dengan ketentuan)
                    </div>
                  </div>
                </div>

                <div className="mt-1  justify-start grid grid-flow-col">
                  <div className="font-bold">4. &nbsp;</div>
                  <div>
                    <span className="font-bold">Konten/Isi Proposal</span>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Ringkasan perusahaan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Deskripsi produk atau layanan
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Analisis pasar dan competitor
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Analisis finansial strategi bisnis
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Tim manajemen dan/atau penasihat
                    </div>
                    <div className="mt-1 justify-start grid grid-flow-col">
                      <div>&bull; &nbsp;</div>Informasi lainnya yang menjadi
                      daya tarik
                    </div>
                  </div>
                </div>
              </p>

              <p className="font-bold mt-4">Kriteria Penilaian</p>
              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">1. Babak Penyisihan</span>
                <div className="mt-1 xl:ml-[3vh] sm:ml-[2vh] justify-start grid grid-flow-col">
                  <div>
                    Pada babak penyisihan peserta mengirimkan proposal dari ide
                    bisnis mereka lalu untuk kriteria penilaiannya adalah
                    sebagai berikut
                  </div>
                </div>

                <div className="overflow-x-auto relative md:ml-[4vh] sm:ml-[2vh] sm:my-2  sm:rounded-lg max-w-max bg-black">
                  <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          Kriteria Penilaian
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Bobot Nilai
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Ide Bisnis</td>
                        <td className="py-4 px-6">25%</td>
                      </tr>

                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Orisinalitas</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Aspek Sumber Daya Manusia</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Aspek Produksi</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Aspek Pasar dan Pemasaran</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Aspek Keuangan</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Format Penulisan</td>
                        <td className="py-4 px-6">15%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Kreativitas</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </p>

              <p className="text-base text-justify leading-relaxed ml-[1vh] text-black">
                <span className="font-bold">2. Babak Final</span>
                <div className="mt-1 xl:ml-[3vh] sm:ml-[2vh] justify-start grid grid-flow-col">
                  <div>
                    Pada babak final peserta diberikan kesempatan untuk
                    mempresentasikan ide bisnis mereka, kriteria penilaian pada
                    babak final sendiri adalah sebagai berikut :
                  </div>
                </div>

                <div className="overflow-x-auto relative md:ml-[3vh] sm:ml-[2vh] sm:my-2  sm:rounded-lg max-w-max ">
                  <div className="inline-block">&bull; &nbsp;</div>Presentasi
                  <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          Kriteria Penilaian
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Bobot Nilai
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Pemaparan Materi</td>
                        <td className="py-4 px-6">25%</td>
                      </tr>

                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Sikap</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Kekompakan</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto relative md:ml-[3vh] sm:ml-[2vh] sm:my-2  sm:rounded-lg max-w-max ">
                  <div className="inline-block">&bull; &nbsp;</div>Konten
                  Powerpoint
                  <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          Kriteria Penilaian
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Bobot Nilai
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Keinteraktifan Powepoint</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto relative md:ml-[3vh] sm:ml-[2vh] sm:my-2  sm:rounded-lg max-w-max ">
                  <div className="inline-block">&bull; &nbsp;</div>Sesi Tanya
                  Jawab
                  <table className=" text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="py-3 px-6">
                          Kriteria Penilaian
                        </th>
                        <th scope="col" className="py-3 px-6">
                          Bobot Nilai
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Penguasaan Materi</td>
                        <td className="py-4 px-6">20%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Sikap</td>
                        <td className="py-4 px-6">10%</td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="py-4 px-6">Kekompakan</td>
                        <td className="py-4 px-6">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </p>

              <p className="font-bold mt-4">Hadiah </p>
              <p className="text-base text-justify leading-relaxed text-black">
                Bagi pemenang (Juara 1, 2, 3) diberikan penghargaan berupa
                sertifikat dan dana pembinaan sesuai dengan peringkat juara.
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 1: Sertifikat + Uang Pembinaan + Merchandise
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 2: Sertifikat + Uang Pembinaan + Merchandise
              </p>
              <p className="text-base leading-relaxed text-black">
                Juara 3: Sertifikat + Uang Pembinaan + Merchandise
              </p>
            </div>
            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button
                data-modal-toggle="top-left-modal"
                type="button"
                onClick={destroy}
                className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-black focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-black dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
