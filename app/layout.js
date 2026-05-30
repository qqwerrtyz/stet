export const metadata = {
  title: "Приемка PRO — независимая приемка квартир",
  description: "Профессиональная приемка квартиры от застройщика. Проверяем квартиру по 100+ параметрам и помогаем взыскать компенсацию.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
