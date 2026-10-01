export type ShippingAddressData = {
  address: string;
  city: string;
  country: string;
};

type ShippingAddressProps = {
  address: ShippingAddressData;
};

const ShippingAddress = ({ address }: ShippingAddressProps) => {
  const { t } = useTranslation();
  const fields = [
    { label: t("checkout.address.address"), value: address.address },
    { label: t("checkout.address.city"), value: address.city },
    { label: t("checkout.address.country"), value: address.country },
  ];

  return (
    <section
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-[0_0_30px_rgba(15,23,42,0.25)] sm:p-6"
      aria-labelledby="shipping-address-title"
    >
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{t("checkout.address.eyebrow")}</p>
        <h2 id="shipping-address-title" className="mt-2 text-xl font-semibold text-slate-100">
          {t("checkout.address.title")}
        </h2>
      </div>
      <dl className="grid gap-3 sm:grid-cols-3">
        {fields.map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
            <dt className="text-xs uppercase tracking-wide text-slate-500">{label}</dt>
            <dd className="mt-1 break-words text-sm font-medium text-slate-200">{value || "—"}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default ShippingAddress;
import { useTranslation } from "react-i18next";

