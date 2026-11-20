// ============================================================
// CROWNLESS — store configuration
// Edit values here only; every page reads from this file.
// ============================================================
const CONFIG = {
  storeName: "CROWNLESS",
  tagline: "Royalty needs no crown.",
  currency: "NGN",

  // WhatsApp contact number — the owner's Nigerian number (set 2026-11-20).
  // Checkout orders and the floating WhatsApp button on every page come here.
  whatsappNumber: "2347069329725",
  get whatsappLink() {
    return "https://wa.me/" + this.whatsappNumber;
  },

  // Paystack PUBLIC test key only (starts with pk_test_).
  // Paste the real test public key here to enable checkout in test mode.
  // *** NEVER put a secret key (sk_test_ / sk_live_) in this file or
  // anywhere in the frontend — secret keys belong on a server only. ***
  PAYSTACK_PUBLIC_KEY: "pk_test_REPLACE_ME"
};
