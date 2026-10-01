import { useTranslation } from "react-i18next";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";

const OrderConfirmationPage = () => {
  const { t } = useTranslation();

  return (
    <main className="mx-auto w-[min(900px,94%)] space-y-6 py-8">
    <section className="overflow-hidden rounded-2xl border border-emerald-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-6 text-center shadow-[0_0_40px_rgba(52,211,153,0.08)] sm:p-10">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-emerald-300/30 bg-emerald-400/10 text-3xl font-bold text-emerald-300" aria-hidden="true">
        ✓
      </div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{t("orderConfirmation.eyebrow")}</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-100 sm:text-4xl">
        {t("orderConfirmation.title")}
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-slate-400">
        {t("orderConfirmation.subtitle")}
      </p>
    </section>

    <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_340px]">
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6" aria-labelledby="confirmation-details-title">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{t("orderConfirmation.eyebrow")}</p>
          <h2 id="confirmation-details-title" className="mt-2 text-xl font-semibold text-slate-100">
            {t("orderConfirmation.detailsTitle")}
          </h2>
        </div>
        <dl className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <dt className="text-sm text-slate-400">{t("orderConfirmation.paymentMethod")}</dt>
            <dd className="text-sm font-semibold text-slate-100">—</dd>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <dt className="text-sm text-slate-400">{t("orderConfirmation.operationCode")}</dt>
            <dd className="font-mono text-sm text-slate-100">—</dd>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <dt className="text-sm text-slate-400">{t("checkout.summary.total")}</dt>
            <dd className="text-lg font-bold text-cyan-300">S/ —</dd>
          </div>
        </dl>
      </section>

      <div className="space-y-4">
        <CheckoutOrderSummary />
        <button
          type="button"
          className="w-full cursor-pointer rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
        >
          {t("orderConfirmation.continueShopping")}
        </button>
      </div>
    </div>
  </main>
  );
};

export default OrderConfirmationPage;
