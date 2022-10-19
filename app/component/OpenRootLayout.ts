import { getRootLayout, View } from "@nativescript/core";

export const OpenRootLayout = (view: View) => {
  
  getRootLayout()
    .open(view, {
      shadeCover: {
        color: "#000000",
        opacity: 0.5,
        tapToClose: true
      },
      animation: {
        enterFrom: {
          // opacity: 0,
          translateY: 500,
          duration: 300,
        },
        exitTo: {
          // opacity: 0,
          translateY: 500,
          duration: 50,
        },
      },
    })
    .catch((e) => console.error(e));
};

export const CloseRootLayout = (view: View) => {
  getRootLayout()
    .close(view, {
      translateY: 500,
      duration: 50,
    })
    .catch((e) => console.error(e));
};
