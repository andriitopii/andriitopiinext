import Button from "../Button/Button";
import styled from "./HomeAbout.module.scss";

export default function HomeAbout() {
  return (
    <section className={styled.homeAbout}>
      <div className="container">
        <div className={styled.homeAbout__content}>
          <div className={styled.homeAbout__text}>
            <h1>Andrii Topii - це унікальне Digital агенство</h1>
            <p>
              Ми розробляємо, створюємо, та супроводжуємо IT-продукти з
              2021року. Ми надаємо послуги нового покоління - від плаанування і
              ідеї до запуску продукту.
            </p>
            <Button href="/order">Залишити замовлення</Button>
          </div>
          <div className={styled.homeAbout__static}></div>
        </div>
      </div>
    </section>
  );
}
