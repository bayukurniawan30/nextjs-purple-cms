# Nextjs dengan Purple CMS sebagai Headless CMS

[English Version](README.md)

Ini adalah contoh penggunaan Nextjs dan Purple CMS sebagai headless CMS. Purple CMS mempunyai fitur baru, yaitu Headless CMS. Yeeah, sebuah fitur yang sangat berguna untuk developer front-end. Buat dan atur konten di Purple CMS, fetch konten di Nextjs menggunakan fetch API. Keren banget guys.

[Demo Link](https://nextjs-purple-cms.vercel.app/)

### Nextjs

Nextjs adalah sebuah React framework yang memiliki beberapa extra fitur seperti server-side rendering dan menghasilkan static website.

[Learn more about Nextjs](https://nextjs.org/)

### Purple CMS

Purple CMS adalah sebuah Content Management System yang dibuat dengan framework CakePHP 3. Tujuannya adalah untuk memudahkan developer dalam membuat suatu website, baik yang sederhana ataupun kompleks.

[Learn more about Purple CMS](https://github.com/bayukurniawan30/purple-cms)

### Cara Instalasi

Clone atau download repo ini, lalu jalankan perintah di bawah ini

```
npm install
```

Download dan instal Purple CMS. Isi beberapa konten di Collections atau Singletons. Untuk mengecek hasil output dari pemanggilan melalui API, bisa menekan tombol API Endpoint.

Copy file env.example menjadi .env.local, dan isi value untuk **NEXT_PUBLIC_PURPLE_URL** dan **PURPLE_KEY**. NEXT_PUBLIC_PURPLE_URL adalah url dimana Purple CMS bisa diakses, misalkan *http://localhost/purple-cms*. PURPLE_KEY adalah akses key untuk mengakses API Purple CMS, kalian bisa dapatkan di Settings → API.

Tambahkan domain atau localhost di next.config.js pada bagian array pada images untuk menghindari adanya error karena menggunakan gambar dari luar folder project. 

Untuk *path* pada fetch API bisa kalian ganti dan sesuaikan dengan konten apa yang kalian buat di Purple CMS.

Jalankan perintah di bawah ini untuk memulai development server
```
npm run dev
```