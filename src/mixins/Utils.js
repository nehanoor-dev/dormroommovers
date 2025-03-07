import { useDeviceStore } from "./../stores/counter";
import { onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const deviceStore = useDeviceStore();

    const updateDevice = () => {
      deviceStore.checkDeviceSize();
    };

    onMounted(() => {
      window.addEventListener("resize", updateDevice);
      updateDevice();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateDevice);
    });

    return { isMobile: deviceStore.isMobile };
  },
};
