/* Panduan Belajar Menjadi Seorang Hacker
Channel YT : Alif Nurrohman

Pengenalan & Alur Belajar #1

    Siapakah itu Hacker?
    Hacker adalah orang yang skill pemrogramannya mampu 
    menerobos sistem keamanan komputer atau jaringan untuk tujuan tertentu.
    Jenis Hacker,Secara Umum :
     1.White Hat (Baik/Legal)
     2.Black Hat (Jahat/Ilegal)
     3.Grey Hat (Diantara keduanya)
     
    Jenis-Jenis Hacking,Secara Umum :
     1.Sistem PC Hacking 
       Meretas PC / Komputer orang.
     2.Web Hacking
       Meretas Website.
     3.Android Hacking
       Meretas Android.
     4.WAP Hacking
       Meretas Wireless Access Point alias wifi.
     5.MITM Hacking
       Main In The Middle Hacking, Meretas jaringan untuk mata-mata.
     6.Termux Hacking 
       Meretas menggunakan aplikasi Termux di android.

    3 Alur Belajar Hacking :
      1.Menyiapkan Lab Hacking 
       - Pengertian 
         Menyiapkan hal-hal yang kita butuhkan untuk melakukan Hacking.
       - Virtual Box 
         Menginstall Virtual Box untuk menginstall sistem operasi (OS).
       - Virtual Machine  
         Menginstall Virtual Machine untuk memakai perangkat lunak dalam (OS).
       - Kali Linux
         Menginstall Kali Linux sebagai sistem operasi yang digunakan untuk Hacking.
       - Metasploitable
         Menginstall Virtual Machine si Target, seperti Windows 7,10,Dll.
       - Network Setting
         Cara mensetting network pada Virtual Machine yang kita install.
      2.Belajar Perintah Dasar Linux : 
       - Pengertian 
         Perintah dasar yang sering digunakan dalam System Operasi Linux.
       - Tujuan :
         Agar kita bisa memahami dan menggunakan Kali Linux dengan baik.
       - System Navigation 
         Cara kita keluar masuk Sistem di Linux. perintah seperti cd,ls,pwd,Dll.
       - File System 
         Mempelajari bagaimana susunan file System di Linux.
       - Manage File & Dir
         Management File & Directory, disini kita bisa membuat,menghapus,Dll.
       - Sudo Privilege
         Mempelajari cara menjalankan Linux dengan User berbeda. Default Root.
    3.Mempelajari 5 Tahapan Hacking
       - Pengertian 
         Ini adalah 5 tahapan umum hacking yang sering digunakan dan kita praktik!
       - Reconnaissance
         Menggunakan informasi tentang Target System.
       - Scanning 
         Melakukan scanning informasi private dari Target System.
       - Vulnerability Analysis
         Menganalisa kelemahan System Target dari hasil scan. 
       - Exploitation 
         Mengakses System Target ini adalah tahapan yang paling seru.
       - Post Exploitation & Persistence 
         Mengambiil data hasil eksploitasi dan membuat Hacking kita Permanen.

Tahapan Hacking #2

    Tujuan Pembelajaran :
     1.Mengetahui Alur Hacking
       Kita akan mempelajari alur dari sebuah proses Hacking dari awal hingga selesai.
     2.Mengetahui Istilah Hacking
       Kita akan mempelajari istilah-istilah dasar hacking. Seperti istilah dalam 
       alur Hacking,alat Hacking dan teknik Hacking didalamnya.
     3.Mengetahui System Keamanan
       Kita akan mempelajari sebuah sistem keamanan dalam sebuah perangkat.

    Disini saya akan mempelajari/memperdalam tentang Tahapan Hacking diatas!
     1.Reconnaissance
       Mengumpulkan data sebanyak banyaknya tentang Target. Biasanya Hal yang dilakukan yakni :
       - Passive Reconnaissance :
         Mengidentifikasi IP Address,Physical Address,Email Address,Username,Dll. 
         Secara online dan tanpa berhubungan langsung dengan si Target. (Media,Internet,Berita Dll).
          - Tools yang digunakan :
            Whois,WhatWeb,TheHarvester,Hunter,Io,Sherlock,Nmap,Dll.
          - Membuat Tools :
            Membuat tools sendiri dengan Bahasa Pemrograman Python.
       - Active Reconnaissance 
         Mengamati langsung target dengan tujuan mengetahui data data pribadinya dan info
         penting lainnya seperti hobi,bentuk rumah,nomor rumah,plat kendaraan,Dll.
          - Tools yang digunakan :
            Skill komunikasi,Skill menyadap cctv & Skill keberanian, wkwk
     2.Scanning 
       Scanning merupakan Tanda dari dimulainya sebuah serangan oleh peretas (pre-attack).
       pada tahap ini, peretas akan mencari berbagai kemungkinan yang dapat digunakan untuk Mengambil
       alih Komputer atau System dari Target.
          - Hal Penting :
            Kita harus punya izin dari Pemilik Komputer atau System Target. Karena jika tidak maka
            kita termasuk dalam kegiatan Ilegal.
          - Point yang akan dibahas :
            TCP & UDP,Port Scanning,Port Service Version Scanning,Operasi System Scanning,
            Firewall/IDS, Bypassing firewalls seperti decoys & packet fragmentation,
            lalu adalah Security Evasion.
          - Tools yang digunakan :
            Net Discover & Nmap
          - Membuat Tools :
            Membuat tools sendiri dengan Bahasa Pemrograman Python.
     3.Vulnerability Analysis
       Merupakan proses untuk mencari tahu kelemahan atau kerentanan terhadap sistem, dimana celah tersebut akan digunakan sebagai dari penetrasi sistem.
          - Tools yang digunakan :
            Nmaps Script, Nessus, Searchsploit, dll.
     4.Exploitation
       Kenapa exploitation? karena kita akan mengakses system tersebut dengan mengeksploit dan tujuan sebuah hacking, yaitu kita ingin mengeksploit dari system tersebut alias mengakses dan mengkontrol sebuah system.
       Pengenalan reverse shell & bind shell. Contoh praktik :
          - Telnet Exploit
          - Samba Exploitation
          - vsftpad 2.3.4 exploitation
          - SSH - Brute Force Attack
          - Eternal Blue Attack
          - Double Pulsar Attack 
          - Bluekeep Attack
          - Routersploit
        Tools yang digunakan :
        Metasploit Framework
      
         
© Copyright By WildanHoo