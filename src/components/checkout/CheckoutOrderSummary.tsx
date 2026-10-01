import { useTranslation } from "react-i18next";

const CheckoutOrderSummary = () => {
  const { t } = useTranslation();

  return (
    <section
    className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.35)] sm:p-6"
    aria-labelledby="checkout-order-summary-title"
  >
    <h2 id="checkout-order-summary-title" className="text-xl font-semibold text-slate-100">
      {t("checkout.summary.title")}
    </h2>
    <div className="mt-5 space-y-3 border-b border-slate-800 pb-5 text-sm text-slate-300">
      <div className="flex items-center justify-between gap-4">
        <span>{t("checkout.summary.products")}</span><span className="text-slate-500">—</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <span>{t("checkout.summary.subtotal")}</span><span className="font-medium text-slate-100">S/ —</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <span>{t("checkout.summary.discount")}</span><span className="font-medium text-slate-100">S/ —</span>
      </div>
      <div className="flex items-center justify-between gap-4">
        <span>{t("checkout.summary.shipping")}</span><span className="font-medium text-slate-100">S/ —</span>
      </div>
    </div>
    <div className="mt-5 flex items-center justify-between gap-4">
      <span className="text-base font-semibold text-slate-100">{t("checkout.summary.total")}</span>
      <span className="text-lg font-bold text-cyan-300">S/ —</span>
    </div>
  </section>
  );
};

export default CheckoutOrderSummary;
