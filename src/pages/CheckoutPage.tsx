import { useTranslation } from "react-i18next";
import CheckoutOrderSummary from "../components/checkout/CheckoutOrderSummary";
import PaymentMethodSelector from "../components/checkout/PaymentMethodSelector";
import ShippingAddress from "../components/checkout/ShippingAddress";
import YapePaymentForm from "../components/checkout/YapePaymentForm";

const CheckoutPage = () => {
  const { t } = useTranslation();

  return (
    <main className="mx-auto w-[min(1200px,94%)] space-y-6 py-8">
        <header className="rounded-2xl border border-cyan-400/20 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:p-8">
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">{t("checkout.eyebrow")}</p>
            <h1 className="text-3xl font-bold text-slate-100 md:text-4xl">{t("checkout.title")}</h1>
            <p className="mt-2 max-w-2xl text-slate-400">{t("checkout.subtitle")}</p>
        </header>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-6">
                <ShippingAddress address={{ address: "", city: "", country: "" }} />
                <section className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-[0_0_30px_rgba(15,23,42,0.22)] sm:p-6" aria-labelledby="payment-section-title">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{t("checkout.paymentEyebrow")}</p>
                        <h2 id="payment-section-title" className="mt-2 text-xl font-semibold text-slate-100">{t("checkout.paymentTitle")}</h2>
                    </div>

                    <PaymentMethodSelector selectedMethod="yape" />
                    <div className="border-t border-slate-800 pt-5">
                        <YapePaymentForm />
                    </div>
                </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-24" aria-label={t("checkout.sidebarLabel")}>
                <CheckoutOrderSummary />
                <button type="button"className="w-full cursor-pointer rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_14px_30px_rgba(34,211,238,0.18)] transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70">{t("checkout.placeOrder")}</button>
                <p className="text-center text-xs leading-5 text-slate-500">{t("checkout.reviewHint")}</p>
            </aside>
        </div>
    </main>
    );
};

export default CheckoutPage;
