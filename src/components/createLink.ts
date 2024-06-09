interface Link {
  (title: string, href: string, className?: string): HTMLAnchorElement;
}

export const createLink: Link = (title: string, href: string, className?: string): HTMLAnchorElement => {
  const link: HTMLAnchorElement = document.createElement('a');
  if (className) {
    link.classList.add(className);
  }
  link.href = href;
  link.title = title;

  return link;
};
