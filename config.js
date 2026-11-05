/* =========================================================
   NUDGEBOOK SETTINGS — the only file you need to edit.

   To start taking money (one time, ~15 minutes, your own account):
   1. Make a free Gumroad account (gumroad.com) — or Lemon Squeezy.
   2. New product → "Membership" (monthly) → turn ON "Generate a unique
      licence key per sale".
   3. Paste the product's page link into checkoutUrl below.
   4. Paste the product ID into productId (Gumroad: product page →
      Content → "Licence key" box shows it).
   5. Save, publish again. Done. Buyers get a key by email
      automatically, paste it in the app, and it unlocks by itself.
      If they stop paying, the key stops working by itself.

   While checkoutUrl is empty the app stays FREE for everyone
   (nobody gets locked out of something they can't pay for).
   ========================================================= */
window.NUDGE = {
  name:        'Nudgebook',
  siteUrl:     'https://kamruppolytechnic4-arch.github.io/nudgebook/',

  provider:    'gumroad',   // 'gumroad' or 'lemonsqueezy'
  checkoutUrl: '',          // e.g. 'https://yourname.gumroad.com/l/nudgebook'
  productId:   '',          // Gumroad product_id, or Lemon Squeezy product id (number)

  priceMonth:  '$4',
  priceNote:   'per month · cancel any time',
  trialDays:   14,

  supportEmail: ''          // optional: shown on the paywall
};
