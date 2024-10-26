/* Linux Command Tutorial 
Channel YT : PORTAL-IT ID

Materi #1
    ~ Membaca Indikator/identifier Terminal

   ex : wildanhoo@pop-os:~$
   Tanda "~" didalam sistem alokasi linux artinya lokasi 
   home folder dari akun yang sedang digunakan di Terminal.
   Tanda "~" = home folder

   Lokasi "/"(slash) adalah lokasi terluar atau lokasi utama dari
   sistem linux. Lokasi ini biasa disebut "root location",
   "master location","File System".

   Home folder default dari tiap akun user yang dibuat berada
   di lokasi: /home/namauser/
   Home folder dari akun root utama berada di: /home/root/

   Rangkuman dari (wildanhoo@pop-os:~$) :
   <username>@<hostname>:<lokasi><simbol level>

   Command #1
   "pwd" (Print Working Directory)
   adalah perintah dalam sistem operasi berbasis Unix/Linux yang 
   digunakan untuk menampilkan direktori kerja saat ini, yaitu 
   direktori di mana pengguna berada saat perintah tersebut 
   dijalankan. Dengan menggunakan perintah pwd, pengguna dapat 
   mengetahui path atau jalur absolut dari direktori tempat 
   mereka berada dalam sistem file.

   Command #2
   "ls" (List)
   adalah perintah dalam sistem operasi berbasis Unix/Linux yang 
   digunakan untuk menampilkan daftar file dan direktori yang ada 
   di dalam direktori saat ini atau direktori yang ditentukan. 
   Perintah ini membantu pengguna untuk melihat isi dari suatu 
   direktori dengan cepat.

   Command #3
   "cd" (Change Directory)
   adalah perintah dalam sistem operasi berbasis Unix/Linux yang 
   digunakan untuk berpindah dari satu direktori ke direktori 
   lain di dalam sistem file. Perintah ini memungkinkan pengguna 
   untuk menavigasi struktur direktori di komputer.

   "cd .." (Untuk Mundur/Menuliskan Folder Sebelumnya)
   "cd -/--" (Untuk Mundur/Menuliskan Folder Sebelumnya) 

   Command #4
   "cp" (Copy)
   adalah perintah dalam sistem operasi berbasis Unix/Linux yang 
   digunakan untuk menyalin file atau direktori dari satu lokasi 
   ke lokasi lain. Dengan menggunakan perintah ini, pengguna dapat 
   menduplikasi file atau direktori tanpa mengubah file asli.

   Menyalin file dengan command 'cp':
   cp <file_asli> <file_salinan> (Shortcut atau Icon maka tidak bisa)

   Command #5
   "mv" (Move)
   adalah perintah dalam sistem operasi berbasis Unix/Linux yang 
   digunakan untuk memindahkan atau mengganti nama file dan direktori. 
   Dengan menggunakan perintah ini, pengguna dapat memindahkan file 
   dari satu lokasi ke lokasi lain atau mengganti nama file atau direktori.

   Memindahkan file dengan command 'mv':
   mv <nama_file> <destinasi>
   Mengubah nama file dengan command 'mv':
   mv <nama_file> <nama_baru>

   Command #6
   "nano" (Nano Teks Editor)
   adalah editor teks berbasis terminal yang sering digunakan 
   dalam sistem operasi berbasis Unix/Linux. Editor ini sederhana 
   dan mudah digunakan, bahkan untuk pengguna yang baru mengenal 
   sistem berbasis teks. nano berfungsi untuk membuat, mengedit, 
   dan menyimpan file teks, seperti file konfigurasi, skrip, 
   dan dokumen teks biasa.

   Menggunakan teks editor nano dengan command 'nano':
   nano <nama_file>

   Command #7
   "touch" (Touch File)
   adalah perintah dalam sistem operasi berbasis Unix/Linux yang 
   digunakan untuk membuat file kosong baru atau memperbarui 
   timestamp (waktu akses dan modifikasi) dari file yang sudah ada 
   tanpa mengubah isinya. Perintah ini sangat berguna ketika 
   pengguna ingin membuat file baru dengan cepat atau memperbarui 
   waktu modifikasi file yang sudah ada.
   secara singkat "touch" adalah membuat file secara cepat melalui command Linux

   Membuat/Menyentuh file dengan command 'touch':
   touch <nama_file>

   NOTE!! : Jika kita membuat file dengan nano, file-type nya
   akan disesuaikan dengan formaat nama yang kita berikan.



Akun dengan tingkah user : $
Akun dengan tingkat root : #
© Copyright By WildanHoo