import { useEffect, useRef, useState } from "react";
import counterBgIamge from '../assets/images/shapes/counter-one-bg-shape.webp';

const counters = [
  {
    icon: "icon-worldwide-shipping",
    value: 5,
    suffix: "+",
    text: "NationWide Branches",
  },
  {
    icon: "icon-user-avatar",
    value: 2,
    suffix: "K+",
    text: "Satisfied Clients",
  },
  {
    icon: "icon-rating",
    value: 500,
    suffix: "K",
    text: "Positive Reviews",
  },
  {
    icon: "icon-delivery-man-1",
    value: 98,
    suffix: "%",
    text: "Successful Delivery",
  },
];

const iconMask =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='120' height='120' viewBox='0 0 120 120'%3E%3Cimage xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAIABJREFUeF7svQm47VlV3TvWv9vtaW9b91ZRUDQikAQlkSjgw9AIGEUQCAYRDMQXREkkEaIYXhmbBJvYkhiVvBBFDCgxKHaB+AwRUBExUEBVAdXde+vWvac/u/23+X5j7SIaGxCRyPe9ywfc5pyz9/6vteYcc4wx5wr6DP%2F1hmc%2BM71h8dGt%2Bz7xr5yc3JOF%2BSQ7c83W8JGL9930oErJ9UVWFElan8japkmS4WKaL680s6ObisPw4H6oQvqgB7w%2FnH9AeVju%2F8eNu3YOivfd%2FJL8nb%2FzzZ%2Fhj%2BVjbz98Jn6QDz3xC%2B93w%2BOf%2BbjFHRf%2FRnrrhS%2FJZ%2FMTaZr060WtpF6qO5woW3Tq8qBquVBvmUpBqvJWGg3UJQNlaaKu66TjQ5Vdo70809qw%2F5Fhld6%2FPn%2FyZ%2FJB9sZ0LX1beONbDz8Tn9G97%2FkzYoG7V71s7fC4%2Frrig7c8enLp4jhdto8Z7eylbbNUNx6rbaUwq5WrUciCFDJ1tdS1%2FLlT2gQpzdRmndrpXGUX1N9aVxgPlapVaCWNcqls1PX6jZZl2h7MpTMbu4usfu28nrz51Ns%2F9BufiQv9l3KBuxtvTI7ONY%2Bo3r39cTou77Px%2Ftu%2FtHzvrddWIVGxNlRYH6qqlkqbUm2Sq8sK5ctaWZEqTYLUSV0WlLSdpETqJ%2BoWnYIaVj0uZF2r7YJCwpekUj9X6GdqF41CJyUbQ3Wz0l%2FbjAvN1b2vPXPtL1%2B4fOtrw%2BlTlx%2F6q%2B%2Fcu3fBuy97wjmdPZuFH%2FvJO%2F%2BybYK%2FVAs8%2F7aXPq585%2B%2B8oFmUj0kv7F6bHs%2FVLWslGyNlg1xV0yhLEhVFrtCT1MTFUp5LTS0lidqqkapGIU2krFPXcnqDQiOFNMhr3gQlw0Rd3akrOwUWeFn6vy1he62vdjhUOyuVL2f8WCnvqTue62qWqwia9T%2F%2FEf%2BpfvGzX7r2qKdfYVG7Zz5zEN74xvn%2Fv8B%2FzBO4%2FKVPvN9gWv9Id9vtT0l3pkqzRGHUU9pjLTKVeapRmikl%2FHZdXMR6qVC18bSSYptEzbxUl7HOudQvFPJEXVUpqRo1XaeuSJSlhdQ0YpW6LJFKKbDqRSItaoWyVRekJkvVDXtK6kZhOZdmpQI%2FMyvEsa%2Brheozp2aza8%2F9bu9w97dDMv%2B%2B4QtuuBKe9cbmL9Mi%2Fx89wdPX%2FeAjpv%2F%2Bzd%2Bmm259ysZkErQxVrE28KL5Ka8V6ha1HFmXS4WyVpckjrJd2ipx8k0UQlDHoiepQp%2Bwm6prnV2VtKxgMKAiLCchhmMtK17Ep79jwXupki6oY7GJDH6dNv4sNlAd30doOp%2FytmIz1KqqoG57pDpPr3TjdNF%2F4mN%2FpnjUY18dvuxZfynC9f%2BxBb7zCZ%2F%2FlaNL%2Bz89OJhpwKL2EinN1SxLdWVlkFQ3pYouUcppIpeSHPmVpuqyLp68kMUFbGqFLFdTSGqltObrWKxGajqp33O%2B7RZL%2F7lr4uKpjlFAyergEe4HeXypJlHXlALFdXztdM6W8evUVe0IkISgFJQWyN%2BlmqNDhTNbdfqkJ%2Fz3%2Fc9%2FxNffdtzdcr%2FJzWdP%2FON%2Fddf%2FiZP9aV9gANTuTe99g37jnV%2BxNSqUrA1Uz2ulTaq6rdWUlTJyJuCpLpWOe%2Bo4bH6G5NTOCwxgCpzyIvPidk38u45z22XqAgsIopYXkXyrIWE7jXk7ZRdkDsv%2BCnJ1%2ByulUhLU%2BXQXCl68TloSuoNCXUmLSur11BWFU0Bo%2BE%2Fi6FLy3o6PlZQLddeeUXnu9OX24qUzxRc%2F6T8MfuDVz%2F90L%2FKndYFvf%2BVLv6j%2FK%2F%2FlB7ZvvfRX83PXqFvM1M6WMcxyKpOgdJD51LVlp6QXQ2bbdAodobhRl2bqkkyJljFMcrIAVDOOrLwYXZcoYeEJ4QTilNxNvi2VjPj7REG11OtLgCxOOiGZEMzSVo1fMyGHN43CMFdgk7A5mkbdrCFoSC3vJ3cE0ZLPEdSmiUJ%2FpLatFA6PlC1raThQed22mmc84VXDb%2Fref%2FrpXORP2wLvPuMpN%2Fbe%2Fp7%2FZ0QkHGRqq1YhzRRGmZQlamdtzHk91jtX12YKWviUhSxTV7XqQLqEzpwHvlBXL9W0iZK0UOj4eblPXqcm5tqEEM6pTx3Ou4p8LKkoFEDQ86VCL1Hl3J0phxzparXrQ%2FKDEk43%2BZrYzoKRr9kwGad0KgHy2lQa5vLu6DqFkKqeLQzw0n5fTd0qyYLC0cIhfvHMR%2F1M8sRHf2fv2d%2F0%2Fk%2FHQn9aFvjghc%2F5jo2ffvMrlGSq81zJZl%2FdoK%2FACfOpIYRKoZc7FvtBJkFtXSnhBMy7WPIoKBS5o6jDJg%2BYh58RhgndiTpOY0tZFFZ%2FX%2FvriASUTKUa9ZJMochiyN4cafbhexxSizT3nqgH5Ptg8iQZ9gzoiAAJuXxQqMvZcKVClkpEdQBgW6vNsojqu0bJvFJbZGo319Qezc2cpUpU7R9fy%2F%2B8Ojb3zFS%2F6iF%2FkvfIG7N%2F7Uy%2BZf%2FaJX5UVf6X3OSkWqbrHwQw%2F1MuY%2BQizgBsDDYnEwykbzutagCEqSQsGoFsDDA8wUen6SkbUiLLoOpkYiX1JGEZo7CVBFzl0fsyv88EMvUxhS%2B7bqhgPn1O7qkcQGK3KHd%2Bf3unKIrttGSdFT0jbSvHIUCOs9CbKkbNU2rTdfmpASCPdZjCYL3m%2Bjhvo7SZUOCiVFqnBpR20IKh%2F91%2F7zoJ2%2BKLzp7Xf%2FRS30X%2BgCH%2F%2F0j35d8ff%2B4auzk2fVba1JCWCoUTqDnCA0NxHk8MQSAIzUQiosW4OYtp8oaWuFwKktpK70g%2BTBAmyol1wiAZZcGzfqOJnkbJA4oRwUzb8TamfzuEFYYE5omqqezBSKIiL1qlST5Ur6G2q6SsliGp%2B7I0IdIwyU53ypLmmUgKIrqU6Ad61yTniSKgEnULNX9QrQBTUhV2JOtFHbz5Q1nZrdfTXXnZ%2FNXvPa81uf8zkHfxGL%2FBe2wIsvf%2BL3d%2B%2F60D8qBrm0MVIzmQN%2BFSgvQhuBECCFvAV50LVqs9xgJ0niqUzapetgh3MQcQOQKeJJTzgd8e07L5atEof6KtKSvTyebMgM1mhWKhn3HJY1WUoLckMwqKogVqo6Rno2YUWc7tSQTtZ6KggWZSkCiPLUG6KZL82QZXlqSrRhYTnB8yqCO%2FIuL0yVxmdha9adWp4HqYY%2FjwcGdNXXP%2F%2BH%2Bi96%2BT%2F8jFjg7oe%2Bode86b2%2FPn%2FH73%2F%2BaGtD4fyWWsoKwrI3cOWcG4brJhDEQ2ERlalb6ynpWPyIml22kHNZQpc2q7zLCa%2Fm6gJZDVWIOnVVv9aVT6fxMwvikoe%2FSxQGA9e0piUprUjhw76Rb71YKoUWpdAijFaOrmpDo4ywTd6F5OAvQdjk%2B36udlGryRMlo5HSvR2FChxApmjU9QupzYwZTJbMqhihmlZJP1OdZUrbVslioeP73vem5Y3f%2BuWnv%2BhJH%2F5ULvSn9AQfveirHhP%2B23t%2BYnbpyoO2Tm4pT1uHPHJZAgu1rBUGPYdL88AwS%2F2EY%2BN6Noz7sc5dzCOwqippwCkkb68YJnItOTZp1cEZ87C7oKSXqZ0uHKLJbylsVH8gHc%2BiwrTR9wkyKzYBgS8UHnitlPXUfvSykjqG%2FxbEnbRKerk3BWUc4ThN0lgC9XoKpAKiRdmogjErOgoBpYtSSR%2F2DWwAEQJ6Z5Mlfk9G7i0bC2SdxujSI710Cpd31f3Nh%2B2F5z7jfuGrXnL0qVrkT9kCL%2F72k1%2BVvvv3X3ZMiDt5QluTUm3Opw5KOLV1oo5yAqQ5mccwdnLbypCmM%2F%2BdAxcncEmYS9XlhMrKjJICpwqGa6nQ70lnTngjNIT2KigtSzVsiEWtDOA07MW0QK4cj9QtWzXV0g%2FVZMewp7C9Le0eqb6679dWBrEBQ7aMVClRJE1UtQulIOy8UGJEDpkS1OYwaOTuhdpeooJyDsDIBiw5rZHpirG6U%2Bj3jbgdcZSpLcv4T4NMST5QNznW8v7XXEm%2B7Mmv7P%2Fjf%2F5vPxWL%2FClZ4OXz%2Fs6rup9%2By8uSs1vKNtcNSJrZwvklg4aEjYLQuFcc2N6Q1sYKWwMvrD5614rQaH3aYLVaHm5BTiulKlHbQnykCqfWna8hO8LRkYHSApJkUqog9A5zpb1czcHMeTsA7lwLEzoRFBbmnRH%2BdWFXHfwzJ3PZKCG%2FdpWjQCRJ4in2aSTN8O%2FQnYTYvOcSuK46mwyorTNQvcmPVZnlDdtGQAkXkrBJpKJcSFkeuQCQNhuODcyB2DtQMyzUvuSF3937xhtf%2Fudd5D%2F3AtdvetOzm%2F%2F7Ra9P18dK1kYKu0fqFPObw1UR2R8jIZDw5lg6fzqG69tulwArnOqqU8PXZal3fSDEwlxlEB6RZUoGKYK8unv2pZMD58hm91gpJQyaHg%2FWrxdlRGhq0LiVohbGinzeqDlemoJsl0u1eV8ZT520sFiajmzSTLwqSLgGkWcd4pM3FWtILnaKYBNSHgGciDREEBA7IZzNNewb8WtZq1KqbjBUVi9chvnvTZ2lEZuYkZPpWWr4rpxr%2BYwn%2Fdzw%2B%2F%2FdM%2F48i%2FznWuD9b%2Fvm545e87r%2FkE1n6k6dVFNS0Ec1h7rPJQpbnly4uSZtrUttLR0cqLu4Jx1NTeyTjzk90H4ubQmlAbkui%2BEU5YfSw0pPE0mLtLXG22DTGfaMZmtOcBuUbA0VAEVIfLBXhF4WpUjUbY6c%2B7tL%2Bw6v5qTZVNCZAKeW75uYS9FgYPGjLRcKaU9pkSqBSk0LdXO06iaCpkFfyQL5cimN1iUEj2kEgWjQRBIiSJTBCPGU77z2ClesUDt6SkeKOLHhzdLuX1X5rKe%2FYfh9%2F%2FbvfLKL%2FEkv8Htf%2BfIvPvVvfuJXNrNUxfiE0tlEHZ6ngDMC9QedNZXOnJR6hUOiF2vvUN3tF1RfPTRJkQ1xZKSuWzUcKmzHBWiPFmpWdpukyE1TurxixytTspz59LQ8KF4ManEwUOAET6YGc5YI%2FbrRL59o8ieQ%2BXDfMe%2B0B0y5Wnppu3XBZOJt8i9VqLCOi5Cqgu2tx80%2FJdJVknMDeDXUOjCfxMUCbKDCSvDN4JOQtknM3XrDI%2BqQSVYl%2BfheXOmWKp8%2Ff%2Bx3r%2BGv7lyYc%2FDIVd%2B44f%2BgIv%2FCKNC886JvHjT%2Fr1eE3Sv2ptIUuOSN4c%2B%2BWxUqZfiWcxZEssHoTUhBrCjFZfPNz8mc7BpYXNeu19tNP3Q4t5%2BC086%2BcHioYfcbS888x9v48b90gItt%2BK%2FZAq8z6P8pisGrdB%2FUL08eJA%2FPzkYvvLS0fXRXWsaUXaCn6Q9RVDR1KLUz9eysFAJB1a96Q8MbfF7ujbbUUdt9q66dNtyK9hiP89HusCL%2FTI%2Biq%2F%2FHz6cRhfxCnIVAAAAAElFTkSuQmCC' x='0' y='0' width='120' height='120'/%3E%3C/svg%3E\")";

const CounterNumber = ({ value, start }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frameId;
    const duration = 1500;
    const startedAt = performance.now();

    const updateValue = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        frameId = requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = requestAnimationFrame(updateValue);

    return () => cancelAnimationFrame(frameId);
  }, [start, value]);

  return <>{String(displayValue).padStart(2, "0")}</>;
};

const CounterStatsSection = () => {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] block overflow-hidden px-0 py-5 my-5"
    >
      <style>
        {`
          @keyframes counterFloatBobX {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(20px); }
          }
        `}
      </style>

      <div
        className="absolute inset-x-0 bottom-[-30px] top-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-60"
        style={{ animation: "counterFloatBobX 5s ease-in-out infinite",backgroundImage: `url(${counterBgIamge})` }}
      ></div>

      <div className="px-[15px]">
        <div className="relative block">
          <ul className="relative flex flex-col items-center justify-between gap-y-6 md:flex-row md:flex-wrap">
            {counters.map((counter) => (
              <li
                key={counter.text}
                className="group relative mb-[22px] block w-full text-center md:max-w-[50%] md:flex-[0_0_50%] xl:w-auto xl:max-w-none xl:flex-none"
              >
                <div
                  className="relative rounded-[50%] z-[1] mx-auto flex h-[120px] w-[120px] items-center justify-center bg-[#f78134] transition-all duration-500"
                  
                >
                  <div className="absolute inset-0 -z-[1] translate-y-[50px] rounded-full bg-[#062f3a] opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100"></div>
                  <span className={`${counter.icon} relative inline-block text-[55px] text-white transition-all delay-100 duration-500 group-hover:scale-90`}></span>
                </div>

                <div className="relative mb-[3px] mt-7 flex items-center justify-center">
                  <h3 className="font-sans text-[60px] font-bold leading-[60px] text-[#062f3a]">
                    <CounterNumber value={counter.value} start={hasStarted} />
                  </h3>
                  <span className="text-[60px] font-bold leading-[60px] text-[#062f3a]">
                    {counter.suffix}
                  </span>
                </div>

                <p className="text-[18px] font-medium leading-7 text-[#062f3a]">
                  {counter.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CounterStatsSection;
