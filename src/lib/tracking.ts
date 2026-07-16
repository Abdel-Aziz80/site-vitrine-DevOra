type ConversionEvent = {
  name: string;
  label?: string;
  page?: string;
};

declare global {
  interface Window {
    dataLayer?: ConversionEvent[];
  }
}

export function trackConversion(event: ConversionEvent) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
  window.dispatchEvent(new CustomEvent("devora:conversion", { detail: event }));
}
