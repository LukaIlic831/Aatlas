export const handleClickOutsideCreatePost = (
  event: Event,
  openLocationOptionRef: React.MutableRefObject<HTMLDivElement | null>,
  setOpenLocationOption: (value: React.SetStateAction<boolean>) => void
) => {
  const target = event.target as HTMLElement;
  const checkClassName =
    target.className.includes! && target.classList[0]
      ? target.className.includes("Suggestion")
      : false;
  if (
    !openLocationOptionRef.current?.contains(target as Node) &&
    !checkClassName
  ) {
    setOpenLocationOption(false);
  }
};
