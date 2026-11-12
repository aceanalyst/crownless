// ============================================================
// CROWNLESS — store configuration
// Edit values here only; every page reads from this file.
// ============================================================
const CONFIG = {
  storeName: "CROWNLESS",
  tagline: "Royalty needs no crown.",
  currency: "NGN",

  // WhatsApp contact number.
  // *** PLACEHOLDER — replace "2348000000000" with the real business
  // WhatsApp number (country code + number, digits only, no + or spaces)
  // before launch. The floating WhatsApp button on every page uses it. ***
  whatsappNumber: "2348000000000", // PLACEHOLDER — replace me
  get whatsappLink() {
    return "https://wa.me/" + this.whatsappNumber;
  },

  // Paystack PUBLIC test key only (starts with pk_test_).
  // Paste the real test public key here to enable checkout in test mode.
  // *** NEVER put a secret key (sk_test_ / sk_live_) in this file or
  // anywhere in the frontend — secret keys belong on a server only. ***
  PAYSTACK_PUBLIC_KEY: "pk_test_REPLACE_ME"
};
