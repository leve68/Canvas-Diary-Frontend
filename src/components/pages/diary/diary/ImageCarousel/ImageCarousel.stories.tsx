import type { Meta, StoryObj } from "@storybook/react";

import ImageCarousel from ".";
import img from "@/assets/dummy/_Image.png";

const meta: Meta<typeof ImageCarousel> = {
  component: ImageCarousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

export const Primary: Story = {
  args: {
    images: [
      { imageId: "1", isMain: true, imageUrl: img },
      { imageId: "2", isMain: true, imageUrl: img },
    ],
  },
};
