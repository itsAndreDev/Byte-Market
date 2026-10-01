import { useTranslation } from "react-i18next";

type PaymentMethod = "yape" | "card" | "cash";

type PaymentMethodSelectorProps = {
  selectedMethod: PaymentMethod;
};

const PaymentMethodSelector = ({ selectedMethod }: PaymentMethodSelectorProps) => {
  const { t } = useTranslation();
  const methods: { id: PaymentMethod; title: string; description: string }[] = [
    { id: "yape", title: t("checkout.methods.yape"), description: t("checkout.methods.yapeDescription") },
    { id: "card", title: t("checkout.methods.card"), description: t("checkout.methods.cardDescription") },
    { id: "cash", title: t("checkout.methods.cash"), description: t("checkout.methods.cashDescription") },
  ];

  return (
    <fieldset>
      <legend className="mb-3 text-sm font-medium text-slate-200">{t("checkout.selectMethod")}</legend>
      <div className="grid gap-3 sm:grid-cols-3">
        {methods.map(({ id, title, description }) => {
        const selected = id === selectedMethod;

        return (
          <div
            key={id}
            className={`rounded-xl border p-4 transition ${
              selected
                ? "border-cyan-400/70 bg-cyan-400/10 ring-1 ring-cyan-400/30"
                : "border-slate-700 bg-slate-950/60"
            }`}
            aria-current={selected ? "true" : undefined}
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className={`grid h-5 w-5 place-items-center rounded-full border ${
                  selected ? "border-cyan-300" : "border-slate-600"
                }`}
              >
                {selected && <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />}
              </span>
              <span className="font-semibold text-slate-100">{title}</span>
            </div>
            <p className="mt-3 text-sm leading-5 text-slate-400">{description}</p>
          </div>
        );
        })}
      </div>
    </fieldset>
  );
};

export default PaymentMethodSelector;
