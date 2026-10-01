import { useTranslation } from "react-i18next";

const inputClassName =
  "w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10";

const CardPaymentForm = () => {
  const { t } = useTranslation();

  return (
    <section className="space-y-5" aria-labelledby="card-payment-title">
      <div>
        <h3 id="card-payment-title" className="text-lg font-semibold text-slate-100">
          {t("checkout.card.title")}
        </h3>
        <p className="mt-1 text-sm text-slate-400">{t("checkout.card.description")}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 sm:col-span-2">
          <span className="block text-sm font-medium text-slate-200">{t("checkout.card.number")}</span>
          <input className={inputClassName} type="text" inputMode="numeric" placeholder="0000 0000 0000 0000" />
        </label>
        <label className="space-y-2 sm:col-span-2">
          <span className="block text-sm font-medium text-slate-200">{t("checkout.card.holder")}</span>
          <input className={inputClassName} type="text" placeholder={t("checkout.card.holderPlaceholder")} />
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-slate-200">{t("checkout.card.expiration")}</span>
          <input className={inputClassName} type="text" placeholder="MM/YY" />
        </label>
        <label className="space-y-2">
          <span className="block text-sm font-medium text-slate-200">CVV</span>
          <input className={inputClassName} type="password" inputMode="numeric" placeholder="•••" />
        </label>
      </div>

      <button
        type="button"
        className="rounded-lg border border-cyan-400/35 bg-slate-950/80 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-slate-800"
      >
        {t("checkout.card.testData")}
      </button>
    </section>
  );
};

export default CardPaymentForm;
