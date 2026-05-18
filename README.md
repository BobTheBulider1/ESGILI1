# Eşgili Restoran - Premium Web Projesi

Bu proje, geleneksel Gaziantep mutfak kültürünü "AAA kalite" sinematik ve modern bir web arayüzü ile sunmak amacıyla tasarlanmıştır. Yüksek kaliteli 3D görselleştirmeler, atalet (inertia) destekli akıcı parallax kaydırma motoru ve tamamen mobil uyumlu "Glassmorphism" (Buzlu cam) estetiği ile kodlanmıştır.

## Özellikler (Features)
- **Akıcı 3D Animasyonlar:** Ekranda hareket eden organik metalik şekiller ve cam küpler.
- **Inertia Parallax Scroll:** Klasik kaydırmanın aksine, "Linear Interpolation (Lerp)" kullanılarak tıpkı bir sinema kamerası süzülüyormuş gibi kayan profesyonel sayfa motoru.
- **Glassmorphism Arayüz:** Arka plandaki objelerin ışıklarını kıran ve yansıtan buzlu cam tasarımlı menü ve kartlar.
- **Kusursuz Mobil Uyum (Responsive):** Telefondan girildiğinde "Hamburger Menü" sistemine dönen, başlıkları ve boşlukları ekran boyutuna göre otomatik ölçekleyen "Mobile-First" kodlama altyapısı.
- **Etkileşim Odaklı (Call to Action):** WhatsApp rezervasyon butonu ve Yemeksepeti entegrasyonu (Vurgulu ve markaya özel kırmızı butonlar ile).

## Klasör Yapısı (Folder Structure)
Dosyalar, en iyi performans ve temiz kodlama mantığına göre ayrıştırılmıştır:
* `/assets`: Logolar, resimler ve 3D objeler için gerekli medya dosyaları.
* `/css/style.css`: Tüm sayfanın tasarımı, renk paleti ve animasyon anahtarlarını barındıran CSS dosyası.
* `/js/main.js`: Hamburger menü fonksiyonları ve Parallax atalet motorunu çalıştıran JavaScript algoritması.
* `index.html`: Web sayfasının ana omurgası (DOM).
* `sade_arkaplanli_index.html`: Animasyonlu şekiller olmadan, sadece temel parallax efektinin bulunduğu opsiyonel sadeleştirilmiş ana sayfa tasarımı.

## Kurulum ve Kullanım (Deployment)
Bu proje saf (Vanilla) HTML, CSS ve JS kullanılarak kodlanmıştır. Herhangi bir paket yükleyicisine (npm, webpack vb.) veya bir sunucu derlemesine (build) ihtiyaç duymaz.

**Sistemi çalıştırmak için:**
1. Projeyi bilgisayarınıza indirin.
2. Sadece `index.html` dosyasına çift tıklayarak modern bir tarayıcıda (Chrome, Safari, Edge) açın.
3. Projeyi bir web sunucusuna (Hostinger, GoDaddy, Vercel, Netlify) doğrudan bu klasör diziniyle yükleyebilirsiniz.

---
*Geliştirme ve Tasarım:* Ben AI Studio  
*Sürüm:* v1.0 (Premium Demo)
