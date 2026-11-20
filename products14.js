// ============================================================
// CROWNLESS — sale pricing patch (added 2026-11-20, owner request).
// The current prices are the discounted prices. oldPrice below is the
// higher struck-through amount: 30% off on some products, 40% off on
// others. Loaded after products13.js on every page.
// ============================================================
var SALE_OLD_PRICES = {
  m7: 45700 /* Palazzo Joggers — ₦32,000, 30% off */,
  m9: 45800 /* Striped Zip-Neck Polo — ₦27,500, 40% off */,
  m10: 23600 /* Sleeveless Graphic Tee — ₦16,500, 30% off */,
  m11: 57500 /* Ambition Long Sleeve Tee — ₦34,500, 40% off */,
  m12: 49300 /* Mafa Error Club Long Sleeve Tee — ₦34,500, 30% off */,
  m13: 57500 /* Holy Spirit Stripe Long Sleeve Polo — ₦34,500, 40% off */,
  m14: 25000 /* Transcend Graphic Tee — ₦17,500, 30% off */,
  m15: 29200 /* Famous 79 Graphic Tee — ₦17,500, 40% off */,
  m16: 25000 /* Everyday Mood Graphic Tee — ₦17,500, 30% off */,
  m17: 29200 /* Turnover Graphic Tee — ₦17,500, 40% off */,
  m18: 52100 /* Royal Legacy Cloud Shirt — ₦36,500, 30% off */,
  m19: 50000 /* Baggy Graphic Tee — ₦30,000, 40% off */,
  m20: 25700 /* Miracle Graphic Tee — ₦18,000, 30% off */,
  m21: 30000 /* HONNE Graphic Tee — ₦18,000, 40% off */,
  m22: 25700 /* DISTANCE Graphic Tee — ₦18,000, 30% off */,
  m23: 30000 /* Khalil Nassir Cross Tee — ₦18,000, 40% off */,
  m24: 25700 /* Plain Pink Tee — ₦18,000, 30% off */,
  m25: 45800 /* Mountain Collar Tee — ₦27,500, 40% off */,
  m26: 39300 /* Radiant Collar Tee — ₦27,500, 30% off */,
  m27: 45800 /* Palm Angels Collar Tee — ₦27,500, 40% off */,
  m28: 54300 /* Creativity Script Joggers — ₦38,000, 30% off */,
  m29: 63300 /* Brooklyn Graphic Joggers — ₦38,000, 40% off */,
  m30: 54300 /* 16 Star Joggers — ₦38,000, 30% off */,
  m31: 70800 /* Purple Baggy Jeans — ₦42,500, 40% off */,
  m32: 60700 /* Blue Ripped Baggy Jeans — ₦42,500, 30% off */,
  m33: 70800 /* Olive Ripped Baggy Jeans — ₦42,500, 40% off */,
  m34: 60700 /* Black Carpenter Baggy Jeans — ₦42,500, 30% off */,
  m35: 70800 /* Sand Studded Baggy Jeans — ₦42,500, 40% off */,
  m36: 60700 /* Black Studded Baggy Jeans — ₦42,500, 30% off */,
  m37: 70800 /* Blue Stock Jeans — ₦42,500, 40% off */,
  m38: 114300 /* His & Hers Jalabiya — ₦80,000, 30% off */,
  m39: 75000 /* Men's Jalabiya — ₦45,000, 40% off */,
  m40: 39300 /* Stüssy 8-Ball Collar Tee — ₦27,500, 30% off */,
  m41: 45800 /* Tan Striped Collar Tee — ₦27,500, 40% off */,
  m43: 39300 /* Stüssy Star Collar Tee — ₦27,500, 30% off */,
  m44: 45800 /* Beige Pinstripe Collar Tee — ₦27,500, 40% off */,
  m45: 39300 /* Grey Pinstripe Collar Tee — ₦27,500, 30% off */
};
PRODUCTS.forEach(function (p) {
  if (SALE_OLD_PRICES[p.id]) p.oldPrice = SALE_OLD_PRICES[p.id];
});
