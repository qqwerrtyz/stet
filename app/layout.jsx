import Script from "next/script";

export const metadata = {
  title: "СТЭТ — независимая приемка квартир",
  description:
    "Профессиональная приемка квартиры. Проверяем квартиру по ГОСТам и стандартам и поможем взыскать компенсацию",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        {children}

        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {
                  if (document.scripts[j].src === r) { return; }
                }
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');

              ym(38267465, 'init', {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
              });
            `,
          }}
        />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/38267465"
              style={{
                position: "absolute",
                left: "-9999px",
              }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}