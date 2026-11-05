import { useTranslation } from "react-i18next";
import useLanguage from "../../hooks/useLanguage";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import SearchBar from "../ui/SearchBar";
import useAuth from "../../hooks/useAuth";

const Header = () => {
    const { t  } = useTranslation();
    const  toggleLanguage = useLanguage();
    const { totalItems } = useCart();
    const { user } = useAuth();
    const isUserDesconnected = user === null
    return (
        <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-slate-950/90 text-slate-100 backdrop-blur-md">
            <div className="mx-auto flex w-[min(1200px,94%)] flex-wrap items-center gap-4 py-3">
                <Link to={ "/" } className="flex items-center gap-2" aria-label={t("header.aria.homeLink")}>
                    <span className="grid h-10 w-10 place-content-center rounded-lg bg-cyan-400 font-black text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.45)]">
                        BM
                    </span>

                    <div>
                        <p className="text-lg font-bold leading-none">{t("header.brand.name")}</p>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-cyan-300">{t("header.brand.tagline")}</p>
                    </div>
                </Link>

                <nav className="order-3 w-full md:order-0 md:w-auto" aria-label={t("header.aria.mainMenu")}>
                    <ul className="flex flex-wrap gap-2 text-sm md:gap-3">
                        <li><Link to={ "/"} className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">{t("header.nav.home")}</Link></li>
                        <li><Link to={ "/laptops" } className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">{t("header.nav.laptops")}</Link></li>
                        <li><Link to={ "/components"} className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">{t("header.nav.components")}</Link></li>
                        <li><Link to={ "/peripherals"} className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">{t("header.nav.peripherals")}</Link></li>
                        <li><Link to={ "offers"} className="rounded-md border border-transparent px-2 py-1 transition hover:border-cyan-400/50 hover:bg-slate-900">{t("header.nav.offers")}</Link></li>
                    </ul>
                </nav>

                <SearchBar />

                <div className="flex items-center gap-2 text-sm">
                    <button onClick={ toggleLanguage } type="button"  className=" cursor-pointer rounded-md border border-cyan-400/35 bg-slate-900 px-3 py-2 font-semibold tracking-wide text-cyan-300 transition hover:border-cyan-300 hover:bg-slate-800 hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70" >EN | ES</button>

                    <Link to={ isUserDesconnected? "/account" : "/profile" } >
                        <button type="button"  className=" cursor-pointer rounded-md border border-slate-700 bg-slate-900 px-3 py-2 transition hover:border-cyan-400/50">{t("header.account")}</button>
                    </Link>
                    
                    <Link to={ "/cart" }>
                        <button type="button" className="cursor-pointer relative inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-cyan-400/50 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"aria-label="Open cart">
                            <IoCartOutline className="text-lg" />
                            <span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-cyan-400 px-1 text-[10px] font-bold text-slate-950">{ totalItems }</span>
                        </button>
                    </Link>

                </div>

            </div>
        </header>
      );
};

export default Header;
