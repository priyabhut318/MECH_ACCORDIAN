export const demodata = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        profiles: [
          {
            id: 1,
            faq1id: "esim-what",
            faq1title: "What is an eSIM?",
            faq1content:
              "An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.",
          },
          {
            id: 2,
            faq2id: "esim-devices",
            faq2title: "Which devices support eSIM?",
            faq2content:
              "Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads.",
          },
          {
            id: 3,
            faq3id: "esim-dual",
            faq3title: "Can I use both eSIM and physical SIM simultaneously?",
            faq3content:
              "Yes, most eSIM-compatible devices support Dual SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time.",
          },
          {
            id: 4,
            faq4id: "esim-activation",
            faq4title: "How do I activate an eSIM?",
            faq4content:
              "To activate an eSIM, you typically scan a QR code provided by your carrier or enter the activation details manually in your device settings.",
          },
          {
            id: 5,
            faq5id: "esim-benefits",
            faq5title: "What are the advantages of using an eSIM?",
            faq5content:
              "eSIMs offer several benefits: easy switching between carriers, no physical SIM card needed, ability to store multiple profiles, and environmentally friendly.",
          },
        ],
      });
    }, 1000);
  });
};
