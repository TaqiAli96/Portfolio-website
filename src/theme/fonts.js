import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'Satoshi-Medium';
            src: url('/fonts/Satoshi-Medium.woff2') format('woff2'),
                 url('/fonts/Satoshi-Medium.woff') format('woff'),
                 url('/fonts/Satoshi-Medium.ttf') format('truetype');
                 font-weight: 500;
                 font-display: swap;
                 font-style: normal;
          }
          
          
        //   @font-face {
        //     font-family: 'Satoshi-MediumItalic';
        //     src: url('/fonts/Satoshi-MediumItalic.woff2') format('woff2'),
        //          url('/fonts/Satoshi-MediumItalic.woff') format('woff'),
        //          url('/fonts/Satoshi-MediumItalic.ttf') format('truetype');
        //          font-weight: 500;
        //          font-display: swap;
        //          font-style: italic;
        //   }
          
          
        //   @font-face {
        //     font-family: 'Satoshi-Bold';
        //     src: url('/fonts/Satoshi-Bold.woff2') format('woff2'),
        //          url('/fonts/Satoshi-Bold.woff') format('woff'),
        //          url('/fonts/Satoshi-Bold.ttf') format('truetype');
        //          font-weight: 700;
        //          font-display: swap;
        //          font-style: normal;
        //   }
          
          
        //   @font-face {
        //     font-family: 'Satoshi-BoldItalic';
        //     src: url('/fonts/Satoshi-BoldItalic.woff2') format('woff2'),
        //          url('/fonts/Satoshi-BoldItalic.woff') format('woff'),
        //          url('/fonts/Satoshi-BoldItalic.ttf') format('truetype');
        //          font-weight: 700;
        //          font-display: swap;
        //          font-style: italic;
        //   }
          
          
        //   @font-face {
        //     font-family: 'Satoshi-Black';
        //     src: url('/fonts/Satoshi-Black.woff2') format('woff2'),
        //          url('/fonts/Satoshi-Black.woff') format('woff'),
        //          url('/fonts/Satoshi-Black.ttf') format('truetype');
        //          font-weight: 900;
        //          font-display: swap;
        //          font-style: normal;
        //   }
          
          
        //   @font-face {
        //     font-family: 'Satoshi-BlackItalic';
        //     src: url('/fonts/Satoshi-BlackItalic.woff2') format('woff2'),
        //          url('/fonts/Satoshi-BlackItalic.woff') format('woff'),
        //          url('/fonts/Satoshi-BlackItalic.ttf') format('truetype');
        //          font-weight: 900;
        //          font-display: swap;
        //          font-style: italic;
        //   }
          
      `}
  />
);

export default Fonts;
