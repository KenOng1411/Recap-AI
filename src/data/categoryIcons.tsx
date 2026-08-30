import {
  ChatCircleDots,
  ImageSquare,
  VideoCamera,
  Waveform,
  PenNib,
  Lightning,
  Code,
  MagnifyingGlass,
  PaintBrush,
} from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { CategoryKey } from "./categories";

export const categoryIcons: Record<CategoryKey, Icon> = {
  chatbot: ChatCircleDots,
  image: ImageSquare,
  video: VideoCamera,
  audio: Waveform,
  writing: PenNib,
  productivity: Lightning,
  coding: Code,
  search: MagnifyingGlass,
  design: PaintBrush,
};
