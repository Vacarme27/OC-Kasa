import "./Annonce.scss";
import Apartment from "./Apartment"

function Annonce() {
    return <section className="grid">
        <Apartment />
        <Apartment />
        <Apartment />
        <Apartment />
    </section>
}

export default Annonce;