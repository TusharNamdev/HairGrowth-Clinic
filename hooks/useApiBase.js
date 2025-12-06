export default function useApiBase() {
  if (typeof window !== "undefined") {
    const host = window.location.hostname; // auto IP of device
    const port = 5006; // backend port
    return `http://${host}:${port}`;
  }
  return "";
}
