const config = {
  data: {
    // Main invitation title that appears on the page
    title: "Pernikahan Amanda Sawitri & Imam Kurniawan",
    // Opening message/description of the invitation
    description:
      "Kami akan menikah dan mengundang Anda untuk turut merayakan momen istimewa ini.", // Nanti ini dibikin random
    // Groom's name
    groomName: "Amanda Sawitri",
    // Bride's name
    brideName: "Imam Kurniawan",
    // Groom's parents names
    parentGroom: "Bapak H. Syafrial (Alm) & Ibu Ida Maryati",
    // Bride's parents names
    parentBride: "Bapak Hartoni (alm) & Ibu Ade Kurniasih",
    // Wedding date (format: YYYY-MM-DD)
    date: "2025-11-23",
    // Google Maps link for location (short clickable link)
    maps_url: "https://maps.app.goo.gl/s3xt78pToXhdpzgt6",
    // Google Maps embed code to display map on website
    // How to get: open Google Maps → select location → Share → Embed → copy link
    maps_embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.761757405055!2d102.26344376999101!3d-3.7932530318632867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b0237bdad177%3A0x62eac13728525979!2sJl.%20Al-Furqon%2C%20Kebun%20Dahri%2C%20Kec.%20Ratu%20Samban%2C%20Kota%20Bengkulu%2C%20Bengkulu%2038114!5e0!3m2!1sen!2sid!4v1761279119132!5m2!1sen!2sid",
    // Event time (free format, example: "10:00 - 12:00 WIB")
    time: "08:00 - 14:00 WIB",
    // Venue/building name
    location: "",
    // Full address of the wedding venue
    address: "Jl. Al-Furqon No.02 RT.04 RW.01 Kelurahan Kebun Dahri, Kecamatan Ratu Samban, Kota Bengkulu",
    // Image that appears when link is shared on social media
    ogImage: "/images/og-image.jpg",
    // Icon that appears in browser tab
    favicon: "/images/favicon.ico",
    // List of event agenda/schedule
    agenda: [
      {
        // First event name
        title: "Akad Nikah",
        // Event date (format: YYYY-MM-DD)
        date: "2025-11-23",
        // Start time (format: HH:MM)
        startTime: "08:00",
        // End time (format: HH:MM)
        endTime: "09:00",
        // Event venue
        location: "Masjid Al-Furqon Kebun Dahri",
        // Full address
        address: "Jl. Al-Furqon No.02 RT.04 RW.01 Kelurahan Kebun Dahri, Kecamatan Ratu Samban, Kota Bengkulu",
      },
      {
        // Second event name
        title: "Resepsi Nikah",
        date: "2025-11-23",
        startTime: "10:00",
        endTime: "14:00",
        location: "Kebun Dahri Kota Bengkulu",
        address: "Jl. Al-Furqon No.02 RT.04 RW.01 Kelurahan Kebun Dahri, Kecamatan Ratu Samban, Kota Bengkulu",
      }
      // You can add more agenda items with the same format
    ],

    // Background music settings
    audio: {
      // Music file (choose one or replace with your own file)
      src: "/audio/fulfilling-humming.mp3", // or /audio/nature-sound.mp3
      // Music title to display
      title: "Fulfilling Humming", // or Nature Sound
      // Whether music plays automatically when website opens
      autoplay: true,
      // Whether music repeats continuously
      loop: true
    },

    // List of bank accounts for digital envelope/gifts
    banks: [
      {
        // Bank name
        bank: "Bank Central Asia",
        // Account number
        accountNumber: "0581650930",
        // Account holder name (all uppercase)
        accountName: "Amanda Sawitri",
      },
      {
        bank: "Bank Central Asia",
        accountNumber: "0581712021",
        accountName: "Imam Kurniawan",
      }
      // You can add more banks with the same format
    ]
  }
};

export default config;