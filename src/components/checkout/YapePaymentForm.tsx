import { useTranslation } from "react-i18next";

const YapePaymentForm = () => {
  const { t } = useTranslation();

  return (
    <section className="space-y-5" aria-labelledby="yape-payment-title">
      <div>
        <h3 id="yape-payment-title" className="text-lg font-semibold text-slate-100">
          {t("checkout.yape.title")}
        </h3>
        <p className="mt-1 text-sm text-slate-400">{t("checkout.yape.description")}</p>
      </div>

      <label className="block max-w-md space-y-2">
        <span className="text-sm font-medium text-slate-200">{t("checkout.yape.phone")}</span>
        <input
          className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-cyan-400/70 focus:ring-4 focus:ring-cyan-400/10"
          type="tel"
          inputMode="tel"
          placeholder="999 999 999"
        />
      </label>

      <div className="rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-4 sm:p-5">
        <p className="text-sm font-semibold text-slate-200">{t("checkout.yape.simulationTitle")}</p>
        <p className="mt-1 text-sm text-slate-400">{t("checkout.yape.simulationDescription")}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">{t("checkout.yape.operationCode")}</p>
            <p className="mt-1 font-mono text-sm text-slate-300">{t("checkout.yape.pending")}</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
            <p className="text-xs uppercase tracking-wide text-slate-500">{t("checkout.yape.status")}</p>
            <p className="mt-1 text-sm text-amber-300">{t("checkout.yape.paymentPending")}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="rounded-lg border border-cyan-400/35 bg-slate-950/80 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:border-cyan-300 hover:bg-slate-800"
      >
        {t("checkout.yape.simulateButton")}
      </button>
    </section>
  );
};

export default YapePaymentForm;
