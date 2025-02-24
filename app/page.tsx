import Aurora from "@/graphics/Aurora";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main>
      <section className="splineComponent">
        <Spline
          scene="https://prod.spline.design/qI-jNq027SgnKPQM/scene.splinecode"
        />
        <div className="transition-all duraiton-150 bg-black py-2 px-8 absolute -bottom-[10px] right-[10px] rounded-2xl">
          Task Tracker
        </div>
      </section>
      <section>
        <h1>hi</h1>
      </section>
    </main>
  );
}