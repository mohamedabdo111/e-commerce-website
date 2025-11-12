import { getSliderData } from "@/lib/api/getSlider";
import SliderComponent from "./sliderComponent";

export async function CarouselDemo() {
  const sliderData = await getSliderData();
  return (
    <div className="my-6">
      <SliderComponent sliderData={sliderData} />
    </div>
  );
}
