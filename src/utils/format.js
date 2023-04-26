export const formatThousand = num =>
  num.replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');
