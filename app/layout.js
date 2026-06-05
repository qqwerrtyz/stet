export const metadata = {
  title: "СТЭТ — независимая приемка квартир",
  description: "Профессиональная приемка квартиры. Проверяем квартиру по ГОСТам и стандартам и поможем взыскать компенсацию",
  icons: {
    icon: '/favicon.svg',
  },

};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
